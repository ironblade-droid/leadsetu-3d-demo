import type { Collision, Transform, UnitPlan, Wall } from "./types";

/** Exterior floor-to-floor height in metres. A design choice for the tower, not taken from the unit plans. */
export const FLOOR_TO_FLOOR = 3.15;
export const TYPICAL_FLOORS = 7;
export const PENTHOUSE_FLOOR = 8;
/** Podium slab thickness under the lobby. */
export const PLINTH = 0.45;
/** Double-height ground lobby, so residential floor 1 sits at a real piano-nobile height. */
export const LOBBY_H = 6.4;

/** 2BHK plan is 11 × 9 m; 3BHK is 10.5 × 10 m; penthouse house footprint is 12.192 × 15.240 m. */
export const UNIT_A: Transform = {
  ox: 0.2, oz: 10, rotY: 180, mirrorX: false, mirrorZ: false, width: 11, depth: 9,
};
export const UNIT_B: Transform = {
  ox: 16.2, oz: 10, rotY: 0, mirrorX: false, mirrorZ: true, width: 11, depth: 9,
};
export const UNIT_C: Transform = {
  ox: 8.45, oz: 0, rotY: 180, mirrorX: false, mirrorZ: false, width: 10.5, depth: 10,
};
export const UNIT_PH: Transform = {
  ox: (27.4 - 12.192) / 2, oz: 2.6, rotY: 0, mirrorX: false, mirrorZ: false,
  width: 12.192, depth: 15.24,
};

export const CORE = { x: 11.2, z: 10, w: 5.0, d: 6.2 };

/** T-shaped typical-floor outline (metres), used for slabs and the plaza alignment. */
export const PLATE: [number, number][] = [
  [0.2, 10],
  [0.2, 19.2],
  [27.2, 19.2],
  [27.2, 10],
  [18.95, 10],
  [18.95, 0],
  [8.45, 0],
  [8.45, 10],
];

export interface Slot {
  suffix: string;
  planId: "2bhk" | "3bhk" | "penthouse";
  typeLabel: string;
  transform: Transform;
}

export function slotsForFloor(floor: number): Slot[] {
  if (floor === PENTHOUSE_FLOOR) {
    return [{ suffix: "PH", planId: "penthouse", typeLabel: "Penthouse", transform: UNIT_PH }];
  }
  return [
    { suffix: "A", planId: "2bhk", typeLabel: "2 BHK", transform: UNIT_A },
    { suffix: "B", planId: "2bhk", typeLabel: "2 BHK", transform: UNIT_B },
    { suffix: "C", planId: "3bhk", typeLabel: "3 BHK", transform: UNIT_C },
  ];
}

export function unitCode(floor: number, suffix: string): string {
  return `${floor}${suffix}`;
}

export function planToWorld(x: number, z: number, t: Transform): [number, number] {
  let lx = t.mirrorX ? t.width - x : x;
  let lz = t.mirrorZ ? t.depth - z : z;
  const rad = (t.rotY * Math.PI) / 180;
  const cx = t.width / 2;
  const cz = t.depth / 2;
  const dx = lx - cx;
  const dz = lz - cz;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const rx = dx * cos - dz * sin + cx;
  const rz = dx * sin + dz * cos + cz;
  return [t.ox + rx, t.oz + rz];
}

export function transformWall(w: Wall, t: Transform): Wall {
  const corners: [number, number][] = [
    [w.x, w.z],
    [w.x + w.w, w.z],
    [w.x + w.w, w.z + w.d],
    [w.x, w.z + w.d],
  ].map(([x, z]) => planToWorld(x, z, t));
  const xs = corners.map((c) => c[0]);
  const zs = corners.map((c) => c[1]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  return { x: minX, z: minZ, w: maxX - minX, d: maxZ - minZ };
}

export function transformPointDir(
  x: number,
  z: number,
  facing: "N" | "S" | "E" | "W",
  t: Transform,
): { x: number; z: number; facing: "N" | "S" | "E" | "W" } {
  const [wx, wz] = planToWorld(x, z, t);
  // Facing is a unit vector in plan space, then transformed.
  const vec: Record<typeof facing, [number, number]> = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  };
  const [vx, vz] = vec[facing];
  const a = planToWorld(x, z, t);
  const b = planToWorld(x + vx, z + vz, t);
  const dx = b[0] - a[0];
  const dz = b[1] - a[1];
  let nf: "N" | "S" | "E" | "W" = "N";
  if (Math.abs(dx) > Math.abs(dz)) nf = dx > 0 ? "E" : "W";
  else nf = dz > 0 ? "N" : "S";
  return { x: wx, z: wz, facing: nf };
}

export function wallCollision(w: Wall): Collision {
  return { minX: w.x, maxX: w.x + w.w, minZ: w.z, maxZ: w.z + w.d };
}

export function floorY(floor: number): number {
  return LOBBY_H + (floor - 1) * FLOOR_TO_FLOOR;
}

export function plateCenter(): [number, number] {
  return [13.7, 10.6];
}

export function describeFloor(floor: number): string {
  if (floor === PENTHOUSE_FLOOR) return "Penthouse";
  return `Floor ${floor}`;
}

export function areaLabel(plan: UnitPlan): string {
  if (plan.type === "Penthouse" && plan.terraceArea_sqft) {
    return `${plan.area_sqft.toLocaleString("en-IN")} sq ft + ${plan.terraceArea_sqft.toLocaleString("en-IN")} sq ft terrace`;
  }
  return `${plan.area_sqft.toLocaleString("en-IN")} sq ft`;
}
