import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import type { Materials } from "./materials";
import { applyTriplanar } from "./triplanar";
import {
  CORE,
  FLOOR_TO_FLOOR,
  LOBBY_H,
  PENTHOUSE_FLOOR,
  PLATE,
  PLINTH,
  TYPICAL_FLOORS,
  UNIT_PH,
  floorY,
  plateCenter,
} from "./layout";

export interface TowerBuild {
  group: THREE.Group;
  floorHits: THREE.Mesh[];
  unitHits: THREE.Mesh[];
  highlight: (floor: number | null) => void;
  highlightUnit: (unitId: string | null) => void;
  setIsolated: (floor: number | null) => void;
  setTime: (time: "morning" | "golden" | "night") => void;
  setEnv: (day: THREE.Texture | null, night: THREE.Texture | null) => void;
  outlined: () => THREE.Object3D[];
  tick: (dt: number) => void;
  loadTrees: () => Promise<void>;
  dispose: () => void;
}

const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _scl = new THREE.Vector3();
const _up = new THREE.Vector3(0, 1, 0);

function compose(x: number, y: number, z: number, ry = 0, sx = 1, sy = 1, sz = 1): THREE.Matrix4 {
  _pos.set(x, y, z);
  _quat.setFromAxisAngle(_up, ry);
  _scl.set(sx, sy, sz);
  return new THREE.Matrix4().compose(_pos, _quat, _scl);
}

function instanced(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  matrices: THREE.Matrix4[],
  opts: { shadows?: boolean; colors?: THREE.Color[] } = {},
): THREE.InstancedMesh {
  const mesh = new THREE.InstancedMesh(geo, mat, Math.max(1, matrices.length));
  mesh.count = matrices.length;
  for (let i = 0; i < matrices.length; i++) mesh.setMatrixAt(i, matrices[i]);
  mesh.instanceMatrix.needsUpdate = true;
  if (opts.colors && opts.colors.length) {
    for (let i = 0; i < opts.colors.length; i++) mesh.setColorAt(i, opts.colors[i]);
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }
  if (opts.shadows !== false) {
    mesh.castShadow = true;
    mesh.receiveShadow = true;
  }
  return mesh;
}

function shapePlate(): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(PLATE[0][0], PLATE[0][1]);
  for (let i = 1; i < PLATE.length; i++) s.lineTo(PLATE[i][0], PLATE[i][1]);
  s.closePath();
  return s;
}

function plateGeo(thickness: number, shape?: THREE.Shape): THREE.ExtrudeGeometry {
  const geo = new THREE.ExtrudeGeometry(shape ?? shapePlate(), { depth: thickness, bevelEnabled: false });
  geo.rotateX(-Math.PI / 2);
  geo.computeVertexNormals();
  return geo;
}

/** Full T-plate with a punched opening on the south lobby curtain. */
function shapePodiumOpen(): THREE.Shape {
  const s = shapePlate();
  const hole = new THREE.Path();
  // Must sit strictly inside the plate (south edge is z=0, stem 8.45–18.95)
  // and wind opposite the outer path so ExtrudeGeometry keeps the hole.
  const x0 = 8.6;
  const x1 = 18.8;
  const z0 = 0.08;
  const z1 = 2.2;
  hole.moveTo(x0, z0);
  hole.lineTo(x0, z1);
  hole.lineTo(x1, z1);
  hole.lineTo(x1, z0);
  hole.closePath();
  s.holes.push(hole);
  return s;
}

function plateMesh(mat: THREE.Material, thickness: number, y: number): THREE.Mesh {
  const m = new THREE.Mesh(plateGeo(thickness), mat);
  m.position.y = y;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

/** Outer faces of the T-shaped plate, inward is toward the core. */
function facadeFaces(): { x: number; z: number; len: number; alongX: boolean; inward: 1 | -1 }[] {
  return [
    { x: 0.2, z: 19.2, len: 27, alongX: true, inward: -1 },
    { x: 0.2, z: 10, len: 8.25, alongX: true, inward: 1 },
    { x: 18.95, z: 10, len: 8.25, alongX: true, inward: 1 },
    { x: 8.45, z: 0, len: 10.5, alongX: true, inward: 1 },
    { x: 0.2, z: 10, len: 9.2, alongX: false, inward: 1 },
    { x: 27.2, z: 10, len: 9.2, alongX: false, inward: -1 },
    { x: 8.45, z: 0, len: 10, alongX: false, inward: -1 },
    { x: 18.95, z: 0, len: 10, alongX: false, inward: 1 },
  ];
}

function pbr(
  tex: Materials["concrete"],
  color: string,
  roughness = 0.74,
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    map: tex.map,
    normalMap: tex.normalMap,
    roughnessMap: tex.roughnessMap,
    roughness,
    metalness: 0.04,
    envMapIntensity: 0.55,
    normalScale: new THREE.Vector2(0.55, 0.55),
  });
}

function cityWindowTexture(night: boolean): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = night ? "#0c0f14" : "#4a5360";
  g.fillRect(0, 0, 256, 512);
  const cols = 18;
  const rows = 36;
  const cw = 256 / cols;
  const rh = 512 / rows;
  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      if (night) {
        if (Math.random() > 0.38) continue;
        g.fillStyle = Math.random() > 0.22 ? "#ffd090" : "#c8d8ff";
      } else {
        // Day: almost no windows — a distant silhouette, not a Minecraft grid.
        if (Math.random() > 0.08) continue;
        g.fillStyle = "rgba(200,214,224,0.28)";
      }
      const x = col * cw + cw * 0.28;
      const y = r * rh + rh * 0.28;
      g.fillRect(x, y, cw * 0.38, rh * 0.42);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export function buildTower(mats: Materials, opts: { mobile?: boolean } = {}): TowerBuild {
  const mobile = !!opts.mobile;
  const group = new THREE.Group();
  group.name = "tower";
  const floorHits: THREE.Mesh[] = [];
  const unitHits: THREE.Mesh[] = [];
  const floorGroups: THREE.Group[] = [];
  const structure: THREE.Object3D[] = [];
  const practicals: THREE.Light[] = [];
  const glowMats: THREE.MeshStandardMaterial[] = [];
  const glassMats: THREE.MeshStandardMaterial[] = [];
  const outlinedNow: THREE.Object3D[] = [];
  const unitOutlines = new Map<string, THREE.Mesh>();

  // --- Materials (triplanar so extruded plates and instanced boxes have no UV seams) ---
  const stone = applyTriplanar(pbr(mats.plaster, "#e6d9c4", 0.86), 0.32);
  const facade = applyTriplanar(pbr(mats.plaster, "#efe6d8", 0.86), 0.42);
  const spandrel = applyTriplanar(pbr(mats.plaster, "#e4d9c8", 0.88), 0.4);
  const slabMat = applyTriplanar(pbr(mats.concfloor, "#f0ebe1", 0.62), 0.18);
  const soffit = applyTriplanar(pbr(mats.wood, "#8d6a48", 0.7), 0.5);
  const lawnMat = applyTriplanar(
    new THREE.MeshStandardMaterial({
      color: "#3f7a36",
      map: mats.grass.map,
      normalMap: mats.grass.normalMap,
      roughnessMap: mats.grass.roughnessMap,
      roughness: 0.95,
      envMapIntensity: 0.22,
    }),
    0.22,
  );
  const paveMat = applyTriplanar(pbr(mats.pave, "#d8d0c4", 0.86), 0.11);
  const driveMat = applyTriplanar(pbr(mats.concfloor, "#8a8680", 0.9), 0.12);
  const asphalt = applyTriplanar(pbr(mats.concfloor, "#2c2d30", 0.95), 0.16);
  const hedgeMat = applyTriplanar(
    new THREE.MeshStandardMaterial({
      color: "#1c4a26",
      map: mats.grass.map,
      normalMap: mats.grass.normalMap,
      roughness: 0.95,
      envMapIntensity: 0.18,
    }),
    0.35,
  );
  const deckMat = applyTriplanar(pbr(mats.wood, "#9a7a55", 0.72), 0.45);
  const finMat = new THREE.MeshStandardMaterial({
    color: "#c4ab82",
    roughness: 0.42,
    metalness: 0.62,
    envMapIntensity: 1.0,
  });
  const mullion = new THREE.MeshStandardMaterial({
    color: "#1c1e20",
    roughness: 0.42,
    metalness: 0.55,
    envMapIntensity: 0.7,
  });
  const capRail = new THREE.MeshStandardMaterial({
    color: "#c9cdd1",
    roughness: 0.28,
    metalness: 0.85,
    envMapIntensity: 1.1,
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: "#8aa4b4",
    metalness: 0.38,
    roughness: 0.055,
    transparent: true,
    opacity: 0.46,
    envMapIntensity: 1.9,
    clearcoat: 0.6,
    clearcoatRoughness: 0.08,
  });
  glassMats.push(glass);
  const lobbyGlass = new THREE.MeshPhysicalMaterial({
    color: "#b7c8d2",
    metalness: 0.22,
    roughness: 0.04,
    transparent: true,
    opacity: 0.34,
    envMapIntensity: 2.1,
    clearcoat: 0.85,
    clearcoatRoughness: 0.06,
  });
  glassMats.push(lobbyGlass);
  const railGlass = mats.glassRail.clone();
  railGlass.opacity = 0.18;
  railGlass.roughness = 0.04;
  railGlass.envMapIntensity = 1.4;
  railGlass.transmission = 0.72;
  const water = mats.water.clone();
  water.color.set("#3d7a88");
  water.roughness = 0.06;
  water.transmission = 0.55;
  water.thickness = 0.5;
  water.ior = 1.33;
  water.opacity = 0.72;
  water.envMapIntensity = 1.4;
  water.transparent = true;
  glowMats.push(water);

  const lampGlow = new THREE.MeshStandardMaterial({
    color: "#fff4d8",
    emissive: "#ffd9a0",
    emissiveIntensity: 0,
    roughness: 0.35,
    metalness: 0.05,
  });
  glowMats.push(lampGlow);
  const lobbyGlow = new THREE.MeshStandardMaterial({
    color: "#f0d4a8",
    emissive: "#ffc888",
    emissiveIntensity: 0.15,
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  glowMats.push(lobbyGlow);
  const windowGlow = glass.clone();
  windowGlow.userData.windowGlow = true;
  glassMats.push(windowGlow);

  const mark = (o: THREE.Object3D, structural = true) => {
    if (structural) {
      o.userData.structure = true;
      structure.push(o);
    }
    group.add(o);
    return o;
  };

  // =====================================================================
  // Site: lawn inside the boundary, paved court, drive, road, hedges, pool
  // =====================================================================
  // Far urban ground — muted grey, so the campus doesn't sit on an infinite olive plane.
  const farGround = new THREE.Mesh(
    new THREE.CircleGeometry(520, 64),
    new THREE.MeshStandardMaterial({ color: "#3a3c3a", roughness: 1, envMapIntensity: 0.08 }),
  );
  farGround.rotation.x = -Math.PI / 2;
  farGround.position.set(13.7, -0.16, 8);
  farGround.receiveShadow = true;
  mark(farGround);

  // Campus lawn — only inside the site boundary (not a 160 m olive disk).
  const lawn = new THREE.Mesh(new THREE.BoxGeometry(68, 0.04, 82), lawnMat);
  lawn.position.set(14, -0.02, 5);
  lawn.receiveShadow = true;
  mark(lawn);

  // Arrival plaza — light stone court around the tower and under the porte-cochère.
  const plaza = new THREE.Mesh(new THREE.BoxGeometry(42, 0.05, 36), paveMat);
  plaza.position.set(13.7, 0.01, 6);
  plaza.receiveShadow = true;
  mark(plaza);

  // Formal drop-off drive from the south gate, looping under the porte-cochère.
  const driveShape = new THREE.Shape();
  driveShape.moveTo(-5.2, -36);
  driveShape.lineTo(5.2, -36);
  driveShape.lineTo(5.6, -9);
  driveShape.lineTo(12, -9);
  driveShape.lineTo(12, -1.8);
  driveShape.lineTo(-12, -1.8);
  driveShape.lineTo(-12, -9);
  driveShape.lineTo(-5.6, -9);
  driveShape.closePath();
  const driveGeo = new THREE.ExtrudeGeometry(driveShape, { depth: 0.07, bevelEnabled: false });
  driveGeo.rotateX(-Math.PI / 2);
  const drive = new THREE.Mesh(driveGeo, driveMat);
  drive.position.set(13.7, 0.03, 0);
  drive.receiveShadow = true;
  mark(drive);

  // Public road south of the site, with sidewalk, curb and lane dashes.
  const road = new THREE.Mesh(new THREE.BoxGeometry(220, 0.06, 11), asphalt);
  road.position.set(13.7, -0.04, -48);
  road.receiveShadow = true;
  mark(road);
  const sidewalk = new THREE.Mesh(new THREE.BoxGeometry(220, 0.07, 2.6), paveMat);
  sidewalk.position.set(13.7, 0.0, -41.2);
  sidewalk.receiveShadow = true;
  mark(sidewalk);
  const curb = new THREE.Mesh(new THREE.BoxGeometry(220, 0.16, 0.28), slabMat);
  curb.position.set(13.7, 0.05, -42.5);
  mark(curb);
  const dashM: THREE.Matrix4[] = [];
  for (let i = -20; i <= 20; i++) {
    dashM.push(compose(13.7 + i * 6.5, 0.005, -48, 0, 3.2, 0.02, 0.16));
  }
  const dashMat = new THREE.MeshStandardMaterial({ color: "#e8e4d8", roughness: 0.7, envMapIntensity: 0.1 });
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), dashMat, dashM, { shadows: false }), false);

  // Pool on the north lawn, facing the 2BHK balconies
  const poolRim = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.28, 6.4), stone);
  poolRim.position.set(13.7, 0.08, 29.5);
  poolRim.receiveShadow = true;
  mark(poolRim);
  const wetDeck = new THREE.Mesh(new THREE.BoxGeometry(14.2, 0.08, 8.2), deckMat);
  wetDeck.position.set(13.7, 0.02, 29.5);
  wetDeck.receiveShadow = true;
  mark(wetDeck);
  const pool = new THREE.Mesh(new THREE.BoxGeometry(11.6, 0.22, 5.6), water);
  pool.position.set(13.7, 0.12, 29.5);
  mark(pool);
  const poolLight = new THREE.PointLight("#7ec8d8", 0, 10, 2);
  poolLight.position.set(13.7, 0.3, 29.5);
  poolLight.userData.nightI = 1.6;
  poolLight.userData.goldenI = 0.25;
  practicals.push(poolLight);
  mark(poolLight);

  // Formal box hedges along the drive and inside the boundary.
  const hedgeM: THREE.Matrix4[] = [];
  // Drive-side hedges (leave the gate clear)
  for (const [x, z, w, d, h] of [
    [6.4, -22, 0.5, 18, 0.85],
    [21.0, -22, 0.5, 18, 0.85],
    [6.4, -8, 0.5, 8, 0.85],
    [21.0, -8, 0.5, 8, 0.85],
    // Boundary planting beds just inside the walls (not across the gate)
    [-14, 5, 0.55, 68, 0.95],
    [42, 5, 0.55, 68, 0.95],
    [14, 41.4, 52, 0.55, 0.95],
    [-4, -32.4, 22, 0.55, 0.95],
    [32, -32.4, 22, 0.55, 0.95],
    // Plaza edge
    [2, 16, 8, 0.45, 0.7],
    [25.4, 16, 8, 0.45, 0.7],
  ] as [number, number, number, number, number][]) {
    hedgeM.push(compose(x, h / 2, z, 0, w, h, d));
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), hedgeMat, hedgeM));

  // Boundary wall with piers and a palisade — a clear site edge.
  const wallH = 2.15;
  const bounds: [number, number, number, number][] = [
    // x,z,w,d as a box along the perimeter (outer campus)
    [-18, -34, 27.5, 0.32],
    [18.5, -34, 27.5, 0.32],
    [-18, 44, 64, 0.32],
    [-18, -34, 0.32, 78.32],
    [46, -34, 0.32, 78.32],
  ];
  const wallMats: THREE.Matrix4[] = [];
  const pierMats: THREE.Matrix4[] = [];
  const palMats: THREE.Matrix4[] = [];
  for (const [x, z, w, d] of bounds) {
    wallMats.push(compose(x + w / 2, wallH / 2, z + d / 2, 0, w, wallH, d));
    const alongX = w > d;
    const len = alongX ? w : d;
    const n = Math.max(2, Math.floor(len / 7));
    for (let i = 0; i <= n; i++) {
      const tt = i / n;
      const px = alongX ? x + tt * w : x + w / 2;
      const pz = alongX ? z + d / 2 : z + tt * d;
      pierMats.push(compose(px, wallH / 2 + 0.15, pz, 0, 0.55, wallH + 0.3, 0.55));
    }
    const palN = Math.floor(len / 0.16);
    for (let i = 0; i < palN; i++) {
      const tt = (i + 0.5) / palN;
      const px = alongX ? x + tt * w : x + w / 2;
      const pz = alongX ? z + d / 2 : z + tt * d;
      palMats.push(compose(px, wallH + 0.45, pz, alongX ? 0 : Math.PI / 2, 0.03, 0.9, 0.03));
    }
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), stone, wallMats));
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), slabMat, pierMats));
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), mullion, palMats, { shadows: false }));

  // Gate opening on the south — a gap is visual (drive passes through); add a lintel
  const gateLintel = new THREE.Mesh(new THREE.BoxGeometry(9, 0.3, 0.5), stone);
  gateLintel.position.set(13.7, wallH + 0.55, -34);
  mark(gateLintel);
  const gatePosts = instanced(new THREE.BoxGeometry(0.7, 3.1, 0.7), stone, [
    compose(13.7 - 4.6, 1.55, -34),
    compose(13.7 + 4.6, 1.55, -34),
  ]);
  mark(gatePosts);

  // Identity wall
  const sign = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.8, 0.32), stone);
  sign.position.set(5, 0.95, -18);
  sign.castShadow = true;
  mark(sign);
  const signLabel = document.createElement("div");
  signLabel.className = "unit-card";
  signLabel.innerHTML = `<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>`;
  signLabel.style.pointerEvents = "none";
  const signObj = new CSS2DObject(signLabel);
  signObj.position.set(5, 2.3, -18);
  mark(signObj);

  // Street lamps along the ROAD and the drive only (not scattered on empty lawn).
  const lampSpots: [number, number][] = [
    // Road, south of the wall
    [-20, -45], [-6, -45], [8, -45], [20, -45], [34, -45], [48, -45],
    // Drive
    [7.2, -28], [20.2, -28], [7.2, -16], [20.2, -16],
    [1.2, -6], [26.2, -6],
    // Plaza sides
    [1, 8], [26.4, 8],
  ];
  const poleM: THREE.Matrix4[] = [];
  const armM: THREE.Matrix4[] = [];
  const globeM: THREE.Matrix4[] = [];
  for (const [lx, lz] of lampSpots) {
    poleM.push(compose(lx, 2.15, lz, 0, 1, 1, 1));
    armM.push(compose(lx + 0.45, 4.15, lz, 0, 1, 1, 1));
    globeM.push(compose(lx + 0.75, 4.05, lz));
  }
  const poleGeo = new THREE.CylinderGeometry(0.06, 0.09, 4.3, 8);
  mark(instanced(poleGeo, mullion, poleM));
  mark(instanced(new THREE.BoxGeometry(0.9, 0.05, 0.06), capRail, armM, { shadows: false }));
  mark(instanced(new THREE.SphereGeometry(0.14, 10, 8), lampGlow, globeM, { shadows: false }));
  const lampBudget = mobile ? 8 : lampSpots.length;
  for (let i = 0; i < lampBudget; i++) {
    const [lx, lz] = lampSpots[i];
    const pl = new THREE.PointLight("#ffd4a0", 0, 14, 2);
    pl.position.set(lx + 0.75, 4.05, lz);
    pl.userData.nightI = 1.55;
    pl.userData.goldenI = 0.28;
    practicals.push(pl);
    mark(pl);
  }

  // Trees are loaded asynchronously (CC0 Quaternius glTF) via loadTrees().
  // Distant 3D city as a far silhouette — never a city HDRI behind the tower.
  addDistantCity(group, structure, mobile);

  // =====================================================================
  // Ground lobby + porte-cochère
  // =====================================================================
  addLobby(
    group, structure, practicals, glowMats,
    stone, facade, slabMat, soffit, lobbyGlass, mullion, lobbyGlow, mats, mobile,
  );

  // Continuous vertical fins (structure — hidden in floor isolation)
  addVerticalFins(group, structure, finMat);

  // Facade uplights at the podium, aimed up the long faces
  const upPts: [number, number, number][] = [
    [0.2, 0.15, 14.6], [27.2, 0.15, 14.6],
    [6, 0.15, 19.2], [21.4, 0.15, 19.2],
    [13.7, 0.15, 0], [8.45, 0.15, 5], [18.95, 0.15, 5],
  ];
  for (const [ux, uy, uz] of upPts) {
    const sp = new THREE.SpotLight("#ffe4c0", 0, 22, 0.42, 0.55, 1.4);
    sp.position.set(ux, uy, uz);
    sp.target.position.set(ux, uy + 14, uz);
    sp.target.updateMatrixWorld();
    sp.userData.nightI = 3.2;
    sp.userData.goldenI = 0.7;
    practicals.push(sp);
    mark(sp);
    mark(sp.target);
  }

  // =====================================================================
  // Typical floors (instanced windows, balconies, slab bands per floor group)
  // =====================================================================
  const shared = makeSharedGeos();
  for (let f = 1; f <= TYPICAL_FLOORS; f++) {
    const fg = makeTypicalFloor(f, mats, { facade, slabMat, soffit, glass: windowGlow, mullion, finMat, capRail, railGlass, stone }, shared);
    group.add(fg);
    floorGroups.push(fg);
    const hit = fg.getObjectByName("hit") as THREE.Mesh;
    if (hit) floorHits.push(hit);
  }

  const ph = makePenthouse(mats, { facade, slabMat, soffit, glass: windowGlow, mullion, capRail, railGlass, stone, finMat }, shared);
  group.add(ph);
  floorGroups.push(ph);
  const phHit = ph.getObjectByName("hit") as THREE.Mesh;
  if (phHit) floorHits.push(phHit);

  for (const fg of floorGroups) {
    const ps = fg.userData.practicals as THREE.Light[] | undefined;
    if (ps) practicals.push(...ps);
  }

  // =====================================================================
  // API
  // =====================================================================
  let isolatedFloor: number | null = null;
  let hlFloor: number | null = null;
  let hlUnit: string | null = null;
  let hlTime = 0;

  function highlight(floor: number | null) {
    hlFloor = floor;
    outlinedNow.length = 0;
    for (const fg of floorGroups) {
      const n = fg.userData.floor as number;
      const on = floor === n;
      fg.traverse((o) => {
        if (o.name === "highlight" || o.name === "outline" || o.name === "outline-edge") o.visible = on;
      });
      const lab = fg.getObjectByName("floor-label");
      if (lab) lab.visible = isolatedFloor === null && on;
      if (on) outlinedNow.push(fg);
    }
  }

  function highlightUnit(unitId: string | null) {
    hlUnit = unitId;
    for (const [id, mesh] of unitOutlines) mesh.visible = id === unitId;
  }

  function setIsolated(floor: number | null) {
    isolatedFloor = floor;
    for (const fg of floorGroups) {
      const n = fg.userData.floor as number;
      if (floor === null) {
        fg.visible = true;
        fg.traverse((o) => {
          if (o.userData.facade || o.userData.hideInCutaway) o.visible = true;
          if (o.name === "floor-label") o.visible = false;
          if (o.name === "highlight" || o.name === "outline" || o.name === "outline-edge") o.visible = false;
        });
      } else {
        fg.visible = n === floor;
        fg.traverse((o) => {
          if (o.userData.facade || o.userData.hideInCutaway) o.visible = false;
          if (o.name === "floor-label") o.visible = false;
        });
      }
    }
    for (const s of structure) s.visible = floor === null;
  }

  function setTime(time: "morning" | "golden" | "night") {
    const night = time === "night";
    const golden = time === "golden";
    for (const l of practicals) {
      const nightI = (l.userData.nightI as number) ?? 1.2;
      const goldenI = (l.userData.goldenI as number) ?? 0;
      l.intensity = night ? nightI : golden ? goldenI : 0;
      l.visible = l.intensity > 0.01;
    }
    for (const m of glowMats) {
      if (m === water) {
        m.emissive?.set?.(night ? "#163848" : "#000000");
        if ("emissiveIntensity" in m) m.emissiveIntensity = night ? 0.55 : 0;
        continue;
      }
      m.emissiveIntensity = night ? (m === lobbyGlow ? 2.4 : 2.8) : golden ? 0.7 : (m === lobbyGlow ? 0.18 : 0);
    }
    group.traverse((o) => {
      const fn = o.userData.setCityNight as ((n: boolean, g: boolean) => void) | undefined;
      if (fn) fn(night, golden);
    });
    for (const m of glassMats) {
      const env = (night ? m.userData.envNight : m.userData.envDay) as THREE.Texture | undefined;
      if (env) {
        m.envMap = env;
        m.needsUpdate = true;
      }
      if (m === lobbyGlass) {
        m.emissive.set(night ? "#ffc888" : "#000000");
        m.emissiveIntensity = night ? 0.55 : golden ? 0.12 : 0;
        m.opacity = night ? 0.55 : 0.34;
        m.color.set(night ? "#e8c898" : "#b7c8d2");
        continue;
      }
      if (night) {
        m.emissive.set("#ffc078");
        m.emissiveIntensity = 1.85;
        m.opacity = 0.88;
        m.color.set("#f3d2a0");
        m.transparent = true;
      } else if (golden) {
        m.emissive.set("#ffb070");
        m.emissiveIntensity = 0.45;
        m.opacity = 0.55;
        m.color.set("#9eb8c6");
      } else {
        m.emissive.set("#000000");
        m.emissiveIntensity = 0;
        m.opacity = 0.46;
        m.color.set("#8aa4b4");
      }
    }
  }

  function setEnv(day: THREE.Texture | null, night: THREE.Texture | null) {
    for (const m of glassMats) {
      m.userData.envDay = day;
      m.userData.envNight = night;
      if (day) {
        m.envMap = day;
        m.needsUpdate = true;
      }
    }
  }

  function tick(dt: number) {
    hlTime += dt;
    const pulse = 0.24 + 0.16 * (0.5 + 0.5 * Math.sin(hlTime * 2.6));
    for (const fg of floorGroups) {
      const hl = fg.getObjectByName("highlight") as THREE.Mesh | undefined;
      if (hl && hl.visible) {
        const mat = hl.material as THREE.MeshBasicMaterial;
        mat.opacity = pulse;
      }
      fg.traverse((o) => {
        if (!(o instanceof THREE.Mesh)) return;
        if (o.name === "outline" || o.name === "outline-edge") {
          if (!o.visible) return;
          const mat = o.material as THREE.MeshBasicMaterial;
          // outline-edge shares a material — cloning would be safer, but a shared pulse is fine
          mat.opacity = 0.65 + 0.3 * (0.5 + 0.5 * Math.sin(hlTime * 2.6));
        }
      });
    }
    for (const [, mesh] of unitOutlines) {
      if (mesh.visible) {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        mat.opacity = 0.5 + 0.35 * (0.5 + 0.5 * Math.sin(hlTime * 2.8));
      }
    }
  }

  function outlined() {
    return outlinedNow.slice();
  }

  function dispose() {
    group.removeFromParent();
  }

  // expose unit outline registry so main can register floor-view flats
  (group as unknown as { _unitOutlines: Map<string, THREE.Mesh> })._unitOutlines = unitOutlines;

  void hlUnit;

  async function loadTrees(): Promise<void> {
    await loadSiteTrees(group, structure);
  }

  return { group, floorHits, unitHits, highlight, highlightUnit, setIsolated, setTime, setEnv, outlined, tick, loadTrees, dispose };
}

interface SharedGeos {
  win: THREE.BoxGeometry;
  mullV: THREE.BoxGeometry;
  mullH: THREE.BoxGeometry;
  clad: THREE.BoxGeometry;
  fin: THREE.BoxGeometry;
  slab: THREE.ExtrudeGeometry;
  balSlab: THREE.BoxGeometry;
  balRail: THREE.BoxGeometry;
  balRailS: THREE.BoxGeometry;
  cap: THREE.BoxGeometry;
  capS: THREE.BoxGeometry;
}

function makeSharedGeos(): SharedGeos {
  const winW = 1.55;
  const winH = 1.55;
  const module = 3.0;
  return {
    win: new THREE.BoxGeometry(winW, winH, 0.05),
    mullV: new THREE.BoxGeometry(0.045, winH + 0.06, 0.06),
    mullH: new THREE.BoxGeometry(winW + 0.06, 0.045, 0.06),
    clad: new THREE.BoxGeometry(module - 0.04, FLOOR_TO_FLOOR - 0.42, 0.24),
    fin: new THREE.BoxGeometry(0.1, FLOOR_TO_FLOOR - 0.42, 0.38),
    slab: plateGeo(0.32),
    balSlab: new THREE.BoxGeometry(5.15, 0.28, 2.25),
    balRail: new THREE.BoxGeometry(4.85, 1.1, 0.024),
    balRailS: new THREE.BoxGeometry(0.024, 1.1, 2.05),
    cap: new THREE.BoxGeometry(4.9, 0.028, 0.05),
    capS: new THREE.BoxGeometry(0.05, 0.028, 2.1),
  };
}

function isBalconyModule(face: { alongX: boolean; z: number; x: number }, px: number, pz: number): boolean {
  // North-face balconies at x 5.6–10.4 and 16.8–21.6
  if (face.alongX && Math.abs(pz - 19.2) < 0.2) {
    if ((px > 5.3 && px < 10.7) || (px > 16.5 && px < 21.9)) return true;
  }
  return false;
}

function makeTypicalFloor(
  floor: number,
  mats: Materials,
  M: {
    facade: THREE.Material;
    slabMat: THREE.Material;
    soffit: THREE.Material;
    glass: THREE.Material;
    mullion: THREE.Material;
    finMat: THREE.Material;
    capRail: THREE.Material;
    railGlass: THREE.Material;
    stone: THREE.Material;
  },
  shared: SharedGeos,
): THREE.Group {
  const g = new THREE.Group();
  g.userData.floor = floor;
  const y0 = floorY(floor);

  const slab = new THREE.Mesh(shared.slab, M.slabMat);
  slab.position.y = y0;
  slab.castShadow = true;
  slab.receiveShadow = true;
  slab.userData.ghostable = true;
  g.add(slab);
  // Expressed slab band — a slightly larger, thinner plate sitting on the edge
  const band = new THREE.Mesh(shared.slab, M.slabMat);
  band.position.y = y0 + 0.02;
  band.scale.set(1.018, 0.7, 1.018);
  band.castShadow = true;
  band.userData.facade = true;
  g.add(band);

  const top = new THREE.Mesh(shared.slab, M.slabMat);
  top.position.y = y0 + FLOOR_TO_FLOOR - 0.12;
  top.scale.set(1.008, 0.35, 1.008);
  top.userData.ghostable = true;
  top.userData.hideInCutaway = true;
  top.castShadow = true;
  g.add(top);

  addFacadeInstanced(g, y0 + 0.32, M, shared);

  // Deep north balconies (2BHK A and B) — same geometry instanced twice
  addDeepBalconies(g, y0, M, shared);

  // Invisible hit + gold highlight volume + inverted-hull outline
  const hit = new THREE.Mesh(shared.slab, new THREE.MeshBasicMaterial({ visible: false }));
  hit.position.y = y0;
  hit.scale.set(1, (FLOOR_TO_FLOOR + 0.01) / 0.32, 1);
  hit.name = "hit";
  hit.userData.floor = floor;
  g.add(hit);

  const hlMat = new THREE.MeshBasicMaterial({
    color: "#f2d078",
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
    side: THREE.DoubleSide,
    depthTest: false,
  });
  const hl = new THREE.Mesh(shared.slab, hlMat);
  hl.position.y = y0;
  hl.scale.set(1.06, (FLOOR_TO_FLOOR + 0.08) / 0.32, 1.06);
  hl.name = "highlight";
  hl.renderOrder = 8;
  hl.visible = false;
  g.add(hl);

  const olMat = new THREE.MeshBasicMaterial({
    color: "#ffe29a",
    side: THREE.BackSide,
    transparent: true,
    opacity: 0.95,
    depthWrite: false,
    depthTest: false,
  });
  const ol = new THREE.Mesh(shared.slab, olMat);
  ol.position.y = y0 - 0.06;
  ol.scale.set(1.09, (FLOOR_TO_FLOOR + 0.28) / 0.32, 1.09);
  ol.name = "outline";
  ol.renderOrder = 9;
  ol.visible = false;
  g.add(ol);

  // Projected gold edge band around the plate — reads clearly at marketing distance.
  const edgeGrp = new THREE.Group();
  edgeGrp.name = "highlight";
  // (keep name "outline-edge" and toggle with outline)
  const edgeMat = new THREE.MeshBasicMaterial({
    color: "#ffd878",
    transparent: true,
    opacity: 0.95,
    depthTest: false,
    depthWrite: false,
  });
  const pts = [...PLATE, PLATE[0]];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    const cx = (a[0] + b[0]) / 2, cz = (a[1] + b[1]) / 2;
    const ang = Math.atan2(dx, dz);
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.22, FLOOR_TO_FLOOR * 0.92, len + 0.22), edgeMat);
    band.position.set(cx, y0 + FLOOR_TO_FLOOR / 2, cz);
    band.rotation.y = ang;
    band.name = "outline-edge";
    band.visible = false;
    g.add(band);
  }

  const num = document.createElement("div");
  num.className = "unit-card";
  num.style.padding = "4px 8px";
  num.style.pointerEvents = "none";
  num.innerHTML = `<div class="u-id">${floor}</div>`;
  const lab = new CSS2DObject(num);
  lab.position.set(-0.8, y0 + FLOOR_TO_FLOOR / 2, 14.6);
  lab.name = "floor-label";
  lab.visible = false;
  g.add(lab);

  void mats;
  return g;
}

function addFacadeInstanced(
  g: THREE.Group,
  y: number,
  M: { facade: THREE.Material; glass: THREE.Material; mullion: THREE.Material },
  shared: SharedGeos,
) {
  const cladM: THREE.Matrix4[] = [];
  const spanM: THREE.Matrix4[] = [];
  const glassM: THREE.Matrix4[] = [];
  const mullVM: THREE.Matrix4[] = [];
  const mullHM: THREE.Matrix4[] = [];
  const sillM: THREE.Matrix4[] = [];
  const h = FLOOR_TO_FLOOR - 0.42;
  const module = 3.0;
  const winW = 1.55;
  const winH = 1.55;
  const sillY = 0.95; // solid spandrel under the punch window
  for (const f of facadeFaces()) {
    const n = Math.max(1, Math.floor(f.len / module));
    for (let i = 0; i < n; i++) {
      const u = (i + 0.5) / n;
      const px = f.alongX ? f.x + u * f.len : f.x;
      const pz = f.alongX ? f.z : f.z + u * f.len;
      const ry = f.alongX ? 0 : Math.PI / 2;
      const ox = f.alongX ? 0 : f.inward * 0.13;
      const oz = f.alongX ? f.inward * 0.13 : 0;
      const door = isBalconyModule(f, px, pz);
      // Full-width solid cladding is the wall. Windows are punched into it,
      // with a solid spandrel below (not an all-glass grid).
      cladM.push(compose(px, y + h / 2, pz, ry, 1, 1, 1));
      const thisH = door ? 2.25 : winH;
      const cy = y + (door ? 0.15 + thisH / 2 : sillY + winH / 2);
      glassM.push(compose(px + ox, cy, pz + oz, ry, door ? 1.2 : 1, thisH / winH, 1));
      const mx = px + ox;
      const mz = pz + oz;
      const half = (door ? winW * 1.2 : winW) / 2;
      mullVM.push(compose(mx + (f.alongX ? -half : 0), cy, mz + (f.alongX ? 0 : -half), ry, 1, thisH / winH, 1));
      mullVM.push(compose(mx + (f.alongX ? half : 0), cy, mz + (f.alongX ? 0 : half), ry, 1, thisH / winH, 1));
      mullVM.push(compose(mx, cy, mz, ry, 0.65, thisH / winH, 1));
      mullHM.push(compose(mx, cy - thisH / 2, mz, ry, door ? 1.2 : 1, 1, 1));
      mullHM.push(compose(mx, cy + thisH / 2, mz, ry, door ? 1.2 : 1, 1, 1));
      if (!door) {
        mullHM.push(compose(mx, cy, mz, ry));
        // Projecting stone sill
        sillM.push(compose(mx, y + sillY - 0.04, mz + (f.alongX ? oz * 1.4 : 0) + (f.alongX ? 0 : ox * 1.4), ry, 1.15, 0.7, 1.6));
        // Extra solid spandrel panel sitting slightly proud of the cladding
        spanM.push(compose(px + ox * 0.4, y + sillY / 2 - 0.02, pz + oz * 0.4, ry, 0.98, (sillY - 0.08) / h, 1.05));
      }
    }
  }
  const clad = instanced(shared.clad, M.facade, cladM);
  clad.userData.facade = true;
  clad.userData.ghostable = true;
  g.add(clad);
  if (spanM.length) {
    const span = instanced(shared.clad, M.facade, spanM);
    span.userData.facade = true;
    span.userData.ghostable = true;
    g.add(span);
  }
  const gl = instanced(shared.win, M.glass, glassM, { shadows: false });
  gl.userData.facade = true;
  gl.userData.windowGlow = true;
  g.add(gl);
  const mv = instanced(shared.mullV, M.mullion, mullVM, { shadows: false });
  mv.userData.facade = true;
  g.add(mv);
  const mh = instanced(shared.mullH, M.mullion, mullHM, { shadows: false });
  mh.userData.facade = true;
  g.add(mh);
  if (sillM.length) {
    const si = instanced(shared.mullH, M.facade, sillM, { shadows: false });
    si.userData.facade = true;
    g.add(si);
  }
}

function addDeepBalconies(
  g: THREE.Group,
  y0: number,
  M: { slabMat: THREE.Material; soffit: THREE.Material; railGlass: THREE.Material; capRail: THREE.Material },
  shared: SharedGeos,
) {
  const xs = [5.35, 16.55];
  const z = 19.05;
  const w = 5.15;
  const d = 2.25;
  const slabM: THREE.Matrix4[] = [];
  const soffM: THREE.Matrix4[] = [];
  const railNM: THREE.Matrix4[] = [];
  const railWM: THREE.Matrix4[] = [];
  const railEM: THREE.Matrix4[] = [];
  const capNM: THREE.Matrix4[] = [];
  const capSM: THREE.Matrix4[] = [];
  for (const x of xs) {
    const cx = x + w / 2;
    const cz = z + d / 2 + 0.08; // slab projects past the rail
    const sy = y0 + 0.16;
    slabM.push(compose(cx, sy, cz));
    soffM.push(compose(cx, sy - 0.16, cz, 0, 0.96, 0.35, 0.96));
    const rh = sy + 0.16 + 1.1 / 2;
    // Rails sit inset from the slab edge so the white slab lip reads clearly.
    railNM.push(compose(cx, rh, z + d - 0.12));
    railWM.push(compose(x + 0.12, rh, cz - 0.04));
    railEM.push(compose(x + w - 0.12, rh, cz - 0.04));
    capNM.push(compose(cx, sy + 0.16 + 1.1, z + d - 0.12));
    capSM.push(compose(x + 0.12, sy + 0.16 + 1.1, cz - 0.04));
    capSM.push(compose(x + w - 0.12, sy + 0.16 + 1.1, cz - 0.04));
  }
  const sl = instanced(shared.balSlab, M.slabMat, slabM);
  sl.userData.facade = true;
  g.add(sl);
  const so = instanced(shared.balSlab, M.soffit, soffM);
  so.userData.facade = true;
  g.add(so);
  const rn = instanced(shared.balRail, M.railGlass, railNM, { shadows: false });
  const rw = instanced(shared.balRailS, M.railGlass, railWM, { shadows: false });
  const re = instanced(shared.balRailS, M.railGlass, railEM, { shadows: false });
  for (const r of [rn, rw, re]) {
    r.userData.facade = true;
    g.add(r);
  }
  const cn = instanced(shared.cap, M.capRail, capNM, { shadows: false });
  const cs = instanced(shared.capS, M.capRail, capSM, { shadows: false });
  cn.userData.facade = true;
  cs.userData.facade = true;
  g.add(cn, cs);

  // Warm balcony soffit downlight (one per balcony, cheap)
  for (const x of xs) {
    const bulb = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.03, 10),
      new THREE.MeshStandardMaterial({ color: "#fff4d8", emissive: "#ffd090", emissiveIntensity: 0.4, roughness: 1 }),
    );
    bulb.position.set(x + w / 2, y0 + FLOOR_TO_FLOOR - 0.28, z + d * 0.45);
    bulb.userData.facade = true;
    g.add(bulb);
    const pl = new THREE.PointLight("#ffd0a0", 0, 4.5, 2);
    pl.position.copy(bulb.position);
    pl.userData.nightI = 1.85;
    pl.userData.goldenI = 0.2;
    pl.userData.practical = true;
    // picked up later? these are inside the floor group; setTime traverses intensity via practicals array.
    // We tag them so floor-local setTime can find them — also attach to userData for group traverse.
    g.add(pl);
    // Store on group for the tower setTime walk
    if (!g.userData.practicals) g.userData.practicals = [];
    (g.userData.practicals as THREE.Light[]).push(pl);
    (g.userData.practicals as THREE.Light[]);
  }
}

function makePenthouse(
  mats: Materials,
  M: {
    facade: THREE.Material;
    slabMat: THREE.Material;
    soffit: THREE.Material;
    glass: THREE.Material;
    mullion: THREE.Material;
    capRail: THREE.Material;
    railGlass: THREE.Material;
    stone: THREE.Material;
    finMat: THREE.Material;
  },
  shared: SharedGeos,
): THREE.Group {
  const g = new THREE.Group();
  g.userData.floor = PENTHOUSE_FLOOR;
  const y0 = floorY(PENTHOUSE_FLOOR);

  const deck = new THREE.Mesh(shared.slab, M.slabMat);
  deck.position.y = y0;
  deck.castShadow = true;
  deck.receiveShadow = true;
  deck.userData.ghostable = true;
  g.add(deck);
  const deckTop = new THREE.Mesh(shared.slab, M.soffit);
  deckTop.position.y = y0 + 0.2;
  deckTop.scale.set(0.995, 0.2, 0.995);
  g.add(deckTop);

  addParapet(g, y0 + 0.22, 1.05, M.stone, M.capRail, M.railGlass);

  const pw = UNIT_PH.width;
  const pd = UNIT_PH.depth;
  const px = UNIT_PH.ox + pw / 2;
  const pz = UNIT_PH.oz + pd / 2;
  const phH = 3.35;
  const body = new THREE.Mesh(new THREE.BoxGeometry(pw, phH, pd), M.facade);
  body.position.set(px, y0 + 0.22 + phH / 2, pz);
  body.castShadow = true;
  body.userData.ghostable = true;
  body.userData.hideInCutaway = true;
  g.add(body);

  // Ribbon glazing on each face, with mullions
  const faces: [number, number, number, number, number][] = [
    [0, pd / 2 + 0.03, pw * 0.78, 0.05, 0],
    [0, -pd / 2 - 0.03, pw * 0.62, 0.05, 0],
    [pw / 2 + 0.03, 0, 0.05, pd * 0.58, Math.PI / 2],
    [-pw / 2 - 0.03, 0, 0.05, pd * 0.52, Math.PI / 2],
  ];
  for (const [ox, oz, w, d, ry] of faces) {
    const gl = new THREE.Mesh(new THREE.BoxGeometry(w, phH * 0.7, d), M.glass);
    gl.position.set(px + ox, y0 + 0.22 + phH * 0.5, pz + oz);
    gl.rotation.y = ry;
    gl.userData.windowGlow = true;
    g.add(gl);
    const nMull = 5;
    for (let i = 0; i < nMull; i++) {
      const t = (i + 0.5) / nMull;
      const mull = new THREE.Mesh(new THREE.BoxGeometry(0.045, phH * 0.72, 0.06), M.mullion);
      const alongX = Math.abs(w) > Math.abs(d);
      mull.position.set(
        px + ox + (alongX ? (t - 0.5) * w : 0),
        y0 + 0.22 + phH * 0.5,
        pz + oz + (alongX ? 0 : (t - 0.5) * d),
      );
      g.add(mull);
    }
  }

  // Articulated crown — oversized roof slab, fascia, and a wood pergola
  const roof = new THREE.Mesh(new THREE.BoxGeometry(pw + 0.9, 0.28, pd + 0.9), M.slabMat);
  roof.position.set(px, y0 + 0.22 + phH + 0.14, pz);
  roof.castShadow = true;
  roof.userData.hideInCutaway = true;
  g.add(roof);
  const fascia = new THREE.Mesh(new THREE.BoxGeometry(pw + 1.15, 0.38, pd + 1.15), M.finMat);
  fascia.position.set(px, y0 + 0.22 + phH + 0.05, pz);
  fascia.userData.hideInCutaway = true;
  g.add(fascia);

  addPergola(g, px, y0 + 0.22 + phH + 0.28, pz - pd * 0.15, 8.4, 6.2, 2.45, M.soffit, M.capRail);

  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(28, 4.6, 22),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.set(13.7, y0 + 2.2, 10);
  hit.name = "hit";
  hit.userData.floor = PENTHOUSE_FLOOR;
  g.add(hit);
  const hl = new THREE.Mesh(
    new THREE.BoxGeometry(28, 4.6, 22),
    new THREE.MeshBasicMaterial({ color: "#e8c878", transparent: true, opacity: 0.28, depthWrite: false }),
  );
  hl.position.set(13.7, y0 + 2.2, 10);
  hl.name = "highlight";
  hl.visible = false;
  g.add(hl);
  const ol = new THREE.Mesh(
    new THREE.BoxGeometry(28.6, 4.9, 22.5),
    new THREE.MeshBasicMaterial({ color: "#f0d48a", side: THREE.BackSide, transparent: true, opacity: 0.85, depthWrite: false }),
  );
  ol.position.set(13.7, y0 + 2.2, 10);
  ol.name = "outline";
  ol.visible = false;
  g.add(ol);

  const num = document.createElement("div");
  num.className = "unit-card";
  num.innerHTML = `<div class="u-id">PH</div><div class="u-meta">Penthouse</div>`;
  num.style.pointerEvents = "none";
  const lab = new CSS2DObject(num);
  lab.position.set(px, y0 + 4.4, pz);
  lab.name = "floor-label";
  lab.visible = false;
  g.add(lab);

  void mats;
  return g;
}

function addPergola(
  g: THREE.Group,
  cx: number, y: number, cz: number,
  w: number, d: number, h: number,
  wood: THREE.Material, metal: THREE.Material,
) {
  const posts: THREE.Matrix4[] = [];
  const corners: [number, number][] = [
    [-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2],
  ];
  for (const [ox, oz] of corners) posts.push(compose(cx + ox, y + h / 2, cz + oz, 0, 0.18, h, 0.18));
  g.add(instanced(new THREE.BoxGeometry(1, 1, 1), wood, posts));
  // Beams
  const beams: THREE.Matrix4[] = [];
  beams.push(compose(cx, y + h, cz - d / 2, 0, w + 0.3, 0.16, 0.18));
  beams.push(compose(cx, y + h, cz + d / 2, 0, w + 0.3, 0.16, 0.18));
  beams.push(compose(cx - w / 2, y + h, cz, 0, 0.18, 0.16, d + 0.3));
  beams.push(compose(cx + w / 2, y + h, cz, 0, 0.18, 0.16, d + 0.3));
  g.add(instanced(new THREE.BoxGeometry(1, 1, 1), wood, beams));
  // Slats
  const slats: THREE.Matrix4[] = [];
  const n = 14;
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    slats.push(compose(cx + (t - 0.5) * w, y + h + 0.1, cz, 0, 0.07, 0.06, d + 0.1));
  }
  const slatMesh = instanced(new THREE.BoxGeometry(1, 1, 1), wood, slats, { shadows: false });
  slatMesh.userData.hideInCutaway = true;
  g.add(slatMesh);
  void metal;
}

function addParapet(
  g: THREE.Group,
  y: number,
  h: number,
  stone: THREE.Material,
  cap: THREE.Material,
  rail: THREE.Material,
) {
  const pts = [...PLATE, PLATE[0]];
  const wallM: THREE.Matrix4[] = [];
  const capM: THREE.Matrix4[] = [];
  const railM: THREE.Matrix4[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    const cx = (a[0] + b[0]) / 2;
    const cz = (a[1] + b[1]) / 2;
    const ang = Math.atan2(dx, dz);
    // Low stone plinth + frameless glass above (premium terrace rail)
    wallM.push(compose(cx, y + 0.18, cz, ang, 0.16, 0.36, len));
    railM.push(compose(cx, y + 0.36 + (h - 0.36) / 2, cz, ang, 0.03, h - 0.36, len));
    capM.push(compose(cx, y + h, cz, ang, 0.05, 0.025, len));
  }
  g.add(instanced(new THREE.BoxGeometry(1, 1, 1), stone, wallM));
  g.add(instanced(new THREE.BoxGeometry(1, 1, 1), rail, railM, { shadows: false }));
  g.add(instanced(new THREE.BoxGeometry(1, 1, 1), cap, capM, { shadows: false }));
}

function addVerticalFins(
  group: THREE.Group,
  structure: THREE.Object3D[],
  finMat: THREE.Material,
) {
  // A handful of champagne accent fins at corners and mid-span — not a cage.
  // They start at the transfer slab (LOBBY_H) so the tower is not on stilts.
  const y0 = floorY(1);
  const y1 = floorY(TYPICAL_FLOORS) + FLOOR_TO_FLOOR;
  const h = y1 - y0;
  const cy = (y0 + y1) / 2;
  const mats: THREE.Matrix4[] = [];
  for (const f of facadeFaces()) {
    if (f.alongX && Math.abs(f.z - 0) < 0.2) continue;
    // One fin every ~9 m, always including both ends (corners).
    const n = Math.max(1, Math.round(f.len / 9));
    for (let i = 0; i <= n; i++) {
      const u = i / n;
      const px = f.alongX ? f.x + u * f.len : f.x;
      const pz = f.alongX ? f.z : f.z + u * f.len;
      const ox = f.alongX ? 0 : f.inward * 0.32;
      const oz = f.alongX ? f.inward * 0.32 : 0;
      const ry = f.alongX ? 0 : Math.PI / 2;
      mats.push(compose(px + ox, cy, pz + oz, ry, 1.15, h / (FLOOR_TO_FLOOR - 0.42), 1.15));
    }
  }
  const mesh = instanced(new THREE.BoxGeometry(0.1, FLOOR_TO_FLOOR - 0.42, 0.42), finMat, mats);
  mesh.userData.structure = true;
  group.add(mesh);
  structure.push(mesh);
}

function addLobby(
  group: THREE.Group,
  structure: THREE.Object3D[],
  practicals: THREE.Light[],
  glowMats: THREE.MeshStandardMaterial[],
  stone: THREE.Material,
  facade: THREE.Material,
  slabMat: THREE.Material,
  soffit: THREE.Material,
  lobbyGlass: THREE.Material,
  mullion: THREE.Material,
  lobbyGlow: THREE.Material,
  mats: Materials,
  mobile: boolean,
) {
  const mark = (o: THREE.Object3D) => {
    o.userData.structure = true;
    structure.push(o);
    group.add(o);
    return o;
  };

  // Full-footprint stone podium — same plan as the tower, so it is grounded
  // (not a cream box, not a stilted cage). The lobby curtain is a framed
  // opening in the south face, not a separate volume.
  const podium = plateMesh(stone, PLINTH, 0);
  mark(podium);
  // Solid podium, with a punched south opening so the lobby curtain can read
  // (a full-plate fill was a blank cream wall at the arrival).
  const podiumFillGeo = plateGeo(LOBBY_H - 0.35, shapePodiumOpen());
  const podiumFill = new THREE.Mesh(podiumFillGeo, stone);
  podiumFill.position.y = 0.02;
  podiumFill.castShadow = true;
  podiumFill.receiveShadow = true;
  mark(podiumFill);
  // Transfer cornice the first residential floor sits on — projects so the
  // tower clearly rests on a base.
  const transfer = plateMesh(slabMat, 0.5, LOBBY_H - 0.5);
  transfer.scale.set(1.04, 1, 1.04);
  transfer.position.x = 13.7 * (1 - 1.04);
  transfer.position.z = 10.6 * (1 - 1.04);
  mark(transfer);
  // Rusticated base band at grade, wrapping the plate.
  const rust = plateMesh(stone, 0.85, 0);
  rust.scale.set(1.04, 1, 1.04);
  rust.position.x = 13.7 * (1 - 1.04);
  rust.position.z = 10.6 * (1 - 1.04);
  mark(rust);

  // Rusticated stone cladding on every podium face, with a punched opening
  // left on the south lobby curtain.
  const podClad: THREE.Matrix4[] = [];
  const podSlot: THREE.Matrix4[] = [];
  const podH = LOBBY_H - 0.55;
  for (const f of facadeFaces()) {
    const isLobbySouth = f.alongX && Math.abs(f.z - 0) < 0.25;
    const n = Math.max(1, Math.floor(f.len / 1.5));
    for (let i = 0; i < n; i++) {
      const u = (i + 0.5) / n;
      const px = f.alongX ? f.x + u * f.len : f.x;
      const pz = f.alongX ? f.z : f.z + u * f.len;
      const ry = f.alongX ? 0 : Math.PI / 2;
      const ox = f.alongX ? 0 : f.inward * 0.14;
      const oz = f.alongX ? f.inward * 0.14 : 0;
      if (isLobbySouth) continue;
      podClad.push(compose(px + ox, podH / 2, pz + oz, ry, 1.46, podH, 0.28));
      // Two horizontal window slots (amenity / lobby secondary)
      podSlot.push(compose(px + ox * 1.6, 2.15, pz + oz * 1.6, ry, 1.05, 0.85, 0.06));
      podSlot.push(compose(px + ox * 1.6, 4.35, pz + oz * 1.6, ry, 1.05, 0.85, 0.06));
    }
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), stone, podClad));
  mark(instanced(new THREE.BoxGeometry(1, 1, 0.08), lobbyGlass, podSlot, { shadows: false }));

  // Lobby volume occupies the south stem (3BHK footprint) at double height
  const lx = 13.7;
  const lz = 5.1;
  const lw = 10.3;
  const ld = 9.8;
  const lh = LOBBY_H - 0.15;

  // Stone-clad side walls, open south curtain
  const sideW = new THREE.Mesh(new THREE.BoxGeometry(0.35, lh, ld), stone);
  sideW.position.set(lx - lw / 2, lh / 2, lz);
  sideW.castShadow = true;
  mark(sideW);
  const sideE = sideW.clone();
  sideE.position.x = lx + lw / 2;
  mark(sideE);
  const back = new THREE.Mesh(new THREE.BoxGeometry(lw, lh, 0.35), stone);
  back.position.set(lx, lh / 2, lz + ld / 2);
  back.castShadow = true;
  mark(back);

  // Floor and coffered soffit
  const lfloor = new THREE.Mesh(new THREE.BoxGeometry(lw - 0.4, 0.08, ld - 0.2), stone);
  lfloor.position.set(lx, 0.08, lz);
  lfloor.receiveShadow = true;
  mark(lfloor);
  const lceil = new THREE.Mesh(new THREE.BoxGeometry(lw - 0.2, 0.14, ld), soffit);
  lceil.position.set(lx, lh - 0.1, lz);
  mark(lceil);

  // Warm glowing interior (reads through the curtain wall)
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(lw - 0.8, lh - 0.8), lobbyGlow);
  glow.position.set(lx, lh * 0.48, lz + ld / 2 - 0.25);
  glow.rotation.y = Math.PI;
  mark(glow);
  const lobbyLit = new THREE.PointLight("#ffd4a0", 0, 16, 2);
  lobbyLit.position.set(lx, 3.6, lz);
  lobbyLit.userData.nightI = 3.4;
  lobbyLit.userData.goldenI = 0.8;
  practicals.push(lobbyLit);
  mark(lobbyLit);
  if (!mobile) {
    const lobbyLit2 = new THREE.PointLight("#ffe0b0", 0, 12, 2);
    lobbyLit2.position.set(lx, 2.4, lz - 2);
    lobbyLit2.userData.nightI = 2.2;
    lobbyLit2.userData.goldenI = 0.45;
    practicals.push(lobbyLit2);
    mark(lobbyLit2);
  }

  // Double-height curtain wall with mullions
  const cols = 6;
  const rows = 2;
  const paneW = (lw - 0.5) / cols;
  const paneH = (lh - 0.4) / rows;
  const glassM: THREE.Matrix4[] = [];
  const mullVM: THREE.Matrix4[] = [];
  const mullHM: THREE.Matrix4[] = [];
  const zFace = lz - ld / 2 - 0.04;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const px = lx - lw / 2 + 0.25 + (c + 0.5) * paneW;
      const py = 0.2 + (r + 0.5) * paneH;
      glassM.push(compose(px, py, zFace, 0, paneW - 0.08, paneH - 0.08, 1));
    }
    mullVM.push(compose(lx - lw / 2 + 0.25 + c * paneW, lh / 2, zFace - 0.01, 0, 0.06, lh - 0.15, 0.08));
  }
  mullVM.push(compose(lx + lw / 2 - 0.25, lh / 2, zFace - 0.01, 0, 0.06, lh - 0.15, 0.08));
  for (let r = 0; r <= rows; r++) {
    mullHM.push(compose(lx, 0.2 + r * paneH, zFace - 0.01, 0, lw - 0.3, 0.07, 0.08));
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 0.05), lobbyGlass, glassM, { shadows: false }));
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), mullion, mullVM));
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), mullion, mullHM));

  // Stone frame around the curtain (jambs + header + sill) — a portal, not a solid box.
  const jambL = new THREE.Mesh(new THREE.BoxGeometry(0.65, lh + 0.2, 0.8), stone);
  jambL.position.set(lx - lw / 2 - 0.05, lh / 2, zFace + 0.15);
  jambL.castShadow = true;
  mark(jambL);
  const jambR = jambL.clone();
  jambR.position.x = lx + lw / 2 + 0.05;
  mark(jambR);
  const header = new THREE.Mesh(new THREE.BoxGeometry(lw + 1.4, 0.65, 0.95), slabMat);
  header.position.set(lx, lh + 0.15, zFace + 0.12);
  header.castShadow = true;
  mark(header);
  const sill = new THREE.Mesh(new THREE.BoxGeometry(lw + 0.8, 0.18, 0.7), stone);
  sill.position.set(lx, 0.12, zFace + 0.05);
  mark(sill);

  // Reception desk (simple stone block)
  const desk = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.05, 0.7), stone);
  desk.position.set(lx, 0.55, lz + 1.4);
  desk.castShadow = true;
  mark(desk);
  const deskTop = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.06, 0.85), mats.gold ?? slabMat);
  deskTop.position.set(lx, 1.08, lz + 1.4);
  mark(deskTop);

  // Lift doors at the core
  for (const ox of [-1.15, 1.15]) {
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.35, 2.2, 0.08), mullion);
    door.position.set(CORE.x + CORE.w / 2 + ox, 1.15, CORE.z + 0.15);
    mark(door);
  }

  // ---- Porte-cochère ----
  const canW = 16.5;
  const canD = 11.0;
  const canY = 4.5;
  const canZ = zFace - canD / 2 - 0.2;
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(canW, 0.28, canD), slabMat);
  canopy.position.set(lx, canY, canZ);
  canopy.castShadow = true;
  mark(canopy);
  const canSoffit = new THREE.Mesh(new THREE.BoxGeometry(canW - 0.2, 0.08, canD - 0.2), soffit);
  canSoffit.position.set(lx, canY - 0.16, canZ);
  mark(canSoffit);
  // Coffers
  const cofferM: THREE.Matrix4[] = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      cofferM.push(compose(
        lx + (i - 2) * (canW / 5.4),
        canY - 0.22,
        canZ + (j - 1) * (canD / 3.6),
        0, canW / 6.2, 0.08, canD / 4.2,
      ));
    }
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), soffit, cofferM, { shadows: false }));

  // Columns — two rows of three, stone-clad
  const colM: THREE.Matrix4[] = [];
  for (const ox of [-5.8, 0, 5.8]) {
    for (const oz of [-canD / 2 + 0.5, canD / 2 - 0.8]) {
      colM.push(compose(lx + ox, canY / 2, canZ + oz, 0, 0.7, canY, 0.7));
    }
  }
  const colsMesh = instanced(new THREE.CylinderGeometry(0.5, 0.56, 1, 16), stone, colM);
  mark(colsMesh);
  // Caps
  const capM: THREE.Matrix4[] = [];
  for (const ox of [-5.8, 0, 5.8]) {
    for (const oz of [-canD / 2 + 0.5, canD / 2 - 0.8]) {
      capM.push(compose(lx + ox, canY - 0.08, canZ + oz, 0, 0.75, 0.14, 0.75));
    }
  }
  mark(instanced(new THREE.BoxGeometry(1, 1, 1), slabMat, capM));

  // Entrance steps
  for (let i = 0; i < 3; i++) {
    const step = new THREE.Mesh(new THREE.BoxGeometry(8.5 - i * 0.15, 0.14, 0.9), stone);
    step.position.set(lx, 0.08 + i * 0.14, zFace - 0.5 - i * 0.28);
    step.receiveShadow = true;
    mark(step);
  }

  // Porte-cochère downlights
  for (const ox of [-4, 0, 4]) {
    const pl = new THREE.PointLight("#ffe2b8", 0, 9, 2);
    pl.position.set(lx + ox, canY - 0.35, canZ);
    pl.userData.nightI = 1.7;
    pl.userData.goldenI = 0.4;
    practicals.push(pl);
    mark(pl);
  }
}

async function loadSiteTrees(group: THREE.Group, structure: THREE.Object3D[]): Promise<void> {
  const loader = new GLTFLoader();
  const files = [
    "CommonTree_1.glb",
    "CommonTree_2.glb",
    "CommonTree_3.glb",
    "PalmTree_1.glb",
    "PalmTree_2.glb",
    "Bush_1.glb",
    "Bush_2.glb",
    "BushBerries_1.glb",
  ];
  const protos: THREE.Object3D[] = [];
  const bushes: THREE.Object3D[] = [];
  const palms: THREE.Object3D[] = [];
  await Promise.all(
    files.map(async (f) => {
      try {
        const gltf = await loader.loadAsync(`${import.meta.env.BASE_URL}models/trees/${f}`);
        const root = gltf.scene;
        root.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const h = size.y || 1;
        // Sit on y=0 and normalise height; caller scales from there.
        const wrap = new THREE.Group();
        wrap.add(root);
        root.position.y = -box.min.y;
        const target = f.startsWith("Bush") ? 1.05 : f.startsWith("Palm") ? 7.2 : 7.8;
        wrap.scale.setScalar(target / h);
        wrap.traverse((o) => {
          const m = o as THREE.Mesh;
          if (!m.isMesh) return;
          m.castShadow = true;
          m.receiveShadow = true;
          const list = (Array.isArray(m.material) ? m.material : [m.material]) as THREE.Material[];
          for (const raw of list) {
            if (!(raw instanceof THREE.MeshStandardMaterial)) continue;
            raw.metalness = 0.02;
            raw.roughness = 0.86;
            raw.envMapIntensity = 0.35;
            const n = (raw.name || "").toLowerCase();
            if (n.includes("green")) {
              raw.color.set("#2d6a34");
              raw.roughness = 0.9;
            } else if (n.includes("wood")) {
              raw.color.set("#4a2e1c");
              raw.roughness = 0.82;
            }
          }
        });
        if (f.startsWith("Bush")) bushes.push(wrap);
        else if (f.startsWith("Palm")) palms.push(wrap);
        else protos.push(wrap);
      } catch (err) {
        console.warn("[tower] tree failed", f, err);
      }
    }),
  );
  if (!protos.length && !palms.length) return;

  const place = (proto: THREE.Object3D, x: number, z: number, yaw: number, s = 1) => {
    const c = proto.clone(true);
    c.position.set(x, 0, z);
    c.rotation.y = yaw;
    c.scale.multiplyScalar(s);
    c.userData.structure = true;
    group.add(c);
    structure.push(c);
  };

  // Street trees along the public road (south of the wall).
  const street: [number, number, number][] = [
    [-22, -52.5, 0.95], [-8, -52.5, 1.05], [6, -52.5, 1.0],
    [22, -52.5, 1.08], [36, -52.5, 0.98], [50, -52.5, 1.05],
  ];
  street.forEach(([x, z, s], i) => {
    const proto = protos[i % Math.max(1, protos.length)];
    if (proto) place(proto, x, z, i * 0.7, s);
  });

  // Palms along the arrival drive (Indian residential language).
  const palmSpots: [number, number][] = [
    [4.6, -24], [22.8, -24], [4.6, -12], [22.8, -12], [3.2, -4], [24.2, -4],
  ];
  palmSpots.forEach(([x, z], i) => {
    const proto = palms[i % Math.max(1, palms.length)] ?? protos[0];
    if (proto) place(proto, x, z, i * 0.5, 0.95 + (i % 3) * 0.06);
  });

  // Grove clusters at campus corners and along the north lawn (keep the drive clear).
  const groves: [number, number, number][] = [
    [-12, 36, 1.15], [-11, 28, 0.95], [-13, 18, 1.05], [-11, 8, 1.0],
    [40, 36, 1.12], [39, 26, 0.98], [41, 16, 1.08], [39, 6, 0.95],
    [2, 40, 1.05], [13.7, 42, 1.2], [26, 40, 1.0],
    [-10, -18, 0.95], [38, -18, 1.0],
    [-8, 32, 0.85], [36, 32, 0.9],
  ];
  groves.forEach(([x, z, s], i) => {
    const proto = protos[i % Math.max(1, protos.length)];
    if (proto) place(proto, x, z, i * 1.15, s);
  });

  // Shrubs at hedge ends and around the pool.
  const shrubSpots: [number, number][] = [
    [6.4, -31], [21, -31], [6.4, -13], [21, -13],
    [6, 26], [21.4, 26], [8, 33], [19, 33],
    [-14, -28], [42, -28], [-14, 40], [42, 40],
  ];
  shrubSpots.forEach(([x, z], i) => {
    const proto = bushes[i % Math.max(1, bushes.length)];
    if (proto) place(proto, x, z, i * 0.9, 1.05);
  });
}

function addDistantCity(group: THREE.Group, structure: THREE.Object3D[], mobile: boolean) {
  const dayTex = cityWindowTexture(false);
  const nightTex = cityWindowTexture(true);
  dayTex.repeat.set(2, 3);
  nightTex.repeat.set(2, 3);
  const mat = new THREE.MeshStandardMaterial({
    color: "#4a5360",
    map: dayTex,
    roughness: 0.9,
    metalness: 0.05,
    envMapIntensity: 0.22,
    emissiveMap: nightTex,
    emissive: "#000000",
    emissiveIntensity: 0,
  });
  mat.userData.cityDay = dayTex;
  mat.userData.cityNight = nightTex;
  mat.userData.isCity = true;

  const matrices: THREE.Matrix4[] = [];
  const rng = (s: number) => {
    const x = Math.sin(s * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  // Distant skyline only (min ~280 m) so it reads as a silhouette, not a
  // neighbouring Minecraft block. Denser on the north so balcony views
  // see city lights at night.
  const count = mobile ? 36 : 64;
  for (let i = 0; i < count; i++) {
    // Prefer the northern half (balcony look-out) but wrap a full ring.
    const preferN = i < count * 0.55;
    const ang = preferN
      ? (-Math.PI * 0.15) + rng(i) * Math.PI * 1.3
      : (i / count) * Math.PI * 2 + rng(i) * 0.25;
    const rad = 290 + rng(i + 3) * 150 + (i % 7) * 8;
    const x = 13.7 + Math.cos(ang) * rad;
    const z = 8 + Math.sin(ang) * rad;
    const w = 14 + rng(i + 7) * 22;
    const d = 12 + rng(i + 11) * 18;
    const h = 22 + rng(i + 17) * (rng(i) > 0.72 ? 70 : 38);
    matrices.push(compose(x, h / 2, z, ang + Math.PI / 2, w, h, d));
  }
  const mesh = instanced(new THREE.BoxGeometry(1, 1, 1), mat, matrices, { shadows: false });
  mesh.userData.structure = true;
  mesh.userData.cityMat = mat;
  mesh.frustumCulled = false;
  group.add(mesh);
  structure.push(mesh);

  mesh.userData.setCityNight = (night: boolean, golden: boolean) => {
    mat.map = night ? nightTex : dayTex;
    mat.emissiveMap = nightTex;
    mat.emissive.set(night ? "#ffd8a0" : golden ? "#1a1008" : "#000000");
    mat.emissiveIntensity = night ? 1.15 : golden ? 0.1 : 0;
    mat.color.set(night ? "#10141a" : golden ? "#5a554c" : "#4a5360");
    mat.needsUpdate = true;
  };
}

export { plateCenter };

