import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import type { Materials } from "./materials";
import { hardwareOf } from "./materials";
import type { Prefs, StyleId } from "./types";
import { type Catalog, type ModelId, type PlaceOpts, sofaIdFor } from "./catalog";
import { front } from "./occupancy";
import { aabb as occAabb, type Placement } from "./planner";

export type { Placement };

export interface Anchor {
  kind:
    | "sofa"
    | "tv"
    | "bed"
    | "dining"
    | "kitchen"
    | "bath"
    | "basin"
    | "shower"
    | "outdoor"
    | "foyer"
    | "wardrobe";
  x: number;
  z: number;
  fx: number;
  fz: number;
  width: number;
  /** Footprint depth along the facing axis (beds: head-to-foot). */
  depth?: number;
  height: number;
  roomId?: string;
}

/** Re-export so existing imports from furniture keep working. */
export function aabb(poly: [number, number][]) {
  return occAabb(poly);
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
  rx = 0, rz = 0,
): THREE.Mesh {
  return mesh(new THREE.CylinderGeometry(r, r, h, 20), mat, x, y, z, parent, rx, 0, rz);
}

function rbox(
  w: number, h: number, d: number, radius: number, mat: THREE.Material,
  x: number, y: number, z: number, parent: THREE.Object3D, ry = 0,
): THREE.Mesh {
  const r = Math.max(0.004, Math.min(radius, w / 2 - 0.002, h / 2 - 0.002, d / 2 - 0.002));
  return mesh(new RoundedBoxGeometry(w, h, d, 3, r), mat, x, y, z, parent, 0, ry, 0);
}

let _aoTex: THREE.CanvasTexture | null = null;
function contactAoTex(): THREE.CanvasTexture {
  if (_aoTex) return _aoTex;
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 6, 64, 64, 62);
  g.addColorStop(0, "rgba(0,0,0,0.62)");
  g.addColorStop(0.28, "rgba(0,0,0,0.34)");
  g.addColorStop(0.62, "rgba(0,0,0,0.12)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  _aoTex = new THREE.CanvasTexture(c);
  _aoTex.colorSpace = THREE.NoColorSpace;
  return _aoTex;
}

/** Baked per-piece contact AO — a darkened elliptical gradient under furniture.
 *  Used on every tier; it's the mobile / software-GPU AO path, and it still
 *  helps on desktop under sofas and beds next to GTAO. */
function contactShadow(
  x: number, z: number, w: number, d: number, parent: THREE.Object3D, rot = 0,
): void {
  const g = new THREE.PlaneGeometry(1, 1);
  const m = new THREE.MeshBasicMaterial({
    map: contactAoTex(),
    color: "#000000",
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    depthTest: true,
  });
  const meshObj = new THREE.Mesh(g, m);
  meshObj.rotation.x = -Math.PI / 2;
  meshObj.rotation.z = rot;
  meshObj.position.set(x, 0.012, z);
  meshObj.scale.set(w * 1.18, d * 1.18, 1);
  meshObj.renderOrder = 1;
  meshObj.castShadow = meshObj.receiveShadow = false;
  meshObj.name = "contact-ao";
  parent.add(meshObj);
}

function groupAt(x: number, z: number, rot: number, parent: THREE.Object3D): THREE.Group {
  const root = new THREE.Group();
  root.position.set(x, 0, z);
  root.rotation.y = rot;
  parent.add(root);
  return root;
}

function velvet(color: string, mats: Materials): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.58,
    metalness: 0,
    sheen: 1,
    sheenRoughness: 0.32,
    sheenColor: new THREE.Color(color).lerp(new THREE.Color("#ffffff"), 0.18),
    clearcoat: 0.05,
    clearcoatRoughness: 0.7,
    normalMap: mats.fabric.normalMap,
    roughnessMap: mats.fabric.roughnessMap,
    normalScale: new THREE.Vector2(0.55, 0.55),
    envMapIntensity: 0.28,
  });
}

function fabricFor(mats: Materials, style: StyleId, luxury = false): THREE.Material {
  if (style === "luxury" || luxury) {
    const c = (mats.fabric.color as THREE.Color).getStyle();
    return velvet(c || "#5c1a1a", mats);
  }
  return mats.fabric;
}

function marbleMat(mats: Materials): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    map: mats.marble.map,
    normalMap: mats.marble.normalMap,
    roughnessMap: mats.marble.roughnessMap,
    roughness: 0.1,
    metalness: 0.03,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.25,
  });
}

function brass(mats: Materials, style: StyleId): THREE.Material {
  return hardwareOf(mats, style);
}

let tileTex: THREE.CanvasTexture | null = null;
function splashMat(): THREE.MeshStandardMaterial {
  if (!tileTex) {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#c5c9ce";
    ctx.fillRect(0, 0, 256, 256);
    const n = 5;
    const gap = 5;
    const tile = (256 - gap * (n + 1)) / n;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        ctx.fillStyle = (i + j) % 2 === 0 ? "#f4f6f8" : "#e8eef2";
        ctx.fillRect(gap + i * (tile + gap), gap + j * (tile + gap), tile, tile);
        // subtle highlight on the top edge so grout reads at a distance
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fillRect(gap + i * (tile + gap), gap + j * (tile + gap), tile, 3);
      }
    }
    tileTex = new THREE.CanvasTexture(c);
    tileTex.colorSpace = THREE.SRGBColorSpace;
    tileTex.wrapS = tileTex.wrapT = THREE.RepeatWrapping;
    tileTex.anisotropy = 8;
  }
  const mat = new THREE.MeshStandardMaterial({
    map: tileTex,
    roughness: 0.42,
    metalness: 0.04,
    color: "#ffffff",
  });
  return mat;
}

function applySplashUV(meshObj: THREE.Mesh, tilesX: number, tilesY: number): void {
  const map = (meshObj.material as THREE.MeshStandardMaterial).map;
  if (map) {
    map.repeat.set(tilesX / 5, tilesY / 5);
    map.needsUpdate = true;
  }
}

/* ---------------- sofa ---------------- */

function modernSofa(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const len = p.w;
  const depth = p.d;
  const fab = fabricFor(mats, style);
  const legMat = brass(mats, style);
  const isTrad = style === "traditional";
  // Legs
  const legH = isTrad ? 0.16 : 0.12;
  for (const lx of [-(len / 2 - 0.1), len / 2 - 0.1]) {
    for (const lz of [-(depth / 2 - 0.1), depth / 2 - 0.1]) {
      if (isTrad) {
        cyl(0.035, legH, mats.woodFur, lx, legH / 2, lz, root);
        cyl(0.045, 0.03, mats.woodFur, lx, 0.02, lz, root);
      } else {
        cyl(style === "luxury" ? 0.018 : 0.022, legH, legMat, lx, legH / 2, lz, root);
      }
    }
  }
  // Wood or upholstered base
  if (isTrad) {
    rbox(len, 0.1, depth, 0.02, mats.woodFur, 0, legH + 0.05, 0, root);
  } else {
    rbox(len, 0.1, depth, 0.02, mats.woodFur, 0, legH + 0.05, 0, root);
  }
  // Seat cushions — three clean rectangles with rounded edges
  const seats = Math.max(2, Math.round(len / 0.75));
  const seatW = (len - 0.16) / seats - 0.02;
  const seatD = depth - 0.22;
  for (let i = 0; i < seats; i++) {
    const lx = -len / 2 + 0.1 + seatW / 2 + i * (seatW + 0.02 + (len - 0.16 - seats * seatW) / Math.max(1, seats));
    // even spacing
    const span = len - 0.16;
    const step = span / seats;
    const sx = -len / 2 + 0.08 + step * i + step / 2;
    rbox(step - 0.04, 0.14, seatD, 0.04, fab, sx, legH + 0.16, 0.04, root);
  }
  // Back cushions
  for (let i = 0; i < seats; i++) {
    const step = (len - 0.16) / seats;
    const sx = -len / 2 + 0.08 + step * i + step / 2;
    rbox(step - 0.05, 0.42, 0.16, 0.045, fab, sx, legH + 0.44, -depth / 2 + 0.12, root);
  }
  // Slim back rail
  if (isTrad) {
    box(len, 0.08, 0.06, mats.woodFur, 0, 0.92, -depth / 2 + 0.04, root);
    box(0.05, 0.7, 0.05, mats.woodFur, -len / 2 + 0.04, 0.55, -depth / 2 + 0.04, root);
    box(0.05, 0.7, 0.05, mats.woodFur, len / 2 - 0.04, 0.55, -depth / 2 + 0.04, root);
  }
  // Arms — low, padded, contemporary (thicker wood for traditional)
  const armW = isTrad ? 0.12 : 0.11;
  const armH = 0.28;
  rbox(armW, armH, depth - 0.08, 0.04, isTrad ? mats.woodFur : fab, -len / 2 + armW / 2, legH + 0.28, 0.02, root);
  rbox(armW, armH, depth - 0.08, 0.04, isTrad ? mats.woodFur : fab, len / 2 - armW / 2, legH + 0.28, 0.02, root);
  // Luxury piping
  if (style === "luxury") {
    box(len - 0.04, 0.012, 0.012, mats.brass, 0, 0.72, -depth / 2 + 0.2, root);
  }
  contactShadow(p.x, p.z, len + 0.15, depth + 0.1, g, p.rot);
  void seatW;
}

function sofaChaise(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w;
  const len = p.d; // chaise extends in local +Z (front)
  const fab = fabricFor(mats, style);
  const legH = 0.12;
  for (const lx of [-(w / 2 - 0.08), w / 2 - 0.08]) {
    for (const lz of [-(len / 2 - 0.08), len / 2 - 0.08]) {
      cyl(style === "luxury" ? 0.018 : 0.022, legH, brass(mats, style), lx, legH / 2, lz, root);
    }
  }
  rbox(w, 0.1, len, 0.02, mats.woodFur, 0, legH + 0.05, 0, root);
  rbox(w - 0.06, 0.14, len - 0.08, 0.04, fab, 0, legH + 0.16, 0.02, root);
  // Low back along the outer long side (local -X)
  rbox(0.14, 0.36, len - 0.08, 0.04, fab, -w / 2 + 0.08, legH + 0.38, 0, root);
  contactShadow(p.x, p.z, w + 0.1, len + 0.1, g, p.rot);
}

function armchair(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const fab = fabricFor(mats, style);
  const w = p.w, d = p.d;
  for (const lx of [-(w / 2 - 0.08), w / 2 - 0.08]) {
    for (const lz of [-(d / 2 - 0.08), d / 2 - 0.08]) {
      cyl(0.02, 0.12, brass(mats, style), lx, 0.06, lz, root);
    }
  }
  rbox(w, 0.1, d, 0.02, mats.woodFur, 0, 0.17, 0, root);
  rbox(w - 0.08, 0.14, d - 0.16, 0.04, fab, 0, 0.28, 0.02, root);
  rbox(w - 0.08, 0.4, 0.14, 0.04, fab, 0, 0.52, -d / 2 + 0.1, root);
  rbox(0.1, 0.26, d - 0.1, 0.035, fab, -w / 2 + 0.06, 0.4, 0, root);
  rbox(0.1, 0.26, d - 0.1, 0.035, fab, w / 2 - 0.06, 0.4, 0, root);
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function coffeeTable(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, d = p.d, h = p.h;
  const top = p.variant === "marble" || style === "luxury" ? marbleMat(mats) : mats.woodFur;
  const leg = brass(mats, style);
  rbox(w, 0.04, d, 0.012, top, 0, h - 0.02, 0, root);
  if (style === "luxury") {
    // Slim brass frame, open shelf
    box(w - 0.04, 0.012, d - 0.04, mats.brass, 0, 0.14, 0, root);
    for (const lx of [-(w / 2 - 0.05), w / 2 - 0.05]) {
      for (const lz of [-(d / 2 - 0.05), d / 2 - 0.05]) {
        box(0.018, h - 0.04, 0.018, mats.brass, lx, (h - 0.04) / 2, lz, root);
      }
    }
  } else {
    for (const lx of [-(w / 2 - 0.07), w / 2 - 0.07]) {
      for (const lz of [-(d / 2 - 0.07), d / 2 - 0.07]) {
        cyl(0.022, h - 0.04, style === "traditional" ? mats.woodFur : leg, lx, (h - 0.04) / 2, lz, root);
      }
    }
  }
  // A book and a small bowl so the table reads as lived-in, not a floating slab.
  box(0.22, 0.015, 0.16, mats.fabric, -0.16, h + 0.01, 0.04, root);
  box(0.22, 0.012, 0.16, mats.woodFur, -0.15, h + 0.025, 0.05, root);
  cyl(0.07, 0.04, style === "luxury" ? mats.brass : mats.ceramic, 0.22, h + 0.03, -0.06, root);
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function tvUnit(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, d = p.d;
  // Low wooden console, handleless sliding doors
  rbox(w, 0.38, d, 0.015, mats.woodFur, 0, 0.22, 0, root);
  // Recessed door gap
  box(0.006, 0.28, 0.01, mats.frame, 0, 0.22, d / 2 - 0.005, root);
  if (style === "luxury") {
    box(w + 0.02, 0.012, d + 0.02, marbleMat(mats), 0, 0.42, 0, root);
  }
  // Slim black TV sitting on (or just above) the console
  const tw = Math.min(w * 0.85, 1.55);
  const frame = mats.frame.clone();
  frame.color.set("#111");
  frame.roughness = 0.28;
  box(tw, 0.72, 0.04, frame, 0, 0.88, -d / 2 + 0.06, root);
  const screen = mats.emissive.clone();
  screen.color.set("#151b24");
  screen.emissive.set("#1a2430");
  screen.emissiveIntensity = 0.18;
  box(tw - 0.05, 0.64, 0.015, screen, 0, 0.88, -d / 2 + 0.085, root);
  // Thin legs
  for (const lx of [-(w / 2 - 0.08), w / 2 - 0.08]) {
    for (const lz of [-(d / 2 - 0.06), d / 2 - 0.06]) {
      cyl(0.018, 0.06, brass(mats, style), lx, 0.03, lz, root);
    }
  }
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

/* ---------------- dining ---------------- */

function diningTable(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, d = p.d, h = p.h;
  const top = style === "luxury" ? marbleMat(mats) : mats.woodFur;
  rbox(w, 0.05, d, 0.015, top, 0, h - 0.02, 0, root);
  if (style === "luxury") {
    // Pedestal + brass ring
    cyl(0.14, h - 0.08, mats.woodFur, 0, (h - 0.08) / 2, 0, root);
    cyl(0.28, 0.03, mats.brass, 0, 0.04, 0, root);
  } else {
    for (const lx of [-(w / 2 - 0.1), w / 2 - 0.1]) {
      for (const lz of [-(d / 2 - 0.08), d / 2 - 0.08]) {
        box(0.07, h - 0.06, 0.07, mats.woodFur, lx, (h - 0.06) / 2, lz, root);
      }
    }
  }
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function diningChair(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const fab = fabricFor(mats, style);
  const w = p.w, d = p.d;
  for (const lx of [-(w / 2 - 0.05), w / 2 - 0.05]) {
    for (const lz of [-(d / 2 - 0.05), d / 2 - 0.05]) {
      box(0.035, 0.42, 0.035, mats.woodFur, lx, 0.21, lz, root);
    }
  }
  rbox(w - 0.04, 0.05, d - 0.04, 0.015, fab, 0, 0.44, 0, root);
  // Mid-height back, open (not a throne)
  rbox(w - 0.06, 0.32, 0.04, 0.015, fab, 0, 0.72, -d / 2 + 0.03, root);
  box(0.03, 0.32, 0.03, mats.woodFur, -w / 2 + 0.05, 0.62, -d / 2 + 0.03, root);
  box(0.03, 0.32, 0.03, mats.woodFur, w / 2 - 0.05, 0.62, -d / 2 + 0.03, root);
}

/* ---------------- kitchen ---------------- */

function kitchenRun(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const len = p.w, depth = p.d;
  const hasHob = (p.variant ?? "").includes("hob");
  const handleless = style === "modern" || style === "minimal";
  // Base cabinets
  box(len, 0.86, depth - 0.02, mats.cabinet, 0, 0.43, 0.01, root);
  // Door seams (vertical reveals) so it reads as modular, not a slab
  const doors = Math.max(2, Math.round(len / 0.55));
  for (let i = 1; i < doors; i++) {
    const lx = -len / 2 + (len / doors) * i;
    box(0.008, 0.72, 0.01, mats.frame, lx, 0.42, depth / 2 - 0.005, root);
  }
  if (!handleless) {
    for (let i = 0; i < doors; i++) {
      const lx = -len / 2 + (len / doors) * (i + 0.5);
      box(0.08, 0.012, 0.012, brass(mats, style), lx, 0.5, depth / 2 + 0.01, root);
    }
  }
  // Countertop
  const top = style === "luxury" ? marbleMat(mats)
    : style === "traditional" ? new THREE.MeshStandardMaterial({
        map: mats.granite?.map ?? mats.counter.map,
        normalMap: mats.granite?.normalMap,
        roughnessMap: mats.granite?.roughnessMap,
        roughness: 0.35, metalness: 0.08,
      })
    : mats.counter;
  // Light quartz-like counter for modern if the shared counter is dark wood-looking
  const modernTop = new THREE.MeshStandardMaterial({
    color: "#e8e6e1",
    roughness: 0.28,
    metalness: 0.06,
  });
  const usedTop = style === "luxury" ? top : style === "traditional" ? top : modernTop;
  box(len + 0.02, 0.05, depth + 0.03, usedTop, 0, 0.885, 0.01, root);

  // Backsplash — light ceramic TILES, tall enough to read from across the room
  const splash = splashMat();
  const splashH = 0.58;
  const splashMesh = box(len, splashH, 0.02, splash, 0, 0.91 + splashH / 2, -depth / 2 + 0.02, root);
  applySplashUV(splashMesh, Math.max(4, len * 3.2), 3.2);

  // Wall cabinets, interrupted above the hob for the chimney
  const wallH = 0.62;
  const wallY = 2.05;
  if (hasHob) {
    const gap = 0.85;
    const side = (len - gap) / 2;
    if (side > 0.35) {
      box(side - 0.02, wallH, depth - 0.12, mats.cabinet, -len / 2 + side / 2, wallY, -0.02, root);
      box(side - 0.02, wallH, depth - 0.12, mats.cabinet, len / 2 - side / 2, wallY, -0.02, root);
    }
    buildHobAndChimney(root, mats, 0, depth, 0.91);
  } else {
    box(len - 0.04, wallH, depth - 0.12, mats.cabinet, 0, wallY, -0.02, root);
    // Sink on this run
    buildSink(root, mats, 0, depth, 0.91);
  }
}

function buildHobAndChimney(
  root: THREE.Group, mats: Materials, x: number, depth: number, counterY: number,
): void {
  // Black glass hob, clearly a cooktop
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#1a1a1c", roughness: 0.12, metalness: 0.35,
    clearcoat: 0.6, clearcoatRoughness: 0.15, envMapIntensity: 1.1,
  });
  box(0.68, 0.03, 0.5, glass, x, counterY + 0.03, 0.02, root);
  const ring = new THREE.MeshStandardMaterial({ color: "#3a3a3e", roughness: 0.4, metalness: 0.7 });
  for (const [lx, lz] of [[-0.16, -0.1], [0.16, -0.1], [-0.16, 0.12], [0.16, 0.12]] as [number, number][]) {
    const t = new THREE.TorusGeometry(0.07, 0.008, 8, 24);
    const m = new THREE.Mesh(t, ring);
    m.rotation.x = Math.PI / 2;
    m.position.set(x + lx, counterY + 0.05, lz);
    m.castShadow = true;
    root.add(m);
  }
  // Stainless chimney — tall, flared, reads from across the room
  const steel = new THREE.MeshStandardMaterial({
    color: "#c5c8cc", roughness: 0.28, metalness: 0.85, envMapIntensity: 1.0,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: "#2a2c30", roughness: 0.35, metalness: 0.7,
  });
  // Canopy
  const canopy = mesh(new THREE.BoxGeometry(0.78, 0.1, 0.48), steel, x, 1.58, -0.02, root);
  void canopy;
  // Flare under the canopy
  mesh(new THREE.BoxGeometry(0.7, 0.08, 0.42), dark, x, 1.50, -0.02, root);
  // Duct up to the ceiling (~2.7)
  box(0.26, 1.05, 0.22, steel, x, 2.15, -depth / 2 + 0.16, root);
  // Front badge so it reads as an appliance
  box(0.18, 0.03, 0.01, mats.brass, x, 1.58, 0.23, root);
}

function buildSink(root: THREE.Group, mats: Materials, x: number, depth: number, counterY: number): void {
  const steel = new THREE.MeshStandardMaterial({ color: "#c8ccd0", roughness: 0.25, metalness: 0.8 });
  box(0.48, 0.12, 0.36, steel, x, counterY - 0.04, 0.04, root);
  box(0.4, 0.02, 0.28, mats.water, x, counterY + 0.02, 0.04, root);
  // Faucet — matte black by default (brushed brass when the parent passes brass via mats.blackMetal swap is style-specific at the call site)
  const tap = mats.blackMetal;
  cyl(0.016, 0.2, tap, x, counterY + 0.16, -depth / 2 + 0.16, root);
  box(0.03, 0.03, 0.16, tap, x, counterY + 0.26, -depth / 2 + 0.22, root);
  cyl(0.01, 0.08, tap, x, counterY + 0.22, 0.0, root);
}

function fridge(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, d = p.d, h = p.h;
  const steel = new THREE.MeshStandardMaterial({
    color: "#dfe3e8", roughness: 0.28, metalness: 0.55, envMapIntensity: 0.7,
  });
  rbox(w, h, d, 0.015, steel, 0, h / 2, 0, root);
  // Freezer seam
  box(w - 0.04, 0.008, 0.01, mats.frame, 0, h * 0.72, d / 2 - 0.005, root);
  // Recessed vertical handle
  box(0.018, 0.55, 0.02, mats.blackMetal, w / 2 - 0.08, h * 0.42, d / 2 + 0.01, root);
  // Water dispenser hint
  box(0.12, 0.16, 0.02, mats.frame, 0, h * 0.5, d / 2 + 0.008, root);
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

/* ---------------- bedroom ---------------- */

function platformBed(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, len = p.d;
  const master = (p.variant ?? "").includes("master");
  const fab = fabricFor(mats, style);
  // Low platform
  rbox(w + 0.08, 0.16, len + 0.06, 0.02, mats.woodFur, 0, 0.16, 0, root);
  for (const lx of [-(w / 2 - 0.08), w / 2 - 0.08]) {
    for (const lz of [-(len / 2 - 0.08), len / 2 - 0.08]) {
      cyl(0.03, 0.1, mats.woodFur, lx, 0.05, lz, root);
    }
  }
  // Mattress
  const mattress = mats.mattress.clone();
  rbox(w, 0.24, len - 0.08, 0.04, mattress, 0, 0.38, 0.02, root);
  // Duvet
  const duvet = (style === "luxury" ? velvet("#5c1a1a", mats) : mats.fabric.clone()) as THREE.Material;
  if (duvet instanceof THREE.MeshStandardMaterial && style !== "luxury") {
    duvet.color.set(style === "traditional" ? "#7a2e1f" : style === "minimal" ? "#e8e4db" : "#3d4f63");
    duvet.roughness = 0.9;
  }
  rbox(w + 0.04, 0.09, len * 0.7, 0.04, duvet, 0, 0.54, len * 0.08, root);
  const throwM = mats.fabric.clone();
  throwM.color.set(style === "luxury" ? "#c4a265" : "#d9c7a3");
  rbox(w + 0.05, 0.05, len * 0.2, 0.025, throwM, 0, 0.6, len * 0.32, root);
  // Pillows at the head (local -Z because rot PI puts headboard on +Z world when headAtMaxZ)
  const pil = mats.mattress.clone();
  pil.color.set("#f4efe6");
  rbox(w * 0.38, 0.14, 0.3, 0.04, pil, -w * 0.22, 0.62, -len / 2 + 0.28, root);
  rbox(w * 0.38, 0.14, 0.3, 0.04, pil, w * 0.22, 0.62, -len / 2 + 0.28, root);
  if (master) rbox(w * 0.3, 0.1, 0.2, 0.03, duvet, 0, 0.68, -len / 2 + 0.42, root);
  // Upholstered headboard — channel tufting for luxury (boxes, not carved wood)
  const hbH = master ? 1.15 : 0.95;
  const hb = style === "luxury" ? velvet("#3a1010", mats) : mats.fabric.clone();
  if (hb instanceof THREE.MeshStandardMaterial) {
    hb.color.set(style === "minimal" ? "#d0cbc2" : style === "traditional" ? "#5c2218" : "#2c3540");
  }
  rbox(w + 0.14, hbH, 0.1, 0.03, hb, 0, hbH / 2 + 0.1, -len / 2 - 0.04, root);
  if (style === "luxury") {
    const n = 4;
    for (let i = 0; i < n; i++) {
      const lx = -w / 2 + (w / n) * (i + 0.5);
      box(0.01, hbH - 0.16, 0.02, mats.brass, lx, hbH / 2 + 0.1, -len / 2 + 0.02, root);
    }
  }
  if (style === "traditional") {
    box(w + 0.16, 0.05, 0.12, mats.woodFur, 0, hbH + 0.1, -len / 2 - 0.04, root);
  }
  contactShadow(p.x, p.z, w + 0.3, len + 0.2, g, p.rot);
}

function nightstand(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  rbox(p.w, 0.42, p.d, 0.015, mats.woodFur, 0, 0.27, 0, root);
  box(p.w - 0.08, 0.008, 0.01, mats.frame, 0, 0.3, p.d / 2 - 0.002, root);
  if (style === "luxury") box(0.06, 0.01, 0.01, mats.brass, 0, 0.3, p.d / 2 + 0.01, root);
  // Lamp
  const shade = mats.fabric.clone();
  shade.color.set("#f0e6d4");
  shade.emissive = new THREE.Color("#f0e6d4");
  shade.emissiveIntensity = 0.12;
  cyl(0.04, 0.02, brass(mats, style), 0, 0.5, 0, root);
  cyl(0.01, 0.2, brass(mats, style), 0, 0.61, 0, root);
  mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.14, 16), shade, 0, 0.8, 0, root);
  contactShadow(p.x, p.z, p.w, p.d, g, p.rot);
}

function wardrobe(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const w = p.w, d = p.d, h = p.h;
  // Sliding-door laminate — two flush panels and a central reveal, no ornate moulding
  const body = style === "luxury"
    ? new THREE.MeshStandardMaterial({ color: "#3a2a22", roughness: 0.45, metalness: 0.08, map: mats.wood.map, roughnessMap: mats.wood.roughnessMap })
    : mats.cabinet;
  box(w, h, d, body, 0, h / 2, 0, root);
  // Sliding reveal
  box(0.012, h - 0.12, 0.012, mats.frame, 0, h / 2, d / 2 + 0.004, root);
  // Thin top and plinth
  box(w + 0.01, 0.03, d + 0.01, mats.woodFur, 0, h - 0.01, 0, root);
  box(w, 0.06, d, mats.woodFur, 0, 0.03, 0, root);
  if (style !== "modern" && style !== "minimal") {
    // Vertical edge pulls, not knobs-on-carved-doors
    box(0.012, 0.42, 0.018, brass(mats, style), -0.06, h * 0.5, d / 2 + 0.012, root);
    box(0.012, 0.42, 0.018, brass(mats, style), 0.06, h * 0.5, d / 2 + 0.012, root);
  }
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function bench(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  rbox(p.w, 0.08, p.d, 0.02, fabricFor(mats, style), 0, 0.38, 0, root);
  box(p.w - 0.08, 0.28, p.d - 0.08, mats.woodFur, 0, 0.18, 0, root);
}

/* ---------------- bath ---------------- */

function ceramic(mats: Materials): THREE.MeshPhysicalMaterial {
  return new THREE.MeshPhysicalMaterial({
    color: "#f4f6f7", roughness: 0.16, metalness: 0.04,
    clearcoat: 0.55, clearcoatRoughness: 0.2, envMapIntensity: 0.8,
  });
}

function toilet(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const c = ceramic(mats);
  rbox(0.36, 0.4, 0.5, 0.06, c, 0, 0.32, 0.05, root);
  rbox(0.34, 0.08, 0.08, 0.02, c, 0, 0.54, -0.18, root);
  box(0.36, 0.42, 0.16, c, 0, 0.72, -0.26, root);
  cyl(0.028, 0.04, mats.blackMetal, 0.12, 0.9, -0.26, root);
  contactShadow(p.x, p.z, 0.4, 0.6, g, p.rot);
}

function basin(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const c = ceramic(mats);
  const w = p.w, d = p.d;
  // Vanity
  rbox(w, 0.06, d, 0.01, style === "luxury" ? marbleMat(mats) : mats.woodFur, 0, 0.82, 0, root);
  box(w - 0.04, 0.7, d - 0.04, mats.cabinet, 0, 0.4, 0, root);
  mesh(new THREE.CylinderGeometry(0.18, 0.15, 0.1, 24), c, 0, 0.92, 0.02, root);
  cyl(0.014, 0.16, hardwareOf(mats, style), 0, 1.04, -d / 2 + 0.12, root);
  box(0.03, 0.025, 0.14, hardwareOf(mats, style), 0, 1.12, -d / 2 + 0.18, root);
  // Simple frameless mirror — not an ornate PH mirror
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#cfe0ea", roughness: 0.04, metalness: 0.35, envMapIntensity: 1.3,
  });
  box(w * 0.85, 0.7, 0.02, style === "luxury" ? mats.brass : mats.frame, 0, 1.55, -d / 2 + 0.02, root);
  box(w * 0.85 - 0.04, 0.64, 0.015, glass, 0, 1.55, -d / 2 + 0.035, root);
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function shower(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const s = p.w;
  const tray = ceramic(mats);
  box(s, 0.05, s, tray, 0, 0.03, 0, root);
  const glass = mats.glassRail;
  // Two screens meeting at the back-left corner, with a full metal frame.
  box(s, 1.95, 0.02, glass, 0, 1.02, -s / 2 + 0.01, root);
  box(0.02, 1.95, s, glass, -s / 2 + 0.01, 1.02, 0, root);
  // Top rails + a vertical post at the open outer corner so they don't float.
  box(s, 0.02, 0.02, mats.blackMetal, 0, 2.00, -s / 2 + 0.01, root);
  box(0.02, 0.02, s, mats.blackMetal, -s / 2 + 0.01, 2.00, 0, root);
  box(0.02, 2.00, 0.02, mats.blackMetal, s / 2 - 0.01, 1.02, -s / 2 + 0.01, root);
  box(0.02, 2.00, 0.02, mats.blackMetal, -s / 2 + 0.01, 1.02, s / 2 - 0.01, root);
  box(0.02, 2.00, 0.02, mats.blackMetal, -s / 2 + 0.01, 1.02, -s / 2 + 0.01, root);
  // Rain head on a wall arm from the back corner, clearly connected.
  const ax = -s / 2 + 0.12, az = -s / 2 + 0.12;
  cyl(0.012, 0.22, mats.blackMetal, ax, 2.08, az, root);
  box(0.012, 0.012, s * 0.28, mats.blackMetal, ax, 2.18, az + s * 0.14, root);
  box(0.22, 0.02, 0.22, mats.blackMetal, ax, 2.17, az + s * 0.28, root);
  cyl(0.045, 0.01, mats.blackMetal, 0, 0.06, 0, root);
}

/* ---------------- other ---------------- */

function loungeChair(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const slat = mats.woodFur;
  const w = p.w, d = p.d;
  // Modern outdoor lounge — slatted teak, not an ornate armchair
  for (const lx of [-(w / 2 - 0.04), w / 2 - 0.04]) {
    box(0.05, 0.32, d, slat, lx, 0.2, 0, root);
    box(0.05, 0.45, 0.05, slat, lx, 0.55, -d / 2 + 0.04, root);
  }
  for (let i = 0; i < 6; i++) {
    const lz = -d / 2 + 0.08 + i * ((d - 0.12) / 5);
    box(w - 0.06, 0.025, 0.06, slat, 0, 0.36, lz, root);
  }
  for (let i = 0; i < 4; i++) {
    box(w - 0.06, 0.06, 0.025, slat, 0, 0.48 + i * 0.1, -d / 2 + 0.05, root);
  }
  const cush = mats.fabric.clone();
  cush.color.set("#d9c7a3");
  rbox(w - 0.12, 0.07, d - 0.16, 0.03, cush, 0, 0.42, 0.04, root);
  contactShadow(p.x, p.z, w, d, g, p.rot);
}

function outdoorTable(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  rbox(p.w, 0.04, p.d, 0.015, mats.woodFur, 0, p.h, 0, root);
  for (const lx of [-(p.w / 2 - 0.06), p.w / 2 - 0.06]) {
    for (const lz of [-(p.d / 2 - 0.06), p.d / 2 - 0.06]) {
      cyl(0.02, p.h, mats.blackMetal, lx, p.h / 2, lz, root);
    }
  }
}

function consoleTable(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  rbox(p.w, 0.05, p.d, 0.015, mats.woodFur, 0, 0.8, 0, root);
  box(p.w - 0.1, 0.7, 0.04, mats.woodFur, 0, 0.4, -p.d / 2 + 0.04, root);
  box(0.05, 0.78, p.d, mats.woodFur, -p.w / 2 + 0.04, 0.4, 0, root);
  box(0.05, 0.78, p.d, mats.woodFur, p.w / 2 - 0.04, 0.4, 0, root);
}

function plantMesh(
  p: Placement, g: THREE.Group, mats: Materials, cat: Catalog | null, prefs: Prefs,
): void {
  if (cat?.has("plant")) {
    const opts: PlaceOpts = { x: p.x, z: p.z, y: 0, rotY: p.rot, width: 0.55, prefs, mats };
    const obj = cat.instantiate("plant", opts);
    if (obj) {
      g.add(obj);
      contactShadow(p.x, p.z, 0.45, 0.45, g);
      return;
    }
  }
  const root = groupAt(p.x, p.z, p.rot, g);
  cyl(0.13, 0.22, mats.ceramic, 0, 0.11, 0, root);
  cyl(0.11, 0.06, mats.soil, 0, 0.22, 0, root);
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    mesh(new THREE.SphereGeometry(0.15 + (i % 2) * 0.05, 10, 8), mats.plant, Math.cos(a) * 0.08, 0.45 + i * 0.08, Math.sin(a) * 0.08, root);
  }
  mesh(new THREE.SphereGeometry(0.2, 10, 8), mats.plant, 0, 0.55 + p.h * 0.2, 0, root);
}

function floorLamp(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  cyl(0.13, 0.03, brass(mats, style), 0, 0.02, 0, root);
  cyl(0.014, 1.42, brass(mats, style), 0, 0.73, 0, root);
  const shade = mats.fabric.clone();
  shade.color.set("#f0e6d4");
  shade.emissive = new THREE.Color("#f0e6d4");
  shade.emissiveIntensity = 0.2;
  shade.side = THREE.DoubleSide;
  mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.28, 16, 1, false), shade, 0, 1.52, 0, root);
}

function mandirMesh(p: Placement, g: THREE.Group, mats: Materials): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  box(p.w, 0.7, p.d, mats.woodFur, 0, 1.15, 0, root);
  box(p.w + 0.04, 0.06, p.d + 0.02, mats.brass, 0, 1.52, 0, root);
  box(p.w + 0.02, 0.04, p.d, mats.woodFur, 0, 0.78, 0, root);
  // Simple carved-looking columns (traditional only)
  box(0.04, 0.7, 0.04, mats.woodFur, -p.w / 2 + 0.04, 1.15, p.d / 2, root);
  box(0.04, 0.7, 0.04, mats.woodFur, p.w / 2 - 0.04, 1.15, p.d / 2, root);
  const glow = mats.emissive.clone();
  glow.emissive.set("#ffd27a");
  glow.emissiveIntensity = 0.85;
  cyl(0.04, 0.06, glow, 0, 1.05, p.d / 2 - 0.02, root);
}

function artCanvas(seed: number, style: StyleId): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 512;
  const ctx = c.getContext("2d")!;
  const rng = (n: number) => {
    const x = Math.sin(seed * 12.9898 + n * 78.233) * 43758.5453;
    return x - Math.floor(x);
  };
  const pal =
    style === "luxury"
      ? ["#5c1a1a", "#8a3a2a", "#c4a265", "#efe2cc", "#2a1810"]
      : style === "minimal"
        ? ["#d8d2c8", "#b8b2a8", "#8a8680", "#efece6", "#5a5854"]
        : style === "traditional"
          ? ["#7a2e1f", "#c4a265", "#e8d5b0", "#3a2010", "#a05a30"]
          : ["#3d5a6c", "#d8c2a8", "#6a8a7a", "#f0ebe3", "#2c3a44"];
  ctx.fillStyle = pal[0];
  ctx.fillRect(0, 0, 512, 512);
  // Large colour fields
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = pal[Math.floor(rng(i + 1) * pal.length)];
    ctx.globalAlpha = 0.45 + rng(i + 9) * 0.4;
    const x = rng(i + 2) * 512 - 40;
    const y = rng(i + 3) * 512 - 40;
    const w = 80 + rng(i + 4) * 320;
    const h = 60 + rng(i + 5) * 280;
    if (rng(i + 6) > 0.45) ctx.fillRect(x, y, w, h);
    else {
      ctx.beginPath();
      ctx.ellipse(x + w / 2, y + h / 2, w / 2, h / 2, rng(i + 7) * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  // Horizon / gesture strokes
  ctx.globalAlpha = 0.7;
  ctx.strokeStyle = pal[Math.floor(rng(20) * pal.length)];
  ctx.lineWidth = 6 + rng(21) * 14;
  ctx.beginPath();
  ctx.moveTo(0, 180 + rng(22) * 200);
  ctx.quadraticCurveTo(256, 80 + rng(23) * 300, 512, 200 + rng(24) * 180);
  ctx.stroke();
  ctx.globalAlpha = 1;
  // Thin matte border
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 10;
  ctx.strokeRect(16, 16, 480, 480);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function artFrame(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const root = groupAt(p.x, p.z, p.rot, g);
  const frame = style === "luxury" || style === "traditional" ? mats.brass : mats.frame;
  box(p.w, p.h, 0.04, frame, 0, 1.45, 0, root);
  const paint = new THREE.MeshStandardMaterial({
    map: artCanvas(p.x * 17 + p.z * 31 + p.w * 9, style),
    roughness: 0.82,
    metalness: 0,
    envMapIntensity: 0.15,
  });
  box(p.w - 0.08, p.h - 0.08, 0.02, paint, 0, 1.45, 0.015, root);
}

function rugMesh(p: Placement, g: THREE.Group, mats: Materials, style: StyleId): void {
  const col =
    style === "luxury" ? "#6b1d1d" :
    style === "traditional" ? "#7a3a1a" :
    style === "minimal" ? "#d8d2c8" : "#3d4a58";
  const mat = mats.fabric.clone();
  mat.color.set(col);
  mat.roughness = 0.95;
  const root = groupAt(p.x, p.z, p.rot, g);
  box(p.w, 0.015, p.d, mat, 0, 0.012, 0, root);
}

function anchorOf(kind: Anchor["kind"], p: Placement): Anchor {
  const { fx, fz } = front(p.rot);
  return { kind, x: p.x, z: p.z, fx, fz, width: p.w, depth: p.d, height: p.h, roomId: p.roomId };
}

function placeCatalog(
  catalog: Catalog | null,
  id: ModelId,
  p: Placement,
  group: THREE.Group,
  mats: Materials,
  prefs: Prefs,
): boolean {
  if (!catalog?.has(id)) return false;
  const obj = catalog.instantiate(id, {
    x: p.x,
    z: p.z,
    y: 0,
    rotY: p.rot,
    width: p.w,
    depth: p.d,
    prefs,
    mats,
  });
  if (!obj) return false;
  group.add(obj);
  return true;
}

/** One InstancedMesh per sub-mesh of a repeated CC0 model (chairs, nightstands). */
function instanceRepeated(
  catalog: Catalog | null,
  id: ModelId,
  placements: Placement[],
  group: THREE.Group,
  mats: Materials,
  prefs: Prefs,
  fallback: (p: Placement) => void,
): void {
  if (!placements.length) return;
  if (!catalog?.has(id) || placements.length < 2) {
    let ok = true;
    for (const p of placements) {
      if (!placeCatalog(catalog, id, p, group, mats, prefs)) {
        ok = false;
        fallback(p);
      }
    }
    void ok;
    return;
  }
  const proto = catalog.instantiate(id, {
    x: 0, z: 0, y: 0, rotY: 0,
    width: placements[0].w,
    depth: placements[0].d,
    prefs, mats,
    shareMaterials: true,
  });
  if (!proto) {
    for (const p of placements) fallback(p);
    return;
  }
  proto.updateMatrixWorld(true);
  const meshes: THREE.Mesh[] = [];
  proto.traverse((o) => {
    const m = o as THREE.Mesh;
    if (m.isMesh) meshes.push(m);
  });
  const _q = new THREE.Quaternion();
  const _p = new THREE.Vector3();
  const _s = new THREE.Vector3(1, 1, 1);
  const _up = new THREE.Vector3(0, 1, 0);
  const world = new THREE.Matrix4();
  for (const mesh of meshes) {
    const im = new THREE.InstancedMesh(mesh.geometry, mesh.material, placements.length);
    im.castShadow = true;
    im.receiveShadow = true;
    im.name = `instance:${id}:${mesh.name}`;
    im.userData.role = proto.userData.role;
    im.userData.modelId = id;
    const local = mesh.matrixWorld.clone();
    for (let i = 0; i < placements.length; i++) {
      const pl = placements[i];
      _p.set(pl.x, 0, pl.z);
      _q.setFromAxisAngle(_up, pl.rot);
      world.compose(_p, _q, _s);
      world.multiply(local);
      im.setMatrixAt(i, world);
    }
    im.instanceMatrix.needsUpdate = true;
    group.add(im);
  }
}

export function furnishFromPlacements(
  placements: Placement[],
  group: THREE.Group,
  mats: Materials,
  prefs: Prefs,
  catalog: Catalog | null = null,
): Anchor[] {
  const anchors: Anchor[] = [];
  const style = prefs.style;
  const chairs: Placement[] = [];
  const nights: Placement[] = [];
  const chairId: ModelId = style === "traditional" ? "woodChair" : "diningChair";
  for (const p of placements) {
    switch (p.kind) {
      case "sofa":
        if (!placeCatalog(catalog, sofaIdFor(style), p, group, mats, prefs)) {
          modernSofa(p, group, mats, style);
        }
        anchors.push(anchorOf("sofa", p));
        break;
      case "sofa-chaise":
        if (!placeCatalog(catalog, "sofaChaise", p, group, mats, prefs)) {
          sofaChaise(p, group, mats, style);
        }
        break;
      case "armchair":
        if (!placeCatalog(catalog, "armchair", p, group, mats, prefs)) {
          armchair(p, group, mats, style);
        }
        break;
      case "coffee":
        if (!placeCatalog(catalog, style === "traditional" ? "coffeeClassic" : "coffeeModern", p, group, mats, prefs)) {
          coffeeTable(p, group, mats, style);
        }
        break;
      case "tv":
        if (!placeCatalog(catalog, "tv", p, group, mats, prefs)) {
          tvUnit(p, group, mats, style);
        }
        anchors.push(anchorOf("tv", p));
        break;
      case "diningTable":
        if (!placeCatalog(catalog, style === "traditional" || style === "minimal" ? "woodTable" : "diningTable", p, group, mats, prefs)) {
          diningTable(p, group, mats, style);
        }
        anchors.push(anchorOf("dining", p));
        break;
      case "diningChair":
        chairs.push(p);
        break;
      case "kitchen":
        kitchenRun(p, group, mats, style);
        anchors.push(anchorOf("kitchen", p));
        break;
      case "fridge":
        if (!placeCatalog(catalog, "fridge", p, group, mats, prefs)) fridge(p, group, mats);
        break;
      case "bed":
        if (!placeCatalog(catalog, "bed", p, group, mats, prefs)) {
          platformBed(p, group, mats, style);
        }
        anchors.push(anchorOf("bed", p));
        break;
      case "nightstand":
        nights.push(p);
        break;
      case "wardrobe":
        if (!placeCatalog(catalog, "wardrobe", p, group, mats, prefs)) {
          wardrobe(p, group, mats, style);
        }
        anchors.push(anchorOf("wardrobe", p));
        break;
      case "bench":
        bench(p, group, mats, style);
        break;
      case "toilet":
        if (!placeCatalog(catalog, "toilet", p, group, mats, prefs)) toilet(p, group, mats);
        anchors.push(anchorOf("bath", p));
        break;
      case "basin":
        if (!placeCatalog(catalog, "vanity", p, group, mats, prefs)) {
          basin(p, group, mats, style);
        }
        anchors.push(anchorOf("basin", p));
        break;
      case "shower":
        // 3dassets shower_enclosure scales into a solid partition in these rooms.
        shower(p, group, mats);
        anchors.push(anchorOf("shower", p));
        break;
      case "loungeChair":
        loungeChair(p, group, mats);
        anchors.push(anchorOf("outdoor", p));
        break;
      case "outdoorTable":
        outdoorTable(p, group, mats);
        break;
      case "console":
        if (!placeCatalog(catalog, "console", p, group, mats, prefs)) {
          consoleTable(p, group, mats);
        }
        anchors.push(anchorOf("foyer", p));
        break;
      case "plant":
        plantMesh(p, group, mats, catalog, prefs);
        break;
      case "lamp":
        if (!placeCatalog(catalog, "lamp", p, group, mats, prefs)) {
          floorLamp(p, group, mats, style);
        }
        break;
      case "mandir":
        mandirMesh(p, group, mats);
        break;
      case "art":
        artFrame(p, group, mats, style);
        break;
      case "rug":
        if (!placeCatalog(catalog, "rug", p, group, mats, prefs)) {
          rugMesh(p, group, mats, style);
        }
        break;
      default:
        break;
    }
  }
  instanceRepeated(catalog, chairId, chairs, group, mats, prefs, (p) => diningChair(p, group, mats, style));
  instanceRepeated(catalog, "nightstand", nights, group, mats, prefs, (p) => nightstand(p, group, mats, style));
  return anchors;
}

/** Wall curtains for a window opening, in world space. Called from interior.ts. */
export function addCurtains(
  x: number, z: number, w: number, d: number,
  wallH: number, g: THREE.Group, mats: Materials, style: StyleId,
): void {
  const alongX = w >= d;
  const fabric = mats.fabric.clone();
  fabric.color.set(style === "luxury" ? "#5c1a1a" : style === "traditional" ? "#7a3a1a" : style === "minimal" ? "#efeae2" : "#3d4a58");
  fabric.side = THREE.DoubleSide;
  fabric.roughness = 0.9;
  fabric.transparent = false;
  fabric.normalScale = new THREE.Vector2(0.85, 0.85);
  const height = Math.min(2.15, wallH - 0.35);
  const y = 0.25 + height / 2;
  const rod = hardwareOf(mats, style);
  const folds = 6;
  const panel = (px: number, pz: number, pw: number, pd: number) => {
    for (let i = 0; i < folds; i++) {
      const t = (i + 0.5) / folds;
      const wave = Math.sin(i * 1.35) * 0.018;
      if (alongX) {
        const ww = (pw / folds) * 1.2;
        box(ww, height, 0.03, fabric, px - pw / 2 + t * pw, y, pz + wave, g);
      } else {
        const dd = (pd / folds) * 1.2;
        box(0.03, height, dd, fabric, px + wave, y, pz - pd / 2 + t * pd, g);
      }
    }
  };
  if (alongX) {
    const half = Math.max(0.2, w * 0.18);
    const zin = z + (d > 0 ? 0.09 : -0.09);
    panel(x - w / 2 + half / 2, zin, half, 0.04);
    panel(x + w / 2 - half / 2, zin, half, 0.04);
    box(w + 0.14, 0.025, 0.025, rod, x, 0.25 + height + 0.03, zin, g);
    // Finials
    const fin = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), rod);
    fin.position.set(x - w / 2 - 0.05, 0.25 + height + 0.03, zin);
    g.add(fin);
    const fin2 = fin.clone();
    fin2.position.x = x + w / 2 + 0.05;
    g.add(fin2);
  } else {
    const half = Math.max(0.2, d * 0.18);
    const xin = x + (w > 0 ? 0.09 : -0.09);
    panel(xin, z - d / 2 + half / 2, 0.04, half);
    panel(xin, z + d / 2 - half / 2, 0.04, half);
    box(0.025, 0.025, d + 0.14, rod, xin, 0.25 + height + 0.03, z, g);
    const fin = new THREE.Mesh(new THREE.SphereGeometry(0.03, 10, 8), rod);
    fin.position.set(xin, 0.25 + height + 0.03, z - d / 2 - 0.05);
    g.add(fin);
    const fin2 = fin.clone();
    fin2.position.z = z + d / 2 + 0.05;
    g.add(fin2);
  }
}
