import * as THREE from "three";
import type { Collision, Prefs, Room, RoomType, Transform, UnitPlan } from "./types";
import { planToWorld } from "./layout";
import { aabb, type Anchor } from "./furniture";

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
    // Stand in the open centre and look toward the far vanity wall — never
    // a corner camera stuffed inside the shower.
    return { camX: a.cx, camZ: a.cz, lookX: a.cx * 0.3 + (a.maxX - 0.35) * 0.7, lookZ: a.cz * 0.3 + (a.maxZ - 0.35) * 0.7, lookY: 1.1 };
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


function pitchToward(camX: number, camZ: number, lookX: number, lookY: number, lookZ: number): number {
  const horiz = Math.hypot(lookX - camX, lookZ - camZ) || 1;
  return Math.atan2(lookY - EYE, horiz);
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
  let clear = findClearPoint({ x: vp.camX, z: vp.camZ }, cols, walkRooms);
  const home = walkRooms.find((r) => pointInPoly(r.polygon, vp.lookX, vp.lookZ)) ?? walkRooms[0];
  if (home) clear = pullInside(home.polygon, clear.x, clear.z, type === "bathroom" || type === "utility" ? 0.36 : 0.32);
  const look = { x: vp.lookX, z: vp.lookZ };
  const lookY = vp.lookY ?? LOOK_Y;
  const yaw = yawToward(clear.x, clear.z, look.x, look.z);
  const pitch = pitchToward(clear.x, clear.z, look.x, lookY, look.z);
  return {
    id, name, short, type, area_m2, note,
    position: new THREE.Vector3(clear.x, EYE, clear.z),
    lookAt: new THREE.Vector3(look.x, lookY, look.z),
    yaw,
    pitch,
    walkX: clear.x,
    walkZ: clear.z,
  };
}

/**
 * Stand in front of a piece of furniture and look back at it, so a wall or
 * window sits behind the subject — never at empty sky, a blank wall, or
 * the inside of the mesh.
 */
function viewpointFromAnchor(
  a: Anchor,
  poly: [number, number][],
  cols: Collision[],
  others: Anchor[] = [],
): Viewpoint | null {
  // A mild 3/4 from in front of the piece. Scoring prefers an ideal
  // stand-back (not the farthest corner), stays strictly inside the room,
  // and refuses to sit on another piece of furniture.
  const isBed = a.kind === "bed";
  const isKit = a.kind === "kitchen";
  const isBath = a.kind === "basin" || a.kind === "bath";
  const idealDist = isBed ? 2.35 : isKit ? 1.9 : isBath ? 1.45 : 2.05;
  const idealSide = isBed ? 0.95 : isKit ? 1.0 : isBath ? 0.28 : 0.65;
  const maxSide = isBed ? 1.45 : isKit ? 1.55 : isBath ? 0.55 : 1.05;
  const minLen = isBed ? 1.65 : isKit ? 1.45 : isBath ? 0.5 : 1.25;
  const maxLen = isBed ? 3.4 : isKit ? 2.55 : isBath ? 2.2 : 2.85;
  const minFront = isBed ? 0.9 : isBath ? 0.35 : 0.8;
  const sx = -a.fz, sz = a.fx;
  const bounds = aabb(poly);
  const rooms = [{ polygon: poly }];

  type Try = { x: number; z: number };
  const tries: Try[] = [];
  const seen = new Set<string>();
  const push = (x: number, z: number) => {
    const k = `${x.toFixed(2)},${z.toFixed(2)}`;
    if (seen.has(k)) return;
    seen.add(k);
    tries.push({ x, z });
  };

  const sides = isBath
    ? [0.35, -0.35, 0.2, -0.2, 0.5, -0.5, 0]
    : [1, -1, 0.7, -0.7, 0.45, -0.45, 1.2, -1.2, 0];
  const dists = isBath ? [1, 0.85, 0.7, 1.15] : [1, 0.85, 1.15, 0.72, 0.6];
  for (const sideMul of sides) {
    for (const dMul of dists) {
      push(
        a.x + a.fx * idealDist * dMul + sx * idealSide * sideMul,
        a.z + a.fz * idealDist * dMul + sz * idealSide * sideMul,
      );
    }
  }
  if (isBed) {
    const inset = 0.58;
    for (const cx of [bounds.minX + inset, bounds.maxX - inset]) {
      for (const cz of [bounds.minZ + inset, bounds.maxZ - inset]) {
        if ((cx - a.x) * a.fx + (cz - a.z) * a.fz > 0.8) push(cx, cz);
      }
    }
  }
  if (isBath) {
    // Tiny bathrooms: stand in the open centre (or just in front of the
    // vanity) and look at the basin + mirror. Never a corner inside the shower.
    push(bounds.cx, bounds.cz);
    const span = Math.min(1.35, Math.max(0.85, Math.min(bounds.w, bounds.d) * 0.55));
    push(a.x + a.fx * span, a.z + a.fz * span);
    push(bounds.cx - a.fx * 0.1, bounds.cz - a.fz * 0.1);
  }
  if (isKit) {
    // Open floor of the kitchen (centre, and the corner opposite the counters).
    push(bounds.cx, bounds.cz);
    push(bounds.cx + a.fx * 0.4, bounds.cz + a.fz * 0.4);
    const ox = a.fx > 0.4 ? bounds.maxX - 1.05 : a.fx < -0.4 ? bounds.minX + 1.05 : bounds.cx;
    const oz = a.fz > 0.4 ? bounds.maxZ - 1.05 : a.fz < -0.4 ? bounds.minZ + 1.05 : bounds.cz;
    push(ox, oz);
    push((ox + bounds.cx) / 2, (oz + bounds.cz) / 2);
  }

  const blocked = (x: number, z: number): boolean => {
    for (const o of others) {
      if (o === a || (o.x === a.x && o.z === a.z && o.kind === a.kind)) continue;
      const rad = Math.max(0.55, o.width * 0.42);
      if (Math.hypot(x - o.x, z - o.z) < rad) return true;
    }
    return false;
  };

  let best: (Viewpoint & { score: number }) | null = null;
  for (const t of tries) {
    const clear = findClearPoint({ x: t.x, z: t.z }, cols, rooms, 0.32);
    if (!pointInPoly(poly, clear.x, clear.z)) continue;
    if (blocked(clear.x, clear.z)) continue;
    // Never stand inside a wall or door leaf — 3 cm of clearance is not enough
    // (the penthouse master bath used to fill the frame with wood grain).
    if (distToPoly(poly, clear.x, clear.z) < (isBath ? 0.32 : 0.28)) continue;
    const dx = a.x - clear.x, dz = a.z - clear.z;
    const len = Math.hypot(dx, dz);
    if (len < minLen || len > maxLen) continue;
    const inFront = (clear.x - a.x) * a.fx + (clear.z - a.z) * a.fz;
    if (inFront < minFront) continue;
    const sideAmt = Math.abs((clear.x - a.x) * sx + (clear.z - a.z) * sz);
    if (sideAmt > maxSide) continue;
    const ux = dx / len, uz = dz / len;
    const vis = sight(clear.x, clear.z, ux, uz, poly, cols);
    if (vis < Math.min(len * 0.65, isBath ? 0.95 : 1.2)) continue;
    const toCenter = Math.hypot(clear.x - bounds.cx, clear.z - bounds.cz);
    const score =
      4
      - Math.abs(len - idealDist) * 1.15
      - Math.abs(sideAmt - idealSide) * 0.9
      + Math.min(vis, 4) * 0.08
      + (isBath ? Math.max(0, 1.0 - toCenter) * 2.2 : 0)
      + distToPoly(poly, clear.x, clear.z) * 0.35;
    if (!best || score > best.score) {
      const lookDist = Math.min(len, vis * 0.9);
      best = {
        camX: clear.x,
        camZ: clear.z,
        lookX: clear.x + ux * lookDist,
        lookZ: clear.z + uz * lookDist,
        lookY: a.height,
        score,
      };
    }
  }
  if (!best) return null;
  return { camX: best.camX, camZ: best.camZ, lookX: best.lookX, lookZ: best.lookZ, lookY: best.lookY };
}

function pickAnchor(anchors: Anchor[] | undefined, kind: RoomStop["type"]): Anchor | undefined {
  if (!anchors || !anchors.length) return undefined;
  const prefer: Record<string, Anchor["kind"][]> = {
    living: ["sofa", "tv"],
    dining: ["dining", "sofa"],
    kitchen: ["kitchen"],
    bedroom: ["bed"],
    bathroom: ["basin", "bath"],
    utility: ["bath", "basin"],
    balcony: ["outdoor"],
    terrace: ["outdoor"],
    foyer: ["foyer"],
    lobby: ["foyer"],
    hall: ["foyer"],
    dressing: ["wardrobe"],
  };
  const list = prefer[kind] ?? [];
  for (const k of list) {
    const hit = anchors.find((a) => a.kind === k);
    if (hit) return hit;
  }
  return anchors[0];
}


export function buildRoomStops(
  plan: UnitPlan,
  t: Transform | undefined,
  cols: Collision[],
  anchorsByRoom: Map<string, Anchor[]> = new Map(),
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
    // Halls and foyers look down their long axis toward the rest of the home,
    // not at a side table or a door leaf.
    const skipFurniture = meta.type === "foyer";
    const aStop = skipFurniture ? undefined : pickAnchor(anchorsByRoom.get(room.id), meta.type);
    const roomAnchors = anchorsByRoom.get(room.id) ?? [];
    const fromFurniture = aStop ? viewpointFromAnchor(aStop, room.polygon, cols, roomAnchors) : null;
    const vp = fromFurniture ?? viewpointFor(room, room.polygon, meta.type, cols, unitCenter);
    const note = room.notes;
    stops.push(makeStop(room.id, meta.name, meta.short, meta.type, room.area_m2, vp, cols, walkRooms, note));

    // Combined living / dining (2 BHK)
    if (room.type === "living" && /dining/i.test(room.name) && aabb(room.polygon).w * aabb(room.polygon).d > 18) {
      const a = aabb(room.polygon);
      const dAnchor = pickAnchor(anchorsByRoom.get(room.id), "dining");
      const dvp = (dAnchor && viewpointFromAnchor(dAnchor, room.polygon, cols, anchorsByRoom.get(room.id) ?? []))
        ?? viewpointFor(room, room.polygon, "dining", cols, unitCenter);
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
      const kAnchor = pickAnchor(anchorsByRoom.get(room.id), "kitchen");
      const kvp = (kAnchor && viewpointFromAnchor(kAnchor, room.polygon, cols, anchorsByRoom.get(room.id) ?? []))
        ?? viewpointFor(room, room.polygon, "kitchen", cols, unitCenter);
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
