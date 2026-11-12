import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import type { Materials } from "./materials";
import {
  CORE,
  FLOOR_TO_FLOOR,
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
  highlight: (floor: number | null) => void;
  setIsolated: (floor: number | null) => void;
  setTime: (time: "morning" | "golden" | "night") => void;
  dispose: () => void;
}

function pbr(tex: Materials["concrete"], color = "#cfc8bc") {
  return new THREE.MeshStandardMaterial({
    color,
    map: tex.map,
    normalMap: tex.normalMap,
    roughnessMap: tex.roughnessMap,
    roughness: 0.7,
    metalness: 0.05,
  });
}

function shapePlate(): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(PLATE[0][0], PLATE[0][1]);
  for (let i = 1; i < PLATE.length; i++) s.lineTo(PLATE[i][0], PLATE[i][1]);
  s.closePath();
  return s;
}

function plateMesh(mat: THREE.Material, thickness: number, y: number): THREE.Mesh {
  const geo = new THREE.ExtrudeGeometry(shapePlate(), {
    depth: thickness,
    bevelEnabled: false,
  });
  geo.rotateX(-Math.PI / 2);
  const m = new THREE.Mesh(geo, mat);
  m.position.y = y;
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

export function buildTower(mats: Materials): TowerBuild {
  const group = new THREE.Group();
  group.name = "tower";
  const floorHits: THREE.Mesh[] = [];
  const floorGroups: THREE.Group[] = [];

  // Smooth masonry — the Poly Haven concrete_wall map reads as plywood at this scale,
  // so the tower uses tinted un-mapped materials for a cleaner sales-office look.
  const conc = new THREE.MeshStandardMaterial({ color: "#c5c0b6", roughness: 0.86, metalness: 0.04 });
  const concDark = new THREE.MeshStandardMaterial({ color: "#8d8880", roughness: 0.8, metalness: 0.06 });
  const concWarm = new THREE.MeshStandardMaterial({ color: "#e6e0d4", roughness: 0.72, metalness: 0.04 });
  const glass = new THREE.MeshStandardMaterial({
    color: "#9ec6da",
    transparent: true,
    opacity: 0.42,
    roughness: 0.08,
    metalness: 0.28,
    envMapIntensity: 1.1,
  });
  const frame = mats.frame;
  const plazaMat = new THREE.MeshStandardMaterial({
    color: "#d9d3c7",
    map: mats.pave.map,
    normalMap: mats.pave.normalMap,
    roughnessMap: mats.pave.roughnessMap,
    roughness: 0.85,
  });
  mats.pave.map.repeat.set(14, 14);
  mats.pave.normalMap.repeat.set(14, 14);
  mats.pave.roughnessMap.repeat.set(14, 14);

  // --- Plaza ---
  const plaza = new THREE.Mesh(new THREE.PlaneGeometry(48, 42), plazaMat);
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set(13.7, 0.0, 9);
  plaza.receiveShadow = true;
  group.add(plaza);

  const lawn = new THREE.Mesh(
    new THREE.PlaneGeometry(160, 160),
    new THREE.MeshStandardMaterial({
      color: "#6a8a4a",
      map: mats.grass.map,
      normalMap: mats.grass.normalMap,
      roughnessMap: mats.grass.roughnessMap,
      roughness: 0.95,
    }),
  );
  mats.grass.map.repeat.set(18, 18);
  mats.grass.normalMap.repeat.set(18, 18);
  mats.grass.roughnessMap.repeat.set(18, 18);
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.set(13.7, -0.05, 9);
  lawn.receiveShadow = true;
  group.add(lawn);

  // Drive
  const drive = new THREE.Mesh(
    new THREE.PlaneGeometry(8, 36),
    new THREE.MeshStandardMaterial({
      color: "#6a6e72",
      map: mats.concfloor.map,
      roughnessMap: mats.concfloor.roughnessMap,
      roughness: 0.9,
    }),
  );
  drive.rotation.x = -Math.PI / 2;
  drive.position.set(13.7, 0.015, 32);
  drive.receiveShadow = true;
  group.add(drive);

  // Water feature
  const pool = new THREE.Mesh(new THREE.BoxGeometry(8, 0.2, 4), mats.water);
  pool.position.set(13.7, 0.05, 24.5);
  group.add(pool);
  const poolRim = new THREE.Mesh(new THREE.BoxGeometry(8.4, 0.28, 4.4), concWarm);
  poolRim.position.set(13.7, -0.05, 24.5);
  poolRim.receiveShadow = true;
  group.add(poolRim);

  // Trees
  for (const [tx, tz, h] of treePositions()) {
    group.add(tree(tx, tz, h, mats));
  }

  // Signage wall
  const sign = new THREE.Mesh(new THREE.BoxGeometry(6.5, 1.6, 0.25), concDark);
  sign.position.set(4, 0.8, 24);
  sign.castShadow = true;
  group.add(sign);
  const signLabel = document.createElement("div");
  signLabel.className = "unit-card";
  signLabel.innerHTML = `<div class="u-id">Sample Tower</div><div class="u-meta">Lead Setu demo · not a real project</div>`;
  signLabel.style.pointerEvents = "none";
  const signObj = new CSS2DObject(signLabel);
  signObj.position.set(4, 2.1, 24);
  signObj.userData.structure = true;
  group.add(signObj);
  sign.userData.structure = true;

  // Plinth
  const plinth = plateMesh(concDark, PLINTH, 0);
  group.add(plinth);

  // Columns through the height
  const totalH = PLINTH + TYPICAL_FLOORS * FLOOR_TO_FLOOR + 4.2;
  const colPts: [number, number][] = [
    [0.4, 10.2], [0.4, 18.9], [11.0, 18.9], [16.4, 18.9], [27.0, 18.9], [27.0, 10.2],
    [18.75, 10.2], [18.75, 0.3], [8.65, 0.3], [8.65, 10.2], [11.4, 10.2], [16.0, 10.2],
  ];
  for (const [cx, cz] of colPts) {
    const col = new THREE.Mesh(new THREE.BoxGeometry(0.45, totalH, 0.45), conc);
    col.position.set(cx, totalH / 2, cz);
    col.castShadow = true;
    col.userData.structure = true;
    group.add(col);
  }

  // Typical floors 1–7
  for (let f = 1; f <= TYPICAL_FLOORS; f++) {
    const fg = makeTypicalFloor(f, mats, conc, concWarm, glass, frame);
    group.add(fg);
    floorGroups.push(fg);
    const hit = fg.getObjectByName("hit") as THREE.Mesh;
    if (hit) floorHits.push(hit);
  }

  // Penthouse
  const ph = makePenthouse(mats, conc, concWarm, glass, frame);
  group.add(ph);
  floorGroups.push(ph);
  const phHit = ph.getObjectByName("hit") as THREE.Mesh;
  if (phHit) floorHits.push(phHit);

  // Core shaft (lifts visible as a vertical glass box)
  const coreH = PLINTH + TYPICAL_FLOORS * FLOOR_TO_FLOOR;
  const core = new THREE.Mesh(
    new THREE.BoxGeometry(CORE.w - 0.4, coreH, CORE.d - 0.4),
    glass,
  );
  core.position.set(CORE.x + CORE.w / 2, PLINTH + coreH / 2, CORE.z + CORE.d / 2);
  core.userData.structure = true;
  core.userData.windowGlow = true;
  group.add(core);
  // Lift cars hinted
  for (const ox of [-1.1, 1.1]) {
    const lift = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 1.6), mats.metal);
    lift.position.set(CORE.x + CORE.w / 2 + ox, PLINTH + 1.2, CORE.z + 1.4);
    group.add(lift);
  }

  // Lobby canopy at floor 1 south of core (facing 3BHK / plaza)
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(8, 0.18, 3.2), concWarm);
  canopy.position.set(13.7, PLINTH + 3.0, -1.4);
  canopy.castShadow = true;
  canopy.userData.structure = true;
  group.add(canopy);
  for (const ox of [-3.6, 3.6]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.0, 12), concDark);
    post.position.set(13.7 + ox, PLINTH + 1.5, -2.6);
    post.castShadow = true;
    post.userData.structure = true;
    group.add(post);
  }

  const highlightMats: THREE.MeshStandardMaterial[] = [];
  function highlight(floor: number | null) {
    for (const fg of floorGroups) {
      const n = fg.userData.floor as number;
      const hl = fg.getObjectByName("highlight") as THREE.Mesh | undefined;
      if (hl) hl.visible = floor === n;
      const lab = fg.getObjectByName("floor-label");
      if (lab) lab.visible = isolatedFloor === null && floor === n;
    }
  }

  const structure: THREE.Object3D[] = [];
  group.traverse((o) => { if (o.userData.structure) structure.push(o); });
  let isolatedFloor: number | null = null;

  function setIsolated(floor: number | null) {
    isolatedFloor = floor;
    for (const fg of floorGroups) {
      const n = fg.userData.floor as number;
      if (floor === null) {
        fg.visible = true;
        fg.traverse((o) => {
          if (o.userData.facade || o.userData.hideInCutaway) o.visible = true;
          if (o.name === "floor-label") o.visible = false; // hover-only; highlight() turns one on
          if (o.name === "highlight") o.visible = false;
        });
      } else {
        // Show only the selected floor, and strip its facade / ceiling so the cutaway interiors read clearly.
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
    group.traverse((o) => {
      if (!(o instanceof THREE.Mesh) || !o.userData.windowGlow) return;
      const mat = o.material as THREE.MeshStandardMaterial;
      if (night) {
        mat.emissive.set("#ffc078");
        mat.emissiveIntensity = 3.2;
        mat.opacity = 0.95;
        mat.transparent = true;
        mat.color.set("#f6d7a4");
      } else if (golden) {
        mat.emissive.set("#ffb070");
        mat.emissiveIntensity = 0.55;
        mat.opacity = 0.55;
        mat.color.set("#9ec6da");
      } else {
        mat.emissive.set("#000000");
        mat.emissiveIntensity = 0;
        mat.opacity = 0.42;
        mat.color.set("#9ec6da");
      }
    });
  }

  function dispose() {
    group.removeFromParent();
  }

  void highlightMats;
  return { group, floorHits, highlight, setIsolated, setTime, dispose };
}

function makeTypicalFloor(
  floor: number,
  mats: Materials,
  conc: THREE.Material,
  concWarm: THREE.Material,
  glass: THREE.Material,
  frame: THREE.Material,
): THREE.Group {
  const g = new THREE.Group();
  g.userData.floor = floor;
  const y0 = floorY(floor);
  const slab = plateMesh(concWarm, 0.28, y0);
  slab.userData.ghostable = true;
  g.add(slab);
  const top = plateMesh(concWarm, 0.18, y0 + FLOOR_TO_FLOOR - 0.18);
  top.userData.ghostable = true;
  top.userData.hideInCutaway = true;
  g.add(top);

  // Facade bands: window modules along each outer edge of the plate
  addFacadeWindows(g, y0 + 0.28, FLOOR_TO_FLOOR - 0.5, glass, frame, conc);

  // North balconies (2BHK A and B)
  addBalcony(g, 5.6, y0, 19.2, 4.8, 1.5, mats, conc);
  addBalcony(g, 16.8, y0, 19.2, 4.8, 1.5, mats, conc);

  // Invisible hit volume
  const hit = plateMesh(
    new THREE.MeshBasicMaterial({ visible: false }),
    FLOOR_TO_FLOOR,
    y0,
  );
  hit.name = "hit";
  hit.userData.floor = floor;
  g.add(hit);

  const hlMat = new THREE.MeshBasicMaterial({
    color: "#c4a265",
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  const hl = plateMesh(hlMat, FLOOR_TO_FLOOR, y0);
  hl.name = "highlight";
  hl.visible = false;
  g.add(hl);

  // Floor number on the west face
  const num = document.createElement("div");
  num.className = "unit-card";
  num.style.padding = "4px 8px";
  num.style.pointerEvents = "none";
  num.innerHTML = `<div class="u-id">${floor}</div>`;
  const lab = new CSS2DObject(num);
  lab.position.set(-0.6, y0 + FLOOR_TO_FLOOR / 2, 14.6);
  lab.name = "floor-label";
  g.add(lab);

  return g;
}

function makePenthouse(
  mats: Materials,
  conc: THREE.Material,
  concWarm: THREE.Material,
  glass: THREE.Material,
  frame: THREE.Material,
): THREE.Group {
  const g = new THREE.Group();
  g.userData.floor = PENTHOUSE_FLOOR;
  const y0 = floorY(PENTHOUSE_FLOOR);

  // Roof deck of floor 7 = terrace around penthouse
  const deck = plateMesh(concWarm, 0.22, y0);
  deck.userData.ghostable = true;
  g.add(deck);
  // deck finish — terracotta
  const deckTop = plateMesh(
    new THREE.MeshStandardMaterial({
      color: "#c9b9a0",
      map: mats.terra.map,
      roughnessMap: mats.terra.roughnessMap,
      roughness: 0.8,
    }),
    0.04,
    y0 + 0.22,
  );
  g.add(deckTop);

  // Parapet around the typical plate
  addParapet(g, y0 + 0.22, 1.05, conc, mats);

  // Penthouse volume (set back)
  const pw = UNIT_PH.width;
  const pd = UNIT_PH.depth;
  const px = UNIT_PH.ox + pw / 2;
  const pz = UNIT_PH.oz + pd / 2;
  const phH = 3.2;
  const body = new THREE.Mesh(new THREE.BoxGeometry(pw, phH, pd), conc);
  body.position.set(px, y0 + 0.22 + phH / 2, pz);
  body.castShadow = true;
  body.userData.ghostable = true;
  body.userData.hideInCutaway = true;
  g.add(body);
  // glass faces
  for (const [ox, oz, w, d] of [
    [0, pd / 2 + 0.02, pw * 0.7, 0.08],
    [0, -pd / 2 - 0.02, pw * 0.55, 0.08],
    [pw / 2 + 0.02, 0, 0.08, pd * 0.5],
    [-pw / 2 - 0.02, 0, 0.08, pd * 0.45],
  ] as [number, number, number, number][]) {
    const gl = new THREE.Mesh(new THREE.BoxGeometry(w, phH * 0.62, d), glass);
    gl.position.set(px + ox, y0 + 0.22 + phH * 0.5, pz + oz);
    gl.userData.windowGlow = true;
    g.add(gl);
  }
  // roof
  const roof = new THREE.Mesh(new THREE.BoxGeometry(pw + 0.5, 0.2, pd + 0.5), concWarm);
  roof.position.set(px, y0 + 0.22 + phH + 0.1, pz);
  roof.castShadow = true;
  roof.userData.hideInCutaway = true;
  g.add(roof);

  const hit = new THREE.Mesh(
    new THREE.BoxGeometry(28, 4.2, 22),
    new THREE.MeshBasicMaterial({ visible: false }),
  );
  hit.position.set(13.7, y0 + 2, 10);
  hit.name = "hit";
  hit.userData.floor = PENTHOUSE_FLOOR;
  g.add(hit);

  const hlMat = new THREE.MeshBasicMaterial({
    color: "#c4a265",
    transparent: true,
    opacity: 0.28,
    depthWrite: false,
  });
  const hl = new THREE.Mesh(new THREE.BoxGeometry(28, 4.2, 22), hlMat);
  hl.position.set(13.7, y0 + 2, 10);
  hl.name = "highlight";
  hl.visible = false;
  g.add(hl);

  const num = document.createElement("div");
  num.className = "unit-card";
  num.innerHTML = `<div class="u-id">PH</div><div class="u-meta">Penthouse</div>`;
  num.style.pointerEvents = "none";
  const lab = new CSS2DObject(num);
  lab.position.set(px, y0 + 4.2, pz);
  lab.name = "floor-label";
  g.add(lab);

  void frame;
  return g;
}

function addFacadeWindows(
  g: THREE.Group,
  y: number,
  h: number,
  glass: THREE.Material,
  frame: THREE.Material,
  conc: THREE.Material,
) {
  // North face (full 27m), south of wings, east and west faces, and south of 3BHK.
  const faces: { x: number; z: number; len: number; alongX: boolean; inward: 1 | -1 }[] = [
    { x: 0.2, z: 19.2, len: 27, alongX: true, inward: -1 }, // north, inward south
    { x: 0.2, z: 10, len: 8.25, alongX: true, inward: 1 }, // south of west 2BHK wing
    { x: 18.95, z: 10, len: 8.25, alongX: true, inward: 1 },
    { x: 8.45, z: 0, len: 10.5, alongX: true, inward: 1 }, // south of 3BHK
    { x: 0.2, z: 10, len: 9.2, alongX: false, inward: 1 }, // west
    { x: 27.2, z: 10, len: 9.2, alongX: false, inward: -1 }, // east
    { x: 8.45, z: 0, len: 10, alongX: false, inward: -1 }, // west of 3BHK
    { x: 18.95, z: 0, len: 10, alongX: false, inward: 1 },
  ];
  const module = 1.5;
  const winW = 1.1;
  const winH = h * 0.72;
  for (const f of faces) {
    const n = Math.max(1, Math.floor(f.len / module));
    for (let i = 0; i < n; i++) {
      const u = (i + 0.5) / n;
      const px = f.alongX ? f.x + u * f.len : f.x;
      const pz = f.alongX ? f.z : f.z + u * f.len;
      const ox = f.alongX ? 0 : f.inward * 0.08;
      const oz = f.alongX ? f.inward * 0.08 : 0;
      // wall panel behind
      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(f.alongX ? module - 0.08 : 0.16, h, f.alongX ? 0.16 : module - 0.08),
        conc,
      );
      panel.position.set(px, y + h / 2, pz);
      panel.userData.ghostable = true;
      panel.userData.facade = true;
      panel.castShadow = true;
      g.add(panel);
      const gl = new THREE.Mesh(
        new THREE.BoxGeometry(f.alongX ? winW : 0.05, winH, f.alongX ? 0.05 : winW),
        glass,
      );
      gl.position.set(px + ox, y + h * 0.5, pz + oz);
      gl.userData.facade = true;
      gl.userData.windowGlow = true;
      g.add(gl);
      const fr = new THREE.Mesh(
        new THREE.BoxGeometry(f.alongX ? winW + 0.06 : 0.06, winH + 0.06, f.alongX ? 0.06 : winW + 0.06),
        frame,
      );
      fr.position.set(px + ox, y + h * 0.5, pz + oz);
      fr.userData.facade = true;
      g.add(fr);
    }
  }
}

function addBalcony(
  g: THREE.Group,
  x: number, y: number, z: number,
  w: number, d: number,
  mats: Materials, conc: THREE.Material,
) {
  const slab = new THREE.Mesh(new THREE.BoxGeometry(w, 0.12, d), conc);
  slab.position.set(x + w / 2, y + 0.2, z + d / 2);
  slab.castShadow = true;
  slab.receiveShadow = true;
  g.add(slab);
  // glass rail on three outer sides (north, west, east)
  const h = 1.05;
  const railN = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.03), mats.glassRail);
  railN.position.set(x + w / 2, y + 0.2 + h / 2, z + d);
  g.add(railN);
  const railW = new THREE.Mesh(new THREE.BoxGeometry(0.03, h, d), mats.glassRail);
  railW.position.set(x, y + 0.2 + h / 2, z + d / 2);
  g.add(railW);
  const railE = new THREE.Mesh(new THREE.BoxGeometry(0.03, h, d), mats.glassRail);
  railE.position.set(x + w, y + 0.2 + h / 2, z + d / 2);
  g.add(railE);
}

function addParapet(g: THREE.Group, y: number, h: number, conc: THREE.Material, mats: Materials) {
  // Walk the plate edges
  const pts = [...PLATE, PLATE[0]];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    const cx = (a[0] + b[0]) / 2;
    const cz = (a[1] + b[1]) / 2;
    const ang = Math.atan2(dx, dz);
    const wall = new THREE.Mesh(new THREE.BoxGeometry(0.12, h, len), conc);
    wall.position.set(cx, y + h / 2, cz);
    wall.rotation.y = ang;
    wall.castShadow = true;
    g.add(wall);
  }
  void mats;
}

function tree(x: number, z: number, h: number, mats: Materials): THREE.Group {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, h * 0.45, 8), mats.woodFur);
  trunk.position.set(x, h * 0.225, z);
  trunk.castShadow = true;
  g.add(trunk);
  const col = mats.plant.clone();
  col.color.set("#2a5a32");
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(h * 0.32, 12, 10), col);
  canopy.position.set(x, h * 0.58, z);
  canopy.scale.set(1.1, 0.95, 1.1);
  canopy.castShadow = true;
  g.add(canopy);
  const c2 = new THREE.Mesh(new THREE.SphereGeometry(h * 0.24, 10, 8), col);
  c2.position.set(x + 0.4, h * 0.5, z - 0.2);
  c2.castShadow = true;
  g.add(c2);
  return g;
}

function treePositions(): [number, number, number][] {
  const out: [number, number, number][] = [];
  const spots: [number, number, number][] = [
    [-6, 6, 5.5], [-8, 16, 6.2], [-5, 26, 5.0],
    [32, 6, 5.8], [34, 16, 6.5], [31, 28, 5.2],
    [2, 34, 4.8], [25, 34, 5.4], [13.7, 40, 6.0],
    [4, -8, 5.0], [24, -8, 5.6], [13.7, -10, 4.6],
    [-10, -2, 6.0], [36, -2, 5.5],
  ];
  return spots;
  void out;
}

export { plateCenter };
