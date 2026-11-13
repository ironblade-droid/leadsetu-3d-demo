import type { Collision, Door } from "./types";

/** Axis-aligned footprint on the floor plane. */
export interface Footprint {
  id: string;
  roomId: string;
  kind: string;
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  /** Pieces in the same group may touch (L-sofa, kitchen runs, bed+headboard). */
  group?: string;
  /** Allowed against a wall (sofa back, wardrobe, kitchen). */
  wallHug?: boolean;
  /** Skip walkway/door clearance (nightstand, dining chair, rug, art). */
  tight?: boolean;
  /** Ignore in overlap tests (rugs, contact shadows). */
  ghost?: boolean;
}

export interface LayoutIssue {
  severity: "error" | "warn";
  a: string;
  b: string;
  kind: "overlap" | "doorway" | "coffee-gap" | "wall" | "bed";
  message: string;
}

export function aabb(poly: [number, number][]) {
  const xs = poly.map((p) => p[0]);
  const zs = poly.map((p) => p[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  return {
    minX, maxX, minZ, maxZ,
    cx: (minX + maxX) / 2,
    cz: (minZ + maxZ) / 2,
    w: maxX - minX,
    d: maxZ - minZ,
  };
}

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

/** Front direction: yaw 0 faces +Z. */
export function front(rot: number): { fx: number; fz: number } {
  return { fx: Math.sin(rot), fz: Math.cos(rot) };
}

/** World-space AABB of a yawed rectangle centred on (x, z). Local +X is width, local +Z is depth. */
export function orientedBox(
  x: number, z: number, w: number, d: number, rot: number,
): { minX: number; maxX: number; minZ: number; maxZ: number } {
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const [lx, lz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [w / 2, d / 2], [-w / 2, d / 2]] as [number, number][]) {
    const wx = x + lx * c + lz * s;
    const wz = z - lx * s + lz * c;
    if (wx < minX) minX = wx;
    if (wx > maxX) maxX = wx;
    if (wz < minZ) minZ = wz;
    if (wz > maxZ) maxZ = wz;
  }
  return { minX, maxX, minZ, maxZ };
}

export function overlapArea(
  a: { minX: number; maxX: number; minZ: number; maxZ: number },
  b: { minX: number; maxX: number; minZ: number; maxZ: number },
): number {
  const ix = Math.max(0, Math.min(a.maxX, b.maxX) - Math.max(a.minX, b.minX));
  const iz = Math.max(0, Math.min(a.maxZ, b.maxZ) - Math.max(a.minZ, b.minZ));
  return ix * iz;
}

export function gapBetween(
  a: { minX: number; maxX: number; minZ: number; maxZ: number },
  b: { minX: number; maxX: number; minZ: number; maxZ: number },
): number {
  const ox = Math.max(0, Math.max(a.minX, b.minX) - Math.min(a.maxX, b.maxX));
  const oz = Math.max(0, Math.max(a.minZ, b.minZ) - Math.min(a.maxZ, b.maxZ));
  if (ox === 0 && oz === 0) return 0;
  if (ox === 0) return oz;
  if (oz === 0) return ox;
  return Math.hypot(ox, oz);
}

export function doorInward(
  door: Door,
  poly: [number, number][],
): { mx: number; mz: number; ix: number; iz: number; width: number } | null {
  const mx = (door.ax + door.bx) / 2;
  const mz = (door.az + door.bz) / 2;
  const dx = door.bx - door.ax;
  const dz = door.bz - door.az;
  const len = Math.hypot(dx, dz) || 1;
  const n1x = -dz / len, n1z = dx / len;
  const tryIn = (nx: number, nz: number) => pointInPoly(poly, mx + nx * 0.25, mz + nz * 0.25);
  if (tryIn(n1x, n1z)) return { mx, mz, ix: n1x, iz: n1z, width: door.width || len };
  if (tryIn(-n1x, -n1z)) return { mx, mz, ix: -n1x, iz: -n1z, width: door.width || len };
  return null;
}

/** 0.6 m deep clear box just inside a door. */
export function doorwayClearBox(
  d: { mx: number; mz: number; ix: number; iz: number; width: number },
  depth = 0.6,
): { minX: number; maxX: number; minZ: number; maxZ: number } {
  const hx = -d.iz, hz = d.ix; // along the door
  const hw = Math.max(d.width, 0.7) / 2;
  const pts: [number, number][] = [];
  for (const along of [-hw, hw]) {
    for (const inn of [0.04, depth]) {
      pts.push([d.mx + hx * along + d.ix * inn, d.mz + hz * along + d.iz * inn]);
    }
  }
  return {
    minX: Math.min(...pts.map((p) => p[0])),
    maxX: Math.max(...pts.map((p) => p[0])),
    minZ: Math.min(...pts.map((p) => p[1])),
    maxZ: Math.max(...pts.map((p) => p[1])),
  };
}

export function inspectLayout(
  footprints: Footprint[],
  walls: Collision[],
  doors: { poly: [number, number][]; door: Door }[],
  coffeePairs: { sofa: Footprint; coffee: Footprint; gap: number }[],
): LayoutIssue[] {
  const issues: LayoutIssue[] = [];
  const real = footprints.filter((f) => !f.ghost);

  for (let i = 0; i < real.length; i++) {
    for (let j = i + 1; j < real.length; j++) {
      const a = real[i], b = real[j];
      if (a.group && a.group === b.group) continue;
      const area = overlapArea(a, b);
      if (area > 0.008) {
        issues.push({
          severity: "error",
          a: `${a.roomId}/${a.id}`,
          b: `${b.roomId}/${b.id}`,
          kind: "overlap",
          message: `${a.kind} overlaps ${b.kind} by ${area.toFixed(3)} m²`,
        });
      }
    }
  }

  for (const f of real) {
    if (f.wallHug) continue;
    for (const w of walls) {
      const area = overlapArea(f, w);
      if (area > 0.01) {
        issues.push({
          severity: "error",
          a: `${f.roomId}/${f.id}`,
          b: "wall",
          kind: "wall",
          message: `${f.kind} intersects a wall by ${area.toFixed(3)} m²`,
        });
      }
    }
  }

  for (const { poly, door } of doors) {
    const inv = doorInward(door, poly);
    if (!inv) continue;
    const box = doorwayClearBox(inv, 0.6);
    for (const f of real) {
      // Nightstands, dining chairs, plants and lamps may sit near a jamb;
      // showers, wardrobes and kitchen runs must still leave 60 cm clear.
      if (f.tight && !["shower", "wardrobe", "kitchen", "fridge", "sofa", "bed"].includes(f.kind)) continue;
      const area = overlapArea(f, box);
      if (area > 0.02) {
        issues.push({
          severity: "error",
          a: `${f.roomId}/${f.id}`,
          b: "doorway",
          kind: "doorway",
          message: `${f.kind} blocks a 60 cm doorway clearance (${area.toFixed(3)} m²)`,
        });
      }
    }
  }

  for (const { sofa, coffee, gap } of coffeePairs) {
    // Distance between sofa FRONT edge and coffee NEAR edge, along the sofa front axis.
    if (gap < 0.38 || gap > 0.52) {
      issues.push({
        severity: "error",
        a: `${sofa.roomId}/${sofa.id}`,
        b: `${coffee.roomId}/${coffee.id}`,
        kind: "coffee-gap",
        message: `coffee table is ${gap.toFixed(2)} m from the sofa front (need 0.40–0.45 m)`,
      });
    }
  }

  return issues;
}


/** Headboard must sit on a solid wall; bench at the foot; nightstands at the head. */
export function inspectBeds(
  rooms: { id: string; type: string; polygon: [number, number][] }[],
  pieces: { id: string; roomId: string; kind: string; x: number; z: number; rot: number; w: number; d: number }[],
  doors: Door[],
  windows: { x: number; z: number; w: number; d: number }[],
): LayoutIssue[] {
  const issues: LayoutIssue[] = [];
  const winBoxes = windows.map((w) => ({ minX: w.x, maxX: w.x + w.w, minZ: w.z, maxZ: w.z + w.d }));
  for (const room of rooms) {
    if (room.type !== "bedroom") continue;
    const a = aabb(room.polygon);
    const beds = pieces.filter((p) => p.roomId === room.id && p.kind === "bed");
    const nights = pieces.filter((p) => p.roomId === room.id && p.kind === "nightstand");
    const benches = pieces.filter((p) => p.roomId === room.id && p.kind === "bench");
    if (!beds.length) {
      issues.push({
        severity: "warn", a: `${room.id}`, b: "bed", kind: "bed",
        message: `${room.id} has no bed`,
      });
      continue;
    }
    for (const bed of beds) {
      const { fx, fz } = front(bed.rot);
      const head = { x: bed.x - fx * bed.d / 2, z: bed.z - fz * bed.d / 2 };
      const foot = { x: bed.x + fx * bed.d / 2, z: bed.z + fz * bed.d / 2 };
      const distWall = Math.min(
        Math.abs(head.z - a.minZ), Math.abs(head.z - a.maxZ),
        Math.abs(head.x - a.minX), Math.abs(head.x - a.maxX),
      );
      if (distWall > 0.18) {
        issues.push({
          severity: "error", a: `${room.id}/${bed.id}`, b: "wall", kind: "bed",
          message: `headboard is ${distWall.toFixed(2)} m from the nearest wall (should hug a solid wall)`,
        });
      }
      // A thin box at the head, overlapping the wall plane, must not sit on a window or door.
      const headBox = orientedBox(head.x, head.z, bed.w, 0.4, bed.rot);
      // Expand slightly so windows sitting in the wall thickness still count.
      const headHit = {
        minX: headBox.minX - 0.15, maxX: headBox.maxX + 0.15,
        minZ: headBox.minZ - 0.15, maxZ: headBox.maxZ + 0.15,
      };
      let winA = 0;
      for (const w of winBoxes) winA += overlapArea(headHit, w);
      if (winA > 0.08) {
        issues.push({
          severity: "error", a: `${room.id}/${bed.id}`, b: "window", kind: "bed",
          message: `headboard sits under a window (${winA.toFixed(2)} m² overlap)`,
        });
      }
      const invs = doors.map((d) => doorInward(d, room.polygon)).filter((x) => x !== null);
      for (const inv of invs) {
        const box = doorwayClearBox(inv, 0.5);
        if (overlapArea(headHit, box) > 0.05) {
          issues.push({
            severity: "error", a: `${room.id}/${bed.id}`, b: "doorway", kind: "bed",
            message: `headboard sits in a doorway`,
          });
        }
      }
      for (const b of benches) {
        const dh = Math.hypot(b.x - head.x, b.z - head.z);
        const df = Math.hypot(b.x - foot.x, b.z - foot.z);
        if (dh < df - 0.05) {
          issues.push({
            severity: "error", a: `${room.id}/${b.id}`, b: `${bed.id}`, kind: "bed",
            message: `bench is at the headboard (${dh.toFixed(2)} m) instead of the foot (${df.toFixed(2)} m)`,
          });
        }
      }
      for (const n of nights) {
        const dh = Math.hypot(n.x - head.x, n.z - head.z);
        const df = Math.hypot(n.x - foot.x, n.z - foot.z);
        if (df < dh - 0.05) {
          issues.push({
            severity: "error", a: `${room.id}/${n.id}`, b: `${bed.id}`, kind: "bed",
            message: `nightstand is at the foot (${df.toFixed(2)} m) instead of the head (${dh.toFixed(2)} m)`,
          });
        }
      }
      if (nights.length < 2 && a.w * a.d > 9) {
        issues.push({
          severity: "warn", a: `${room.id}`, b: "nightstand", kind: "bed",
          message: `${room.id} has ${nights.length} nightstand(s); expected one on each side of the headboard`,
        });
      }
    }
  }
  return issues;
}

export function formatIssues(issues: LayoutIssue[]): string {
  return issues.map((i) => `[${i.severity}] ${i.kind}: ${i.message} (${i.a} × ${i.b})`).join("\n");
}

export function assertLayout(issues: LayoutIssue[], label: string): void {
  const errors = issues.filter((i) => i.severity === "error");
  if (errors.length) {
    throw new Error(`Layout failed for ${label}:\n${formatIssues(errors)}`);
  }
}
