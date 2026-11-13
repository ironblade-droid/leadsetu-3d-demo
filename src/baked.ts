/**
 * Lazy-load a Cycles-baked unit (glTF + per-room irradiance on UV1/uv2).
 * Wall colour multiplies over the neutral-albedo lightmap at runtime.
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import type { Prefs, Transform } from "./types";

export interface BakedRoom {
  id: string;
  type: string;
  name?: string;
  polygon: [number, number][];
}

export interface BakedManifest {
  planId: string;
  style: string;
  prefs: Prefs;
  glb?: string;
  glbBytes?: number;
  totalMB: number;
  lightmaps: Record<string, { file: string; bytes: number; size: number; type: string; name: string }>;
  rooms?: BakedRoom[];
  lightMapIntensity?: number;
  neutralAlbedo?: boolean;
  zFlip?: boolean;
}

export interface BakedUnit {
  group: THREE.Group;
  manifest: BakedManifest;
  setWallColor: (hex: string) => void;
  dispose: () => void;
}

const cache = new Map<string, Promise<BakedUnit | null>>();

export function bakedKey(planId: string, style: string): string {
  return `${planId}-${style}`;
}

export function hasBaked(planId: string, style: string): boolean {
  // Off until the in-engine look is clearly better than v5 procedural.
  // Pipeline is ready (public/baked/2bhk-modern, 2.58 MB); flip this to
  // `planId === "2bhk" && style === "modern"` after a visual pass lands.
  return false;
}

export function loadBaked(
  planId: string,
  style: string,
  t: Transform,
  y = 0,
): Promise<BakedUnit | null> {
  const key = bakedKey(planId, style);
  if (!cache.has(key)) cache.set(key, actuallyLoad(planId, style));
  return cache.get(key)!.then((u) => {
    if (!u) return null;
    const clone = u.group.clone(true);
    applyUnitTransform(clone, t, y);
    const walls: Array<{ color: THREE.Color }> = [];
    clone.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      const mats = (Array.isArray(m.material) ? m.material : [m.material]) as THREE.Material[];
      for (const raw of mats) {
        if ((raw as THREE.MeshBasicMaterial).userData?.lsWall) walls.push(raw as THREE.MeshBasicMaterial);
      }
    });
    return {
      group: clone,
      manifest: u.manifest,
      setWallColor: (hex: string) => { for (const w of walls) w.color.set(hex); },
      dispose: () => {},
    };
  });
}

async function actuallyLoad(planId: string, style: string): Promise<BakedUnit | null> {
  const base = `${import.meta.env.BASE_URL}baked/`;
  const prefix = `${planId}-${style}`;
  let manifest: BakedManifest;
  try {
    const r = await fetch(`${base}${prefix}-manifest.json`);
    if (!r.ok) return null;
    manifest = await r.json();
  } catch {
    return null;
  }
  if (!manifest.glb) return null;

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  const gltf = await loader.loadAsync(`${base}${manifest.glb}`);
  const group = gltf.scene;
  group.name = `baked-${prefix}`;

  // Blender Y-up export maps plan Z → glTF −Z. Do NOT scale the
  // root here — applyUnitTransform wraps a z-flip so the slot
  // offset stays at the plan origin. Room assignment uses −Z.
  const zFlip = manifest.zFlip !== false;
  group.updateMatrixWorld(true);

  const texLoader = new THREE.TextureLoader();
  const lms = new Map<string, THREE.Texture>();
  await Promise.all(
    Object.entries(manifest.lightmaps).map(async ([rid, info]) => {
      const tex = await texLoader.loadAsync(`${base}${info.file}`);
      tex.colorSpace = THREE.LinearSRGBColorSpace;
      // r152+: lightMap no longer auto-uses uv2; bind the lightmap UV set.
      tex.channel = 2;
      tex.flipY = false; // glTF-exported UV1 is already V-flipped
      tex.needsUpdate = true;
      lms.set(rid, tex);
    }),
  );

  // Oak albedo for floors (the bake is irradiance; colour lives on the material).
  let oakMap: THREE.Texture | null = null;
  try {
    oakMap = await texLoader.loadAsync(`${import.meta.env.BASE_URL}textures/oakplank_diff.jpg`);
    oakMap.colorSpace = THREE.SRGBColorSpace;
    oakMap.wrapS = oakMap.wrapT = THREE.RepeatWrapping;
    oakMap.repeat.set(1, 1);
    oakMap.anisotropy = 8;
  } catch { /* optional */ }

  // Shells use MeshBasicMaterial so the lightmap is the only light
  // (the walk-mode sun would otherwise double-light and blow walls).
  // Furniture keeps PBR without a lightmap — furniture UV islands in
  // the shared atlas were too messy to ship.
  const intensity = manifest.lightMapIntensity ?? 1.15;
  const rooms = manifest.rooms ?? [];
  const woodRooms = new Set(["living", "bedroom1", "bedroom2"]);
  const walls: Array<{ color: THREE.Color }> = [];

  group.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const g = mesh.geometry;
    if (g.getAttribute("uv1") && !g.getAttribute("uv2")) {
      g.setAttribute("uv2", g.getAttribute("uv1"));
    }
    const rid = roomIdOf(mesh, rooms, zFlip);
    const lm = rid ? lms.get(rid) : undefined;
    const isFloor = /^floor-/.test(mesh.name) || /^OakFloor$/i.test((mesh.material as THREE.Material).name ?? "");
    const isCeil = /^ceil-/.test(mesh.name);
    const matsIn = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[];
    const isWall = matsIn.some((m) => /^wall/i.test(m.name)) || /^wall-/i.test(mesh.name);
    const isShell = isFloor || isCeil || isWall;
    const next: THREE.Material[] = [];
    for (const raw of matsIn) {
      if (isShell && lm) {
        const src = raw as THREE.MeshStandardMaterial;
        const basic = new THREE.MeshBasicMaterial({
          name: src.name,
          color: src.color ? src.color.clone() : new THREE.Color(0xffffff),
          map: src.map ?? null,
          lightMap: lm,
          lightMapIntensity: intensity,
          side: THREE.DoubleSide,
          toneMapped: true,
        });
        if (isFloor && woodRooms.has(rid ?? "") && oakMap) {
          basic.map = oakMap;
          basic.color.set(0xffffff);
        }
        if (isWall) {
          basic.userData.lsWall = true;
          walls.push(basic);
        }
        basic.needsUpdate = true;
        next.push(basic);
      } else {
        const mat = raw.clone() as THREE.MeshStandardMaterial;
        if (mat.isMeshStandardMaterial) {
          mat.lightMap = null;
          mat.side = THREE.DoubleSide;
          mat.envMapIntensity = 0.55;
          mat.needsUpdate = true;
        }
        next.push(mat);
      }
    }
    mesh.material = next.length === 1 ? next[0] : next;
    mesh.castShadow = !isShell;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;
  });

  return {
    group,
    manifest,
    setWallColor: (hex: string) => { for (const w of walls) w.color.set(hex); },
    dispose: () => {},
  };
}

function pointInPoly(poly: [number, number][], x: number, z: number): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-12) + xi) inside = !inside;
  }
  return inside;
}

function meshPlanXZ(mesh: THREE.Mesh): [number, number] {
  const b = new THREE.Box3().setFromObject(mesh);
  const c = b.getCenter(new THREE.Vector3());
  return [c.x, c.z];
}

function roomIdOf(mesh: THREE.Mesh, rooms: BakedRoom[], zFlip = false): string | null {
  const n = mesh.name || "";
  const m = /^(?:floor|ceil|wall|furn|glass|frame|shell)-([A-Za-z0-9_]+)/.exec(n);
  if (m && rooms.some((r) => r.id === m[1])) return m[1];
  if (typeof mesh.userData.ls_room === "string") return mesh.userData.ls_room as string;
  if (!rooms.length) return null;
  const [x, rawZ] = meshPlanXZ(mesh);
  const z = zFlip ? -rawZ : rawZ;
  for (const r of rooms) if (pointInPoly(r.polygon, x, z)) return r.id;
  // nearest centroid
  let best: string | null = null;
  let bd = 1e9;
  for (const r of rooms) {
    const cx = r.polygon.reduce((s, p) => s + p[0], 0) / r.polygon.length;
    const cz = r.polygon.reduce((s, p) => s + p[1], 0) / r.polygon.length;
    const d = (cx - x) ** 2 + (cz - z) ** 2;
    if (d < bd) { bd = d; best = r.id; }
  }
  return best;
}

function guessLightmap(
  mesh: THREE.Mesh,
  rooms: BakedRoom[],
  lms: Map<string, THREE.Texture>,
): THREE.Texture | undefined {
  const rid = roomIdOf(mesh, rooms, true);
  return rid ? lms.get(rid) : undefined;
}

/** Match buildInterior's planToWorld: mirror, rotate about plan centre, then ox/oz. */
export function applyUnitTransform(group: THREE.Group, t: Transform, y: number, zFlip = true) {
  // content (optional z-flip at the plan origin)
  //   → inner (shift by −centre; mirrors about the centre via scale+offset)
  //     → group (rotY, then ox/oz + centre)  — matches planToWorld.
  const content = new THREE.Group();
  content.name = "baked-content";
  if (zFlip) content.scale.z = -1;
  while (group.children.length) content.add(group.children[0]);

  const inner = new THREE.Group();
  inner.name = "baked-inner";
  // Mirrors about the plan centre: world = S*(plan − centre) + centre + origin
  // is T*R*S with a flip-parent around an inner offset of −centre.
  if (t.mirrorX || t.mirrorZ) {
    const flip = new THREE.Group();
    flip.name = "baked-mirror";
    flip.scale.x = t.mirrorX ? -1 : 1;
    flip.scale.z = t.mirrorZ ? -1 : 1;
    inner.position.set(-t.width / 2, 0, -t.depth / 2);
    flip.add(inner);
    inner.add(content);
    group.add(flip);
  } else {
    inner.position.set(-t.width / 2, 0, -t.depth / 2);
    inner.add(content);
    group.add(inner);
  }
  group.scale.set(1, 1, 1);
  group.rotation.y = (t.rotY * Math.PI) / 180;
  group.position.set(t.ox + t.width / 2, y, t.oz + t.depth / 2);
}

export function hideProceduralVisuals(root: THREE.Object3D) {
  root.traverse((o) => {
    const m = o as THREE.Mesh;
    if (!m.isMesh) return;
    if (m.name === "unit-outline" || m.userData.hotspot) return;
    m.visible = false;
  });
}
