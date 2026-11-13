import * as THREE from "three";
import type { FlooringId, KitchenId, Prefs, StyleId } from "./types";
import { applyTriplanar } from "./triplanar";

export interface TexSet {
  map: THREE.Texture;
  normalMap: THREE.Texture;
  roughnessMap: THREE.Texture;
}

export interface Materials {
  wood: TexSet;
  marble: TexSet;
  tile: TexSet;
  terra: TexSet;
  granite: TexSet;
  concrete: TexSet;
  concfloor: TexSet;
  plaster: TexSet;
  grass: TexSet;
  pave: TexSet;
  fabricTex: TexSet;
  brushed: TexSet;
  wool: TexSet;
  linen: TexSet;
  boucle: TexSet;
  wallPaint: TexSet;
  wall: THREE.MeshStandardMaterial;
  ceiling: THREE.MeshStandardMaterial;
  glass: THREE.MeshPhysicalMaterial;
  glassRail: THREE.MeshPhysicalMaterial;
  frame: THREE.MeshStandardMaterial;
  door: THREE.MeshStandardMaterial;
  metal: THREE.MeshStandardMaterial;
  gold: THREE.MeshStandardMaterial;
  brass: THREE.MeshStandardMaterial;
  blackMetal: THREE.MeshStandardMaterial;
  fabric: THREE.MeshStandardMaterial;
  mattress: THREE.MeshStandardMaterial;
  plant: THREE.MeshStandardMaterial;
  soil: THREE.MeshStandardMaterial;
  counter: THREE.MeshStandardMaterial;
  cabinet: THREE.MeshStandardMaterial;
  woodFur: THREE.MeshStandardMaterial;
  ceramic: THREE.MeshPhysicalMaterial;
  water: THREE.MeshPhysicalMaterial;
  emissive: THREE.MeshStandardMaterial;
}

const BASE = () => `${import.meta.env.BASE_URL}textures/`;

/** World-space metres covered by one repeat of each floor texture. */
export const FLOOR_TILE_M: Record<string, number> = {
  wood: 1.5,
  marble: 3.4,
  tile: 1.7,
  "tile-wet": 1.7,
  terra: 2.0,
};

function loadTex(
  loader: THREE.TextureLoader,
  file: string,
  srgb: boolean,
  repeat: number,
  aniso: number,
): Promise<THREE.Texture> {
  return new Promise((resolve, reject) => {
    loader.load(
      BASE() + file,
      (t) => {
        t.wrapS = t.wrapT = THREE.RepeatWrapping;
        t.repeat.set(repeat, repeat);
        t.anisotropy = aniso;
        t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.LinearSRGBColorSpace;
        t.needsUpdate = true;
        resolve(t);
      },
      undefined,
      reject,
    );
  });
}

async function set(
  loader: THREE.TextureLoader,
  prefix: string,
  aniso: number,
  repeat: number,
): Promise<TexSet> {
  const [map, normalMap, roughnessMap] = await Promise.all([
    loadTex(loader, `${prefix}_diff.jpg`, true, repeat, aniso),
    loadTex(loader, `${prefix}_nor.jpg`, false, repeat, aniso),
    loadTex(loader, `${prefix}_rough.jpg`, false, repeat, aniso),
  ]);
  return { map, normalMap, roughnessMap };
}

async function setPh(
  loader: THREE.TextureLoader,
  name: string,
  aniso: number,
  repeat: number,
): Promise<TexSet> {
  const [map, normalMap, roughnessMap] = await Promise.all([
    loadTex(loader, `ph/${name}_diff.webp`, true, repeat, aniso),
    loadTex(loader, `ph/${name}_nor.webp`, false, repeat, aniso),
    loadTex(loader, `ph/${name}_rough.webp`, false, repeat, aniso),
  ]);
  return { map, normalMap, roughnessMap };
}

export async function loadMaterials(
  renderer: THREE.WebGLRenderer,
  onProgress: (p: number) => void,
): Promise<Materials> {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const loader = new THREE.TextureLoader();
  const manager = new THREE.LoadingManager();
  loader.manager = manager;
  manager.onProgress = (_u, loaded, total) => onProgress(total ? loaded / total : 0);

  const [wood, marble, tile, terra, granite, concrete, concfloor, plaster, grass, pave, fabricTex, brushed, wool, linen, boucle, wallPaint] =
    await Promise.all([
      set(loader, "oakplank", aniso, 1),
      set(loader, "marblevein", aniso, 1),
      set(loader, "tile", aniso, 1),
      set(loader, "terra", aniso, 1),
      set(loader, "granite", aniso, 1),
      set(loader, "concrete", aniso, 1),
      set(loader, "concfloor", aniso, 1),
      set(loader, "plaster", aniso, 2),
      set(loader, "grass", aniso, 1),
      set(loader, "pave", aniso, 1),
      (async () => {
        const [normalMap, roughnessMap] = await Promise.all([
          loadTex(loader, "fabric_nor.jpg", false, 5, aniso),
          loadTex(loader, "fabric_rough.jpg", false, 5, aniso),
        ]);
        const map = whiteTex();
        return { map, normalMap, roughnessMap };
      })(),
      (async () => {
        const [normalMap, roughnessMap] = await Promise.all([
          loadTex(loader, "brushed_nor.jpg", false, 4, aniso),
          loadTex(loader, "brushed_rough.jpg", false, 4, aniso),
        ]);
        const map = whiteTex();
        return { map, normalMap, roughnessMap };
      })(),
      setPh(loader, "poly_wool_herringbone", aniso, 4),
      setPh(loader, "polar_fleece", aniso, 3),
      setPh(loader, "wool_boucle", aniso, 3),
      setPh(loader, "beige_wall_001", aniso, 2),
    ]);

  const std = (color: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05, ...extra });

  return {
    wood, marble, tile, terra, granite, concrete, concfloor, plaster, grass, pave, fabricTex, brushed, wool, linen, boucle, wallPaint,
    wall: applyTriplanar(std("#f4f1ea", { roughness: 0.88, metalness: 0, map: wallPaint.map, normalMap: wallPaint.normalMap, normalScale: new THREE.Vector2(0.28, 0.28), roughnessMap: wallPaint.roughnessMap, envMapIntensity: 0.12 }), 0.55),
    ceiling: std("#f7f4ee", { roughness: 0.92, metalness: 0, envMapIntensity: 0.2 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: "#eef4f8",
      transparent: true,
      opacity: 0.14,
      roughness: 0.04,
      metalness: 0.02,
      transmission: 0.86,
      thickness: 0.03,
      ior: 1.45,
      envMapIntensity: 0.35,
    }),
    glassRail: new THREE.MeshPhysicalMaterial({
      color: "#e8f0f5",
      transparent: true,
      opacity: 0.16,
      roughness: 0.05,
      metalness: 0.08,
      transmission: 0.8,
      thickness: 0.02,
      envMapIntensity: 0.3,
    }),
    frame: std("#2b2e2c", { roughness: 0.45, metalness: 0.35 }),
    door: std("#6b4a2e", { roughness: 0.55, metalness: 0.05, map: wood.map, roughnessMap: wood.roughnessMap, normalMap: wood.normalMap, normalScale: new THREE.Vector2(0.4, 0.4) }),
    metal: std("#8a8e92", { roughness: 0.35, metalness: 0.8 }),
    gold: std("#c4a265", { roughness: 0.3, metalness: 0.7 }),
    brass: std("#c9a15b", {
      roughness: 0.34,
      metalness: 0.92,
      normalMap: brushed.normalMap,
      roughnessMap: brushed.roughnessMap,
      normalScale: new THREE.Vector2(0.7, 0.25),
      envMapIntensity: 0.85,
    }),
    blackMetal: std("#1c1e20", {
      roughness: 0.58,
      metalness: 0.72,
      normalMap: brushed.normalMap,
      roughnessMap: brushed.roughnessMap,
      normalScale: new THREE.Vector2(0.5, 0.2),
      envMapIntensity: 0.4,
    }),
    fabric: std("#8e8578", {
      roughness: 0.84,
      metalness: 0,
      map: wool.map,
      normalMap: wool.normalMap,
      roughnessMap: wool.roughnessMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      envMapIntensity: 0.28,
    }),
    mattress: std("#d8d0c4", { roughness: 0.94, map: linen.map, normalMap: linen.normalMap, normalScale: new THREE.Vector2(0.7, 0.7), roughnessMap: linen.roughnessMap, envMapIntensity: 0.12 }),
    plant: std("#2d5a3d", { roughness: 0.8 }),
    soil: std("#3a2a1c", { roughness: 1 }),
    counter: new THREE.MeshPhysicalMaterial({
      color: "#d8d4cc", roughness: 0.22, metalness: 0.04,
      clearcoat: 0.7, clearcoatRoughness: 0.12, envMapIntensity: 1.05,
    }),
    cabinet: std("#f3f1ec", { roughness: 0.55 }),
    woodFur: std("#8b5a2b", {
      roughness: 0.62,
      metalness: 0.02,
      map: wood.map,
      roughnessMap: wood.roughnessMap,
      normalMap: wood.normalMap,
      normalScale: new THREE.Vector2(0.55, 0.55),
      envMapIntensity: 0.55,
    }),
    ceramic: new THREE.MeshPhysicalMaterial({
      color: "#f4f6f7", roughness: 0.2, metalness: 0.03,
      clearcoat: 0.8, clearcoatRoughness: 0.14, envMapIntensity: 1.0,
    }),
    water: new THREE.MeshPhysicalMaterial({
      color: "#6a9ab8",
      transparent: true,
      opacity: 0.55,
      roughness: 0.15,
      metalness: 0.05,
      transmission: 0.4,
    }),
    emissive: std("#fff4d8", { emissive: "#fff4d8", emissiveIntensity: 0.85, roughness: 1 }),
  };
}

function whiteTex(): THREE.Texture {
  const data = new Uint8Array([255, 255, 255, 255]);
  const t = new THREE.DataTexture(data, 1, 1, THREE.RGBAFormat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

export const STYLE_DEFAULTS: Record<
  StyleId,
  { flooring: FlooringId; wall: string; kitchen: KitchenId; fabric: string; wood: string }
> = {
  modern: { flooring: "wood", wall: "#f4f1ea", kitchen: "white", fabric: "#8e8578", wood: "#7a5a38" },
  luxury: { flooring: "marble", wall: "#f3ebe0", kitchen: "walnut", fabric: "#5c1a1a", wood: "#3f2a1a" },
  minimal: { flooring: "tile", wall: "#f7f7f5", kitchen: "white", fabric: "#d0cbc2", wood: "#c4b7a0" },
  traditional: { flooring: "marble", wall: "#f3e6d0", kitchen: "granite", fabric: "#7a2e1f", wood: "#5c3310" },
};

export const WALL_SWATCHES: { id: string; color: string; name: string }[] = [
  { id: "white", color: "#f7f5f0", name: "White" },
  { id: "cream", color: "#f3ebe0", name: "Cream" },
  { id: "sage", color: "#d5ddd2", name: "Sage" },
  { id: "sand", color: "#e8d7bc", name: "Sand" },
  { id: "grey", color: "#d9d6d0", name: "Grey" },
  { id: "rose", color: "#ead7d3", name: "Rose" },
  { id: "terracotta", color: "#e2b89a", name: "Terracotta" },
  { id: "mint", color: "#d5e4dc", name: "Mint" },
];

export function flooringSet(m: Materials, id: FlooringId): TexSet {
  if (id === "marble") return m.marble;
  if (id === "tile") return m.tile;
  return m.wood;
}

export function applyStyleDefaults(style: StyleId, prefs: Prefs): Prefs {
  const d = STYLE_DEFAULTS[style];
  return { ...prefs, style, flooring: d.flooring, wallColor: d.wall, kitchen: d.kitchen };
}

export function applyKitchen(m: Materials, id: KitchenId) {
  if (id === "white") {
    m.cabinet.color.set("#f3f1ec");
    m.cabinet.map = null;
    m.counter.color.set("#ece9e2");
    m.counter.map = null;
    m.counter.roughness = 0.18;
    if ("clearcoat" in m.counter) {
      (m.counter as THREE.MeshPhysicalMaterial).clearcoat = 0.85;
      (m.counter as THREE.MeshPhysicalMaterial).clearcoatRoughness = 0.1;
    }
  } else if (id === "walnut") {
    m.cabinet.color.set("#6b4324");
    m.cabinet.map = m.wood.map;
    m.counter.color.set("#1f1f1f");
    m.counter.map = null;
    m.counter.roughness = 0.25;
  } else if (id === "black") {
    m.cabinet.color.set("#1e1f21");
    m.cabinet.map = null;
    m.counter.color.set("#d8d4cc");
    m.counter.map = null;
    m.counter.roughness = 0.25;
  } else {
    m.cabinet.color.set("#6b4324");
    m.cabinet.map = m.wood.map;
    m.counter.color.set("#ffffff");
    m.counter.map = m.granite.map;
    m.counter.normalMap = m.granite.normalMap;
    m.counter.roughnessMap = m.granite.roughnessMap;
    m.counter.roughness = 0.4;
  }
  m.cabinet.needsUpdate = true;
  m.counter.needsUpdate = true;
}

/** Apply style-preset fabric and wood tints so furniture reacts live. */
export function applyStyleLook(m: Materials, prefs: Prefs): void {
  const d = STYLE_DEFAULTS[prefs.style];
  m.fabric.color.set(d.fabric);
  m.fabric.needsUpdate = true;
  m.woodFur.color.set(d.wood);
  m.woodFur.needsUpdate = true;
  if (prefs.style === "luxury") m.mattress.color.set("#efe2cc");
  else if (prefs.style === "traditional") m.mattress.color.set("#f3e6d0");
  else if (prefs.style === "minimal") m.mattress.color.set("#f4f2ec");
  else m.mattress.color.set("#ece6da");
  m.mattress.needsUpdate = true;
}

/**
 * World-metre UVs for a horizontal surface. After ShapeGeometry is rotated
 * onto XZ, U = world X and V = world Z (metres). Texture.repeat then sets
 * the real-world tile size (see FLOOR_TILE_M / cloneFloorMaps).
 */
export function applyWorldXZUVs(geo: THREE.BufferGeometry, scale = 1): void {
  const pos = geo.attributes.position;
  if (!pos) return;
  // Shift into the positive quadrant so RepeatWrapping is reliable on
  // SwiftShader / mobile (world Z is often negative after rotY 180).
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    uv[i * 2] = pos.getX(i) * scale + 40;
    uv[i * 2 + 1] = -pos.getZ(i) * scale + 40;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  geo.computeBoundingBox();
  geo.computeBoundingSphere();
  const n = geo.attributes.normal;
  if (n && n.getY(0) < 0) {
    for (let i = 0; i < n.count; i++) {
      n.setXYZ(i, -n.getX(i), -n.getY(i), -n.getZ(i));
    }
    n.needsUpdate = true;
    const idx = geo.index;
    if (idx) {
      for (let i = 0; i < idx.count; i += 3) {
        const b = idx.getX(i + 1);
        idx.setX(i + 1, idx.getX(i + 2));
        idx.setX(i + 2, b);
      }
      idx.needsUpdate = true;
    }
  }
}

/**
 * Floors share the loaded TexSet (same Texture objects as on disk) so
 * SwiftShader actually samples the albedo — Texture.clone() produced a
 * Standard material whose normal mapped and whose diffuse stayed white.
 * World-metre tile size is baked into the geometry UVs (see uvScaleFor)
 * so we never mutate wood.repeat, which furniture (woodFur) also uses.
 */
export function uvScaleFor(kind: string): number {
  return 1 / (FLOOR_TILE_M[kind] ?? 2.0);
}

export function makeFloorMaterial(
  tex: TexSet,
  kind: FlooringId | "tile-wet" | "terra",
  tint = "#ffffff",
): THREE.MeshStandardMaterial {
  const marble = kind === "marble";
  const wet = kind === "tile" || kind === "tile-wet";
  tex.map.wrapS = tex.map.wrapT = THREE.RepeatWrapping;
  tex.normalMap.wrapS = tex.normalMap.wrapT = THREE.RepeatWrapping;
  tex.roughnessMap.wrapS = tex.roughnessMap.wrapT = THREE.RepeatWrapping;
  return new THREE.MeshStandardMaterial({
    color: tint,
    map: tex.map,
    normalMap: tex.normalMap,
    roughnessMap: tex.roughnessMap,
    roughness: marble ? 0.28 : wet ? 0.42 : 0.6,
    metalness: 0.0,
    envMapIntensity: marble ? 0.28 : wet ? 0.2 : 0.1,
    normalScale: new THREE.Vector2(marble ? 0.45 : 0.7, marble ? 0.45 : 0.7),
    side: THREE.DoubleSide,
  });
}

export function tuneFloorMaterial(mat: THREE.MeshStandardMaterial, kind: FlooringId | "tile-wet" | "terra"): void {
  const marble = kind === "marble";
  const tile = kind === "tile" || kind === "tile-wet";
  mat.roughness = marble ? 0.28 : tile ? 0.42 : 0.6;
  mat.envMapIntensity = marble ? 0.28 : tile ? 0.2 : 0.12;
  mat.metalness = 0;
  if (mat.normalScale) mat.normalScale.set(marble ? 0.45 : 0.7, marble ? 0.45 : 0.7);
  mat.needsUpdate = true;
}

/** Swap living-floor maps when the user picks Wood / Marble / Tile. */
export function assignFloorMaps(
  mat: THREE.MeshStandardMaterial,
  tex: TexSet,
  kind: FlooringId,
): void {
  mat.map = tex.map;
  mat.normalMap = tex.normalMap;
  mat.roughnessMap = tex.roughnessMap;
  tuneFloorMaterial(mat, kind);
}

export function hardwareOf(m: Materials, style: StyleId): THREE.MeshStandardMaterial {
  return style === "luxury" || style === "traditional" ? m.brass : m.blackMetal;
}
