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
}

export const MODEL_MANIFEST: Record<ModelId, ModelInfo> = {
  sofaModern:   { file: "v5/sofa_3seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaClassic:  { file: "v5/sofa_3seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaAlt:      { file: "v5/sofa_2seat.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sofaChaise:   { file: "v5/chaise.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  coffeeModern: { file: "v5/coffee_rect.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  coffeeClassic:{ file: "v5/coffee_rect.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  armchair:     { file: "v5/armchair_lounge.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  ottoman:      { file: "v5/cushions.glb", role: "fabric", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  diningChair:  { file: "v5/dining_chair_uphol.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  woodChair:    { file: "v5/dining_chair_timber.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  diningTable:  { file: "v5/dining_table6.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  woodTable:    { file: "v5/dining_table6.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  bed:          { file: "v5/bed_double.glb", role: "mixed", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  nightstand:   { file: "v5/nightstand.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  console:      { file: "v5/console.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  sideTable:    { file: "v5/console.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  cabinet:      { file: "v5/chest_drawers.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  wardrobe:     { file: "v5/wardrobe_sliding.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  chest:        { file: "v5/chest_drawers.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  tv:           { file: "v5/console.glb", role: "wood", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  lamp:         { file: "v5/lamp_floor.glb", role: "metal", yawOffset: 0, author: "3dassets.dev", source: "https://3dassets.dev" },
  plant:        { file: "potted_plant_04.glb", role: "plant", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/potted_plant_04" },
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
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const list = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[];
    for (const raw of list) {
      if (!(raw instanceof THREE.MeshStandardMaterial) && !(raw instanceof THREE.MeshPhysicalMaterial)) continue;
      const m = raw;
      if (!m.userData.baseColor) m.userData.baseColor = m.color.clone();
      const base = m.userData.baseColor as THREE.Color;
      m.color.copy(base);
      const metal = m.metalness;
      const rough = m.roughness;
      const n = `${m.name || ""} ${mesh.name || ""}`.toLowerCase();
      const isFab = /fabric|linen|mustard|velvet|cushion|uphol|grey|gray|blue/.test(n);
      const isWood = /walnut|oak|wood|carcass|front/.test(n);
      const isMetal = /metal|chrome|steel|black/.test(n);
      const isCer = /ceramic/.test(n);
      if (isCer) {
        // leave sanitaryware alone
      } else if (isFab || (role === "fabric" && !isWood && !isMetal)) {
        m.color.lerp(fabric, prefs.style === "minimal" ? 0.45 : 0.7);
        if (mats.fabric.normalMap && !m.normalMap) {
          m.normalMap = mats.fabric.normalMap;
          m.roughnessMap = mats.fabric.roughnessMap;
          m.normalScale = new THREE.Vector2(0.55, 0.55);
        }
        m.roughness = Math.max(0.82, rough);
        m.metalness = 0;
      } else if (isWood || role === "wood" || (role === "mixed" && metal < 0.25 && !isMetal && !isFab)) {
        m.color.lerp(wood, prefs.style === "traditional" ? 0.65 : 0.5);
        if (mats.wood.map && !m.map) {
          m.map = mats.wood.map;
          m.normalMap = mats.wood.normalMap;
          m.roughnessMap = mats.wood.roughnessMap;
          m.normalScale = new THREE.Vector2(0.45, 0.45);
        }
        if (prefs.style === "traditional") m.color.lerp(new THREE.Color("#5c3310"), 0.25);
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

/** Re-tint every previously placed model after a style-preset change. */
export function retintFurniture(root: THREE.Object3D, prefs: Prefs, mats: Materials): void {
  root.traverse((o) => {
    if (o.userData && o.userData.role && o.userData.modelId) {
      applyStyleToModel(o, o.userData.role as ModelRole, prefs, mats);
    }
  });
}
