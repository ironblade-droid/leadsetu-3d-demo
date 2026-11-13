/**
 * Lazy-load a Cycles-baked unit (glTF + per-room combined-color lightmaps on UV1/uv2).
 *
 * Combined-color path (manifest.combinedColor): the atlas already contains
 * albedo × lighting, Filmic-tonemapped. MeshBasicMaterial { map, toneMapped:false }
 * so three.js ACES is not applied on top. Wall-colour changes need a per-colour
 * rebake — setWallColor is a no-op.
 *
 * Legacy irradiance path (neutralAlbedo): lightMap × cream, kept for older assets.
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

export interface LightmapInfo {
  file: string;
  bytes: number;
  size: number;
  type: string;
  name: string;
  time?: string;
}

export interface BakedManifest {
  planId: string;
  style: string;
  prefs: Prefs;
  glb?: string;
  glbBytes?: number;
  totalMB: number;
  lightmaps: Record<string, LightmapInfo>;
  nightLightmaps?: Record<string, LightmapInfo>;
  rooms?: BakedRoom[];
  lightMapIntensity?: number;
  neutralAlbedo?: boolean;
  combinedColor?: boolean;
  filmic?: boolean;
  toneMapped?: boolean;
  zFlip?: boolean;
}

export interface BakedUnit {
  group: THREE.Group;
  manifest: BakedManifest;
  setWallColor: (hex: string) => void;
  setTime: (night: boolean) => void | Promise<void>;
  dispose: () => void;
}

interface LoadedBaked extends BakedUnit {
  dayMaps: Map<string, THREE.Texture>;
  nightMaps: Map<string, THREE.Texture>;
  ensureNight: () => Promise<Map<string, THREE.Texture>>;
}

const cache = new Map<string, Promise<LoadedBaked | null>>();

export function bakedKey(planId: string, style: string): string {
  return `${planId}-${style}`;
}

/** Wall colour each baked unit was produced at. Any other swatch falls back to v5. */
export const BAKED_WALL: Record<string, string> = {
  "2bhk-modern": "#f4f1ea",
};

/** @deprecated use BAKED_WALL[bakedKey(plan, style)] */
export const BAKED_WALL_COLOR = BAKED_WALL["2bhk-modern"];

function sameHex(a: string | undefined, b: string): boolean {
  if (!a) return true;
  return a.trim().toLowerCase() === b.trim().toLowerCase();
}

export function hasBaked(planId: string, style: string, wallColor?: string): boolean {
  const wall = BAKED_WALL[bakedKey(planId, style)];
  if (!wall) return false;
  return sameHex(wallColor, wall);
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
    const assignments: Array<{ mat: THREE.MeshBasicMaterial; rid: string }> = [];
    clone.traverse((o) => {
      const m = o as THREE.Mesh;
      if (!m.isMesh) return;
      const mats = (Array.isArray(m.material) ? m.material : [m.material]) as THREE.Material[];
      for (const raw of mats) {
        const b = raw as THREE.MeshBasicMaterial;
        if (b.userData?.lsWall) walls.push(b);
        if (b.userData?.lsRid) assignments.push({ mat: b, rid: b.userData.lsRid as string });
      }
    });
    const combined = !!u.manifest.combinedColor;
    return {
      group: clone,
      manifest: u.manifest,
      setWallColor: (hex: string) => {
        // Combined-color atlases already contain the cream wall; a multiply
        // would tint them twice. Per-colour looks need a rebake.
        if (combined) return;
        for (const w of walls) w.color.set(hex);
      },
      setTime: (night: boolean) => {
        const apply = (src: Map<string, THREE.Texture>) => {
          if (!src || src.size === 0) return;
          for (const a of assignments) {
            const tex = src.get(a.rid);
            if (tex) {
              a.mat.map = tex;
              a.mat.needsUpdate = true;
            }
          }
        };
        if (night) {
          if (u.nightMaps.size > 0) {
            apply(u.nightMaps);
            return;
          }
          return u.ensureNight().then(apply);
        }
        apply(u.dayMaps);
      },
      dispose: () => {},
    };
  });
}

async function loadAtlasSet(
  base: string,
  entries: Record<string, LightmapInfo> | undefined,
  combined: boolean,
): Promise<Map<string, THREE.Texture>> {
  const out = new Map<string, THREE.Texture>();
  if (!entries) return out;
  const texLoader = new THREE.TextureLoader();
  await Promise.all(
    Object.entries(entries).map(async ([rid, info]) => {
      const tex = await texLoader.loadAsync(`${base}${info.file}`);
      // Combined Filmic 8-bit is already display-referred sRGB.
      // Legacy irradiance is linear.
      tex.colorSpace = combined ? THREE.SRGBColorSpace : THREE.LinearSRGBColorSpace;
      tex.channel = 2;
      tex.flipY = false; // glTF-exported UV1 is already V-flipped
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = true;
      tex.needsUpdate = true;
      out.set(rid, tex);
    }),
  );
  return out;
}

async function actuallyLoad(planId: string, style: string): Promise<LoadedBaked | null> {
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

  const zFlip = manifest.zFlip !== false;
  group.updateMatrixWorld(true);

  const combined = !!manifest.combinedColor;
  const toneMapped = manifest.toneMapped ?? !combined;
  const dayMaps = await loadAtlasSet(base, manifest.lightmaps, combined);
  // Night atlases are listed in the manifest but fetched on first setTime(true).
  const nightMaps = new Map<string, THREE.Texture>();
  let nightPromise: Promise<Map<string, THREE.Texture>> | null = null;
  const ensureNight = (): Promise<Map<string, THREE.Texture>> => {
    if (nightMaps.size > 0) return Promise.resolve(nightMaps);
    if (!nightPromise) {
      nightPromise = loadAtlasSet(base, manifest.nightLightmaps, combined).then((m) => {
        for (const [k, v] of m) nightMaps.set(k, v);
        return nightMaps;
      });
    }
    return nightPromise;
  };

  let oakMap: THREE.Texture | null = null;
  if (!combined) {
    try {
      const texLoader = new THREE.TextureLoader();
      oakMap = await texLoader.loadAsync(`${import.meta.env.BASE_URL}textures/oakplank_diff.jpg`);
      oakMap.colorSpace = THREE.SRGBColorSpace;
      oakMap.wrapS = oakMap.wrapT = THREE.RepeatWrapping;
      oakMap.repeat.set(1, 1);
      oakMap.anisotropy = 8;
    } catch { /* optional */ }
  }

  const intensity = manifest.lightMapIntensity ?? (combined ? 1.0 : 1.15);
  const rooms = manifest.rooms ?? [];
  const woodRooms = new Set(["living", "bedroom1", "bedroom2"]);
  const walls: Array<{ color: THREE.Color }> = [];
  const assignments: Array<{ mat: THREE.MeshBasicMaterial; rid: string }> = [];

  group.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const g = mesh.geometry;
    if (g.getAttribute("uv1") && !g.getAttribute("uv2")) {
      g.setAttribute("uv2", g.getAttribute("uv1"));
    }
    const rid = roomIdOf(mesh, rooms, zFlip);
    const kind = shellKind(mesh);
    const lm = rid ? dayMaps.get(rid) : undefined;
    const isFloor = /^floor-/.test(mesh.name) || /^OakFloor$/i.test((mesh.material as THREE.Material).name ?? "");
    const isCeil = /^ceil-/.test(mesh.name);
    const matsIn = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.Material[];
    const isWall = matsIn.some((m) => /^wall/i.test(m.name)) || /^wall-/i.test(mesh.name);
    const isGlass = /^glass-/i.test(mesh.name) || matsIn.some((m) => /^glass/i.test(m.name));
    const next: THREE.Material[] = [];
    for (const raw of matsIn) {
      if (isGlass) {
        const glass = new THREE.MeshPhysicalMaterial({
          name: raw.name,
          color: 0x8aa4b0,
          transparent: true,
          opacity: 0.18,
          roughness: 0.05,
          metalness: 0.08,
          transmission: 0.7,
          thickness: 0.02,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        next.push(glass);
        continue;
      }
      // Imported furniture stays live PBR (UV0, original albedo). Combined
      // lightmap unwraps were unique but too low-res, which showed as X-smears
      // on sofas, beds and tables. Shells / cabinets stay baked.
      if (kind === "furn") {
        const mat = raw.clone() as THREE.MeshStandardMaterial;
        if (mat.isMeshStandardMaterial) {
          mat.lightMap = null;
          mat.side = THREE.DoubleSide;
          mat.envMapIntensity = 0.55;
          mat.toneMapped = true;
          mat.needsUpdate = true;
        }
        next.push(mat);
        continue;
      }
      if (lm) {
        const src = raw as THREE.MeshStandardMaterial;
        if (combined) {
          // The atlas is the complete appearance (albedo × lighting, Filmic).
          const basic = new THREE.MeshBasicMaterial({
            name: src.name,
            color: 0xffffff,
            map: lm,
            side: THREE.DoubleSide,
            toneMapped: toneMapped,
          });
          // Bind UV2 (TEXCOORD_1) as the color-map channel.
          lm.channel = 2;
          if (isWall) {
            basic.userData.lsWall = true;
            walls.push(basic);
          }
          if (rid) {
            basic.userData.lsRid = rid;
            assignments.push({ mat: basic, rid });
          }
          basic.needsUpdate = true;
          next.push(basic);
        } else {
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
        }
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
    const live = kind === "furn" || isGlass;
    mesh.castShadow = live;
    mesh.receiveShadow = live;
    mesh.frustumCulled = false;
  });

  const applyTime = (night: boolean) => {
    const src = night ? nightMaps : dayMaps;
    if (!src || src.size === 0) return;
    for (const a of assignments) {
      const tex = src.get(a.rid);
      if (tex) {
        a.mat.map = tex;
        a.mat.needsUpdate = true;
      }
    }
  };

  return {
    group,
    manifest,
    dayMaps,
    nightMaps,
    ensureNight,
    setWallColor: (hex: string) => {
      if (combined) return;
      for (const w of walls) w.color.set(hex);
    },
    setTime: (night: boolean) => {
      if (night && nightMaps.size === 0) return ensureNight().then(() => applyTime(true));
      applyTime(night);
    },
    dispose: () => {},
  };
}

function shellKind(mesh: THREE.Mesh): string | null {
  const ud = (mesh.userData ?? {}) as Record<string, unknown>;
  const extras = (ud.extras ?? ud) as Record<string, unknown>;
  const k = extras.ls_shell ?? ud.ls_shell;
  if (typeof k === "string") return k;
  const n = mesh.name || "";
  const m = /^(floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun|splash|counter|hob)-/.exec(n);
  return m ? m[1] : null;
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
  const m = /^(?:floor|ceil|wall|furn|glass|frame|shell|curtain|rail|cabinet|rod|krun)-([A-Za-z0-9_]+)/.exec(n);
  if (m && rooms.some((r) => r.id === m[1])) return m[1];
  const extras = (mesh.userData ?? {}) as Record<string, unknown>;
  // glTF extras may be nested under userData.extras
  const extras2 = (extras.extras ?? extras) as Record<string, unknown>;
  if (typeof extras.ls_room === "string") return extras.ls_room as string;
  if (typeof extras2.ls_room === "string") return extras2.ls_room as string;
  if (!rooms.length) return null;
  const [x, rawZ] = meshPlanXZ(mesh);
  const z = zFlip ? -rawZ : rawZ;
  for (const r of rooms) if (pointInPoly(r.polygon, x, z)) return r.id;
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

/** Match buildInterior's planToWorld: mirror, rotate about plan centre, then ox/oz. */
export function applyUnitTransform(group: THREE.Group, t: Transform, y: number, zFlip = true) {
  const content = new THREE.Group();
  content.name = "baked-content";
  if (zFlip) content.scale.z = -1;
  while (group.children.length) content.add(group.children[0]);

  const inner = new THREE.Group();
  inner.name = "baked-inner";
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
