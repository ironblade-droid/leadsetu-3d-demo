import * as THREE from "three";
import type { FlooringId, KitchenId, Prefs, StyleId } from "./types";

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
  wall: THREE.MeshStandardMaterial;
  ceiling: THREE.MeshStandardMaterial;
  glass: THREE.MeshPhysicalMaterial;
  glassRail: THREE.MeshPhysicalMaterial;
  frame: THREE.MeshStandardMaterial;
  door: THREE.MeshStandardMaterial;
  metal: THREE.MeshStandardMaterial;
  gold: THREE.MeshStandardMaterial;
  fabric: THREE.MeshStandardMaterial;
  mattress: THREE.MeshStandardMaterial;
  plant: THREE.MeshStandardMaterial;
  soil: THREE.MeshStandardMaterial;
  counter: THREE.MeshStandardMaterial;
  cabinet: THREE.MeshStandardMaterial;
  woodFur: THREE.MeshStandardMaterial;
  ceramic: THREE.MeshStandardMaterial;
  water: THREE.MeshPhysicalMaterial;
  emissive: THREE.MeshStandardMaterial;
}

const BASE = () => `${import.meta.env.BASE_URL}textures/`;

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

export async function loadMaterials(
  renderer: THREE.WebGLRenderer,
  onProgress: (p: number) => void,
): Promise<Materials> {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const loader = new THREE.TextureLoader();
  const manager = new THREE.LoadingManager();
  loader.manager = manager;
  manager.onProgress = (_u, loaded, total) => onProgress(total ? loaded / total : 0);

  const [wood, marble, tile, terra, granite, concrete, concfloor, plaster, grass, pave] =
    await Promise.all([
      set(loader, "wood", aniso, 1),
      set(loader, "marble", aniso, 1),
      set(loader, "tile", aniso, 1),
      set(loader, "terra", aniso, 1),
      set(loader, "granite", aniso, 1),
      set(loader, "concrete", aniso, 1),
      set(loader, "concfloor", aniso, 1),
      set(loader, "plaster", aniso, 2),
      set(loader, "grass", aniso, 1),
      set(loader, "pave", aniso, 1),
    ]);

  const std = (color: string, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.05, ...extra });

  return {
    wood, marble, tile, terra, granite, concrete, concfloor, plaster, grass, pave,
    wall: std("#f4f1ea", { roughness: 0.85, metalness: 0, map: plaster.map, normalMap: plaster.normalMap, normalScale: new THREE.Vector2(0.35, 0.35), roughnessMap: plaster.roughnessMap }),
    ceiling: std("#f7f4ee", { roughness: 0.9 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: "#9ec5d8",
      transparent: true,
      opacity: 0.28,
      roughness: 0.05,
      metalness: 0.05,
      transmission: 0.6,
      thickness: 0.04,
      ior: 1.45,
    }),
    glassRail: new THREE.MeshPhysicalMaterial({
      color: "#d7e6ef",
      transparent: true,
      opacity: 0.22,
      roughness: 0.04,
      metalness: 0.1,
      transmission: 0.7,
      thickness: 0.02,
    }),
    frame: std("#2b2e2c", { roughness: 0.4, metalness: 0.35 }),
    door: std("#6b4a2e", { roughness: 0.55, metalness: 0.05, map: wood.map, roughnessMap: wood.roughnessMap }),
    metal: std("#8a8e92", { roughness: 0.35, metalness: 0.8 }),
    gold: std("#c4a265", { roughness: 0.3, metalness: 0.7 }),
    fabric: std("#4a5560", { roughness: 0.85, metalness: 0 }),
    mattress: std("#ece6da", { roughness: 0.9 }),
    plant: std("#2d5a3d", { roughness: 0.8 }),
    soil: std("#3a2a1c", { roughness: 1 }),
    counter: std("#d8d4cc", { roughness: 0.35, metalness: 0.1 }),
    cabinet: std("#f3f1ec", { roughness: 0.55 }),
    woodFur: std("#8b5a2b", { roughness: 0.55, map: wood.map, roughnessMap: wood.roughnessMap }),
    ceramic: std("#f4f6f7", { roughness: 0.3, metalness: 0.05 }),
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

export const STYLE_DEFAULTS: Record<
  StyleId,
  { flooring: FlooringId; wall: string; kitchen: KitchenId; fabric: string; wood: string }
> = {
  modern: { flooring: "wood", wall: "#f4f1ea", kitchen: "white", fabric: "#4a5560", wood: "#7a5a38" },
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
    m.counter.roughness = 0.3;
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
