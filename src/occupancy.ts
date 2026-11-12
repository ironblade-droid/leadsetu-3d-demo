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
  kind: "overlap" | "doorway" | "coffee-gap" | "wall";
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

export function formatIssues(issues: LayoutIssue[]): string {
  return issues.map((i) => `[${i.severity}] ${i.kind}: ${i.message} (${i.a} × ${i.b})`).join("\n");
}

export function assertLayout(issues: LayoutIssue[], label: string): void {
  const errors = issues.filter((i) => i.severity === "error");
  if (errors.length) {
    throw new Error(`Layout failed for ${label}:\n${formatIssues(errors)}`);
  }
}
