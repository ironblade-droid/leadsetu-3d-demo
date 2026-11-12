import * as THREE from "three";
import type { Materials } from "./materials";
import type { Prefs, Room, StyleId } from "./types";
import {
  type Catalog,
  type ModelId,
  sofaIdFor,
  type PlaceOpts,
} from "./catalog";

export interface Anchor {
  kind:
    | "sofa"
    | "tv"
    | "bed"
    | "dining"
    | "kitchen"
    | "bath"
    | "basin"
    | "outdoor"
    | "foyer"
    | "wardrobe";
  x: number;
  z: number;
  /** Front of the piece, pointing into the room (camera stands this way and looks back). */
  fx: number;
  fz: number;
  width: number;
  height: number;
}

function mesh(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x: number, y: number, z: number,
  parent: THREE.Object3D,
  rx = 0, ry = 0, rz = 0,
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

function box(
  w: number, h: number, d: number, mat: THREE.Material,
  x: number, y: number, z: number, parent: THREE.Object3D, ry = 0,
): THREE.Mesh {
  return mesh(new THREE.BoxGeometry(w, h, d), mat, x, y, z, parent, 0, ry, 0);
}

function cyl(
  r: number, h: number, mat: THREE.Material,
  x: number, y: number, z: number, parent: THREE.Object3D,
): THREE.Mesh {
  return mesh(new THREE.CylinderGeometry(r, r, h, 24), mat, x, y, z, parent);
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

/** Front direction from a yaw where 0 faces +Z (matches existing procedural furniture). */
function pointIn(poly: [number, number][], x: number, z: number): boolean {
  let c = false;
  const n = poly.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi) c = !c;
  }
  return c;
}

function inAvoid(avoid: [number, number][][], x: number, z: number): boolean {
  for (const p of avoid) if (pointIn(p, x, z)) return true;
  return false;
}

function front(rot: number): { fx: number; fz: number } {
  return { fx: Math.sin(rot), fz: Math.cos(rot) };
}

function contactShadow(
  x: number, z: number, w: number, d: number, parent: THREE.Object3D,
): void {
  const g = new THREE.PlaneGeometry(1, 1);
  const m = new THREE.MeshBasicMaterial({
    color: "#000000",
    transparent: true,
    opacity: 0.2,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(g, m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, 0.012, z);
  mesh.scale.set(w * 1.05, d * 1.05, 1);
  mesh.renderOrder = 1;
  mesh.receiveShadow = false;
  mesh.castShadow = false;
  parent.add(mesh);
}

function rug(
  x: number, z: number, w: number, d: number,
  g: THREE.Group, mats: Materials, style: StyleId,
): void {
  const col =
    style === "luxury" ? "#6b1d1d" :
    style === "traditional" ? "#7a3a1a" :
    style === "minimal" ? "#d8d2c8" : "#3d4a58";
  const mat = mats.fabric.clone();
  mat.color.set(col);
  mat.roughness = 0.95;
  box(w, 0.02, d, mat, x, 0.015, z, g);
}

function place(
  cat: Catalog | null,
  id: ModelId,
  x: number, z: number, rot: number, width: number,
  g: THREE.Group, prefs: Prefs, mats: Materials,
  y = 0,
): THREE.Group | null {
  if (!cat?.has(id)) return null;
  const opts: PlaceOpts = { x, z, y, rotY: rot, width, prefs, mats };
  const obj = cat.instantiate(id, opts);
  if (obj) {
    g.add(obj);
    contactShadow(x, z, width * 0.9, width * 0.55, g);
  }
  return obj;
}

export function furnishRoom(
  room: Room,
  group: THREE.Group,
  mats: Materials,
  prefs: Prefs,
  catalog: Catalog | null = null,
  avoid: [number, number][][] = [],
): Anchor[] {
  const a = aabb(room.polygon);
  if (a.w < 0.8 || a.d < 0.8) return [];
  const style = prefs.style;
  const anchors: Anchor[] = [];

  const add = (kind: Anchor["kind"], x: number, z: number, rot: number, width: number, height: number) => {
    const { fx, fz } = front(rot);
    anchors.push({ kind, x, z, fx, fz, width, height });
  };

  switch (room.type) {
    case "living":
      furnishLiving(a, group, mats, prefs, catalog, add, room, avoid);
      break;
    case "kitchen":
      furnishKitchen(a, group, mats, prefs, catalog, add, false);
      break;
    case "bedroom":
      furnishBedroom(a, group, mats, prefs, catalog, add, /master|1/i.test(room.name) || room.id === "master");
      break;
    case "bathroom":
      furnishBath(a, group, mats, prefs, catalog, add);
      break;
    case "utility":
      utility(a, group, mats);
      break;
    case "lobby":
    case "hall":
      furnishLobby(a, group, mats, prefs, catalog, add);
      break;
    case "dressing": {
      // Against the west wall, leaving a clear camera stand on the east.
      const wx = a.minX + 0.38;
      const wz = a.cz;
      const wlen = Math.min(a.d * 0.72, 1.15);
      place(catalog, "cabinet", wx, wz, Math.PI / 2, wlen, group, prefs, mats)
        || wardrobe(wx, 0, wz, 0.55, 2.1, wlen, group, mats, Math.PI / 2);
      add("wardrobe", wx, wz, Math.PI / 2, wlen, 1.2);
      break;
    }
    case "terrace":
    case "balcony":
      furnishOutdoor(a, group, mats, prefs, catalog, add);
      break;
    case "linen":
      place(catalog, "cabinet", a.cx, a.cz, 0, Math.min(a.w - 0.1, 1.0), group, prefs, mats)
        || wardrobe(a.cx, 0, a.cz, Math.min(a.w - 0.1, 1.0), 2.0, Math.min(a.d - 0.1, 0.5), group, mats);
      break;
    default:
      break;
  }
  if (style === "traditional" && room.type === "living") mandir(a, group, mats);
  return anchors;
}

function furnishLiving(
  a: ReturnType<typeof aabb>,
  g: THREE.Group,
  mats: Materials,
  prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
  room: Room,
  avoid: [number, number][][] = [],
): void {
  const style = prefs.style;
  const alongX = a.w >= a.d;
  const sofaLen = Math.min(alongX ? a.w * 0.55 : a.d * 0.55, room.id === "lounge" ? 3.2 : 2.6);
  const sofaId = sofaIdFor(style);
  const coffeeId: ModelId = style === "modern" || style === "minimal" ? "coffeeModern" : "coffeeClassic";
  const hasKit = /kitchen/i.test(room.name) || room.id === "lounge";
  // Penthouse lounge: kitchen on the south wall, so the sofa sits on the north
  // facing it. 3BHK (alongX false) already has sofa west / kitchen north.
  const kitWall: "north" | "south" = room.id === "lounge" ? "south" : "north";

  let sofaX: number, sofaZ: number, sofaRot: number;
  let tvX: number, tvZ: number, tvRot: number;
  let coffeeX: number, coffeeZ: number;
  if (alongX && hasKit && kitWall === "south") {
    sofaX = a.cx; sofaZ = a.maxZ - 0.7; sofaRot = Math.PI;
    tvX = a.maxX - 0.4; tvZ = a.cz; tvRot = -Math.PI / 2;
    coffeeX = a.cx; coffeeZ = a.maxZ - 1.55;
  } else if (alongX) {
    sofaX = a.cx; sofaZ = a.minZ + 0.7; sofaRot = 0;
    tvX = a.cx; tvZ = a.maxZ - 0.35; tvRot = Math.PI;
    coffeeX = a.cx; coffeeZ = a.minZ + 1.55;
  } else {
    sofaX = a.minX + 0.7; sofaZ = a.cz; sofaRot = Math.PI / 2;
    tvX = a.maxX - 0.35; tvZ = a.cz; tvRot = -Math.PI / 2;
    coffeeX = a.minX + 1.55; coffeeZ = a.cz;
  }

  place(cat, sofaId, sofaX, sofaZ, sofaRot, sofaLen, g, prefs, mats)
    || proceduralSofa(sofaX, sofaZ, sofaLen, sofaRot, g, mats);
  add("sofa", sofaX, sofaZ, sofaRot, sofaLen, 0.78);

  place(cat, coffeeId, coffeeX, coffeeZ, sofaRot, Math.min(1.3, sofaLen * 0.55), g, prefs, mats)
    || coffee(coffeeX, coffeeZ, g, mats);

  // TV unit + slim TV
  place(cat, "console", tvX, tvZ, tvRot, Math.min(1.8, (alongX ? a.w : a.d) * 0.42), g, prefs, mats)
    || proceduralTvUnit(tvX, tvZ, Math.min(1.8, (alongX ? a.w : a.d) * 0.42), tvRot, g, mats, style);
  slimTv(tvX, tvZ, tvRot, Math.min(1.5, (alongX ? a.w : a.d) * 0.36), g, mats);
  add("tv", tvX, tvZ, tvRot, 1.6, 1.05);

  rug(a.cx, a.cz, Math.min(a.w * 0.5, 2.6), Math.min(a.d * 0.45, 2.0), g, mats, style);

  // Armchair + ottoman on one side — stay out of a neighbouring kitchen.
  let armX = alongX ? a.minX + 0.75 : a.cx;
  let armZ = alongX ? a.cz : a.minZ + 0.75;
  let armRot = alongX ? Math.PI / 2 : 0;
  if (inAvoid(avoid, armX, armZ)) {
    armX = alongX ? a.maxX - 0.75 : a.cx;
    armZ = alongX ? a.cz : a.maxZ - 0.75;
    armRot = alongX ? -Math.PI / 2 : Math.PI;
  }
  if (!inAvoid(avoid, armX, armZ)) {
    place(cat, "armchair", armX, armZ, armRot, 0.95, g, prefs, mats);
    place(cat, "ottoman", armX + (alongX ? 0.7 : 0) * Math.sign(armRot === Math.PI / 2 ? 1 : -1), armZ + (alongX ? 0 : 0.7), armRot, 0.6, g, prefs, mats);
  }

  // Dining in a combined living / dining (2 BHK) or a large lounge.
  // Never sit it inside a neighbouring kitchen (the 2BHK drawing overlaps
  // those two rooms) or in the sofa's front camera cone.
  const wantsDining = /dining/i.test(room.name) || a.w > 5 || a.d > 5;
  if (wantsDining) {
    const inset = Math.max(1.7, Math.min((alongX ? a.w : a.d) * 0.28, 2.3));
    const cands: [number, number][] = alongX
      ? [[a.minX + inset, a.cz], [a.maxX - inset, a.cz], [a.minX + inset, a.maxZ - 1.2], [a.maxX - inset, a.maxZ - 1.2]]
      : [[a.cx, a.minZ + inset], [a.cx, a.maxZ - inset], [a.minX + 1.6, a.minZ + inset], [a.maxX - 1.6, a.minZ + inset]];
    const pick = cands.find(([x, z]) => !inAvoid(avoid, x, z) && Math.hypot(x - sofaX, z - sofaZ) >= 2.05);
    if (pick) furnishDiningAt(pick[0], pick[1], g, mats, prefs, cat, add, 4);
  }

  // Combined living / kitchen (3 BHK) or penthouse lounge
  if (/kitchen/i.test(room.name) || room.id === "lounge") {
    const wall: "north" | "south" = room.id === "lounge" ? "south" : "north";
    kitchenRun(a, g, mats, wall, prefs, cat, add);
  }

  const px = inAvoid(avoid, a.maxX - 0.45, a.maxZ - 0.45) ? a.minX + 0.45 : a.maxX - 0.45;
  const pz = inAvoid(avoid, px, a.maxZ - 0.45) ? a.minZ + 0.45 : a.maxZ - 0.45;
  if (!inAvoid(avoid, px, pz)) {
    place(cat, "plant", px, pz, 0, 0.55, g, prefs, mats) || plant(px, pz, 1.2, g, mats);
  }
  if (room.id === "lounge") {
    place(cat, "plant", a.minX + 0.45, a.maxZ - 0.45, 0, 0.45, g, prefs, mats);
  }

  // Wall art on the long wall
  const artX = alongX ? a.minX + 0.9 : a.cx;
  const artZ = alongX ? a.cz : a.minZ + 0.08;
  const artRot = alongX ? Math.PI / 2 : 0;
  // frames hang on walls — place slightly off the floor at 1.55 m
  if (cat?.has("frame1")) {
    const fr = cat.instantiate("frame1", { x: alongX ? a.minX + 0.08 : a.cx, z: alongX ? a.cz : a.minZ + 0.08, y: 1.45, rotY: artRot, height: 0.7, prefs, mats });
    if (fr) g.add(fr);
    void artX; void artZ;
  }

  // Floor lamp
  const lx = inAvoid(avoid, a.maxX - 0.5, a.minZ + 0.55) ? a.minX + 0.5 : a.maxX - 0.5;
  const lz = inAvoid(avoid, lx, a.minZ + 0.55) ? a.maxZ - 0.55 : a.minZ + 0.55;
  if (!inAvoid(avoid, lx, lz)) floorLamp(lx, lz, g, mats, style);
}

function furnishDiningAt(
  x: number, z: number,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
  seats: number,
): void {
  const tableId: ModelId = prefs.style === "traditional" ? "woodTable" : "diningTable";
  const chairId: ModelId = prefs.style === "traditional" || prefs.style === "luxury" ? "woodChair" : "diningChair";
  place(cat, tableId, x, z, 0, 1.5, g, prefs, mats) || diningProcedural(x, z, seats, 0, g, mats, prefs.style);
  const r = 0.95;
  for (let i = 0; i < seats; i++) {
    const ang = (i / seats) * Math.PI * 2 + Math.PI / 4;
    place(cat, chairId, x + Math.cos(ang) * r, z + Math.sin(ang) * r, ang + Math.PI, 0.5, g, prefs, mats);
  }
  add("dining", x, z, 0, 1.8, 0.85);
}

function furnishKitchen(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
  _combined: boolean,
): void {
  kitchenL(a, g, mats, prefs, cat, add);
}

function furnishBedroom(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
  master: boolean,
): void {
  const alongX = a.w >= a.d;
  const bedW = master ? 1.9 : 1.55;
  const bedL = master ? 2.2 : 2.05;
  // Head against the far short wall (maxZ). Bed faces -Z, so rot = PI (front is toward foot, into the room).
  const headZ = a.maxZ - 0.12;
  const cx = a.cx;
  const bedZ = headZ - bedL / 2;
  // Headboard sits at maxZ. modernBed's headboard is at local -Z, so rot=PI
  // puts it on +Z. The front (foot) then faces -Z, into the room; the camera
  // stands at the foot and looks at the bed with the wall behind the headboard.
  const bedRot = Math.PI;
  const useModel = prefs.style === "traditional" || prefs.style === "luxury";
  const placed = useModel && place(cat, "bed", cx, bedZ, bedRot, Math.max(bedW, bedL * 0.85), g, prefs, mats);
  if (!placed) modernBed(cx, bedZ, bedW, bedL, bedRot, g, mats, prefs.style, master);
  add("bed", cx, bedZ, bedRot, Math.max(bedW, 1.8), 0.85);

  place(cat, "nightstand", cx - bedW / 2 - 0.32, headZ - 0.4, 0, 0.5, g, prefs, mats)
    || sideTable(cx - bedW / 2 - 0.28, headZ - 0.35, g, mats);
  place(cat, "nightstand", cx + bedW / 2 + 0.32, headZ - 0.4, 0, 0.5, g, prefs, mats)
    || sideTable(cx + bedW / 2 + 0.28, headZ - 0.35, g, mats);

  const wardX = a.minX + 0.38;
  const wardZ = a.cz;
  place(cat, "cabinet", wardX, wardZ, Math.PI / 2, Math.min(1.8, a.d * 0.5), g, prefs, mats)
    || wardrobe(wardX, 0, wardZ, 0.6, 2.2, Math.min(1.8, a.d * 0.5), g, mats, Math.PI / 2);
  add("wardrobe", wardX, wardZ, Math.PI / 2, 1.2, 1.2);

  if (master) {
    // Bench at the foot
    box(bedW * 0.7, 0.42, 0.4, mats.woodFur, cx, 0.21, bedZ - bedL / 2 - 0.35, g);
  }
  if (cat?.has("frame2")) {
    const fr = cat.instantiate("frame2", {
      x: alongX ? a.cx : a.maxX - 0.08,
      z: alongX ? a.minZ + 0.08 : a.cz,
      y: 1.5, rotY: alongX ? 0 : -Math.PI / 2, height: 0.65, prefs, mats,
    });
    if (fr) g.add(fr);
  }
  rug(cx, bedZ, bedW + 0.5, bedL + 0.4, g, mats, prefs.style);
}

function furnishBath(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
): void {
  const alongX = a.w >= a.d;
  const large = a.w * a.d > 8;
  // Vanity (basin + mirror) is the hero shot — against the far wall.
  let basinX: number, basinZ: number, basinRot: number;
  let toiletX: number, toiletZ: number, toiletRot: number;
  let showerX: number, showerZ: number;
  if (alongX) {
    toiletX = a.minX + 0.45; toiletZ = a.cz; toiletRot = Math.PI / 2;
    basinX = a.cx; basinZ = a.maxZ - 0.32; basinRot = Math.PI;
    showerX = a.maxX - 0.6; showerZ = a.minZ + 0.6;
  } else {
    toiletX = a.cx; toiletZ = a.minZ + 0.45; toiletRot = 0;
    basinX = a.maxX - 0.32; basinZ = a.cz; basinRot = -Math.PI / 2;
    showerX = a.minX + 0.6; showerZ = a.maxZ - 0.6;
  }
  niceToilet(toiletX, toiletZ, toiletRot, g, mats);
  niceBasin(basinX, basinZ, basinRot, g, mats);
  if (cat?.has("mirror")) {
    const { fx, fz } = front(basinRot);
    // Mirror on the wall behind the basin (opposite of front).
    const mx = basinX - fx * 0.28;
    const mz = basinZ - fz * 0.28;
    const fr = cat.instantiate("mirror", { x: mx, z: mz, y: 1.15, rotY: basinRot + Math.PI, height: 0.85, prefs, mats });
    if (fr) g.add(fr);
  } else {
    niceMirror(basinX, basinZ, basinRot, g, mats);
  }
  if (a.w * a.d >= 3.2) niceShower(showerX, showerZ, g, mats);
  if (large) {
    const bx = alongX ? a.minX + 1.4 : a.minX + 0.5;
    const bz = alongX ? a.minZ + 0.5 : a.cz + 0.9;
    niceTub(bx, bz, alongX ? 0 : Math.PI / 2, g, mats);
  }
  add("basin", basinX, basinZ, basinRot, 1.1, 1.05);
  add("bath", (basinX + showerX) / 2, (basinZ + showerZ) / 2, basinRot, 1.6, 1.0);
}

function furnishLobby(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
): void {
  const alongX = a.w >= a.d;
  // A console and plant — look down the long axis toward the rest of the home.
  const x = a.cx, z = alongX ? a.cz : a.minZ + 0.7;
  place(cat, "sideTable", a.minX + 0.4, a.minZ + 0.4, 0, 0.55, g, prefs, mats)
    || sideTable(a.minX + 0.4, a.minZ + 0.4, g, mats);
  place(cat, "plant", a.maxX - 0.4, a.minZ + 0.4, 0, 0.45, g, prefs, mats)
    || plant(a.maxX - 0.4, a.minZ + 0.4, 1.0, g, mats);
  const rot = alongX ? Math.PI / 2 : 0;
  add("foyer", x, z, rot, 1.2, 1.15);
}

function furnishOutdoor(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
): void {
  // A small seating group looking out (toward the farther long edge).
  const alongX = a.w >= a.d;
  const rot = alongX ? 0 : Math.PI / 2;
  const sx = a.cx, sz = alongX ? a.minZ + a.d * 0.38 : a.cz;
  place(cat, "armchair", sx - 0.55, sz, rot, 0.85, g, prefs, mats);
  place(cat, "armchair", sx + 0.55, sz, rot, 0.85, g, prefs, mats)
    || plant(sx + 0.55, sz, 1.0, g, mats);
  place(cat, "coffeeModern", sx, sz + (alongX ? 0.7 : 0), rot, 0.8, g, prefs, mats);
  place(cat, "plant", a.maxX - 0.4, a.maxZ - 0.4, 0, 0.6, g, prefs, mats)
    || plant(a.maxX - 0.4, a.maxZ - 0.4, 1.1, g, mats);
  add("outdoor", sx, sz, rot, 2.0, 0.9);
}

/* ---------------- kitchen (fitted, PBR) ---------------- */

function kitchenL(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials, prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
): void {
  const depth = 0.62;
  const southW = a.w - 0.15;
  counterRun(a.cx, a.minZ + depth / 2 + 0.05, southW, depth, 0, g, mats, true, true, prefs, cat);
  const eastD = Math.max(1.2, a.d - depth - 0.4);
  counterRun(a.maxX - depth / 2 - 0.05, a.minZ + depth + eastD / 2, eastD, depth, Math.PI / 2, g, mats, false, false, prefs, cat);
  fridge(a.maxX - 0.35, a.maxZ - 0.4, g, mats);
  // Front faces +Z (into the room). Camera stands north of the south run
  // and looks back at hob, sink and cabinets, with the south wall behind.
  add("kitchen", a.cx, a.minZ + 0.55, 0, southW * 0.7, 0.95);
}

function kitchenRun(
  a: ReturnType<typeof aabb>,
  g: THREE.Group, mats: Materials,
  wall: "north" | "south" | "east" | "west",
  prefs: Prefs,
  cat: Catalog | null,
  add: (k: Anchor["kind"], x: number, z: number, rot: number, w: number, h: number) => void,
): void {
  const depth = 0.62;
  const len = wall === "north" || wall === "south" ? Math.min(a.w - 0.5, 3.6) : Math.min(a.d - 0.5, 3.6);
  let x = a.cx, z = a.cz, rot = 0, frontRot = 0;
  if (wall === "south") { z = a.minZ + depth / 2 + 0.08; rot = 0; frontRot = 0; }
  if (wall === "north") { z = a.maxZ - depth / 2 - 0.08; rot = Math.PI; frontRot = Math.PI; }
  if (wall === "east") { x = a.maxX - depth / 2 - 0.08; rot = -Math.PI / 2; frontRot = -Math.PI / 2; }
  if (wall === "west") { x = a.minX + depth / 2 + 0.08; rot = Math.PI / 2; frontRot = Math.PI / 2; }
  counterRun(x, z, len, depth, rot, g, mats, true, true, prefs, cat);
  add("kitchen", x, z, frontRot, Math.min(len, 2.4), 0.95);
}

function counterRun(
  x: number, z: number, len: number, depth: number, rot: number,
  g: THREE.Group, mats: Materials, hob: boolean, sink: boolean,
  prefs?: Prefs, cat?: Catalog | null,
): void {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  // Base cabinets with a recessed panel
  box(len, 0.86, depth, mats.cabinet, 0, 0.43, 0, root);
  box(len - 0.08, 0.62, 0.02, mats.frame, 0, 0.48, depth / 2 - 0.01, root);
  // Plinth
  box(len, 0.1, depth - 0.06, mats.frame, 0, 0.05, 0, root);
  // Marble / stone worktop with clearcoat (physical material already on mats.counter if upgraded)
  box(len + 0.05, 0.05, depth + 0.06, mats.counter, 0, 0.895, 0, root);
  // Upper cabinets
  box(len, 0.72, 0.36, mats.cabinet, 0, 2.18, -depth / 2 + 0.18, root);
  box(len - 0.1, 0.56, 0.02, mats.frame, 0, 2.18, -depth / 2 + 0.36, root);
  // Backsplash (tile)
  const splash = mats.ceramic.clone();
  splash.map = mats.tile.map;
  splash.roughnessMap = mats.tile.roughnessMap;
  splash.normalMap = mats.tile.normalMap;
  splash.roughness = 0.35;
  box(len, 0.48, 0.02, splash, 0, 1.16, -depth / 2 + 0.02, root);

  if (hob) {
    if (cat?.has("stove") && prefs) {
      const st = cat.instantiate("stove", {
        x: 0, z: 0, y: 0.92, rotY: 0, width: 0.6, prefs, mats,
      });
      if (st) {
        // Stove is in root-local space; place on the worktop.
        st.position.set(-len * 0.18, 0, 0.02);
        root.add(st);
      }
    } else {
      box(0.55, 0.03, 0.5, mats.frame, -len * 0.18, 0.935, 0, root);
      for (const ox of [-0.12, 0.12]) {
        for (const oz of [-0.1, 0.1]) cyl(0.06, 0.02, mats.metal, -len * 0.18 + ox, 0.95, oz, root);
      }
    }
    // Oven door
    box(0.6, 0.46, 0.04, mats.frame, -len * 0.18, 0.38, depth / 2 - 0.01, root);
    box(0.54, 0.08, 0.02, mats.metal, -len * 0.18, 0.38, depth / 2 + 0.01, root);
    // Hood
    box(0.72, 0.08, 0.42, mats.metal, -len * 0.18, 1.74, -depth / 2 + 0.22, root);
    box(0.08, 0.28, 0.08, mats.metal, -len * 0.18, 1.9, -depth / 2 + 0.18, root);
  }
  if (sink) {
    box(0.5, 0.1, 0.4, mats.metal, len * 0.22, 0.88, 0, root);
    cyl(0.015, 0.22, mats.metal, len * 0.22, 1.05, -0.12, root);
    box(0.1, 0.04, 0.04, mats.metal, len * 0.22, 1.16, -0.06, root);
  }
  // Handles
  for (const hx of [-len * 0.3, 0, len * 0.3]) {
    box(0.02, 0.14, 0.02, mats.metal, hx, 0.55, depth / 2 + 0.01, root);
  }
}

function fridge(x: number, z: number, g: THREE.Group, mats: Materials) {
  box(0.64, 1.9, 0.66, mats.metal, x, 0.95, z, g);
  box(0.6, 0.01, 0.01, mats.frame, x, 1.15, z + 0.34, g);
  box(0.02, 0.32, 0.02, mats.frame, x + 0.26, 1.05, z + 0.35, g);
  // Subtle door split
  box(0.6, 0.008, 0.01, mats.frame, x, 0.7, z + 0.34, g);
}

/* ---------------- bathroom fixtures (PBR ceramics) ---------------- */

function ceramicMat(mats: Materials): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: "#f4f6f7",
    roughness: 0.18,
    metalness: 0.02,
    clearcoat: 0.85,
    clearcoatRoughness: 0.12,
    envMapIntensity: 1.0,
  });
}

function niceToilet(x: number, z: number, rot: number, g: THREE.Group, mats: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const c = ceramicMat(mats);
  // Bowl
  mesh(new THREE.SphereGeometry(0.22, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), c, 0, 0.28, 0.08, root);
  box(0.38, 0.14, 0.42, c, 0, 0.14, 0.06, root);
  // Seat
  mesh(new THREE.TorusGeometry(0.16, 0.03, 12, 24), c, 0, 0.42, 0.08, root, Math.PI / 2, 0, 0);
  // Cistern
  box(0.38, 0.42, 0.16, c, 0, 0.64, -0.2, root);
  box(0.1, 0.03, 0.06, mats.metal, 0, 0.87, -0.2, root);
  contactShadow(x, z, 0.5, 0.55, g);
}

function niceBasin(x: number, z: number, rot: number, g: THREE.Group, mats: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const c = ceramicMat(mats);
  // Vanity
  box(0.7, 0.08, 0.46, mats.woodFur, 0, 0.8, 0, root);
  box(0.66, 0.7, 0.42, mats.cabinet, 0, 0.39, 0, root);
  // Bowl
  mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.12, 24), c, 0, 0.9, 0.02, root);
  mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.02, 24), mats.metal, 0, 0.85, 0.02, root);
  // Tap
  cyl(0.015, 0.16, mats.metal, 0, 1.04, -0.14, root);
  box(0.04, 0.03, 0.16, mats.metal, 0, 1.12, -0.08, root);
  contactShadow(x, z, 0.75, 0.5, g);
}

function niceMirror(x: number, z: number, rot: number, g: THREE.Group, mats: Materials) {
  const { fx, fz } = front(rot);
  const mx = x - fx * 0.28;
  const mz = z - fz * 0.28;
  const root = new THREE.Group();
  root.position.set(mx, 1.45, mz);
  root.rotation.y = rot + Math.PI;
  g.add(root);
  box(0.58, 0.72, 0.03, mats.frame, 0, 0, 0, root);
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#cfe0ea", roughness: 0.04, metalness: 0.4, envMapIntensity: 1.4,
  });
  box(0.5, 0.64, 0.01, glass, 0, 0, 0.02, root);
}

function niceShower(x: number, z: number, g: THREE.Group, mats: Materials) {
  const tray = ceramicMat(mats);
  box(1.05, 0.06, 1.05, tray, x, 0.04, z, g);
  // Glass screens
  const glass = mats.glassRail;
  box(1.05, 2.05, 0.02, glass, x, 1.08, z - 0.52, g);
  box(0.02, 2.05, 1.05, glass, x - 0.52, 1.08, z, g);
  // Rain head
  cyl(0.012, 0.4, mats.metal, x, 2.15, z, g);
  box(0.28, 0.03, 0.28, mats.metal, x, 1.96, z, g);
  // Drain
  cyl(0.05, 0.01, mats.metal, x, 0.075, z, g);
}

function niceTub(x: number, z: number, rot: number, g: THREE.Group, mats: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const c = ceramicMat(mats);
  box(1.65, 0.52, 0.72, c, 0, 0.28, 0, root);
  box(1.45, 0.1, 0.54, mats.water, 0, 0.46, 0, root);
  cyl(0.015, 0.22, mats.metal, 0.65, 0.66, -0.22, root);
}

/* ---------------- beds, sofas, fallbacks ---------------- */

function modernBed(
  x: number, z: number, w: number, len: number, rot: number,
  g: THREE.Group, mats: Materials, style: StyleId, master: boolean,
): void {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  // Platform
  box(w + 0.08, 0.18, len + 0.08, mats.woodFur, 0, 0.16, 0, root);
  // Mattress
  const mattress = mats.mattress.clone();
  box(w, 0.28, len - 0.08, mattress, 0, 0.4, 0.02, root);
  // Duvet — slightly oversized, color by style
  const duvet = mats.fabric.clone();
  duvet.color.set(style === "luxury" ? "#5c1a1a" : style === "traditional" ? "#7a2e1f" : style === "minimal" ? "#e8e4db" : "#3d4f63");
  duvet.roughness = 0.9;
  box(w + 0.04, 0.1, len * 0.72, duvet, 0, 0.58, len * 0.08, root);
  // Throw at the foot
  const throwM = mats.fabric.clone();
  throwM.color.set(style === "luxury" ? "#c4a265" : "#d9c7a3");
  box(w + 0.06, 0.05, len * 0.22, throwM, 0, 0.64, len * 0.32, root);
  // Pillows
  const pil = mats.mattress.clone();
  pil.color.set("#f4efe6");
  box(w * 0.38, 0.14, 0.32, pil, -w * 0.22, 0.64, -len / 2 + 0.28, root);
  box(w * 0.38, 0.14, 0.32, pil,  w * 0.22, 0.64, -len / 2 + 0.28, root);
  if (master) {
    box(w * 0.3, 0.1, 0.22, duvet, 0, 0.7, -len / 2 + 0.42, root);
  }
  // Upholstered headboard
  const hb = mats.fabric.clone();
  hb.color.set(style === "luxury" ? "#3a1010" : style === "minimal" ? "#d0cbc2" : "#2c3540");
  box(w + 0.12, master ? 1.15 : 0.95, 0.1, hb, 0, master ? 0.9 : 0.8, -len / 2 - 0.04, root);
  // Legs
  for (const lx of [-(w / 2 - 0.08), w / 2 - 0.08]) {
    for (const lz of [-(len / 2 - 0.08), len / 2 - 0.08]) {
      cyl(0.03, 0.12, mats.woodFur, lx, 0.06, lz, root);
    }
  }
  contactShadow(x, z, w + 0.3, len + 0.2, g);
}

function proceduralSofa(x: number, z: number, len: number, rot: number, g: THREE.Group, mats: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const depth = 0.92;
  box(len, 0.12, depth, mats.woodFur, 0, 0.22, 0, root);
  box(len - 0.04, 0.18, depth - 0.08, mats.fabric, 0, 0.38, 0, root);
  box(len, 0.52, 0.16, mats.fabric, 0, 0.7, -depth / 2 + 0.1, root);
  box(0.14, 0.36, depth - 0.06, mats.fabric, -len / 2 + 0.08, 0.54, 0.02, root);
  box(0.14, 0.36, depth - 0.06, mats.fabric, len / 2 - 0.08, 0.54, 0.02, root);
  contactShadow(x, z, len, depth, g);
}

function proceduralTvUnit(x: number, z: number, w: number, rot: number, g: THREE.Group, mats: Materials, _style: StyleId) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(w, 0.42, 0.4, mats.woodFur, 0, 0.27, 0, root);
}

function slimTv(x: number, z: number, rot: number, w: number, g: THREE.Group, mats: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const frame = mats.frame.clone();
  frame.color.set("#111");
  frame.roughness = 0.25;
  box(w, 0.72, 0.04, frame, 0, 1.22, -0.04, root);
  const screen = mats.emissive.clone();
  screen.color.set("#1a2230");
  screen.emissive.set("#1a2230");
  screen.emissiveIntensity = 0.2;
  box(w - 0.06, 0.64, 0.02, screen, 0, 1.22, -0.015, root);
}

function coffee(x: number, z: number, g: THREE.Group, mats: Materials) {
  box(1.05, 0.06, 0.6, mats.woodFur, x, 0.38, z, g);
  for (const [lx, lz] of [[-0.42, -0.22], [0.42, -0.22], [-0.42, 0.22], [0.42, 0.22]] as [number, number][]) {
    cyl(0.03, 0.35, mats.metal, x + lx, 0.175, z + lz, g);
  }
}

function diningProcedural(
  x: number, z: number, seats: number, rot: number,
  g: THREE.Group, mats: Materials, style: StyleId,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const L = seats <= 4 ? 1.5 : 2.0;
  if (style === "luxury" || style === "traditional") {
    cyl(0.07, 0.72, mats.woodFur, 0, 0.36, 0, root);
    mesh(new THREE.CylinderGeometry(L / 2, L / 2, 0.06, 32), mats.woodFur, 0, 0.74, 0, root);
  } else {
    box(L, 0.06, 0.9, mats.woodFur, 0, 0.74, 0, root);
    for (const lx of [-L / 2 + 0.1, L / 2 - 0.1]) {
      for (const lz of [-0.35, 0.35]) box(0.08, 0.71, 0.08, mats.woodFur, lx, 0.355, lz, root);
    }
  }
}

function wardrobe(
  x: number, _y: number, z: number, w: number, h: number, d: number,
  g: THREE.Group, mats: Materials, rot = 0,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(w, h, d, mats.woodFur, 0, h / 2, 0, root);
  box(0.01, h - 0.1, 0.01, mats.frame, 0, h / 2, d / 2 + 0.005, root);
  cyl(0.015, 0.08, mats.metal, w * 0.18, h / 2, d / 2 + 0.02, root);
  cyl(0.015, 0.08, mats.metal, -w * 0.18, h / 2, d / 2 + 0.02, root);
}

function sideTable(x: number, z: number, g: THREE.Group, mats: Materials) {
  box(0.42, 0.06, 0.42, mats.woodFur, x, 0.5, z, g);
  box(0.38, 0.44, 0.38, mats.woodFur, x, 0.25, z, g);
  // Lamp
  cyl(0.04, 0.02, mats.ceramic, x, 0.55, z, g);
  cyl(0.012, 0.22, mats.metal, x, 0.66, z, g);
  mesh(new THREE.CylinderGeometry(0.1, 0.14, 0.16, 16), mats.fabric, x, 0.86, z, g);
}

function plant(x: number, z: number, h: number, g: THREE.Group, mats: Materials) {
  cyl(0.14, 0.22, mats.ceramic, x, 0.11, z, g);
  cyl(0.12, 0.08, mats.soil, x, 0.22, z, g);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    mesh(new THREE.SphereGeometry(0.16 + (i % 2) * 0.05, 10, 8), mats.plant, x + Math.cos(a) * 0.08, 0.4 + h * 0.28, z + Math.sin(a) * 0.08, g);
  }
  mesh(new THREE.SphereGeometry(0.2, 10, 8), mats.plant, x, 0.45 + h * 0.4, z, g);
}

function floorLamp(x: number, z: number, g: THREE.Group, mats: Materials, style: StyleId) {
  cyl(0.14, 0.03, mats.metal, x, 0.02, z, g);
  cyl(0.015, 1.45, style === "luxury" ? mats.gold : mats.metal, x, 0.74, z, g);
  const shade = mats.fabric.clone();
  shade.color.set("#f0e6d4");
  shade.emissive = new THREE.Color("#f0e6d4");
  shade.emissiveIntensity = 0.15;
  mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.28, 16, 1, true), shade, x, 1.55, z, g);
}

function utility(a: ReturnType<typeof aabb>, g: THREE.Group, mats: Materials) {
  box(0.62, 0.85, 0.62, mats.metal, a.minX + 0.4, 0.43, a.cz, g);
  box(0.55, 0.08, 0.55, mats.frame, a.minX + 0.4, 0.9, a.cz, g);
}

function mandir(a: ReturnType<typeof aabb>, g: THREE.Group, mats: Materials) {
  box(0.55, 0.7, 0.22, mats.woodFur, a.maxX - 0.4, 1.45, a.minZ + 0.2, g);
  box(0.5, 0.08, 0.2, mats.gold, a.maxX - 0.4, 1.82, a.minZ + 0.2, g);
  const glow = mats.emissive.clone();
  glow.emissive.set("#ffd27a");
  glow.emissiveIntensity = 0.8;
  cyl(0.04, 0.06, glow, a.maxX - 0.4, 1.5, a.minZ + 0.28, g);
}

/** Wall curtains for a window opening, in world space. Called from interior.ts. */
export function addCurtains(
  x: number, z: number, w: number, d: number,
  wallH: number, g: THREE.Group, mats: Materials, style: StyleId,
): void {
  const alongX = w >= d;
  const fabric = mats.fabric.clone();
  fabric.color.set(style === "luxury" ? "#5c1a1a" : style === "traditional" ? "#7a3a1a" : style === "minimal" ? "#efeae2" : "#4a5560");
  fabric.side = THREE.DoubleSide;
  fabric.roughness = 0.92;
  fabric.transparent = true;
  fabric.opacity = 0.92;
  const height = Math.min(2.15, wallH - 0.35);
  const y = 0.25 + height / 2;
  if (alongX) {
    // Window along X — curtains at the two ends, hanging in Z.
    const half = Math.max(0.18, w * 0.16);
    box(half, height, 0.04, fabric, x - w / 2 + half / 2, y, z + (d > 0 ? 0.08 : -0.08), g);
    box(half, height, 0.04, fabric, x + w / 2 - half / 2, y, z + (d > 0 ? 0.08 : -0.08), g);
    // Rail
    box(w + 0.1, 0.03, 0.03, mats.metal, x, 0.25 + height + 0.03, z + (d > 0 ? 0.08 : -0.08), g);
  } else {
    const half = Math.max(0.18, d * 0.16);
    box(0.04, height, half, fabric, x + (w > 0 ? 0.08 : -0.08), y, z - d / 2 + half / 2, g);
    box(0.04, height, half, fabric, x + (w > 0 ? 0.08 : -0.08), y, z + d / 2 - half / 2, g);
    box(0.03, 0.03, d + 0.1, mats.metal, x + (w > 0 ? 0.08 : -0.08), 0.25 + height + 0.03, z, g);
  }
}
