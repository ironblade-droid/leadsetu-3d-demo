import type { Collision, Door, Prefs, Room, Transform, UnitPlan, Wall } from "./types";
import { planToWorld } from "./layout";
import {
  aabb,
  doorInward,
  doorwayClearBox,
  front,
  inspectBeds,
  inspectLayout,
  orientedBox,
  overlapArea,
  pointInPoly,
  type Footprint,
  type LayoutIssue,
} from "./occupancy";

/** Physical sizes of every procedural piece — furniture.ts must match these. */
export const DIM = {
  sofaD: 0.90,
  sofaLen: 2.20,
  sofaLenLarge: 2.45,
  coffeeD: 0.55,
  coffeeW: 1.10,
  coffeeGap: 0.43,
  coffeeH: 0.38,
  tvD: 0.40,
  tvW: 1.70,
  tvH: 0.44,
  armchairW: 0.78,
  armchairD: 0.82,
  table4w: 1.40,
  table4d: 0.85,
  table6w: 1.80,
  table6d: 0.90,
  chairW: 0.44,
  chairD: 0.48,
  chairClear: 0.14,
  bedMasterW: 1.90,
  bedMasterD: 2.10,
  bedW: 1.50,
  bedD: 2.00,
  nightW: 0.44,
  nightD: 0.40,
  nightGap: 0.08,
  wardD: 0.55,
  wardH: 2.20,
  kitD: 0.60,
  fridgeW: 0.60,
  fridgeD: 0.64,
  fridgeH: 1.85,
  basinW: 0.70,
  basinD: 0.46,
  toiletW: 0.40,
  toiletD: 0.68,
  shower: 0.85,
  loungeW: 0.68,
  loungeD: 0.82,
  plantR: 0.26,
  lampR: 0.16,
} as const;

export interface Placement {
  id: string;
  roomId: string;
  kind: string;
  x: number;
  z: number;
  rot: number;
  w: number;
  d: number;
  h: number;
  group?: string;
  wallHug?: boolean;
  tight?: boolean;
  ghost?: boolean;
  variant?: string;
}

type Box = { minX: number; maxX: number; minZ: number; maxZ: number };
type WallId = "north" | "south" | "east" | "west";

interface PlanCtx {
  room: Room;
  a: ReturnType<typeof aabb>;
  prefs: Prefs;
  avoid: [number, number][][];
  doorBoxes: Box[];
  windowBoxes: Box[];
  out: Placement[];
}

function fp(p: Placement): Footprint {
  const b = orientedBox(p.x, p.z, p.w, p.d, p.rot);
  return {
    id: p.id, roomId: p.roomId, kind: p.kind,
    ...b, group: p.group, wallHug: p.wallHug, tight: p.tight, ghost: p.ghost,
  };
}

function doorBoxesOf(room: Room, doors: Door[]) {
  const boxes: PlanCtx["doorBoxes"] = [];
  for (const door of doors) {
    const inv = doorInward(door, room.polygon);
    if (inv) boxes.push(doorwayClearBox(inv, 0.6));
  }
  return boxes;
}

function inAvoid(avoid: [number, number][][], x: number, z: number): boolean {
  for (const p of avoid) if (pointInPoly(p, x, z)) return true;
  return false;
}

function fits(
  ctx: PlanCtx,
  x: number, z: number, w: number, d: number, rot: number,
  opts: { group?: string; tight?: boolean; wallHug?: boolean; ghost?: boolean } = {},
): boolean {
  if (opts.ghost) return true;
  const box = orientedBox(x, z, w, d, rot);
  const corners: [number, number][] = [
    [box.minX, box.minZ], [box.maxX, box.minZ], [box.maxX, box.maxZ], [box.minX, box.maxZ],
    [x, z],
  ];
  // Stay inside the room (wall-huggers may graze the wall by 4 cm).
  const pad = opts.wallHug ? -0.04 : 0.02;
  const { a } = ctx;
  if (box.minX < a.minX + pad || box.maxX > a.maxX - pad || box.minZ < a.minZ + pad || box.maxZ > a.maxZ - pad) {
    // Irregular polygons: also require the centre inside.
    if (!pointInPoly(ctx.room.polygon, x, z)) return false;
    if (!opts.wallHug && (box.minX < a.minX - 0.02 || box.maxX > a.maxX + 0.02 || box.minZ < a.minZ - 0.02 || box.maxZ > a.maxZ + 0.02)) {
      return false;
    }
  }
  for (const [cx, cz] of corners) {
    if (inAvoid(ctx.avoid, cx, cz)) return false;
  }
  if (!opts.tight) {
    for (const door of ctx.doorBoxes) {
      if (overlapArea(box, door) > 0.015) return false;
    }
  } else {
    // Tight pieces may sit near a door but must not fill it.
    for (const door of ctx.doorBoxes) {
      if (overlapArea(box, door) > 0.04) return false;
    }
  }
  for (const p of ctx.out) {
    if (p.ghost) continue;
    if (opts.group && p.group === opts.group) continue;
    const other = orientedBox(p.x, p.z, p.w, p.d, p.rot);
    if (overlapArea(box, other) > 0.008) return false;
  }
  return true;
}

function tryPush(ctx: PlanCtx, p: Omit<Placement, "roomId">): Placement | null {
  if (!fits(ctx, p.x, p.z, p.w, p.d, p.rot, p)) return null;
  const full: Placement = { ...p, roomId: ctx.room.id };
  ctx.out.push(full);
  return full;
}

export function planRoom(
  room: Room,
  prefs: Prefs,
  avoid: [number, number][][] = [],
  doors: Door[] = [],
  windows: Wall[] = [],
): Placement[] {
  const a = aabb(room.polygon);
  if (a.w < 0.8 || a.d < 0.8) return [];
  const ctx: PlanCtx = {
    room, a, prefs, avoid,
    doorBoxes: doorBoxesOf(room, doors),
    windowBoxes: windows.map((w) => ({ minX: w.x, maxX: w.x + w.w, minZ: w.z, maxZ: w.z + w.d })),
    out: [],
  };
  switch (room.type) {
    case "living":
      planLiving(ctx);
      break;
    case "kitchen":
      planKitchen(ctx);
      break;
    case "bedroom":
      planBedroom(ctx, /master|1/i.test(room.name) || room.id === "master" || room.id === "bedroom1");
      break;
    case "bathroom":
      planBath(ctx);
      break;
    case "utility":
      break;
    case "lobby":
    case "hall":
      planLobby(ctx);
      break;
    case "dressing":
    case "linen":
      planWardrobeRoom(ctx);
      break;
    case "terrace":
    case "balcony":
      planOutdoor(ctx);
      break;
    default:
      break;
  }
  if (prefs.style === "traditional" && room.type === "living" && a.w * a.d > 16) {
    for (const [x, z] of cornerSpots(a, 0.38)) {
      if (tryPush(ctx, {
        id: "mandir", kind: "mandir", x, z, rot: 0,
        w: 0.5, d: 0.28, h: 1.1, wallHug: true, tight: true, variant: "traditional",
      })) break;
    }
  }
  return ctx.out;
}

function cornerSpots(a: ReturnType<typeof aabb>, inset: number): [number, number][] {
  return [
    [a.maxX - inset, a.maxZ - inset],
    [a.minX + inset, a.maxZ - inset],
    [a.maxX - inset, a.minZ + inset],
    [a.minX + inset, a.minZ + inset],
  ];
}

function planLiving(ctx: PlanCtx): void {
  const { a, prefs, room } = ctx;
  const alongX = a.w >= a.d;
  const hasKit = /kitchen/i.test(room.name) || room.id === "lounge";
  const kitWall: "north" | "south" = room.id === "lounge" ? "south" : "north";
  const large = alongX && a.w >= 6.2;
  const sofaLen = Math.min(alongX ? a.w * 0.4 : a.d * 0.46, large ? DIM.sofaLenLarge : DIM.sofaLen);
  const sofaD = DIM.sofaD;
  const useL = large && !hasKit;

  let sofaX: number, sofaZ: number, sofaRot: number;
  let tvX: number, tvZ: number, tvRot: number;
  if (alongX && hasKit && kitWall === "south") {
    sofaX = a.cx; sofaZ = a.maxZ - 0.08 - sofaD / 2; sofaRot = Math.PI;
    tvX = a.maxX - 0.08 - DIM.tvD / 2; tvZ = a.cz; tvRot = -Math.PI / 2;
  } else if (alongX) {
    sofaX = a.cx; sofaZ = a.minZ + 0.08 + sofaD / 2; sofaRot = 0;
    tvX = a.cx; tvZ = a.maxZ - 0.08 - DIM.tvD / 2; tvRot = Math.PI;
  } else {
    sofaX = a.minX + 0.08 + sofaD / 2; sofaZ = a.cz; sofaRot = Math.PI / 2;
    tvX = a.maxX - 0.08 - DIM.tvD / 2; tvZ = a.cz; tvRot = -Math.PI / 2;
  }

  // If the default sofa sits inside a neighbouring kitchen, flip to the opposite wall.
  if (!fits(ctx, sofaX, sofaZ, sofaLen, sofaD, sofaRot, { wallHug: true, group: "sofa" })) {
    sofaX = alongX ? a.cx : a.maxX - 0.08 - sofaD / 2;
    sofaZ = alongX ? a.maxZ - 0.08 - sofaD / 2 : a.cz;
    sofaRot = alongX ? Math.PI : -Math.PI / 2;
    tvX = alongX ? a.cx : a.minX + 0.08 + DIM.tvD / 2;
    tvZ = alongX ? a.minZ + 0.08 + DIM.tvD / 2 : a.cz;
    tvRot = alongX ? 0 : Math.PI / 2;
  }

  const { fx, fz } = front(sofaRot);
  tryPush(ctx, {
    id: "sofa", kind: "sofa", x: sofaX, z: sofaZ, rot: sofaRot,
    w: sofaLen, d: sofaD, h: 0.82, wallHug: true, group: "sofa",
    variant: useL ? "l-shape" : prefs.style,
  });

  // Chaise on the dining-away end (dining sits toward minX in 2BHK along-X rooms).
  let chaiseSide: { fx: number; fz: number } | null = null;
  if (useL) {
    const side = front(sofaRot - Math.PI / 2); // toward +X when sofa faces +Z — away from west dining
    const chaiseLen = 1.45;
    const chaiseX = sofaX + fx * ((chaiseLen - sofaD) / 2) + side.fx * (sofaLen / 2 - 0.42);
    const chaiseZ = sofaZ + fz * ((chaiseLen - sofaD) / 2) + side.fz * (sofaLen / 2 - 0.42);
    if (tryPush(ctx, {
      id: "sofa-chaise", kind: "sofa-chaise", x: chaiseX, z: chaiseZ, rot: sofaRot,
      w: 0.84, d: chaiseLen, h: 0.82, wallHug: true, group: "sofa",
      variant: prefs.style,
    })) chaiseSide = side;
  }

  const coffeeDist = sofaD / 2 + DIM.coffeeGap + DIM.coffeeD / 2;
  const coffeeW = Math.min(0.95, sofaLen * 0.48);
  // Shift coffee away from the chaise so the AABBs never meet.
  const anti = chaiseSide
    ? { fx: -chaiseSide.fx, fz: -chaiseSide.fz }
    : { fx: 0, fz: 0 };
  const lateral = chaiseSide ? 0.32 : 0;
  const coffeeX = sofaX + fx * coffeeDist + anti.fx * lateral;
  const coffeeZ = sofaZ + fz * coffeeDist + anti.fz * lateral;
  tryPush(ctx, {
    id: "coffee", kind: "coffee", x: coffeeX, z: coffeeZ, rot: sofaRot,
    w: coffeeW, d: DIM.coffeeD, h: DIM.coffeeH,
    variant: prefs.style === "luxury" ? "marble" : "wood",
  });

  const tvW = Math.min(DIM.tvW, (alongX ? a.w : a.d) * 0.4);
  tryPush(ctx, {
    id: "tv", kind: "tv", x: tvX, z: tvZ, rot: tvRot,
    w: tvW, d: DIM.tvD, h: DIM.tvH, wallHug: true, variant: prefs.style,
  });

  const rugW = Math.min(a.w * 0.48, 2.4);
  const rugD = Math.min(a.d * 0.4, 1.8);
  tryPush(ctx, {
    id: "rug", kind: "rug", x: sofaX + fx * 1.15, z: sofaZ + fz * 1.15, rot: sofaRot,
    w: rugW, d: rugD, h: 0.02, ghost: true, tight: true,
  });

  const wantsDining = /dining/i.test(room.name) || a.w > 5.4 || a.d > 5.4;
  if (wantsDining) {
    const seats = a.w * a.d > 28 ? 6 : 4;
    const tw = seats === 6 ? DIM.table6w : DIM.table4w;
    const td = seats === 6 ? DIM.table6d : DIM.table4d;
    const inset = Math.max(1.65, Math.min((alongX ? a.w : a.d) * 0.26, 2.2));
    const cands: [number, number][] = alongX
      ? [[a.minX + inset, a.cz], [a.maxX - inset, a.cz]]
      : [[a.cx, a.minZ + inset], [a.cx, a.maxZ - inset]];
    const pick = cands.find(([x, z]) =>
      fits(ctx, x, z, tw, td, 0, { group: "dining" }) && Math.hypot(x - sofaX, z - sofaZ) >= 2.4,
    );
    if (pick) planDiningAt(ctx, pick[0], pick[1], seats, tw, td);
  }

  // Armchair only when there is a clear 60 cm walk around it.
  if (large) {
    const armTries: { x: number; z: number; rot: number }[] = alongX
      ? [
          { x: a.minX + 0.08 + DIM.armchairD / 2, z: sofaZ + fz * 1.85, rot: Math.PI / 2 },
          { x: a.maxX - 0.08 - DIM.armchairD / 2, z: sofaZ + fz * 1.85, rot: -Math.PI / 2 },
        ]
      : [
          { x: sofaX + fx * 2.2, z: a.minZ + 0.08 + DIM.armchairD / 2, rot: 0 },
          { x: sofaX + fx * 2.2, z: a.maxZ - 0.08 - DIM.armchairD / 2, rot: Math.PI },
        ];
    for (const t of armTries) {
      if (Math.hypot(t.x - sofaX, t.z - sofaZ) < 1.6) continue;
      if (tryPush(ctx, {
        id: "armchair", kind: "armchair", x: t.x, z: t.z, rot: t.rot,
        w: DIM.armchairW, d: DIM.armchairD, h: 0.8, variant: prefs.style,
      })) break;
    }
  }

  if (hasKit) planKitchenRun(ctx, kitWall);

  // Plant and floor lamp in free corners.
  let plants = 0;
  for (const [x, z] of cornerSpots(a, 0.36)) {
    if (Math.hypot(x - sofaX, z - sofaZ) < 1.15) continue;
    if (plants === 0) {
      if (tryPush(ctx, {
        id: "plant", kind: "plant", x, z, rot: 0,
        w: DIM.plantR * 2, d: DIM.plantR * 2, h: 1.15, tight: true, wallHug: true,
      })) plants++;
    } else if (plants === 1 && room.id === "lounge") {
      if (tryPush(ctx, {
        id: "plant2", kind: "plant", x, z, rot: 0,
        w: DIM.plantR * 2, d: DIM.plantR * 2, h: 1.0, tight: true, wallHug: true,
      })) plants++;
    } else if (tryPush(ctx, {
      id: "lamp", kind: "lamp", x, z, rot: 0,
      w: DIM.lampR * 2, d: DIM.lampR * 2, h: 1.5, tight: true, wallHug: true, variant: prefs.style,
    })) {
      break;
    }
  }

  tryPush(ctx, {
    id: "art", kind: "art",
    x: alongX ? a.minX + 0.04 : a.cx,
    z: alongX ? a.cz : a.minZ + 0.04,
    rot: alongX ? Math.PI / 2 : 0,
    w: 0.9, d: 0.04, h: 0.65, wallHug: true, tight: true, ghost: true,
    variant: prefs.style,
  });
}

function planDiningAt(
  ctx: PlanCtx, x: number, z: number, seats: number, tw: number, td: number,
): void {
  const { prefs } = ctx;
  tryPush(ctx, {
    id: "dining", kind: "diningTable", x, z, rot: 0,
    w: tw, d: td, h: 0.75, group: "dining", variant: prefs.style,
  });
  const picked: [number, number, number][] = seats === 6
    ? [
        [-tw * 0.28, td / 2 + DIM.chairClear + DIM.chairD / 2, Math.PI],
        [tw * 0.28, td / 2 + DIM.chairClear + DIM.chairD / 2, Math.PI],
        [-tw * 0.28, -(td / 2 + DIM.chairClear + DIM.chairD / 2), 0],
        [tw * 0.28, -(td / 2 + DIM.chairClear + DIM.chairD / 2), 0],
        [-(tw / 2 + DIM.chairClear + DIM.chairD / 2), 0, Math.PI / 2],
        [tw / 2 + DIM.chairClear + DIM.chairD / 2, 0, -Math.PI / 2],
      ]
    : [
        [-tw * 0.22, td / 2 + DIM.chairClear + DIM.chairD / 2, Math.PI],
        [tw * 0.22, td / 2 + DIM.chairClear + DIM.chairD / 2, Math.PI],
        [-tw * 0.22, -(td / 2 + DIM.chairClear + DIM.chairD / 2), 0],
        [tw * 0.22, -(td / 2 + DIM.chairClear + DIM.chairD / 2), 0],
      ];
  picked.forEach(([dx, dz, rot], i) => {
    tryPush(ctx, {
      id: `chair-${i}`, kind: "diningChair", x: x + dx, z: z + dz, rot,
      w: DIM.chairW, d: DIM.chairD, h: 0.85, tight: true, group: "dining",
      variant: prefs.style,
    });
  });
}

function clipRun(
  x: number, z: number, rot: number, len: number, depth: number,
  doorBoxes: PlanCtx["doorBoxes"],
): { x: number; z: number; len: number } | null {
  const { fx, fz } = front(rot);
  const sx = -fz, sz = fx;
  let tMin = -len / 2, tMax = len / 2;
  const box0 = orientedBox(x, z, len, depth, rot);
  for (const door of doorBoxes) {
    if (overlapArea(box0, door) < 0.01) continue;
    const dcx = (door.minX + door.maxX) / 2;
    const dcz = (door.minZ + door.maxZ) / 2;
    const doorCenter = (dcx - x) * sx + (dcz - z) * sz;
    const doorHalf = Math.max(door.maxX - door.minX, door.maxZ - door.minZ) / 2 + 0.12;
    const cutLo = doorCenter - doorHalf;
    const cutHi = doorCenter + doorHalf;
    const left = Math.min(tMax, cutLo) - tMin;
    const right = tMax - Math.max(tMin, cutHi);
    if (left >= right && left > 0.9) tMax = Math.min(tMax, cutLo);
    else if (right > 0.9) tMin = Math.max(tMin, cutHi);
    else return null;
  }
  const newLen = tMax - tMin;
  if (newLen < 0.9) return null;
  const mid = (tMin + tMax) / 2;
  return { x: x + sx * mid, z: z + sz * mid, len: newLen };
}

function planKitchenRun(ctx: PlanCtx, wall: "north" | "south" | "east" | "west"): void {
  const { a, prefs, room } = ctx;
  const depth = DIM.kitD;
  let len = wall === "north" || wall === "south" ? Math.min(a.w - 0.5, 3.4) : Math.min(a.d - 0.5, 3.4);
  let x = a.cx, z = a.cz, rot = 0;
  if (wall === "south") { z = a.minZ + depth / 2 + 0.06; rot = 0; x = a.cx; }
  if (wall === "north") { z = a.maxZ - depth / 2 - 0.06; rot = Math.PI; x = a.cx; }
  if (wall === "east") { x = a.maxX - depth / 2 - 0.06; rot = -Math.PI / 2; z = a.cz; }
  if (wall === "west") { x = a.minX + depth / 2 + 0.06; rot = Math.PI / 2; z = a.cz; }
  const clipped = clipRun(x, z, rot, len, depth, ctx.doorBoxes);
  if (!clipped) return;
  x = clipped.x; z = clipped.z; len = clipped.len;
  tryPush(ctx, {
    id: "kitchen", kind: "kitchen", x, z, rot,
    w: len, d: depth, h: 2.2, wallHug: true, group: "kitchen",
    variant: prefs.kitchen + "-" + prefs.style + "-hob",
  });
  const { fx, fz } = front(rot);
  const sx = -fz, sz = fx;
  // Fridge at the end farther from the room centre, still on the run.
  for (const sign of [1, -1]) {
    const frX = x + sx * sign * (len / 2 - 0.32) + fx * 0.02;
    const frZ = z + sz * sign * (len / 2 - 0.32) + fz * 0.02;
    if (tryPush(ctx, {
      id: "fridge", kind: "fridge", x: frX, z: frZ, rot,
      w: DIM.fridgeW, d: DIM.fridgeD, h: DIM.fridgeH, wallHug: true, group: "kitchen",
    })) break;
  }
  void room;
}

function planKitchen(ctx: PlanCtx): void {
  const { a, prefs } = ctx;
  const depth = DIM.kitD;
  // Prefer the two walls with the least doorway overlap: typically south + east.
  const tries: { wall: "north" | "south" | "east" | "west"; primary: boolean }[] = [
    { wall: "south", primary: true },
    { wall: "east", primary: false },
    { wall: "north", primary: true },
    { wall: "west", primary: false },
  ];
  let placed = 0;
  const used = new Set<string>();
  for (const t of tries) {
    if (placed >= 2) break;
    if (used.has(t.wall)) continue;
    let len = t.wall === "north" || t.wall === "south" ? Math.max(1.8, a.w - 0.25) : Math.max(1.15, a.d - depth - 0.5);
    let x = a.cx, z = a.cz, rot = 0;
    if (t.wall === "south") { z = a.minZ + depth / 2 + 0.05; rot = 0; }
    if (t.wall === "north") { z = a.maxZ - depth / 2 - 0.05; rot = Math.PI; }
    if (t.wall === "east") { x = a.maxX - depth / 2 - 0.05; rot = -Math.PI / 2; z = a.minZ + depth + len / 2; }
    if (t.wall === "west") { x = a.minX + depth / 2 + 0.05; rot = Math.PI / 2; z = a.minZ + depth + len / 2; }
    const clipped = clipRun(x, z, rot, len, depth, ctx.doorBoxes);
    if (!clipped) continue;
    const id = placed === 0 ? "kitchen-south" : "kitchen-east";
    if (!tryPush(ctx, {
      id, kind: "kitchen", x: clipped.x, z: clipped.z, rot,
      w: clipped.len, d: depth, h: 2.2, wallHug: true, group: "kitchen",
      variant: prefs.kitchen + (placed === 0 ? "-hob" : ""),
    })) continue;
    used.add(t.wall);
    placed++;
  }
  // Fridge in a free corner, hugging a wall, clear of doors.
  const fridgeTries: { x: number; z: number; rot: number }[] = [
    { x: a.maxX - DIM.fridgeD / 2 - 0.06, z: a.maxZ - DIM.fridgeW / 2 - 0.08, rot: -Math.PI / 2 },
    { x: a.minX + DIM.fridgeD / 2 + 0.06, z: a.maxZ - DIM.fridgeW / 2 - 0.08, rot: Math.PI / 2 },
    { x: a.maxX - DIM.fridgeD / 2 - 0.06, z: a.minZ + DIM.fridgeW / 2 + 0.08, rot: -Math.PI / 2 },
  ];
  for (const t of fridgeTries) {
    if (tryPush(ctx, {
      id: "fridge", kind: "fridge", x: t.x, z: t.z, rot: t.rot,
      w: DIM.fridgeW, d: DIM.fridgeD, h: DIM.fridgeH, wallHug: true, group: "kitchen",
    })) break;
  }
}

function wallStrip(a: ReturnType<typeof aabb>, wall: WallId, pad = 0.55): Box {
  switch (wall) {
    case "south": return { minX: a.minX, maxX: a.maxX, minZ: a.minZ - 0.2, maxZ: a.minZ + pad };
    case "north": return { minX: a.minX, maxX: a.maxX, minZ: a.maxZ - pad, maxZ: a.maxZ + 0.2 };
    case "west":  return { minX: a.minX - 0.2, maxX: a.minX + pad, minZ: a.minZ, maxZ: a.maxZ };
    case "east":  return { minX: a.maxX - pad, maxX: a.maxX + 0.2, minZ: a.minZ, maxZ: a.maxZ };
  }
}

function coverage(strip: Box, boxes: Box[]): number {
  let s = 0;
  for (const b of boxes) s += overlapArea(strip, b);
  return s;
}

function openingsAlong(strip: Box, boxes: Box[], axis: "x" | "z", lo: number, hi: number): [number, number][] {
  const out: [number, number][] = [];
  for (const b of boxes) {
    if (overlapArea(strip, b) < 0.02) continue;
    if (axis === "x") out.push([Math.max(lo, b.minX), Math.min(hi, b.maxX)]);
    else out.push([Math.max(lo, b.minZ), Math.min(hi, b.maxZ)]);
  }
  return out.filter(([u, v]) => v - u > 0.04);
}

function solidGaps(lo: number, hi: number, openings: [number, number][]): [number, number][] {
  const ops = openings.slice().sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const o of ops) {
    if (!merged.length || o[0] > merged[merged.length - 1][1] + 0.02) merged.push([o[0], o[1]]);
    else merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], o[1]);
  }
  const gaps: [number, number][] = [];
  let cur = lo;
  for (const [u, v] of merged) {
    if (u > cur + 0.04) gaps.push([cur, u]);
    cur = Math.max(cur, v);
  }
  if (hi > cur + 0.04) gaps.push([cur, hi]);
  return gaps;
}

const OPPOSITE: Record<WallId, WallId> = { north: "south", south: "north", east: "west", west: "east" };
const ADJACENT: Record<WallId, [WallId, WallId]> = {
  north: ["east", "west"], south: ["east", "west"], east: ["north", "south"], west: ["north", "south"],
};

interface HeadSlot {
  wall: WallId;
  rot: number;
  x: number;
  z: number;
  usedD: number;
  realW: number;
  score: number;
  gap: [number, number];
}

function pickHeadSlots(ctx: PlanCtx, realW0: number, bedD0: number): HeadSlot[] {
  const { a } = ctx;
  const walls: WallId[] = ["north", "south", "east", "west"];
  const doorC: Record<WallId, number> = { north: 0, south: 0, east: 0, west: 0 };
  const winC: Record<WallId, number> = { north: 0, south: 0, east: 0, west: 0 };
  const slots: HeadSlot[] = [];
  for (const wall of walls) {
    const strip = wallStrip(a, wall);
    doorC[wall] = coverage(strip, ctx.doorBoxes);
    winC[wall] = coverage(strip, ctx.windowBoxes);
  }
  for (const wall of walls) {
    const alongX = wall === "north" || wall === "south";
    const lo = alongX ? a.minX : a.minZ;
    const hi = alongX ? a.maxX : a.maxZ;
    const depthAvail = alongX ? a.d : a.w;
    const usedD = Math.min(bedD0, Math.max(1.7, depthAvail - 0.7));
    if (depthAvail < usedD + 0.35) continue;
    const realW = Math.min(realW0, (hi - lo) - 0.3);
    if (realW < 1.15) continue;
    const strip = wallStrip(a, wall);
    const openings = [
      ...openingsAlong(strip, ctx.doorBoxes, alongX ? "x" : "z", lo, hi),
      ...openingsAlong(strip, ctx.windowBoxes, alongX ? "x" : "z", lo, hi),
    ];
    const gaps = solidGaps(lo, hi, openings);
    const neededFull = realW + 2 * (DIM.nightW + DIM.nightGap);
    const neededMin = realW + 0.06;
    const fitting = gaps.filter((g) => g[1] - g[0] >= neededMin);
    if (!fitting.length) continue;
    // Prefer a gap that also fits nightstands; otherwise the longest that fits the bed.
    fitting.sort((g, h) => (h[1] - h[0]) - (g[1] - g[0]));
    const withNs = fitting.filter((g) => g[1] - g[0] >= neededFull);
    const gap = (withNs[0] ?? fitting[0]);
    // Detect doors with a thicker strip so a jamb 0.4–0.7 m off the plane still counts.
    const doorNear = coverage(wallStrip(a, wall, 0.95), ctx.doorBoxes);
    const winNear = winC[wall];
    const solid = winNear < 0.05 && doorNear < 0.05;
    let score = (gap[1] - gap[0]);
    // Never put a headboard under a window if any solid alternative exists.
    score -= winNear * 200;
    score -= doorNear * 80;
    if (solid) score += 100;
    else if (winNear < 0.05) score += 8;
    if (winC[OPPOSITE[wall]] > 0.12) score += 20; // opposite a window
    if (ADJACENT[wall].some((w) => winC[w] > 0.12)) score += 10; // beside a window
    // Place the bed AND nightstands as a unit in the solid gap.
    const pref = alongX ? a.cx : a.cz;
    const ens = (gap[1] - gap[0] >= neededFull + 0.06) ? neededFull : realW;
    const half = ens / 2;
    let along = pref;
    if (along - half < gap[0] + 0.04 || along + half > gap[1] - 0.04) {
      along = (gap[0] + gap[1]) / 2;
    }
    along = Math.max(gap[0] + half + 0.03, Math.min(gap[1] - half - 0.03, along));
    let x: number, z: number, rot: number;
    switch (wall) {
      case "south":
        x = along; z = a.minZ + 0.06 + usedD / 2; rot = 0; break;
      case "north":
        x = along; z = a.maxZ - 0.06 - usedD / 2; rot = Math.PI; break;
      case "west":
        x = a.minX + 0.06 + usedD / 2; z = along; rot = Math.PI / 2; break;
      case "east":
        x = a.maxX - 0.06 - usedD / 2; z = along; rot = -Math.PI / 2; break;
    }
    slots.push({ wall, rot, x, z, usedD, realW, score, gap });
  }
  slots.sort((p, q) => q.score - p.score);
  return slots;
}

function planBedroom(ctx: PlanCtx, master: boolean): void {
  const { a, prefs } = ctx;
  const bedW0 = master ? DIM.bedMasterW : DIM.bedW;
  const bedD0 = master ? DIM.bedMasterD : DIM.bedD;
  const slots = pickHeadSlots(ctx, bedW0, bedD0);
  let placed: HeadSlot | null = null;
  for (const s of slots) {
    if (tryPush(ctx, {
      id: "bed", kind: "bed", x: s.x, z: s.z, rot: s.rot,
      w: s.realW, d: s.usedD, h: 0.95, wallHug: true, group: "bed",
      variant: prefs.style + (master ? "-master" : ""),
    })) { placed = s; break; }
  }
  if (!placed) return;
  const { fx, fz } = front(placed.rot);
  const cx = placed.x, cz = placed.z;
  const realW = placed.realW, usedD = placed.usedD;
  // Nightstands flank the headboard, on the head wall.
  const hx = cx - fx * usedD / 2;
  const hz = cz - fz * usedD / 2;
  const nsFront = 0.35;
  const px = -fz, pz = fx; // lateral
  const lateral = realW / 2 + DIM.nightGap + DIM.nightW / 2;
  for (const [id, side] of [["night-l", 1], ["night-r", -1]] as const) {
    const nx = hx + fx * nsFront + px * side * lateral;
    const nz = hz + fz * nsFront + pz * side * lateral;
    const tries = [
      { x: nx, z: nz },
      { x: hx + fx * 0.22 + px * side * (realW / 2 + DIM.nightW / 2 + 0.02), z: hz + fz * 0.22 + pz * side * (realW / 2 + DIM.nightW / 2 + 0.02) },
      { x: hx + fx * 0.35 + px * side * (realW / 2 + DIM.nightGap * 0.4 + DIM.nightW / 2), z: hz + fz * 0.35 + pz * side * (realW / 2 + DIM.nightGap * 0.4 + DIM.nightW / 2) },
    ];
    for (const tr of tries) {
      if (tryPush(ctx, {
        id, kind: "nightstand", x: tr.x, z: tr.z, rot: placed.rot,
        w: DIM.nightW, d: DIM.nightD, h: 0.5, tight: true, wallHug: true, group: "bed",
        variant: prefs.style,
      })) break;
    }
  }
  // Wardrobe on a side wall, toward the foot, clear of the bed.
  const wardLen = Math.min(1.8, Math.max(1.0, Math.min(a.w, a.d) * 0.45));
  const footX = cx + fx * usedD / 2;
  const footZ = cz + fz * usedD / 2;
  const midX = cx + fx * 0.15;
  const midZ = cz + fz * 0.15;
  const wardTries: { x: number; z: number; rot: number }[] = [];
  // Two side walls (perpendicular to the head wall), at the foot and mid.
  const sideWalls: { x: number; z: number; rot: number }[] =
    placed.wall === "north" || placed.wall === "south"
      ? [
          { x: a.minX + 0.05 + DIM.wardD / 2, z: 0, rot: Math.PI / 2 },
          { x: a.maxX - 0.05 - DIM.wardD / 2, z: 0, rot: -Math.PI / 2 },
        ]
      : [
          { x: 0, z: a.minZ + 0.05 + DIM.wardD / 2, rot: 0 },
          { x: 0, z: a.maxZ - 0.05 - DIM.wardD / 2, rot: Math.PI },
        ];
  for (const base of sideWalls) {
    if (placed.wall === "north" || placed.wall === "south") {
      wardTries.push({ x: base.x, z: footZ, rot: base.rot });
      wardTries.push({ x: base.x, z: midZ, rot: base.rot });
    } else {
      wardTries.push({ x: footX, z: base.z, rot: base.rot });
      wardTries.push({ x: midX, z: base.z, rot: base.rot });
    }
  }
  for (const tr of wardTries) {
    const box = orientedBox(tr.x, tr.z, wardLen, DIM.wardD, tr.rot);
    const bedBox = orientedBox(cx, cz, realW, usedD, placed.rot);
    // keep a sliver of clearance beside the bed
    const pad = 0.06;
    const inflated = { minX: bedBox.minX - pad, maxX: bedBox.maxX + pad, minZ: bedBox.minZ - pad, maxZ: bedBox.maxZ + pad };
    if (overlapArea(box, inflated) > 0.008) continue;
    if (tryPush(ctx, {
      id: "wardrobe", kind: "wardrobe", x: tr.x, z: tr.z, rot: tr.rot,
      w: wardLen, d: DIM.wardD, h: DIM.wardH, wallHug: true, variant: prefs.style,
    })) break;
  }
  const depthAvail = (placed.wall === "north" || placed.wall === "south") ? a.d : a.w;
  if (master && usedD + 0.55 < depthAvail) {
    const bx = cx + fx * (usedD / 2 + 0.28);
    const bz = cz + fz * (usedD / 2 + 0.28);
    tryPush(ctx, {
      id: "bench", kind: "bench", x: bx, z: bz, rot: placed.rot,
      w: realW * 0.65, d: 0.38, h: 0.42, tight: true, group: "bed", variant: prefs.style,
    });
  }
  tryPush(ctx, {
    id: "rug", kind: "rug", x: cx, z: cz, rot: placed.rot,
    w: realW + 0.45, d: usedD + 0.35, h: 0.02, ghost: true, tight: true,
  });
}

function planBath(ctx: PlanCtx): void {
  const { a, prefs } = ctx;
  const sh = Math.min(DIM.shower, Math.min(a.w, a.d) * 0.48);
  // Shower in the corner farthest from every door.
  const corners: [number, number][] = [
    [a.minX + 0.08 + sh / 2, a.minZ + 0.08 + sh / 2],
    [a.maxX - 0.08 - sh / 2, a.minZ + 0.08 + sh / 2],
    [a.minX + 0.08 + sh / 2, a.maxZ - 0.08 - sh / 2],
    [a.maxX - 0.08 - sh / 2, a.maxZ - 0.08 - sh / 2],
  ];
  const doorCenters = ctx.doorBoxes.map((d) => ({
    x: (d.minX + d.maxX) / 2, z: (d.minZ + d.maxZ) / 2,
  }));
  const distDoor = (x: number, z: number) => {
    if (!doorCenters.length) return 10;
    return Math.min(...doorCenters.map((c) => Math.hypot(x - c.x, z - c.z)));
  };
  corners.sort((p, q) => distDoor(q[0], q[1]) - distDoor(p[0], p[1]));
  if (a.w * a.d >= 3.2) {
    for (const [x, z] of corners) {
      if (tryPush(ctx, {
        id: "shower", kind: "shower", x, z, rot: 0,
        w: sh, d: sh, h: 2.1, wallHug: true, tight: true, group: "bath",
      })) break;
    }
  }
  const basinTries: { x: number; z: number; rot: number }[] = [
    { x: a.cx, z: a.maxZ - 0.08 - DIM.basinD / 2, rot: Math.PI },
    { x: a.cx, z: a.minZ + 0.08 + DIM.basinD / 2, rot: 0 },
    { x: a.maxX - 0.08 - DIM.basinD / 2, z: a.cz, rot: -Math.PI / 2 },
    { x: a.minX + 0.08 + DIM.basinD / 2, z: a.cz, rot: Math.PI / 2 },
  ];
  basinTries.sort((p, q) => distDoor(q.x, q.z) - distDoor(p.x, p.z));
  const basinW = Math.min(DIM.basinW, Math.min(a.w, a.d) * 0.55);
  for (const t of basinTries) {
    if (tryPush(ctx, {
      id: "basin", kind: "basin", x: t.x, z: t.z, rot: t.rot,
      w: basinW, d: DIM.basinD, h: 1.15, wallHug: true, tight: true, group: "bath",
      variant: prefs.style,
    })) break;
  }
  const toiletTries: { x: number; z: number; rot: number }[] = [
    { x: a.minX + 0.12 + DIM.toiletD / 2, z: a.cz, rot: Math.PI / 2 },
    { x: a.maxX - 0.12 - DIM.toiletD / 2, z: a.cz, rot: -Math.PI / 2 },
    { x: a.cx, z: a.minZ + 0.12 + DIM.toiletD / 2, rot: 0 },
    { x: a.cx, z: a.maxZ - 0.12 - DIM.toiletD / 2, rot: Math.PI },
  ];
  toiletTries.sort((p, q) => distDoor(q.x, q.z) - distDoor(p.x, p.z));
  for (const t of toiletTries) {
    if (tryPush(ctx, {
      id: "toilet", kind: "toilet", x: t.x, z: t.z, rot: t.rot,
      w: DIM.toiletW, d: DIM.toiletD, h: 0.8, wallHug: true, tight: true, group: "bath",
    })) break;
  }
}

function planLobby(ctx: PlanCtx): void {
  const { a } = ctx;
  const tries: { x: number; z: number; rot: number }[] = [
    { x: a.minX + 0.08 + 0.2, z: a.cz, rot: Math.PI / 2 },
    { x: a.maxX - 0.08 - 0.2, z: a.cz, rot: -Math.PI / 2 },
    { x: a.cx, z: a.minZ + 0.08 + 0.2, rot: 0 },
  ];
  for (const t of tries) {
    if (tryPush(ctx, {
      id: "console", kind: "console", x: t.x, z: t.z, rot: t.rot,
      w: Math.min(1.1, (t.rot === 0 ? a.w : a.d) * 0.6), d: 0.38, h: 0.85, wallHug: true, tight: true,
    })) break;
  }
  for (const [x, z] of cornerSpots(a, 0.34)) {
    if (tryPush(ctx, {
      id: "plant", kind: "plant", x, z, rot: 0,
      w: DIM.plantR * 2, d: DIM.plantR * 2, h: 1.1, tight: true, wallHug: true,
    })) break;
  }
}

function planWardrobeRoom(ctx: PlanCtx): void {
  const { a } = ctx;
  const alongX = a.w >= a.d;
  const len = Math.min(alongX ? a.w - 0.25 : a.d - 0.25, 1.6);
  const tries: { x: number; z: number; rot: number }[] = alongX
    ? [
        { x: a.cx, z: a.minZ + 0.06 + DIM.wardD / 2, rot: 0 },
        { x: a.cx, z: a.maxZ - 0.06 - DIM.wardD / 2, rot: Math.PI },
      ]
    : [
        { x: a.minX + 0.06 + DIM.wardD / 2, z: a.cz, rot: Math.PI / 2 },
        { x: a.maxX - 0.06 - DIM.wardD / 2, z: a.cz, rot: -Math.PI / 2 },
      ];
  for (const t of tries) {
    if (tryPush(ctx, {
      id: "wardrobe", kind: "wardrobe", x: t.x, z: t.z, rot: t.rot,
      w: len, d: DIM.wardD, h: DIM.wardH, wallHug: true, variant: "modern",
    })) break;
  }
}

function planOutdoor(ctx: PlanCtx): void {
  const { a } = ctx;
  const alongX = a.w >= a.d;
  const rot = alongX ? 0 : Math.PI / 2;
  const { fx, fz } = front(rot);
  const sx = a.cx;
  const sz = alongX ? a.minZ + Math.min(a.d * 0.42, 1.15) : a.cz;
  const gap = 0.25;
  const off = alongX ? 0.5 : 0;
  const offZ = alongX ? 0 : 0.5;
  tryPush(ctx, {
    id: "lounge-l", kind: "loungeChair",
    x: sx - off, z: sz - offZ, rot,
    w: DIM.loungeW, d: DIM.loungeD, h: 0.75, group: "outdoor",
  });
  tryPush(ctx, {
    id: "lounge-r", kind: "loungeChair",
    x: sx + off, z: sz + offZ, rot,
    w: DIM.loungeW, d: DIM.loungeD, h: 0.75, group: "outdoor",
  });
  tryPush(ctx, {
    id: "outdoor-table", kind: "outdoorTable",
    x: sx + fx * (DIM.loungeD / 2 + gap + 0.28),
    z: sz + fz * (DIM.loungeD / 2 + gap + 0.28),
    rot, w: 0.7, d: 0.5, h: 0.38, group: "outdoor",
  });
  for (const [x, z] of cornerSpots(a, 0.36)) {
    if (tryPush(ctx, {
      id: "plant", kind: "plant", x, z, rot: 0,
      w: DIM.plantR * 2, d: DIM.plantR * 2, h: 1.05, tight: true, wallHug: true,
    })) break;
  }
}

export function footprintsOf(placements: Placement[]): Footprint[] {
  return placements.map(fp);
}

export function coffeePairsOf(placements: Placement[]): { sofa: Footprint; coffee: Footprint; gap: number }[] {
  const pairs: { sofa: Footprint; coffee: Footprint; gap: number }[] = [];
  const sofas = placements.filter((p) => p.kind === "sofa");
  const coffees = placements.filter((p) => p.kind === "coffee");
  for (const s of sofas) {
    const c = coffees.find((k) => k.roomId === s.roomId);
    if (!c) continue;
    const { fx, fz } = front(s.rot);
    const sofaFront = (s.x * fx + s.z * fz) + s.d / 2;
    const coffeeNear = (c.x * fx + c.z * fz) - c.d / 2;
    const gap = coffeeNear - sofaFront;
    pairs.push({ sofa: fp(s), coffee: fp(c), gap });
  }
  return pairs;
}

export function transformPlacement(p: Placement, t: Transform): Placement {
  const [x, z] = planToWorld(p.x, p.z, t);
  const { fx, fz } = front(p.rot);
  const [x2, z2] = planToWorld(p.x + fx, p.z + fz, t);
  const rot = Math.atan2(x2 - x, z2 - z);
  return { ...p, x, z, rot };
}

export function worldDoors(plan: UnitPlan, t?: Transform): Door[] {
  if (!t) return plan.doors;
  return plan.doors.map((d) => {
    const [ax, az] = planToWorld(d.ax, d.az, t);
    const [bx, bz] = planToWorld(d.bx, d.bz, t);
    return { ax, az, bx, bz, width: d.width };
  });
}

export function worldPoly(poly: [number, number][], t?: Transform): [number, number][] {
  if (!t) return poly;
  return poly.map(([x, z]) => planToWorld(x, z, t));
}

export function planUnit(
  plan: UnitPlan,
  prefs: Prefs,
  t?: Transform,
): { placements: Placement[]; footprints: Footprint[]; issues: LayoutIssue[]; rooms: Room[] } {
  // Plan in plan-space so "north" is the plan's max-Z wall regardless of unit rotation.
  const placementsPlan: Placement[] = [];
  for (const r of plan.rooms) {
    // Only living furniture is kept out of overlapping sibling rooms (2BHK kitchen overlap).
    const avoid = r.type === "living"
      ? plan.rooms.filter((o) => o.id !== r.id).map((o) => o.polygon)
      : [];
    placementsPlan.push(...planRoom(r, prefs, avoid, plan.doors, plan.windows));
  }
  const walls: Collision[] = plan.walls.map((w) => ({
    minX: w.x, maxX: w.x + w.w, minZ: w.z, maxZ: w.z + w.d,
  }));
  const doors = plan.doors.flatMap((door) =>
    plan.rooms
      .filter((r) => doorInward(door, r.polygon))
      .map((r) => ({ poly: r.polygon, door })),
  );
  const issues = [
    ...inspectLayout(footprintsOf(placementsPlan), walls, doors, coffeePairsOf(placementsPlan)),
    ...inspectBeds(plan.rooms, placementsPlan, plan.doors, plan.windows ?? []),
  ];
  const placements = t ? placementsPlan.map((p) => transformPlacement(p, t)) : placementsPlan;
  const rooms = plan.rooms.map((r) => ({ ...r, polygon: worldPoly(r.polygon, t) }));
  return { placements, footprints: footprintsOf(placements), issues, rooms };
}

export const STYLES: Prefs["style"][] = ["modern", "luxury", "minimal", "traditional"];

export { aabb };
