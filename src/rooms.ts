import * as THREE from "three";
import type { Collision, Door, Prefs, Room, RoomType, Transform, UnitPlan } from "./types";
import { planToWorld } from "./layout";
import { aabb, type Anchor } from "./furniture";
import { doorInward } from "./occupancy";
import { worldDoors } from "./planner";

export const EYE = 1.6;
export const LOOK_Y = 0.92;

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
  /** Slight downward pitch so furniture fills the frame, not the sky. */
  pitch: number;
  walkX: number;
  walkZ: number;
  /** Vertical FOV in degrees. Small rooms may be ~85; otherwise unset (engine picks 70/60). */
  fov?: number;
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
  lookY?: number;
  fov?: number;
  pitch?: number;
}

const PITCH_DOWN = (-8 * Math.PI) / 180;

function isSmallRoom(kind: RoomStop["type"], area: number): boolean {
  return kind === "bathroom" || kind === "dressing" || kind === "linen" || kind === "utility" || area < 6;
}

function defaultFov(kind: RoomStop["type"], area: number): number {
  return isSmallRoom(kind, area) ? 85 : 70;
}

/**
 * Show-flat room camera: stand at the doorway or a corner, eye height 1.6 m,
 * look at the centroid (or a far-wall bias), pitched ~-8°. Never aims at a
 * single furniture anchor. Small rooms use the widest stand-back and ~85° FOV.
 */

function roomOverview(
  room: Room,
  poly: [number, number][],
  kind: RoomStop["type"],
  cols: Collision[],
  doors: Door[],
  unitCenter?: { x: number; z: number },
  lookBias?: { x: number; z: number },
): Viewpoint {
  const a = aabb(poly);
  const area = room.area_m2 || a.w * a.d;
  const small = isSmallRoom(kind, area);
  const inset = small
    ? Math.min(0.42, Math.max(0.28, Math.min(a.w, a.d) * 0.2))
    : Math.max(0.5, Math.min(0.75, Math.min(a.w, a.d) * 0.16));
  const radius = small ? 0.22 : 0.28;
  const outdoor = kind === "balcony" || kind === "terrace";
  const shallow = outdoor && Math.min(a.w, a.d) < 2.3;

  // Look at the room centroid. Kitchen furniture is used to PLACE the camera
  // opposite the run, never as the look target (that produced hob close-ups).
  let lookX = a.cx;
  let lookZ = a.cz;
  if (kind === "kitchen" && lookBias) {
    lookX = a.cx * 0.7 + lookBias.x * 0.3;
    lookZ = a.cz * 0.7 + lookBias.z * 0.3;
  }
  if (kind === "foyer" && unitCenter) {
    lookX = a.cx * 0.3 + unitCenter.x * 0.7;
    lookZ = a.cz * 0.3 + unitCenter.z * 0.7;
  }
  // Outdoor: look at the furniture cluster (centroid), never out at the sky.
  if (outdoor) {
    lookX = a.cx;
    lookZ = a.cz;
  }

  type Cand = { x: number; z: number; score: number };
  const cands: Cand[] = [];

  const consider = (x: number, z: number, bonus: number) => {
    const pulled = pullInside(poly, x, z, small ? 0.36 : 0.32);
    if (!pointInPoly(poly, pulled.x, pulled.z)) return;
    let px = pulled.x, pz = pulled.z;
    if (hitsCollision(cols, px, pz, radius)) {
      const nx = px + (a.cx - px) * 0.3;
      const nz = pz + (a.cz - pz) * 0.3;
      const p2 = pullInside(poly, nx, nz, 0.3);
      if (hitsCollision(cols, p2.x, p2.z, radius * 0.85)) return;
      px = p2.x; pz = p2.z;
    }
    const dist = Math.hypot(lookX - px, lookZ - pz);
    cands.push({ x: px, z: pz, score: bonus + dist });
  };

  // Doorway — strong default, but NOT when that stand is on top of the kitchen.
  for (const door of doors) {
    const inv = doorInward(door, poly);
    if (!inv) continue;
    const stand = small ? Math.min(0.5, Math.min(a.w, a.d) * 0.26) : 0.65;
    const dx = inv.mx + inv.ix * stand;
    const dz = inv.mz + inv.iz * stand;
    let bonus = 16;
    if (kind === "kitchen" && lookBias && Math.hypot(dx - lookBias.x, dz - lookBias.z) < 2.2) {
      bonus = -10; // this door faces the counters — would be a hob close-up
    }
    consider(dx, dz, bonus);
    consider(inv.mx + inv.ix * (stand + 0.4), inv.mz + inv.iz * (stand + 0.4), bonus - 4);
  }

  // Corners and mid-wall stand-backs.
  consider(a.minX + inset, a.minZ + inset, 10);
  consider(a.maxX - inset, a.minZ + inset, 10);
  consider(a.minX + inset, a.maxZ - inset, 10);
  consider(a.maxX - inset, a.maxZ - inset, 10);
  consider(a.cx, a.minZ + inset, 8);
  consider(a.cx, a.maxZ - inset, 8);
  consider(a.minX + inset, a.cz, 8);
  consider(a.maxX - inset, a.cz, 8);

  // Shallow balcony: stand at a short END and look along the length.
  if (outdoor) {
    if (a.w >= a.d) {
      consider(a.minX + inset, a.cz, 28);
      consider(a.maxX - inset, a.cz, 28);
      consider(a.minX + inset, a.maxZ - inset * 0.6, 22);
      consider(a.maxX - inset, a.maxZ - inset * 0.6, 22);
    } else {
      consider(a.cx, a.minZ + inset, 28);
      consider(a.cx, a.maxZ - inset, 28);
    }
  }

  // Kitchen: force the opposite corner so the L-shape (south + east runs,
  // fridge, chimney, floor) reads as a room, not a frontal hob close-up.
  if (kind === "kitchen") {
    const kx = lookBias?.x ?? a.cx;
    const kz = lookBias?.z ?? a.minZ + 0.4;
    const oppX = kx > a.cx ? a.minX + inset : a.maxX - inset;
    const oppZ = kz > a.cz ? a.minZ + inset : a.maxZ - inset;
    consider(oppX, oppZ, 48);
    consider(oppX, a.cz, 28);
    consider((oppX + a.cx) / 2, oppZ, 26);
    for (const c of cands) {
      const d = Math.hypot(c.x - kx, c.z - kz);
      const diag = Math.abs(c.x - kx) + Math.abs(c.z - kz);
      c.score += d * 5 + diag * 3;
      if (d < 2.2) c.score -= 50;
    }
    lookX = a.cx;
    lookZ = a.cz;
  }

  // Bedroom: prefer a long diagonal so portrait shows the bed AND a side wall.
  if (kind === "bedroom") {
    for (const c of cands) {
      const d = Math.hypot(c.x - a.cx, c.z - a.cz);
      c.score += d * 1.6;
    }
  }

  cands.sort((x, y) => y.score - x.score);
  const cam = cands[0] ?? { x: a.cx, z: a.cz, score: 0 };

  // Keep the look at the centroid (or mild kitchen bias). Do not extend onto
  // a close wall — that was pulling the kitchen look onto the hob.
  const dx = lookX - cam.x;
  const dz = lookZ - cam.z;
  const len = Math.hypot(dx, dz) || 1;
  // For bedrooms, look slightly past the centre toward the far wall (headboard).
  if (kind === "bedroom") {
    let ext = len;
    for (let t = len; t < len + 3; t += 0.2) {
      const px = cam.x + (dx / len) * t;
      const pz = cam.z + (dz / len) * t;
      if (!pointInPoly(poly, px, pz)) break;
      ext = t;
    }
    const lookDist = Math.min(ext * 0.72, len + 1.2);
    lookX = cam.x + (dx / len) * lookDist;
    lookZ = cam.z + (dz / len) * lookDist;
  }

  const pitch = shallow ? (-20 * Math.PI) / 180 : outdoor ? (-14 * Math.PI) / 180 : PITCH_DOWN;
  const horiz = Math.hypot(lookX - cam.x, lookZ - cam.z) || 1;
  const lookY = EYE + Math.tan(pitch) * horiz;

  let fov = defaultFov(kind, area);
  if (kind === "kitchen" && area < 18) fov = 80;
  if (outdoor && shallow) fov = 80;

  return { camX: cam.x, camZ: cam.z, lookX, lookZ, lookY, fov, pitch };
}

function pullInside(poly: [number, number][], x: number, z: number, pad = 0.34): { x: number; z: number } {
  if (pointInPoly(poly, x, z) && distToPoly(poly, x, z) >= pad) return { x, z };
  const b = aabb(poly);
  for (let t = 0.08; t <= 1.01; t += 0.08) {
    const nx = x + (b.cx - x) * t;
    const nz = z + (b.cz - z) * t;
    if (pointInPoly(poly, nx, nz) && distToPoly(poly, nx, nz) >= Math.min(pad, 0.22)) return { x: nx, z: nz };
  }
  return { x: b.cx, z: b.cz };
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
  let clear = findClearPoint({ x: vp.camX, z: vp.camZ }, cols, walkRooms, type === "bathroom" ? 0.22 : 0.28);
  const home = walkRooms.find((r) => pointInPoly(r.polygon, vp.camX, vp.camZ))
    ?? walkRooms.find((r) => pointInPoly(r.polygon, vp.lookX, vp.lookZ))
    ?? walkRooms[0];
  if (home) clear = pullInside(home.polygon, clear.x, clear.z, type === "bathroom" || type === "utility" || type === "dressing" ? 0.36 : 0.32);
  const look = { x: vp.lookX, z: vp.lookZ };
  const horiz = Math.hypot(look.x - clear.x, look.z - clear.z) || 1;
  const lookY = vp.lookY ?? (EYE + Math.tan(PITCH_DOWN) * horiz);
  const yaw = yawToward(clear.x, clear.z, look.x, look.z);
  const pitch = vp.pitch ?? PITCH_DOWN;
  return {
    id, name, short, type, area_m2, note,
    position: new THREE.Vector3(clear.x, EYE, clear.z),
    lookAt: new THREE.Vector3(look.x, lookY, look.z),
    yaw,
    pitch,
    walkX: clear.x,
    walkZ: clear.z,
    fov: vp.fov ?? defaultFov(type, area_m2),
  };
}

export function buildRoomStops(
  plan: UnitPlan,
  t: Transform | undefined,
  cols: Collision[],
  anchorsByRoom: Map<string, Anchor[]> = new Map(),
): RoomStop[] {
  const stops: RoomStop[] = [];
  const worldRooms = plan.rooms.map((r) => ({ ...r, polygon: worldPoly(r.polygon, t) }));
  const doors = worldDoors(plan, t);
  const xs = worldRooms.flatMap((r) => r.polygon.map((p) => p[0]));
  const zs = worldRooms.flatMap((r) => r.polygon.map((p) => p[1]));
  const unitCenter = {
    x: (Math.min(...xs) + Math.max(...xs)) / 2,
    z: (Math.min(...zs) + Math.max(...zs)) / 2,
  };

  const walkRooms = worldRooms.filter((r) => r.type !== "utility" || (r.area_m2 ?? 0) > 2);

  const kitHint = (roomId: string): { x: number; z: number } | undefined => {
    const a = anchorsByRoom.get(roomId) ?? [];
    const k = a.find((x) => x.kind === "kitchen");
    return k ? { x: k.x, z: k.z } : undefined;
  };

  // Combined living rooms get extra Kitchen / Dining stops with a look bias,
  // still using a full-room doorway/corner camera.
  for (const room of worldRooms) {
    if (room.type === "utility" && (room.area_m2 ?? 0) < 2) continue;
    const meta = displayName(room);
    const hint = meta.type === "kitchen" ? kitHint(room.id) : undefined;
    const vp = roomOverview(room, room.polygon, meta.type, cols, doors, unitCenter, hint);
    stops.push(makeStop(room.id, meta.name, meta.short, meta.type, room.area_m2, vp, cols, walkRooms, room.notes));

    const isCombinedLiving = room.type === "living" && /dining|kitchen/i.test(room.name);
    if (isCombinedLiving && /dining/i.test(room.name)) {
      const dvp = roomOverview(room, room.polygon, "dining", cols, doors, unitCenter);
      stops.push(makeStop(
        room.id + "-dining", "Dining", "Dining", "dining", room.area_m2,
        dvp, cols, walkRooms,
      ));
    }
    if ((isCombinedLiving && /kitchen/i.test(room.name)) || (room.type === "living" && room.id === "lounge")) {
      const hint = kitHint(room.id);
      const kvp = roomOverview(room, room.polygon, "kitchen", cols, doors, unitCenter, hint);
      stops.push(makeStop(
        room.id + "-kitchen", "Kitchen", "Kitchen", "kitchen", room.area_m2,
        kvp, cols, walkRooms,
      ));
    }
  }

  stops.sort((a, b) => {
    const ta = TYPE_ORDER[a.type] ?? 50;
    const tb = TYPE_ORDER[b.type] ?? 50;
    if (ta !== tb) return ta - tb;
    if (a.type === "bedroom") return bedroomPriority(a.name, a.id) - bedroomPriority(b.name, b.id);
    return a.name.localeCompare(b.name);
  });
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
  anchorsByRoom: Map<string, Anchor[]> = new Map(),
): { x: number; y: number; z: number; yaw: number; pitch?: number } {
  const stops = buildRoomStops(plan, t, cols, anchorsByRoom);
  // Walk mode opens on a furnished room, not a narrow hall staring at a wall.
  const foyer = stops.find((s) => s.type === "living") ?? stops.find((s) => s.type === "foyer") ?? stops[0];
  if (!foyer) {
    return { x: 0, y: EYE, z: 0, yaw: 0 };
  }
  return { x: foyer.walkX, y: EYE, z: foyer.walkZ, yaw: foyer.yaw, pitch: foyer.pitch };
}
