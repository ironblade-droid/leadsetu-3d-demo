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
  | "frame1"
  | "frame2"
  | "lamp"
  | "chandelier"
  | "mirror"
  | "stove"
  | "plant";

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
  sofaModern:   { file: "sofa_03.glb", role: "fabric", yawOffset: 0, author: "Fran Calvente", source: "https://polyhaven.com/a/sofa_03" },
  sofaClassic:  { file: "Sofa_01.glb", role: "fabric", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/Sofa_01" },
  sofaAlt:      { file: "sofa_02.glb", role: "fabric", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/sofa_02" },
  coffeeModern: { file: "modern_coffee_table_01.glb", role: "wood", yawOffset: 0, author: "Amin", source: "https://polyhaven.com/a/modern_coffee_table_01" },
  coffeeClassic:{ file: "CoffeeTable_01.glb", role: "wood", yawOffset: 0, author: "Fernando Quinn", source: "https://polyhaven.com/a/CoffeeTable_01" },
  armchair:     { file: "ArmChair_01.glb", role: "fabric", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/ArmChair_01" },
  ottoman:      { file: "Ottoman_01.glb", role: "fabric", yawOffset: 0, author: "Caspian Fortune", source: "https://polyhaven.com/a/Ottoman_01" },
  diningChair:  { file: "dining_chair_02.glb", role: "wood", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/dining_chair_02" },
  woodChair:    { file: "WoodenChair_01.glb", role: "wood", yawOffset: 0, author: "Jake Mobley", source: "https://polyhaven.com/a/WoodenChair_01" },
  diningTable:  { file: "round_wooden_table_01.glb", role: "wood", yawOffset: 0, author: "Ulan Cabanilla", source: "https://polyhaven.com/a/round_wooden_table_01" },
  woodTable:    { file: "WoodenTable_01.glb", role: "wood", yawOffset: 0, author: "Ethan Place", source: "https://polyhaven.com/a/WoodenTable_01" },
  bed:          { file: "GothicBed_01.glb", role: "wood", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/GothicBed_01" },
  nightstand:   { file: "ClassicNightstand_01.glb", role: "wood", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/ClassicNightstand_01" },
  console:      { file: "ClassicConsole_01.glb", role: "wood", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/ClassicConsole_01" },
  sideTable:    { file: "side_table_01.glb", role: "wood", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/side_table_01" },
  cabinet:      { file: "painted_wooden_cabinet.glb", role: "wood", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/painted_wooden_cabinet" },
  frame1:       { file: "hanging_picture_frame_01.glb", role: "art", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/hanging_picture_frame_01" },
  frame2:       { file: "hanging_picture_frame_02.glb", role: "art", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/hanging_picture_frame_02" },
  lamp:         { file: "modern_ceiling_lamp_01.glb", role: "metal", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/modern_ceiling_lamp_01" },
  chandelier:   { file: "Chandelier_01.glb", role: "metal", yawOffset: 0, author: "Kirill Sannikov", source: "https://polyhaven.com/a/Chandelier_01" },
  mirror:       { file: "ornate_mirror_01.glb", role: "mixed", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/ornate_mirror_01" },
  stove:        { file: "electric_stove.glb", role: "metal", yawOffset: 0, author: "Kuutti Siitonen", source: "https://polyhaven.com/a/electric_stove" },
  plant:        { file: "potted_plant_04.glb", role: "plant", yawOffset: 0, author: "James Ray Cock", source: "https://polyhaven.com/a/potted_plant_04" },
};

export interface PlaceOpts {
  x: number;
  z: number;
  y?: number;
  rotY: number;
  /** Desired width along the model's facing-right axis, in metres. */
  width?: number;
  /** Desired height in metres (used for wall art, lamps). */
  height?: number;
  prefs: Prefs;
  mats: Materials;
}

interface Proto {
  root: THREE.Object3D;
  size: THREE.Vector3;
  min: THREE.Vector3;
}

export interface Catalog {
  ready: boolean;
  has(id: ModelId): boolean;
  instantiate(id: ModelId, opts: PlaceOpts): THREE.Group | null;
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
      // Unique materials so style tints don't leak across instances.
      clone.traverse((o) => {
        const m = o as THREE.Mesh;
        if (!m.isMesh) return;
        if (Array.isArray(m.material)) m.material = m.material.map((x) => x.clone());
        else if (m.material) m.material = m.material.clone();
      });

      const group = new THREE.Group();
      group.name = `model:${id}`;
      group.userData.role = info.role;
      group.userData.modelId = id;
      group.add(clone);

      // Sit on the floor (y = 0) and scale to the requested width or height.
      const sx = p.size.x || 1;
      const sy = p.size.y || 1;
      const sz = p.size.z || 1;
      let scale = 1;
      if (opts.width && opts.width > 0) {
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
  _mats: Materials,
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
      // Remember the original colour once.
      if (!m.userData.baseColor) m.userData.baseColor = m.color.clone();
      const base = m.userData.baseColor as THREE.Color;
      m.color.copy(base);
      const metal = m.metalness;
      const rough = m.roughness;
      if (role === "fabric" || (role === "mixed" && metal < 0.25 && rough > 0.45)) {
        m.color.lerp(fabric, prefs.style === "minimal" ? 0.35 : 0.5);
      } else if (role === "wood" || (role === "mixed" && metal < 0.25)) {
        m.color.lerp(wood, 0.4);
      }
      if (prefs.style === "luxury" && metal > 0.45) {
        m.color.lerp(gold, 0.4);
        m.metalness = Math.min(1, metal + 0.1);
        m.roughness = Math.max(0.15, rough - 0.1);
      }
      if (prefs.style === "traditional" && role === "wood") {
        m.color.lerp(new THREE.Color("#5c3310"), 0.2);
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
