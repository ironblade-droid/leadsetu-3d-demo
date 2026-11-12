import * as THREE from "three";
import type { Materials } from "./materials";
import type { Prefs, Room, RoomType, StyleId } from "./types";

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
  return mesh(new THREE.CylinderGeometry(r, r, h, 16), mat, x, y, z, parent);
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

export function furnishRoom(
  room: Room,
  group: THREE.Group,
  mats: Materials,
  prefs: Prefs,
): void {
  const a = aabb(room.polygon);
  if (a.w < 0.8 || a.d < 0.8) return;
  const style = prefs.style;
  switch (room.type) {
    case "living":
      living(a, group, mats, style, room.id === "lounge");
      if (room.id === "lounge") kitchenRun(a, group, mats, "south");
      if (room.name.toLowerCase().includes("kitchen") || room.id === "living") {
        // Combined living/kitchen (3BHK): counters on the north wall.
        if (room.name.toLowerCase().includes("kitchen")) kitchenRun(a, group, mats, "north");
      }
      break;
    case "kitchen":
      kitchenL(a, group, mats);
      break;
    case "bedroom":
      bedroom(a, group, mats, style, /master|1/i.test(room.name));
      break;
    case "bathroom":
      bathroom(a, group, mats);
      break;
    case "utility":
      utility(a, group, mats);
      break;
    case "lobby":
    case "hall":
      lobby(a, group, mats, style);
      break;
    case "dressing":
      wardrobe(a.cx, 0, a.cz, Math.min(a.w, 1.6), 2.2, Math.min(a.d, 0.6), group, mats);
      break;
    case "terrace":
    case "balcony":
      outdoor(a, group, mats, style);
      break;
    case "linen":
      wardrobe(a.cx, 0, a.cz, Math.min(a.w - 0.1, 1.0), 2.0, Math.min(a.d - 0.1, 0.5), group, mats);
      break;
    default:
      break;
  }
  if (style === "traditional" && room.type === "living") mandir(a, group, mats);
}

function living(
  a: ReturnType<typeof aabb>,
  g: THREE.Group,
  m: Materials,
  style: StyleId,
  large: boolean,
) {
  const alongX = a.w >= a.d;
  const sofaLen = Math.min(alongX ? a.w * 0.55 : a.d * 0.55, large ? 3.2 : 2.4);
  // Sofa against the longer back wall, TV opposite.
  if (alongX) {
    sofa(a.cx, a.minZ + 0.55, sofaLen, 0, g, m);
    tvUnit(a.cx, a.maxZ - 0.28, Math.min(1.8, a.w * 0.4), 0, g, m, style);
    coffee(a.cx, a.minZ + 1.35, g, m);
    // Dining on the remaining side
    if (a.w > 5) dining(a.minX + a.w * 0.72, a.cz, 4, 0, g, m, style);
    else if (a.d > 4.5) dining(a.cx + 0.4, a.maxZ - 1.6, 4, 0, g, m, style);
  } else {
    sofa(a.minX + 0.55, a.cz, sofaLen, Math.PI / 2, g, m);
    tvUnit(a.maxX - 0.28, a.cz, Math.min(1.8, a.d * 0.4), Math.PI / 2, g, m, style);
    coffee(a.minX + 1.35, a.cz, g, m);
    if (a.d > 5) dining(a.cx, a.minZ + a.d * 0.28, 4, 0, g, m, style);
  }
  rug(a.cx, a.cz, Math.min(a.w * 0.5, 2.6), Math.min(a.d * 0.45, 2.0), g, m, style);
  plant(a.maxX - 0.4, a.maxZ - 0.4, 1.2, g, m);
  if (large) plant(a.minX + 0.4, a.maxZ - 0.4, 1.0, g, m);
  floorLamp(a.maxX - 0.45, a.minZ + 0.55, g, m, style);
}

function sofa(x: number, z: number, len: number, rot: number, g: THREE.Group, m: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const depth = 0.9;
  box(len, 0.12, depth, m.woodFur, 0, 0.22, 0, root);
  // legs
  for (const lx of [-len / 2 + 0.08, len / 2 - 0.08]) {
    for (const lz of [-depth / 2 + 0.08, depth / 2 - 0.08]) cyl(0.035, 0.16, m.woodFur, lx, 0.08, lz, root);
  }
  box(len - 0.04, 0.18, depth - 0.08, m.fabric, 0, 0.38, 0, root);
  // back
  box(len, 0.52, 0.16, m.fabric, 0, 0.7, -depth / 2 + 0.1, root);
  // arms
  box(0.14, 0.36, depth - 0.06, m.fabric, -len / 2 + 0.08, 0.54, 0.02, root);
  box(0.14, 0.36, depth - 0.06, m.fabric, len / 2 - 0.08, 0.54, 0.02, root);
  // cushions
  const n = Math.max(2, Math.round(len / 0.75));
  const cw = (len - 0.4) / n - 0.04;
  for (let i = 0; i < n; i++) {
    const cx = -len / 2 + 0.28 + i * ((len - 0.4) / n) + cw / 2;
    box(cw, 0.16, 0.42, m.fabric, cx, 0.56, 0.06, root);
  }
}

function tvUnit(
  x: number, z: number, w: number, rot: number,
  g: THREE.Group, m: Materials, style: StyleId,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(w, 0.42, 0.4, m.woodFur, 0, 0.27, 0, root);
  // TV panel
  const tv = box(w * 0.85, 0.55, 0.04, m.frame, 0, 1.15, -0.05, root);
  (tv.material as THREE.MeshStandardMaterial).color.set("#111");
  const screen = box(w * 0.85 - 0.06, 0.49, 0.02, m.emissive.clone(), 0, 1.15, -0.02, root);
  (screen.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.15;
  (screen.material as THREE.MeshStandardMaterial).color.set("#1a2230");
  (screen.material as THREE.MeshStandardMaterial).emissive.set("#1a2230");
  if (style === "luxury") {
    box(0.04, 1.5, 0.04, m.gold, -w / 2, 0.85, 0, root);
    box(0.04, 1.5, 0.04, m.gold, w / 2, 0.85, 0, root);
  }
}

function coffee(x: number, z: number, g: THREE.Group, m: Materials) {
  box(1.05, 0.06, 0.6, m.woodFur, x, 0.38, z, g);
  for (const [lx, lz] of [[-0.42, -0.22], [0.42, -0.22], [-0.42, 0.22], [0.42, 0.22]]) {
    cyl(0.03, 0.35, m.metal, x + lx, 0.175, z + lz, g);
  }
}

function dining(
  x: number, z: number, seats: number, rot: number,
  g: THREE.Group, m: Materials, style: StyleId,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  const L = seats <= 4 ? 1.5 : 2.0;
  const W = 0.9;
  if (style === "luxury" || style === "traditional") {
    cyl(0.07, 0.72, m.woodFur, 0, 0.36, 0, root);
    mesh(new THREE.CylinderGeometry(L / 2, L / 2, 0.06, 32), m.woodFur, 0, 0.74, 0, root);
    // chairs around a round table
    const n = seats;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      chair(Math.cos(a) * 0.85, Math.sin(a) * 0.85, a + Math.PI, root, m);
    }
  } else {
    box(L, 0.06, W, m.woodFur, 0, 0.74, 0, root);
    box(0.08, 0.71, 0.08, m.woodFur, -L / 2 + 0.1, 0.355, -W / 2 + 0.1, root);
    box(0.08, 0.71, 0.08, m.woodFur, L / 2 - 0.1, 0.355, -W / 2 + 0.1, root);
    box(0.08, 0.71, 0.08, m.woodFur, -L / 2 + 0.1, 0.355, W / 2 - 0.1, root);
    box(0.08, 0.71, 0.08, m.woodFur, L / 2 - 0.1, 0.355, W / 2 - 0.1, root);
    chair(0, -W / 2 - 0.38, 0, root, m);
    chair(0, W / 2 + 0.38, Math.PI, root, m);
    chair(-L / 2 + 0.35, -W / 2 - 0.38, 0, root, m);
    chair(L / 2 - 0.35, W / 2 + 0.38, Math.PI, root, m);
    cyl(0.08, 0.015, m.ceramic, -0.3, 0.79, -0.18, root);
    cyl(0.08, 0.015, m.ceramic, 0.3, 0.79, 0.18, root);
  }
}

function chair(x: number, z: number, rot: number, g: THREE.Object3D, m: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(0.42, 0.05, 0.42, m.woodFur, 0, 0.45, 0, root);
  box(0.42, 0.4, 0.05, m.fabric, 0, 0.68, -0.18, root);
  box(0.4, 0.04, 0.38, m.fabric, 0, 0.49, 0, root);
  for (const [lx, lz] of [[-0.16, -0.16], [0.16, -0.16], [-0.16, 0.16], [0.16, 0.16]]) {
    box(0.04, 0.43, 0.04, m.woodFur, lx, 0.215, lz, root);
  }
}

function bedroom(
  a: ReturnType<typeof aabb>,
  g: THREE.Group,
  m: Materials,
  style: StyleId,
  master: boolean,
) {
  const alongX = a.w >= a.d;
  const bedW = master ? 1.8 : 1.5;
  const bedL = master ? 2.1 : 2.0;
  // Head against the shorter outer side — prefer north (maxZ) or west.
  if (alongX) {
    const cx = a.cx;
    const headZ = a.maxZ - 0.15;
    bed(cx, headZ - bedL / 2, bedW, bedL, 0, g, m, style);
    sideTable(cx - bedW / 2 - 0.28, headZ - 0.35, g, m);
    sideTable(cx + bedW / 2 + 0.28, headZ - 0.35, g, m);
    wardrobe(a.minX + 0.35, 0, a.cz, 0.6, 2.2, Math.min(1.8, a.d * 0.5), g, m, Math.PI / 2);
    if (master) {
      box(Math.min(1.1, bedW * 0.7), 0.38, 0.4, m.woodFur, cx, 0.22, headZ - bedL - 0.35, g);
      box(Math.min(1.1, bedW * 0.7), 0.05, 0.4, m.fabric, cx, 0.43, headZ - bedL - 0.35, g);
    }
  } else {
    const cz = a.cz;
    const headX = a.minX + 0.15;
    bed(headX + bedL / 2, cz, bedW, bedL, Math.PI / 2, g, m, style);
    sideTable(headX + 0.35, cz - bedW / 2 - 0.28, g, m);
    sideTable(headX + 0.35, cz + bedW / 2 + 0.28, g, m);
    wardrobe(a.maxX - 0.35, 0, a.cz, 0.6, 2.2, Math.min(1.8, a.d * 0.5), g, m, Math.PI / 2);
  }
}

function bed(
  x: number, z: number, w: number, l: number, rot: number,
  g: THREE.Group, m: Materials, style: StyleId,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(w + 0.06, 0.22, l + 0.06, m.woodFur, 0, 0.22, 0, root);
  box(w, 0.2, l, m.mattress, 0, 0.42, 0, root);
  // duvet
  const duvet = box(w - 0.08, 0.07, l * 0.65, m.fabric, 0, 0.55, l * 0.12, root);
  void duvet;
  // pillows at head (local -z)
  box(w * 0.38, 0.12, 0.32, m.mattress, -w * 0.2, 0.58, -l / 2 + 0.3, root);
  box(w * 0.38, 0.12, 0.32, m.mattress, w * 0.2, 0.58, -l / 2 + 0.3, root);
  // headboard
  const hh = style === "luxury" ? 1.15 : style === "traditional" ? 1.05 : 0.9;
  box(w + 0.08, hh, 0.08, style === "luxury" ? m.gold : m.woodFur, 0, hh / 2, -l / 2 - 0.02, root);
  if (style === "traditional") {
    box(w + 0.08, 0.06, 0.1, m.gold, 0, hh - 0.04, -l / 2 - 0.02, root);
  }
}

function sideTable(x: number, z: number, g: THREE.Group, m: Materials) {
  box(0.45, 0.08, 0.45, m.woodFur, x, 0.48, z, g);
  box(0.08, 0.44, 0.08, m.woodFur, x - 0.16, 0.22, z - 0.16, g);
  box(0.08, 0.44, 0.08, m.woodFur, x + 0.16, 0.22, z - 0.16, g);
  box(0.08, 0.44, 0.08, m.woodFur, x - 0.16, 0.22, z + 0.16, g);
  box(0.08, 0.44, 0.08, m.woodFur, x + 0.16, 0.22, z + 0.16, g);
  // lamp
  cyl(0.06, 0.04, m.metal, x, 0.54, z, g);
  cyl(0.015, 0.22, m.metal, x, 0.66, z, g);
  mesh(new THREE.ConeGeometry(0.1, 0.16, 16, 1, true), m.fabric, x, 0.82, z, g);
}

function wardrobe(
  x: number, _y: number, z: number, w: number, h: number, d: number,
  g: THREE.Group, m: Materials, rot = 0,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(w, h, d, m.woodFur, 0, h / 2, 0, root);
  // door split
  box(0.01, h - 0.1, 0.01, m.frame, 0, h / 2, d / 2 + 0.005, root);
  cyl(0.015, 0.08, m.metal, w * 0.18, h / 2, d / 2 + 0.02, root);
  cyl(0.015, 0.08, m.metal, -w * 0.18, h / 2, d / 2 + 0.02, root);
}

function kitchenL(a: ReturnType<typeof aabb>, g: THREE.Group, m: Materials) {
  // Counters along south and east (typical 2BHK kitchen in the SE).
  const depth = 0.6;
  const southW = a.w - 0.15;
  counterRun(a.cx, a.minZ + depth / 2 + 0.05, southW, depth, 0, g, m, true, true);
  const eastD = Math.max(1.2, a.d - depth - 0.4);
  counterRun(a.maxX - depth / 2 - 0.05, a.minZ + depth + eastD / 2, eastD, depth, Math.PI / 2, g, m, false, false);
  fridge(a.maxX - 0.35, a.maxZ - 0.4, g, m);
}

function kitchenRun(
  a: ReturnType<typeof aabb>,
  g: THREE.Group,
  m: Materials,
  wall: "north" | "south" | "east" | "west",
) {
  const depth = 0.6;
  const len = wall === "north" || wall === "south" ? Math.min(a.w - 0.5, 3.6) : Math.min(a.d - 0.5, 3.6);
  let x = a.cx, z = a.cz, rot = 0;
  if (wall === "south") { z = a.minZ + depth / 2 + 0.08; rot = 0; }
  if (wall === "north") { z = a.maxZ - depth / 2 - 0.08; rot = Math.PI; }
  if (wall === "east") { x = a.maxX - depth / 2 - 0.08; rot = -Math.PI / 2; }
  if (wall === "west") { x = a.minX + depth / 2 + 0.08; rot = Math.PI / 2; }
  counterRun(x, z, len, depth, rot, g, m, true, true);
}

function counterRun(
  x: number, z: number, len: number, depth: number, rot: number,
  g: THREE.Group, m: Materials, hob: boolean, sink: boolean,
) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(len, 0.86, depth, m.cabinet, 0, 0.43, 0, root);
  box(len + 0.04, 0.06, depth + 0.04, m.counter, 0, 0.89, 0, root);
  // uppers
  box(len, 0.7, 0.35, m.cabinet, 0, 2.15, -depth / 2 + 0.18, root);
  if (hob) {
    box(0.55, 0.03, 0.5, m.frame, -len * 0.18, 0.935, 0, root);
    for (const ox of [-0.12, 0.12]) {
      for (const oz of [-0.1, 0.1]) cyl(0.06, 0.02, m.metal, -len * 0.18 + ox, 0.95, oz, root);
    }
  }
  if (sink) {
    box(0.48, 0.08, 0.38, m.metal, len * 0.22, 0.9, 0, root);
    cyl(0.015, 0.22, m.metal, len * 0.22, 1.05, -0.12, root);
    box(0.1, 0.04, 0.04, m.metal, len * 0.22, 1.16, -0.06, root);
  }
  // plinth
  box(len, 0.1, depth - 0.04, m.frame, 0, 0.05, 0, root);
  // backsplash
  box(len, 0.42, 0.02, m.ceramic, 0, 1.14, -depth / 2 + 0.02, root);
  if (hob) {
    // oven door under the hob, and a slim hood
    box(0.6, 0.46, 0.04, m.frame, -len * 0.18, 0.38, depth / 2 - 0.01, root);
    box(0.54, 0.08, 0.02, m.metal, -len * 0.18, 0.38, depth / 2 + 0.01, root);
    box(0.7, 0.06, 0.38, m.metal, -len * 0.18, 1.72, -depth / 2 + 0.22, root);
    box(0.08, 0.22, 0.08, m.metal, -len * 0.18, 1.84, -depth / 2 + 0.18, root);
  }
}

function fridge(x: number, z: number, g: THREE.Group, m: Materials) {
  box(0.62, 1.85, 0.65, m.metal, x, 0.925, z, g);
  box(0.58, 0.01, 0.01, m.frame, x, 1.15, z + 0.33, g);
  box(0.02, 0.3, 0.02, m.frame, x + 0.26, 1.05, z + 0.34, g);
}

function bathroom(a: ReturnType<typeof aabb>, g: THREE.Group, m: Materials) {
  const alongX = a.w >= a.d;
  const large = a.w * a.d > 8;
  // Toilet against a short wall, sink, shower cubicle in a corner.
  if (alongX) {
    toilet(a.minX + 0.4, a.cz, Math.PI / 2, g, m);
    bathSink(a.cx, a.maxZ - 0.28, 0, g, m);
    shower(a.maxX - 0.55, a.minZ + 0.55, g, m);
    if (large) bathtub(a.minX + 1.35, a.minZ + 0.45, 0, g, m);
  } else {
    toilet(a.cx, a.minZ + 0.4, 0, g, m);
    bathSink(a.maxX - 0.28, a.cz, Math.PI / 2, g, m);
    shower(a.minX + 0.55, a.maxZ - 0.55, g, m);
    if (large) bathtub(a.minX + 0.45, a.cz + 0.9, Math.PI / 2, g, m);
  }
}

function toilet(x: number, z: number, rot: number, g: THREE.Group, m: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(0.38, 0.42, 0.5, m.ceramic, 0, 0.25, 0.05, root);
  mesh(new THREE.BoxGeometry(0.36, 0.08, 0.42), m.ceramic, 0, 0.48, 0.04, root);
  box(0.36, 0.42, 0.16, m.ceramic, 0, 0.64, -0.2, root);
}

function bathSink(x: number, z: number, rot: number, g: THREE.Group, m: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(0.55, 0.08, 0.4, m.ceramic, 0, 0.82, 0, root);
  box(0.5, 0.7, 0.36, m.cabinet, 0, 0.4, 0, root);
  cyl(0.012, 0.16, m.metal, 0, 0.96, -0.1, root);
  box(0.1, 0.03, 0.03, m.metal, 0, 1.05, -0.04, root);
  // mirror
  box(0.5, 0.6, 0.02, m.metal, 0, 1.55, -0.18, root);
  box(0.44, 0.54, 0.01, m.glass, 0, 1.55, -0.17, root);
}

function shower(x: number, z: number, g: THREE.Group, m: Materials) {
  // tray + glass screens
  box(1.0, 0.06, 1.0, m.ceramic, x, 0.05, z, g);
  box(1.0, 1.9, 0.02, m.glassRail, x, 1.0, z - 0.5, g);
  box(0.02, 1.9, 1.0, m.glassRail, x - 0.5, 1.0, z, g);
  cyl(0.01, 0.4, m.metal, x + 0.15, 1.95, z + 0.15, g);
  mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 16), m.metal, x + 0.15, 1.76, z + 0.15, g);
}

function utility(a: ReturnType<typeof aabb>, g: THREE.Group, m: Materials) {
  box(Math.min(a.w - 0.2, 0.65), 0.85, Math.min(a.d - 0.2, 0.65), m.metal, a.cx, 0.45, a.cz, g);
  // washer
  cyl(0.16, 0.04, m.frame, a.cx, 0.7, a.cz + 0.3, g);
}

function lobby(a: ReturnType<typeof aabb>, g: THREE.Group, m: Materials, style: StyleId) {
  if (a.w * a.d < 4) {
    // small console
    box(Math.min(0.9, a.w * 0.5), 0.08, 0.32, m.woodFur, a.cx, 0.8, a.minZ + 0.28, g);
    box(Math.min(0.9, a.w * 0.5), 0.7, 0.3, m.woodFur, a.cx, 0.4, a.minZ + 0.28, g);
    return;
  }
  // larger lobby — bench and plant
  box(1.2, 0.42, 0.4, m.woodFur, a.cx, 0.25, a.minZ + 0.5, g);
  box(1.2, 0.06, 0.4, m.fabric, a.cx, 0.48, a.minZ + 0.5, g);
  plant(a.maxX - 0.4, a.maxZ - 0.4, 1.3, g, m);
  if (style === "luxury") {
    // simple chandelier stand-in: a gold ring above (added as a hanging disc)
    cyl(0.35, 0.04, m.gold, a.cx, 2.35, a.cz, g);
    cyl(0.01, 0.3, m.gold, a.cx, 2.52, a.cz, g);
  }
}

function outdoor(
  a: ReturnType<typeof aabb>,
  g: THREE.Group,
  m: Materials,
  style: StyleId,
) {
  if (a.w < 2 || a.d < 2) {
    plant(a.cx, a.cz, 0.7, g, m);
    return;
  }
  // outdoor sofa
  sofa(a.cx, a.minZ + 0.7, Math.min(2.2, a.w * 0.5), 0, g, m);
  coffee(a.cx, a.minZ + 1.55, g, m);
  plant(a.minX + 0.45, a.maxZ - 0.45, 0.9, g, m);
  plant(a.maxX - 0.45, a.maxZ - 0.45, 0.9, g, m);
  if (style === "luxury" && a.w > 5) {
    // simple pergola beams
    const y = 2.4;
    for (let i = 0; i < 4; i++) {
      const x = a.minX + 0.6 + i * ((a.w - 1.2) / 3);
      box(0.08, 0.08, a.d - 0.6, m.woodFur, x, y, a.cz, g);
    }
    box(a.w - 0.8, 0.08, 0.08, m.woodFur, a.cx, y, a.minZ + 0.4, g);
    box(a.w - 0.8, 0.08, 0.08, m.woodFur, a.cx, y, a.maxZ - 0.4, g);
  }
}

function bathtub(x: number, z: number, rot: number, g: THREE.Group, m: Materials) {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  g.add(root);
  box(1.7, 0.45, 0.72, m.ceramic, 0, 0.28, 0, root);
  box(1.5, 0.08, 0.54, m.water, 0, 0.48, 0, root);
  cyl(0.015, 0.18, m.metal, 0.7, 0.64, -0.22, root);
  box(0.12, 0.03, 0.04, m.metal, 0.7, 0.74, -0.14, root);
}

function floorLamp(x: number, z: number, g: THREE.Group, m: Materials, style: StyleId) {
  cyl(0.12, 0.03, m.metal, x, 0.02, z, g);
  cyl(0.015, 1.35, style === "luxury" ? m.gold : m.metal, x, 0.7, z, g);
  mesh(new THREE.ConeGeometry(0.18, 0.22, 16, 1, true), m.fabric, x, 1.48, z, g);
  const glow = cyl(0.06, 0.04, m.emissive.clone(), x, 1.38, z, g);
  (glow.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.4;
}

function plant(x: number, z: number, h: number, g: THREE.Group, m: Materials) {
  cyl(0.14, 0.28, m.soil, x, 0.16, z, g);
  cyl(0.16, 0.06, m.ceramic, x, 0.03, z, g);
  const foliage = mesh(new THREE.SphereGeometry(0.28 * (h / 1.1), 14, 12), m.plant, x, 0.45 + h * 0.25, z, g);
  foliage.scale.set(1, 1.15 + h * 0.15, 1);
  mesh(new THREE.SphereGeometry(0.18, 12, 10), m.plant, x + 0.16, 0.55 + h * 0.15, z - 0.05, g);
}

function mandir(a: ReturnType<typeof aabb>, g: THREE.Group, m: Materials) {
  // A small wall cabinet with a triangular top — Traditional Indian preset only.
  const x = a.minX + 0.35;
  const z = a.maxZ - 0.22;
  box(0.7, 0.9, 0.22, m.woodFur, x, 1.35, z, g);
  box(0.66, 0.02, 0.02, m.gold, x, 1.15, z + 0.12, g);
  box(0.66, 0.02, 0.02, m.gold, x, 1.55, z + 0.12, g);
  mesh(new THREE.ConeGeometry(0.4, 0.28, 4), m.woodFur, x, 1.94, z, g, 0, Math.PI / 4, 0);
  const glow = box(0.2, 0.2, 0.04, m.gold, x, 1.4, z + 0.1, g);
  (glow.material as THREE.MeshStandardMaterial).emissive.set("#c4a265");
  (glow.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
}

export function rug(
  x: number, z: number, w: number, d: number,
  g: THREE.Group, m: Materials, style: StyleId,
) {
  const mat = m.fabric.clone();
  if (style === "traditional") mat.color.set("#7a2e1f");
  else if (style === "luxury") mat.color.set("#3d2a1e");
  else if (style === "minimal") mat.color.set("#e4e0d6");
  else mat.color.set("#6a7068");
  const r = box(w, 0.015, d, mat, x, 0.012, z, g);
  r.castShadow = false;
}

export type { RoomType };
