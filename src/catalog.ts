import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import type { Prefs, StyleId } from "./types";
import { STYLE_DEFAULTS, type Materials } from "./materials";

export type ModelId =
  | "sofaModern"
  | "sofaClassic"
  | "sofaAlt"
  | "sofaChaise"
  | "coffeeModern"
  | "coffeeClassic"
  | "armchair"
  | "ottoman"
  | "diningChair"
  | "woodChair"
  | "diningTable"
  | "woodTable"
  | "bed"
  | "nightstand"
  | "console"
  | "sideTable"
  | "cabinet"
  | "wardrobe"
  | "chest"
  | "tv"
  | "lamp"
  | "plant"
  | "plantAlt"
  | "vase"
  | "rug"
  | "toilet"
  | "basin"
  | "vanity"
  | "shower"
  | "fridge"
  | "stool";

export type ModelRole = "fabric" | "wood" | "metal" | "plant" | "art" | "mixed" | "ceramic";

export interface ModelInfo {
  file: string;
  role: ModelRole;
  /** Extra yaw so the model's front faces +Z after placement. */
  yawOffset: number;
  author: string;
  source: string;
  /** Keep the model's authored PBR maps; do not retint or replace textures. */
  keepPbr?: boolean;
}

export const MODEL_MANIFEST: Record<ModelId, ModelInfo> = {
  sofaModern:   { file: "v5/sofa_3seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaClassic:  { file: "v5/sofa_3seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaAlt:      { file: "v5/sofa_2seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaChaise:   { file: "v5/chaise.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  coffeeModern: { file: "ph/coffee_table_round_01.glb", role: "mixed", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/coffee_table_round_01", keepPbr: true },
  coffeeClassic:{ file: "v5/coffee_rect.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  armchair:     { file: "ph/modern_arm_chair_01.glb", role: "mixed", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/modern_arm_chair_01", keepPbr: true },
  ottoman:      { file: "ph/Ottoman_01.glb", role: "fabric", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/Ottoman_01", keepPbr: true },
  diningChair:  { file: "v5/dining_chair_uphol.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  woodChair:    { file: "v5/dining_chair_timber.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  diningTable:  { file: "v5/dining_table6.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  woodTable:    { file: "v5/dining_table6.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  bed:          { file: "v5/bed_double.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  nightstand:   { file: "ph/side_table_01.glb", role: "wood", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/side_table_01", keepPbr: true },
  console:      { file: "v5/console.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sideTable:    { file: "ph/side_table_01.glb", role: "wood", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/side_table_01", keepPbr: true },
  cabinet:      { file: "v5/chest_drawers.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  wardrobe:     { file: "v5/wardrobe_sliding.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  chest:        { file: "v5/chest_drawers.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  tv:           { file: "ph/modern_wooden_cabinet.glb", role: "wood", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/modern_wooden_cabinet", keepPbr: true },
  lamp:         { file: "v5/lamp_floor.glb", role: "metal", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  plant:        { file: "potted_plant_04.glb", role: "plant", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/potted_plant_04", keepPbr: true },
  plantAlt:     { file: "ph/potted_plant_02.glb", role: "plant", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/potted_plant_02", keepPbr: true },
  vase:         { file: "ph/ceramic_vase_01.glb", role: "ceramic", yawOffset: 0, author: "Poly Haven", source: "https://polyhaven.com/a/ceramic_vase_01", keepPbr: true },
  rug:          { file: "v5/rug_wool.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  toilet:       { file: "v5/wc_close.glb", role: "ceramic", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  basin:        { file: "v5/basin_round.glb", role: "ceramic", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  vanity:       { file: "v5/vanity_800.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  shower:       { file: "v5/shower_enclosure.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  fridge:       { file: "v5/kit_fridge_housing.glb", role: "metal", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  stool:        { file: "v5/dining_chair_timber.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
};

export interface PlaceOpts {
  x: number;
  z: number;
  y?: number;
  rotY: number;
  /** Desired width along the model's local X, in metres. */
  width?: number;
  /** Desired depth along the model's local Z, in metres. */
  depth?: number;
  /** Desired height in metres (used for wall art, lamps). */
  height?: number;
  /** If true, share materials with the prototype (for InstancedMesh). */
  shareMaterials?: boolean;
  prefs: Prefs;
  mats: Materials;
}

export interface Proto {
  root: THREE.Object3D;
  size: THREE.Vector3;
  min: THREE.Vector3;
}

export interface Catalog {
  ready: boolean;
  has(id: ModelId): boolean;
  instantiate(id: ModelId, opts: PlaceOpts): THREE.Group | null;
  /** Shared-geometry prototype at the origin, already style-tinted and scaled. */
  proto(id: ModelId, opts: PlaceOpts): Proto | null;
}

let loading: Promise<Catalog> | null = null;
let instance: Catalog | null = null;

export function getCatalog(): Catalog | null {
  return instance;
}

export function loadCatalog(
  renderer: THREE.WebGLRenderer,
  onProgress?: (p: number) => void,
): Promise<Catalog> {
  if (instance?.ready) return Promise.resolve(instance);
  if (loading) return loading;
  loading = actuallyLoad(renderer, onProgress);
  return loading;
}

async function actuallyLoad(
  renderer: THREE.WebGLRenderer,
  onProgress?: (p: number) => void,
): Promise<Catalog> {
  const base = `${import.meta.env.BASE_URL}models/`;
  const dracoPath = `${import.meta.env.BASE_URL}draco/`;

  const draco = new DRACOLoader();
  draco.setDecoderPath(dracoPath);
  draco.preload();

  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);
  loader.setMeshoptDecoder(MeshoptDecoder);

  const proto = new Map<ModelId, Proto>();
  const ids = Object.keys(MODEL_MANIFEST) as ModelId[];
  let done = 0;

  await Promise.all(
    ids.map(async (id) => {
      const info = MODEL_MANIFEST[id];
      try {
        const gltf = await loader.loadAsync(base + info.file);
        const root = gltf.scene;
        root.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const min = box.min.clone();
        // Shadows on every mesh, and clone-safe materials.
        root.traverse((o) => {
          const m = o as THREE.Mesh;
          if (m.isMesh) {
            m.castShadow = true;
            m.receiveShadow = true;
            if (m.material) {
              const list = Array.isArray(m.material) ? m.material : [m.material];
              for (const mat of list) {
                if ("envMapIntensity" in mat) {
                  (mat as THREE.MeshStandardMaterial).envMapIntensity =
                    info.role === "wood" || info.role === "fabric" ? 0.55 : 0.85;
                }
              }
            }
          }
        });
        proto.set(id, { root, size, min });
      } catch (err) {
        console.warn(`[catalog] failed to load ${id}:`, err);
      } finally {
        done += 1;
        onProgress?.(done / ids.length);
      }
    }),
  );

  const catalog: Catalog = {
    ready: true,
    has(id) {
      return proto.has(id);
    },
    instantiate(id, opts) {
      const p = proto.get(id);
      if (!p) return null;
      const info = MODEL_MANIFEST[id];
      const clone = p.root.clone(true);
      // Unique materials so style tints don't leak across instances,
      // unless the caller is going to instance and share them.
      if (!opts.shareMaterials) {
        clone.traverse((o) => {
          const m = o as THREE.Mesh;
          if (!m.isMesh) return;
          if (Array.isArray(m.material)) m.material = m.material.map((x) => x.clone());
          else if (m.material) m.material = m.material.clone();
        });
      }

      const group = new THREE.Group();
      group.name = `model:${id}`;
      group.userData.role = info.role;
      group.userData.modelId = id;
      group.userData.keepPbr = !!info.keepPbr;
      group.add(clone);

      // Sit on the floor (y = 0) and uniform-scale to fit the placement footprint.
      const sx = p.size.x || 1;
      const sy = p.size.y || 1;
      const sz = p.size.z || 1;
      let scale = 1;
      if (opts.width && opts.width > 0 && opts.depth && opts.depth > 0) {
        scale = Math.min(opts.width / sx, opts.depth / sz);
      } else if (opts.width && opts.width > 0) {
        const footprint = Math.max(sx, sz);
        scale = opts.width / footprint;
      } else if (opts.height && opts.height > 0) {
        scale = opts.height / sy;
      }
      clone.scale.setScalar(scale);
      // Shift so the bounding-box min sits on y=0 and the xz centre is at the origin.
      clone.position.set(
        -((p.min.x + p.size.x / 2) * scale),
        -p.min.y * scale,
        -((p.min.z + p.size.z / 2) * scale),
      );
      group.position.set(opts.x, opts.y ?? 0, opts.z);
      group.rotation.y = opts.rotY + info.yawOffset;
      applyStyleToModel(group, info.role, opts.prefs, opts.mats);
      return group;
    },
    proto(id, opts) {
      const p = proto.get(id);
      return p ?? null;
    },
  };

  instance = catalog;
  return catalog;
}

export function sofaIdFor(style: StyleId): ModelId {
  if (style === "traditional") return "sofaClassic";
  if (style === "luxury") return "sofaAlt";
  return "sofaModern";
}

export function applyStyleToModel(
  root: THREE.Object3D,
  role: ModelRole,
  prefs: Prefs,
  mats: Materials,
): void {
  const d = STYLE_DEFAULTS[prefs.style];
  const fabric = new THREE.Color(d.fabric);
  const wood = new THREE.Color(d.wood);
  const gold = new THREE.Color("#c4a265");
  const linen = new THREE.Color("#d6cfc4");
  const keepPbr = !!root.userData.keepPbr;
  const wool = mats.wool ?? mats.fabricTex;
  const linenTex = mats.linen ?? mats.fabricTex;
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[];
    for (const raw of list) {
      if (!(raw instanceof THREE.MeshStandardMaterial) && !(raw instanceof THREE.MeshPhysicalMaterial)) continue;
      const m = raw;
      if (!m.userData.baseColor) m.userData.baseColor = m.color.clone();
      const base = m.userData.baseColor as THREE.Color;
      const metal = m.metalness;
      const rough = m.roughness;
      const n = `${m.name || ""} ${mesh.name || ""} ${root.userData.modelId || ""}`.toLowerCase();
      const isFab = /fabric|linen|mustard|velvet|cushion|uphol|grey|gray|blue|duvet|mattress|pillow|sheet|headboard/.test(n);
      const isWood = /walnut|oak|wood|carcass|front|timber|leg/.test(n);
      const isMetal = /metal|chrome|steel|black/.test(n);
      const isCer = /ceramic/.test(n) || role === "ceramic";
      const isBedSoft = /bed|duvet|mattress|pillow|sheet|headboard/.test(n);
      // Authored Poly Haven PBR stays as-is.
      if (keepPbr || role === "plant") {
        m.envMapIntensity = Math.max(m.envMapIntensity ?? 0.7, 0.85);
        m.needsUpdate = true;
        continue;
      }
      m.color.copy(base);
      if (isCer) {
        // leave sanitaryware alone
      } else if (isFab || (role === "fabric" && !isWood && !isMetal) || (role === "mixed" && isBedSoft && !isWood && !isMetal) || (role === "mixed" && !isWood && !isMetal && metal < 0.25 && looksPastel(base))) {
        const soft = isBedSoft && !/headboard/.test(n);
        const tex = soft ? linenTex : wool;
        m.color.copy(soft ? linen : fabric);
        m.map = tex.map;
        m.normalMap = tex.normalMap;
        m.roughnessMap = tex.roughnessMap;
        m.normalScale = new THREE.Vector2(soft ? 0.55 : 0.85, soft ? 0.55 : 0.85);
        m.roughness = soft ? 0.94 : 0.86;
        m.metalness = 0;
        m.envMapIntensity = soft ? 0.12 : 0.28;
      } else if (isWood || role === "wood" || (role === "mixed" && metal < 0.25 && !isMetal && !isFab)) {
        m.color.copy(base).lerp(wood, prefs.style === "traditional" ? 0.65 : 0.45);
        if (mats.wood.map) {
          m.map = mats.wood.map;
          m.normalMap = mats.wood.normalMap;
          m.roughnessMap = mats.wood.roughnessMap;
          m.normalScale = new THREE.Vector2(0.55, 0.55);
        }
        if (prefs.style === "traditional") m.color.lerp(new THREE.Color("#5c3310"), 0.25);
        m.envMapIntensity = 0.5;
      }
      if (prefs.style === "luxury" && (isMetal || metal > 0.45)) {
        m.color.lerp(gold, 0.5);
        m.metalness = Math.min(1, metal + 0.15);
        m.roughness = Math.max(0.15, rough - 0.12);
      }
      m.needsUpdate = true;
    }
  });
}

/** True when a 3dassets base colour is a leftover pastel (esp. baby blue). */
function looksPastel(c: THREE.Color): boolean {
  const r = c.r, g = c.g, b = c.b;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const blueBias = b > r * 1.05 && b > 0.35;
  const washed = max > 0.45 && max - min < 0.18;
  return blueBias || washed;
}

/** Re-tint every previously placed model after a style-preset change. */
export function retintFurniture(root: THREE.Object3D, prefs: Prefs, mats: Materials): void {
  root.traverse((o) => {
    if (o.userData && o.userData.role && o.userData.modelId) {
      applyStyleToModel(o, o.userData.role as ModelRole, prefs, mats);
    }
  });
}
