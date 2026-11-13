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
  alts?: { x: number; z: number }[];
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
  lookBias?: { x: number; z: number; fx?: number; fz?: number; depth?: number; width?: number; showerX?: number; showerZ?: number },
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

  // Bedroom: look at the headboard (anchor facing is footward).
  const bed = kind === "bedroom" && lookBias && lookBias.fx !== undefined && lookBias.fz !== undefined && lookBias.depth
    ? lookBias as { x: number; z: number; fx: number; fz: number; depth: number; width?: number }
    : null;
  if (bed) {
    const hx = bed.x - bed.fx * (bed.depth / 2);
    const hz = bed.z - bed.fz * (bed.depth / 2);
    lookX = hx * 0.6 + bed.x * 0.4;
    lookZ = hz * 0.6 + bed.z * 0.4;
  }

  type Cand = { x: number; z: number; score: number };
  const cands: Cand[] = [];

  const consider = (x: number, z: number, bonus: number, pad?: number) => {
    const pulled = pullInside(poly, x, z, pad ?? (kind === "bathroom" ? 0.18 : small ? 0.36 : 0.32));
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

  // Bathroom: stand at the doorway or the corner farthest from the shower,
  // looking at the basin and WC. Never stare into the shower enclosure —
  // it is a solid partition and reads as a wall close-up.
  if (kind === "bathroom") {
    const shower = (lookBias?.showerX !== undefined && lookBias?.showerZ !== undefined)
      ? { x: lookBias.showerX, z: lookBias.showerZ }
      : null;
    if (lookBias) {
      lookX = lookBias.x * 0.4 + a.cx * 0.6;
      lookZ = lookBias.z * 0.4 + a.cz * 0.6;
    }
    const bathCorners: [number, number][] = [
      [a.minX + 0.22, a.minZ + 0.22],
      [a.maxX - 0.22, a.minZ + 0.22],
      [a.minX + 0.22, a.maxZ - 0.22],
      [a.maxX - 0.22, a.maxZ - 0.22],
    ];
    if (shower) {
      bathCorners.sort((p, q) =>
        Math.hypot(q[0] - shower.x, q[1] - shower.z) - Math.hypot(p[0] - shower.x, p[1] - shower.z),
      );
      consider(bathCorners[0][0], bathCorners[0][1], 100, 0.16);
      consider(bathCorners[1][0], bathCorners[1][1], 74, 0.16);
    }
    for (const door of doors) {
      const inv = doorInward(door, poly);
      if (!inv) continue;
      const sx = -inv.iz, sz = inv.ix;
      let ox = 0, oz = 0;
      if (shower) {
        const along = (inv.mx - shower.x) * sx + (inv.mz - shower.z) * sz;
        const sign = along >= 0 ? 1 : -1;
        ox = sx * sign * 0.38;
        oz = sz * sign * 0.38;
      }
      consider(inv.mx + inv.ix * 0.28 + ox, inv.mz + inv.iz * 0.28 + oz, 90, 0.14);
      consider(inv.mx + inv.ix * 0.52 + ox, inv.mz + inv.iz * 0.52 + oz, 94, 0.16);
      consider(inv.mx + inv.ix * 0.30, inv.mz + inv.iz * 0.30, 58, 0.14);
    }
    const ahead = (x: number, z: number, ux: number, uz: number) => {
      for (let s = 0.06; s < 5; s += 0.06) {
        if (!pointInPoly(poly, x + ux * s, z + uz * s)) return s;
      }
      return 5;
    };
    const obst = (x: number, z: number, ux: number, uz: number) => {
      for (let s = 0.12; s < 4; s += 0.08) {
        if (hitsCollision(cols, x + ux * s, z + uz * s, 0.12)) return s;
      }
      return 4;
    };
    for (const c of cands) {
      const dx = lookX - c.x, dz = lookZ - c.z;
      const dist = Math.hypot(dx, dz) || 0.01;
      const ux = dx / dist, uz = dz / dist;
      const wallAhead = ahead(c.x, c.z, ux, uz);
      const hit = obst(c.x, c.z, ux, uz);
      if (hit < 0.9) c.score -= 130;
      else if (hit < 1.35) c.score -= 45;
      c.score += Math.min(hit, 2.4) * 22;
      if (wallAhead < 0.7) c.score -= 80;
      c.score += Math.min(wallAhead, 2.2) * 12;
      c.score += Math.min(dist, 2.0) * 12;
      if (shower) {
        const toSx = shower.x - c.x, toSz = shower.z - c.z;
        const sLen = Math.hypot(toSx, toSz) || 1;
        const facing = (toSx / sLen) * ux + (toSz / sLen) * uz;
        // Shower dead ahead at short range = wall close-up.
        if (facing > 0.8 && sLen < 1.65) c.score -= 80;
        c.score += Math.min(sLen, 2.0) * 10;
      }
    }
  }

  // Bedroom: stand in a foot-side corner, looking at the headboard on its wall.
  // Stay off the mattress — a stand 0.6 m past the foot often collides with
  // the wardrobe or bench and gets pulled onto the bed.
  if (kind === "bedroom") {
    if (bed) {
      const px = -bed.fz, pz = bed.fx;
      const footX = bed.x + bed.fx * (bed.depth / 2);
      const footZ = bed.z + bed.fz * (bed.depth / 2);
      const corners: [number, number][] = [
        [a.minX + inset, a.minZ + inset],
        [a.maxX - inset, a.minZ + inset],
        [a.minX + inset, a.maxZ - inset],
        [a.maxX - inset, a.maxZ - inset],
      ];
      for (const [cx, cz] of corners) {
        const along = (cx - bed.x) * bed.fx + (cz - bed.z) * bed.fz;
        if (along > 0.15) consider(cx, cz, 56 + along * 6);
      }
      for (const side of [1, -1]) {
        consider(footX + bed.fx * 0.85 + px * side * 1.25, footZ + bed.fz * 0.85 + pz * side * 1.25, 44);
        consider(footX + bed.fx * 0.4 + px * side * 1.45, footZ + bed.fz * 0.4 + pz * side * 1.45, 38);
        consider(footX + bed.fx * 1.15 + px * side * 0.95, footZ + bed.fz * 1.15 + pz * side * 0.95, 62);
      }
      // Straight past the foot — usually the most spacious stand in a tight room.
      consider(footX + bed.fx * 1.15, footZ + bed.fz * 1.15, 74);
      consider(footX + bed.fx * 1.45, footZ + bed.fz * 1.45, 70);
      consider(footX + bed.fx * 1.8, footZ + bed.fz * 1.8, 58);
      const halfW = (bed.width ?? 1.6) / 2;
      const onMattress = (x: number, z: number) => {
        const along = (x - bed.x) * bed.fx + (z - bed.z) * bed.fz;
        const side = (x - bed.x) * px + (z - bed.z) * pz;
        return Math.abs(along) < bed.depth / 2 + 0.3 && Math.abs(side) < halfW + 0.22;
      };
      for (const c of cands) {
        const dx = c.x - bed.x, dz = c.z - bed.z;
        const dist = Math.hypot(dx, dz);
        const along = dx * bed.fx + dz * bed.fz;
        if (onMattress(c.x, c.z)) c.score -= 160;
        if (dist < 1.35) c.score -= 90; // on or astride the bed
        if (along < 0.25) c.score -= 55; // head-side
        c.score += Math.min(dist, 2.8) * 10;
        const toHeadX = lookX - c.x, toHeadZ = lookZ - c.z;
        const len = Math.hypot(toHeadX, toHeadZ) || 1;
        const align = (toHeadX / len) * (-bed.fx) + (toHeadZ / len) * (-bed.fz);
        c.score += align * 16;
        // Prefer the corner with leftover walk space (2BHK SE is ~2 cm).
        let clear = 1.4;
        for (const col of cols) {
          const ix = Math.max(col.minX - c.x, 0, c.x - col.maxX);
          const iz = Math.max(col.minZ - c.z, 0, c.z - col.maxZ);
          const inside = c.x >= col.minX && c.x <= col.maxX && c.z >= col.minZ && c.z <= col.maxZ;
          const d = inside ? 0 : Math.hypot(ix, iz);
          if (d < clear) clear = d;
        }
        c.score += Math.min(clear, 0.85) * 28;
        const wallClear = distToPoly(poly, c.x, c.z);
        if (wallClear < 0.28) c.score -= 28;
        c.score += Math.min(wallClear, 0.7) * 12;
      }
    } else {
      for (const c of cands) {
        const d = Math.hypot(c.x - a.cx, c.z - a.cz);
        c.score += d * 1.6;
      }
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

  const horiz = Math.hypot(lookX - cam.x, lookZ - cam.z) || 1;
  let pitch = shallow ? (-20 * Math.PI) / 180 : outdoor ? (-14 * Math.PI) / 180 : kind === "bathroom" ? (-18 * Math.PI) / 180 : kind === "bedroom" ? (-10 * Math.PI) / 180 : PITCH_DOWN;
  // Bathrooms: look at fixture height, not the upper wall a short pitch hits.
  let lookY = kind === "bathroom" ? 1.15 : EYE + Math.tan(pitch) * horiz;
  if (kind === "bathroom") pitch = Math.atan((lookY - EYE) / horiz);

  let fov = defaultFov(kind, area);
  if (kind === "kitchen" && area < 18) fov = 80;
  if (outdoor && shallow) fov = 80;
  // Widen the master (and generous bedrooms) so the whole bed reads, and
  // small bathrooms so the WC and vanity are both in frame.
  const master = kind === "bedroom" && (/master/i.test(room.name || "") || area >= 14);
  if (master) fov = Math.max(fov, 82);
  else if (kind === "bedroom") fov = Math.max(fov, 76);
  if (kind === "bathroom") fov = Math.max(fov, area < 4 ? 96 : 92);
  if (kind === "bedroom" && horiz < 2.4) fov = Math.max(fov, 88);
  if (kind === "bedroom" && horiz < 1.85) fov = Math.max(fov, 95);

  const alts = cands.slice(0, 6).map((c) => ({ x: c.x, z: c.z }));
  return { camX: cam.x, camZ: cam.z, lookX, lookZ, lookY, fov, pitch, alts };
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
  const raw = { x: vp.camX, z: vp.camZ };
  const tight = type === "bathroom" || type === "bedroom";
  const rad = type === "bathroom" ? 0.14 : type === "bedroom" ? 0.22 : 0.28;
  const settle = (pref: { x: number; z: number }): { x: number; z: number } => {
    let clear = findClearPoint(pref, cols, walkRooms, rad);
    const home = walkRooms.find((r) => pointInPoly(r.polygon, pref.x, pref.z))
      ?? walkRooms.find((r) => pointInPoly(r.polygon, vp.lookX, vp.lookZ))
      ?? walkRooms[0];
    if (!home) return clear;
    const pad = type === "bathroom" ? 0.16
      : type === "utility" || type === "dressing" ? 0.36
      : type === "bedroom" ? 0.22
      : 0.32;
    const pulled = pullInside(home.polygon, clear.x, clear.z, pad);
    const drift = Math.hypot(pulled.x - pref.x, pulled.z - pref.z);
    if (tight && drift > 0.55) {
      return pullInside(home.polygon, pref.x, pref.z, type === "bathroom" ? 0.14 : 0.2);
    }
    return pulled;
  };
  let clear = settle(raw);
  // If the preferred stand got shoved a long way (onto a bed, into a wall),
  // try the next camera candidates from roomOverview.
  if (tight && vp.alts) {
    const drift0 = Math.hypot(clear.x - raw.x, clear.z - raw.z);
    if (drift0 > 0.45) {
      for (const alt of vp.alts) {
        const s = settle(alt);
        const d = Math.hypot(s.x - alt.x, s.z - alt.z);
        if (d <= 0.45) { clear = s; break; }
      }
    }
  }
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
    const hint = meta.type === "kitchen" ? kitHint(room.id)
      : meta.type === "bedroom" ? (() => {
          const b = (anchorsByRoom.get(room.id) ?? []).find((x) => x.kind === "bed");
          return b ? { x: b.x, z: b.z, fx: b.fx, fz: b.fz, depth: b.depth, width: b.width } : undefined;
        })()
      : meta.type === "bathroom" ? (() => {
          const all = anchorsByRoom.get(room.id) ?? [];
          const xs = all.filter((x) => x.kind === "basin" || x.kind === "bath");
          const sh = all.find((x) => x.kind === "shower");
          if (!xs.length && !sh) return undefined;
          const src = xs.length ? xs : [sh!];
          return {
            x: src.reduce((s, a) => s + a.x, 0) / src.length,
            z: src.reduce((s, a) => s + a.z, 0) / src.length,
            showerX: sh?.x,
            showerZ: sh?.z,
          };
        })()
      : undefined;
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
