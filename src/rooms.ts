import * as THREE from "three";
import type { Collision, Prefs, Room, RoomType, Transform, UnitPlan } from "./types";
import { planToWorld } from "./layout";
import { aabb } from "./furniture";

export const EYE = 1.6;
export const LOOK_Y = 1.28;

export interface RoomStop {
  id: string;
  name: string;
  short: string;
  type: RoomType | "dining" | "foyer";
  area_m2: number;
  note?: string;
  /** Eye-level camera position (y ≈ 1.6). */
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
  yaw: number;
  walkX: number;
  walkZ: number;
}

const TYPE_ORDER: Record<string, number> = {
  foyer: 0,
  lobby: 1,
  hall: 2,
  living: 3,
  dining: 4,
  kitchen: 5,
  bedroom: 6,
  dressing: 7,
  bathroom: 8,
  utility: 9,
  linen: 10,
  balcony: 11,
  terrace: 12,
};

export function pointInPoly(poly: [number, number][], x: number, z: number): boolean {
  let c = false;
  const n = poly.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi) c = !c;
  }
  return c;
}

/** True if the point is inside a room, or within `pad` metres of one (doorways). */
export function inRooms(rooms: { polygon: [number, number][] }[], x: number, z: number, pad = 0.4): boolean {
  for (const r of rooms) {
    if (pointInPoly(r.polygon, x, z)) return true;
    if (pad > 0 && distToPoly(r.polygon, x, z) <= pad) return true;
  }
  return false;
}

function distToPoly(poly: [number, number][], x: number, z: number): number {
  let min = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const d = distToSeg(x, z, a[0], a[1], b[0], b[1]);
    if (d < min) min = d;
  }
  return min;
}

function distToSeg(px: number, pz: number, ax: number, az: number, bx: number, bz: number): number {
  const dx = bx - ax, dz = bz - az;
  const l2 = dx * dx + dz * dz || 1;
  let t = ((px - ax) * dx + (pz - az) * dz) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (ax + t * dx), pz - (az + t * dz));
}

export function hitsCollision(cols: Collision[], x: number, z: number, radius = 0.3): boolean {
  for (const c of cols) {
    if (x + radius > c.minX && x - radius < c.maxX && z + radius > c.minZ && z - radius < c.maxZ) return true;
  }
  return false;
}

export function findClearPoint(
  preferred: { x: number; z: number },
  cols: Collision[],
  rooms: { polygon: [number, number][] }[],
  radius = 0.32,
): { x: number; z: number } {
  const ok = (x: number, z: number) => !hitsCollision(cols, x, z, radius) && inRooms(rooms, x, z, 0.25);
  if (ok(preferred.x, preferred.z)) return preferred;
  const rings = [0.25, 0.45, 0.7, 1.0, 1.35, 1.75, 2.2, 2.8];
  const steps = 16;
  for (const r of rings) {
    for (let i = 0; i < steps; i++) {
      const a = (i / steps) * Math.PI * 2;
      const x = preferred.x + Math.cos(a) * r;
      const z = preferred.z + Math.sin(a) * r;
      if (ok(x, z)) return { x, z };
    }
  }
  for (const room of rooms) {
    const b = aabb(room.polygon);
    if (ok(b.cx, b.cz)) return { x: b.cx, z: b.cz };
  }
  return preferred;
}

function worldPoly(poly: [number, number][], t?: Transform): [number, number][] {
  if (!t) return poly;
  return poly.map(([x, z]) => planToWorld(x, z, t));
}

function yawToward(fromX: number, fromZ: number, toX: number, toZ: number): number {
  // yaw 0 looks -Z; matches Walker.
  return Math.atan2(-(toX - fromX), -(toZ - fromZ));
}

function bedroomPriority(name: string, id: string): number {
  const s = `${name} ${id}`.toLowerCase();
  if (/master/.test(s)) return 0;
  const m = s.match(/(\d+)/);
  return m ? Number(m[1]) : 9;
}

function displayName(room: Room): { name: string; short: string; type: RoomStop["type"] } {
  const n = room.name.replace(/\s+area$/i, "").trim();
  if (room.type === "lobby" || room.id === "lobby") return { name: n.toLowerCase().includes("entrance") ? "Foyer" : (n || "Foyer"), short: "Foyer", type: "foyer" };
  if (room.type === "hall") return { name: n || "Hall", short: "Hall", type: "foyer" };
  if (room.type === "living") {
    // Combined rooms keep a Living chip; Kitchen / Dining are added separately.
    return { name: "Living", short: "Living", type: "living" };
  }
  if (room.type === "kitchen") return { name: "Kitchen", short: "Kitchen", type: "kitchen" };
  if (room.type === "bathroom") return { name: n || "Bathroom", short: shortBath(n), type: "bathroom" };
  if (room.type === "bedroom") return { name: n || "Bedroom", short: shortBed(n), type: "bedroom" };
  if (room.type === "balcony") return { name: "Balcony", short: "Balcony", type: "balcony" };
  if (room.type === "terrace") return { name: "Terrace", short: "Terrace", type: "terrace" };
  if (room.type === "dressing") return { name: "Dressing", short: "Dressing", type: "dressing" };
  if (room.type === "utility") return { name: "Utility", short: "Utility", type: "utility" };
  if (room.type === "linen") return { name: "Linen", short: "Linen", type: "linen" };
  return { name: n || room.id, short: n || room.id, type: room.type };
}

function shortBath(n: string): string {
  if (/master/i.test(n)) return "Master bath";
  if (/en-?suite/i.test(n)) return "En-suite";
  if (/toilet\s*2/i.test(n)) return "Toilet 2";
  if (/utility/i.test(n)) return "Bath";
  return n.length > 14 ? "Bathroom" : (n || "Bathroom");
}

function shortBed(n: string): string {
  if (/master/i.test(n)) return "Master bed";
  return n || "Bedroom";
}

interface Viewpoint {
  camX: number;
  camZ: number;
  lookX: number;
  lookZ: number;
}

/**
 * How far you can look from (x,z) along (ux,uz) before leaving the room
 * or hitting a wall. Exiting the polygon counts as a stop so we never
 * aim the camera out of a window at the sky.
 */
function sight(
  x: number,
  z: number,
  ux: number,
  uz: number,
  poly: [number, number][],
  cols: Collision[],
  max = 6,
): number {
  let last = 0;
  for (let t = 0.12; t <= max; t += 0.1) {
    const px = x + ux * t;
    const pz = z + uz * t;
    if (!pointInPoly(poly, px, pz)) return last;
    if (hitsCollision(cols, px, pz, 0.12)) return last;
    last = t;
  }
  return max;
}

/** Furniture-aligned camera: used when the sight-line is clear and stays in-room. */
function canonicalView(
  kind: RoomStop["type"],
  a: ReturnType<typeof aabb>,
  alongX: boolean,
  unitCenter?: { x: number; z: number },
): Viewpoint {
  const ix = Math.min(1.45, Math.max(0.7, a.w * 0.32));
  const iz = Math.min(1.45, Math.max(0.7, a.d * 0.32));
  if (kind === "living") {
    // Sofa on the short side, TV opposite (matches furniture.ts).
    if (alongX) return { camX: a.cx, camZ: a.minZ + iz, lookX: a.cx, lookZ: a.maxZ - 0.5 };
    return { camX: a.minX + ix, camZ: a.cz, lookX: a.maxX - 0.5, lookZ: a.cz };
  }
  if (kind === "dining") {
    if (alongX) return { camX: a.cx + a.w * 0.18, camZ: a.maxZ - iz, lookX: a.cx, lookZ: a.cz };
    return { camX: a.maxX - ix, camZ: a.cz - a.d * 0.12, lookX: a.cx, lookZ: a.minZ + a.d * 0.3 };
  }
  if (kind === "kitchen") {
    // Combined living/kitchen: counters on the north (maxZ) wall.
    // Dedicated kitchens: L-shape on south + east — this still looks across the run.
    return { camX: a.cx, camZ: a.minZ + Math.min(1.7, a.d * 0.42), lookX: a.cx, lookZ: a.maxZ - 0.4 };
  }
  if (kind === "bedroom") {
    // Bed head is on the far short wall (maxZ).
    return { camX: a.cx, camZ: a.minZ + iz, lookX: a.cx, lookZ: a.maxZ - 0.55 };
  }
  if (kind === "bathroom" || kind === "utility") {
    return { camX: a.minX + 0.58, camZ: a.minZ + 0.58, lookX: a.maxX - 0.4, lookZ: a.maxZ - 0.4 };
  }
  if (kind === "foyer") {
    const tx = unitCenter?.x ?? a.cx;
    const tz = unitCenter?.z ?? (alongX ? a.cz : a.maxZ);
    const dx = tx - a.cx, dz = tz - a.cz;
    const len = Math.hypot(dx, dz) || 1;
    const ux = dx / len, uz = dz / len;
    const back = Math.min(alongX ? a.w * 0.3 : a.d * 0.3, 0.85);
    return {
      camX: a.cx - ux * back,
      camZ: a.cz - uz * back,
      lookX: a.cx + ux * 3.2,
      lookZ: a.cz + uz * 3.2,
    };
  }
  if (kind === "balcony" || kind === "terrace") {
    const ox = unitCenter ? a.cx - unitCenter.x : 0;
    const oz = unitCenter ? a.cz - unitCenter.z : 1;
    const len = Math.hypot(ox, oz) || 1;
    return {
      camX: a.cx - (ox / len) * 0.4,
      camZ: a.cz - (oz / len) * 0.4,
      lookX: a.cx + (ox / len) * 2.4,
      lookZ: a.cz + (oz / len) * 2.4,
    };
  }
  return { camX: a.cx - ix * 0.2, camZ: a.cz - iz * 0.2, lookX: a.cx + ix * 0.5, lookZ: a.cz + iz * 0.6 };
}

function realised(
  vp: Viewpoint,
  poly: [number, number][],
  cols: Collision[],
): (Viewpoint & { dist: number }) | null {
  const clear = findClearPoint({ x: vp.camX, z: vp.camZ }, cols, [{ polygon: poly }], 0.32);
  const dx = vp.lookX - clear.x, dz = vp.lookZ - clear.z;
  const len = Math.hypot(dx, dz) || 1;
  const ux = dx / len, uz = dz / len;
  const dist = sight(clear.x, clear.z, ux, uz, poly, cols);
  if (dist < 0.85) return null;
  const lookDist = Math.min(Math.max(dist * 0.72, 1.1), 3.4);
  return {
    camX: clear.x,
    camZ: clear.z,
    lookX: clear.x + ux * lookDist,
    lookZ: clear.z + uz * lookDist,
    dist,
  };
}

/** Place an eye-level camera inside the room, looking at a natural focal point. */
function viewpointFor(
  room: Room,
  poly: [number, number][],
  kind: RoomStop["type"],
  cols: Collision[],
  unitCenter?: { x: number; z: number },
): Viewpoint {
  const a = aabb(poly);
  const alongX = a.w >= a.d;
  const inset = Math.max(0.42, Math.min(0.9, Math.min(a.w, a.d) * 0.28));

  const can = realised(canonicalView(kind, a, alongX, unitCenter), poly, cols);
  if (can && can.dist >= 1.2) {
    return { camX: can.camX, camZ: can.camZ, lookX: can.lookX, lookZ: can.lookZ };
  }

  type Cand = Viewpoint & { score: number };
  const cands: Cand[] = [];
  const push = (camX: number, camZ: number, lx: number, lz: number, bonus = 0) => {
    const r = realised({ camX, camZ, lookX: lx, lookZ: lz }, poly, cols);
    if (!r) return;
    cands.push({ ...r, score: r.dist + bonus });
  };

  if (can) push(can.camX, can.camZ, can.lookX, can.lookZ, 1.2);

  const ins = inset;
  push(a.minX + ins, a.minZ + ins, a.maxX - 0.35, a.maxZ - 0.35, 0.15);
  push(a.maxX - ins, a.minZ + ins, a.minX + 0.35, a.maxZ - 0.35, 0.15);
  push(a.minX + ins, a.maxZ - ins, a.maxX - 0.35, a.minZ + 0.35, 0.15);
  push(a.maxX - ins, a.maxZ - ins, a.minX + 0.35, a.minZ + 0.35, 0.15);
  push(a.cx, a.minZ + ins, a.cx, a.maxZ - 0.3);
  push(a.cx, a.maxZ - ins, a.cx, a.minZ + 0.3);
  push(a.minX + ins, a.cz, a.maxX - 0.3, a.cz);
  push(a.maxX - ins, a.cz, a.minX + 0.3, a.cz);

  cands.sort((x, y) => y.score - x.score);
  if (cands.length) return cands[0];

  const ux = alongX ? 1 : 0;
  const uz = alongX ? 0 : 1;
  return {
    camX: a.cx - ux * inset * 0.4,
    camZ: a.cz - uz * inset * 0.4,
    lookX: a.cx + ux,
    lookZ: a.cz + uz,
  };
}


function makeStop(
  id: string,
  name: string,
  short: string,
  type: RoomStop["type"],
  area_m2: number,
  vp: Viewpoint,
  cols: Collision[],
  walkRooms: { polygon: [number, number][] }[],
  note?: string,
): RoomStop {
  const clear = findClearPoint({ x: vp.camX, z: vp.camZ }, cols, walkRooms);
  const look = { x: vp.lookX, z: vp.lookZ };
  // If the clear point is far from the intended camera, keep looking at the same focal point.
  const yaw = yawToward(clear.x, clear.z, look.x, look.z);
  return {
    id, name, short, type, area_m2, note,
    position: new THREE.Vector3(clear.x, EYE, clear.z),
    lookAt: new THREE.Vector3(look.x, LOOK_Y, look.z),
    yaw,
    walkX: clear.x,
    walkZ: clear.z,
  };
}

export function buildRoomStops(
  plan: UnitPlan,
  t: Transform | undefined,
  cols: Collision[],
): RoomStop[] {
  const stops: RoomStop[] = [];
  const worldRooms = plan.rooms.map((r) => ({ ...r, polygon: worldPoly(r.polygon, t) }));
  const indoor = worldRooms.filter((r) => r.type !== "terrace" && r.type !== "balcony");
  const walkRooms = worldRooms;
  const uc = plan.bounds;
  let ucx = (uc.min[0] + uc.max[0]) / 2;
  let ucz = (uc.min[1] + uc.max[1]) / 2;
  if (t) {
    const a = planToWorld(uc.min[0], uc.min[1], t);
    const b = planToWorld(uc.max[0], uc.max[1], t);
    ucx = (a[0] + b[0]) / 2;
    ucz = (a[1] + b[1]) / 2;
  }
  const unitCenter = { x: ucx, z: ucz };

  for (const room of worldRooms) {
    const meta = displayName(room);
    const vp = viewpointFor(room, room.polygon, meta.type, cols, unitCenter);
    const note = room.notes;
    stops.push(makeStop(room.id, meta.name, meta.short, meta.type, room.area_m2, vp, cols, walkRooms, note));

    // Combined living / dining (2 BHK)
    if (room.type === "living" && /dining/i.test(room.name) && aabb(room.polygon).w * aabb(room.polygon).d > 18) {
      const a = aabb(room.polygon);
      const dvp = viewpointFor(room, room.polygon, "dining", cols, unitCenter);
      stops.push(makeStop(
        `${room.id}-dining`,
        "Dining",
        "Dining",
        "dining",
        Math.round(room.area_m2 * 0.35 * 10) / 10,
        dvp,
        cols,
        [room],
      ));
      void a;
    }

    // Combined living / kitchen (3 BHK) and penthouse lounge kitchen approximation
    const wantsKitchen =
      (room.type === "living" && /kitchen/i.test(room.name)) ||
      (plan.id === "penthouse" && room.id === "lounge");
    if (wantsKitchen && !worldRooms.some((r) => r.type === "kitchen")) {
      const kvp = viewpointFor(room, room.polygon, "kitchen", cols, unitCenter);
      const noteK =
        plan.id === "penthouse"
          ? "The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation."
          : "The 3BHK drawing combines the living room and kitchen in one space.";
      stops.push(makeStop(
        `${room.id}-kitchen`,
        "Kitchen",
        "Kitchen",
        "kitchen",
        Math.round(room.area_m2 * 0.28 * 10) / 10,
        kvp,
        cols,
        [room],
        noteK,
      ));
    }
  }

  stops.sort((a, b) => {
    const ta = TYPE_ORDER[a.type] ?? 50;
    const tb = TYPE_ORDER[b.type] ?? 50;
    if (ta !== tb) return ta - tb;
    if (a.type === "bedroom") return bedroomPriority(a.name, a.id) - bedroomPriority(b.name, b.id);
    if (a.type === "bathroom") return bedroomPriority(a.name, a.id) - bedroomPriority(b.name, b.id);
    return a.name.localeCompare(b.name);
  });

  void indoor;
  return stops;
}

export function finishLines(stop: RoomStop, prefs: Prefs): { label: string; value: string }[] {
  const styleName: Record<Prefs["style"], string> = {
    modern: "Modern",
    luxury: "Luxury",
    minimal: "Minimal",
    traditional: "Traditional Indian",
  };
  const floorName: Record<Prefs["flooring"], string> = {
    marble: "Marble",
    wood: "Wood",
    tile: "Tile",
  };
  const kitchenName: Record<Prefs["kitchen"], string> = {
    white: "White",
    walnut: "Walnut",
    black: "Matte black",
    granite: "Granite",
  };
  const lines: { label: string; value: string }[] = [];
  lines.push({ label: "Style", value: styleName[prefs.style] });
  if (stop.type === "kitchen") {
    lines.push({ label: "Cabinets & counter", value: kitchenName[prefs.kitchen] });
    lines.push({ label: "Floor", value: "Tile" });
  } else if (stop.type === "bathroom" || stop.type === "utility") {
    lines.push({ label: "Floor", value: "Tile" });
    lines.push({ label: "Walls", value: "Follow your wall colour" });
  } else if (stop.type === "balcony" || stop.type === "terrace") {
    lines.push({ label: "Deck", value: "Terracotta pavers" });
  } else if (stop.type === "bedroom") {
    lines.push({ label: "Floor", value: floorName[prefs.flooring] });
    lines.push({ label: "Headboard", value: styleName[prefs.style] });
  } else {
    lines.push({ label: "Floor", value: floorName[prefs.flooring] });
    lines.push({ label: "Walls", value: "Your chosen wall colour" });
  }
  return lines;
}

export function defaultSpawn(
  plan: UnitPlan,
  t: Transform | undefined,
  cols: Collision[],
): { x: number; y: number; z: number; yaw: number } {
  const stops = buildRoomStops(plan, t, cols);
  // Walk mode opens on a furnished room, not a narrow hall staring at a wall.
  const foyer = stops.find((s) => s.type === "living") ?? stops.find((s) => s.type === "foyer") ?? stops[0];
  if (!foyer) {
    return { x: 0, y: EYE, z: 0, yaw: 0 };
  }
  return { x: foyer.walkX, y: EYE, z: foyer.walkZ, yaw: foyer.yaw };
}
