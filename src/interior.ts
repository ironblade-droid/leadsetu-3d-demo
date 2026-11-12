import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import type { Materials } from "./materials";
import { applyKitchen, applyStyleLook, applyWorldXZUVs, flooringSet, makeFloorMaterial, tuneFloorMaterial } from "./materials";
import { furnishRoom, aabb, addCurtains, type Anchor } from "./furniture";
import { type Catalog, retintFurniture } from "./catalog";
import { buildRoomStops, defaultSpawn, type RoomStop } from "./rooms";
import type { Collision, Prefs, TimeOfDay, Transform, UnitPlan, Wall } from "./types";
import { planToWorld, transformPointDir, transformWall, wallCollision } from "./layout";

const DOOR_H = 2.10;
const WIN_SILL = 0.90;
const WIN_H = 1.40;
const SKIRT = 0.08;

export interface Hotspot {
  id: string;
  kind: "kitchen" | "bath" | "view";
  title: string;
  roomName: string;
  area_m2: number;
  note?: string;
  position: THREE.Vector3;
  cameraPos: THREE.Vector3;
  lookAt: THREE.Vector3;
  mesh: THREE.Object3D;
  labelEl?: HTMLElement;
}

export interface InteriorBuild {
  group: THREE.Group;
  collisions: Collision[];
  spawn: { x: number; y: number; z: number; yaw: number; pitch?: number };
  floorMeshes: THREE.Mesh[];
  wallMat: THREE.MeshStandardMaterial;
  hotspots: Hotspot[];
  rooms: RoomStop[];
  worldRooms: { polygon: [number, number][]; type: string; id: string }[];
  applyPrefs: (p: Prefs) => void;
  setTime: (time: TimeOfDay) => void;
  dispose: () => void;
}

const FACE_YAW = { S: 0, N: Math.PI, E: -Math.PI / 2, W: Math.PI / 2 };

function pbrFloor(tex: { map: THREE.Texture; normalMap: THREE.Texture; roughnessMap: THREE.Texture }, kind: "marble" | "wood" | "tile" | "tile-wet" | "terra" = "wood", tint = "#ffffff") {
  return makeFloorMaterial(tex, kind, tint);
}

function shapeFromPoly(poly: [number, number][]): THREE.Shape {
  const s = new THREE.Shape();
  s.moveTo(poly[0][0], poly[0][1]);
  for (let i = 1; i < poly.length; i++) s.lineTo(poly[i][0], poly[i][1]);
  s.closePath();
  return s;
}

function worldPoly(poly: [number, number][], t?: Transform): [number, number][] {
  if (!t) return poly;
  return poly.map(([x, z]) => planToWorld(x, z, t));
}

export function buildInterior(
  plan: UnitPlan,
  prefs: Prefs,
  mats: Materials,
  opts: { transform?: Transform; showCeiling: boolean; y: number; cutaway: boolean; hotspots?: boolean; catalog?: Catalog | null } = {
    showCeiling: false,
    y: 0,
    cutaway: false,
  },
): InteriorBuild {
  const t = opts.transform;
  const group = new THREE.Group();
  group.position.y = opts.y;
  const collisions: Collision[] = [];
  const floorMeshes: THREE.Mesh[] = [];
  const geos: THREE.BufferGeometry[] = [];
  const extraMats: THREE.Material[] = [];

  const wallMat = mats.wall.clone();
  wallMat.color.set(prefs.wallColor);
  extraMats.push(wallMat);
  applyKitchen(mats, prefs.kitchen);
  applyStyleLook(mats, prefs);

  const livingFloor = pbrFloor(flooringSet(mats, prefs.flooring), prefs.flooring);
  const bathFloor = pbrFloor(mats.tile, "tile-wet", "#e8eef0");
  const kitFloor = pbrFloor(mats.tile, "tile", "#efeae2");
  const terrFloor = pbrFloor(mats.terra, "terra");
  const woodFloor = pbrFloor(mats.wood, "wood");
  extraMats.push(livingFloor, bathFloor, kitFloor, terrFloor, woodFloor);

  const h = opts.cutaway ? Math.min(1.15, plan.wallHeight) : plan.wallHeight;

  // Floors per room
  for (const room of plan.rooms) {
    const poly = worldPoly(room.polygon, t);
    // Ensure winding / simple shape
    if (poly.length < 3) continue;
    const shape = shapeFromPoly(poly);
    const geo = new THREE.ShapeGeometry(shape);
    geo.rotateX(-Math.PI / 2);
    applyWorldXZUVs(geo, 0.55);
    geos.push(geo);
    let mat = livingFloor;
    if (room.type === "bathroom" || room.type === "utility") mat = bathFloor;
    else if (room.type === "kitchen") mat = kitFloor;
    else if (room.type === "terrace" || room.type === "balcony") mat = terrFloor;
    else if (room.type === "bedroom" && prefs.flooring === "marble") mat = livingFloor;
    else if (room.type === "lobby" || room.type === "hall") mat = kitFloor;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = 0.01;
    mesh.receiveShadow = true;
    group.add(mesh);
    floorMeshes.push(mesh);
  }

  // A single slab under the unit for edges / holes
  const b = plan.bounds;
  const corners: [number, number][] = [
    [b.min[0], b.min[1]],
    [b.max[0], b.min[1]],
    [b.max[0], b.max[1]],
    [b.min[0], b.max[1]],
  ];
  const slabPoly = worldPoly(corners, t);
  const slabGeo = new THREE.ShapeGeometry(shapeFromPoly(slabPoly));
  slabGeo.rotateX(-Math.PI / 2);
  applyWorldXZUVs(slabGeo, 0.4);
  geos.push(slabGeo);
  const slab = new THREE.Mesh(slabGeo, mats.concfloor ? pbrFloor(mats.concfloor, "wood", "#d0cdc6") : livingFloor);
  slab.position.y = -0.04;
  slab.receiveShadow = true;
  group.add(slab);
  extraMats.push(slab.material as THREE.Material);

  // Walls — exact DXF rectangles
  for (const w0 of plan.walls) {
    const w = t ? transformWall(w0, t) : w0;
    if (w.w < 0.02 || w.d < 0.02) continue;
    const geo = new THREE.BoxGeometry(w.w, h, w.d);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, wallMat);
    mesh.position.set(w.x + w.w / 2, h / 2, w.z + w.d / 2);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    collisions.push(wallCollision(w));
    // skirting
    if (!opts.cutaway) {
      const sk = new THREE.Mesh(new THREE.BoxGeometry(w.w + 0.01, SKIRT, w.d + 0.01), mats.woodFur);
      sk.position.set(w.x + w.w / 2, SKIRT / 2, w.z + w.d / 2);
      sk.castShadow = false;
      group.add(sk);
    }
  }

  // Windows
  for (const w0 of plan.windows) {
    const w = t ? transformWall(w0, t) : w0;
    const alongX = w.w >= w.d;
    const length = alongX ? w.w : w.d;
    const thick = alongX ? Math.max(w.d, 0.06) : Math.max(w.w, 0.06);
    const cx = w.x + w.w / 2;
    const cz = w.z + w.d / 2;
    const sill = opts.cutaway ? Math.min(0.4, WIN_SILL) : WIN_SILL;
    const wh = opts.cutaway ? Math.min(0.6, WIN_H) : WIN_H;
    // frame
    const fw = alongX ? length : 0.06;
    const fd = alongX ? 0.06 : length;
    const frameMat = mats.frame;
    const top = new THREE.Mesh(new THREE.BoxGeometry(fw, 0.05, fd), frameMat);
    top.position.set(cx, sill + wh, cz);
    group.add(top);
    const bot = new THREE.Mesh(new THREE.BoxGeometry(fw, 0.05, fd), frameMat);
    bot.position.set(cx, sill, cz);
    group.add(bot);
    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(alongX ? length - 0.04 : 0.03, wh - 0.04, alongX ? 0.03 : length - 0.04),
      mats.glass,
    );
    glass.position.set(cx, sill + wh / 2, cz);
    group.add(glass);
    // sill box
    const sillBox = new THREE.Mesh(
      new THREE.BoxGeometry(alongX ? length : thick + 0.08, 0.04, alongX ? thick + 0.08 : length),
      mats.woodFur,
    );
    sillBox.position.set(cx, sill - 0.02, cz);
    group.add(sillBox);
  }

  // Curtains on every window
  if (prefs.furniture && !opts.cutaway) {
    for (const w0 of plan.windows) {
      const w = t ? transformWall(w0, t) : w0;
      addCurtains(w.x + w.w / 2, w.z + w.d / 2, w.w, w.d, plan.wallHeight, group, mats, prefs.style);
    }
  }

  // Doors — open leaf + frame
  for (const d of plan.doors) {
    const a = t ? planToWorld(d.ax, d.az, t) : [d.ax, d.az] as [number, number];
    const b2 = t ? planToWorld(d.bx, d.bz, t) : [d.bx, d.bz] as [number, number];
    const mx = (a[0] + b2[0]) / 2;
    const mz = (a[1] + b2[1]) / 2;
    const dx = b2[0] - a[0];
    const dz = b2[1] - a[1];
    const len = Math.hypot(dx, dz) || d.width;
    const ang = Math.atan2(dx, dz); // leaf along the opening
    const hingeX = a[0];
    const hingeZ = a[1];
    const leaf = new THREE.Group();
    leaf.position.set(hingeX, 0, hingeZ);
    leaf.rotation.y = ang + Math.PI / 2.6; // swung open
    const dh = opts.cutaway ? Math.min(h, 1.05) : DOOR_H;
    const door = new THREE.Mesh(new THREE.BoxGeometry(0.04, dh, len * 0.95), mats.door);
    door.position.set(0, dh / 2, len * 0.45);
    door.castShadow = true;
    leaf.add(door);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.1, 8), mats.metal);
    handle.rotation.z = Math.PI / 2;
    handle.position.set(0.03, 1.0, len * 0.8);
    leaf.add(handle);
    group.add(leaf);
    // lintel
    if (!opts.cutaway) {
      const lintel = new THREE.Mesh(new THREE.BoxGeometry(alongLen(dx, dz, 0.12), 0.08, alongLen(dz, dx, 0.12) || 0.12), wallMat);
      // simpler lintel aligned to opening
      const alongX = Math.abs(dx) > Math.abs(dz);
      const lg = new THREE.Mesh(
        new THREE.BoxGeometry(alongX ? len : 0.15, 0.1, alongX ? 0.15 : len),
        wallMat,
      );
      lg.position.set(mx, DOOR_H + 0.05, mz);
      group.add(lg);
    }
    void ang;
  }

  // Railings for balcony / terrace
  for (const room of plan.rooms) {
    if (room.type !== "balcony" && room.type !== "terrace") continue;
    addRailing(worldPoly(room.polygon, t), group, mats, collisions, opts.cutaway);
  }

  // Furniture
  const furn = new THREE.Group();
  furn.name = "furniture";
  furn.visible = prefs.furniture;
  const anchorsByRoom = new Map<string, Anchor[]>();
  if (prefs.furniture) {
    const worldRooms = plan.rooms.map((room) => t
      ? { ...room, polygon: worldPoly(room.polygon, t) }
      : room);
    for (const r of worldRooms) {
      const avoid = worldRooms.filter((o) => o.id !== r.id).map((o) => o.polygon);
      const fg = new THREE.Group();
      const anchors = furnishRoom(r, fg, mats, prefs, opts.catalog ?? null, avoid);
      anchorsByRoom.set(r.id, anchors);
      furn.add(fg);
    }
  }
  group.add(furn);

  // Ceiling (walk mode)
  const ceil = new THREE.Mesh(slabGeo, mats.ceiling);
  ceil.position.y = plan.wallHeight - 0.02;
  ceil.rotation.x = 0; // already rotated in geo — it's a floor-like shape, flip to face down
  ceil.scale.y = -1;
  ceil.visible = opts.showCeiling && !opts.cutaway;
  ceil.receiveShadow = true;
  ceil.name = "ceiling";
  group.add(ceil);
  // A wide plane so first-person never looks up into the sky through gaps in the footprint slab.
  if (opts.showCeiling && !opts.cutaway) {
    const cover = new THREE.Mesh(new THREE.PlaneGeometry(36, 36), mats.ceiling);
    cover.rotation.x = Math.PI / 2;
    cover.position.y = plan.wallHeight - 0.015;
    cover.name = "ceiling-cover";
    group.add(cover);
  }
  // Ceiling discs + point lights (on at night)
  const roomLights: THREE.PointLight[] = [];
  const glowMats: THREE.MeshStandardMaterial[] = [];
  for (const room of plan.rooms) {
    if (room.type === "terrace" || room.type === "balcony") continue;
    const bb = aabb(worldPoly(room.polygon, t));
    const glow = mats.emissive.clone();
    glow.emissive.set("#ffd9a0");
    glow.emissiveIntensity = 0.35;
    glowMats.push(glow);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 16), glow);
    disc.position.set(bb.cx, plan.wallHeight - 0.05, bb.cz);
    disc.visible = opts.showCeiling && !opts.cutaway;
    group.add(disc);
    const light = new THREE.PointLight("#ffd7a3", 0, Math.max(4.5, Math.min(bb.w, bb.d) * 1.6 + 2), 2);
    light.position.set(bb.cx, plan.wallHeight - 0.28, bb.cz);
    light.visible = false;
    group.add(light);
    roomLights.push(light);
  }

  const hotspots: Hotspot[] = opts.hotspots ? makeHotspots(plan, t, opts.cutaway, group) : [];

  function setTime(time: TimeOfDay) {
    const night = time === "night";
    const golden = time === "golden";
    for (const l of roomLights) {
      l.intensity = night ? (opts.cutaway ? 1.05 : 1.45) : golden ? 0.15 : 0;
      l.visible = night || golden;
      l.color.set(night ? "#ffd7a3" : "#ffc888");
    }
    for (const m of glowMats) {
      m.emissiveIntensity = night ? 2.1 : golden ? 0.7 : 0.3;
      m.emissive.set(night ? "#ffcc88" : "#ffe8c0");
    }
  }

  const worldRooms = plan.rooms.map((r) => ({
    ...r,
    polygon: worldPoly(r.polygon, t),
  }));
  const rooms = buildRoomStops(plan, t, collisions, anchorsByRoom);
  // Spawn inside the foyer (or living) at eye height, facing in — never in a wall or outside.
  const spawn0 = defaultSpawn(plan, t, collisions, anchorsByRoom);
  const spawn = { ...spawn0, y: opts.y + 1.6 };

  function applyPrefs(p: Prefs) {
    wallMat.color.set(p.wallColor);
    applyKitchen(mats, p.kitchen);
    applyStyleLook(mats, p);
    const fl = flooringSet(mats, p.flooring);
    livingFloor.map = fl.map;
    livingFloor.normalMap = fl.normalMap;
    livingFloor.roughnessMap = fl.roughnessMap;
    tuneFloorMaterial(livingFloor, p.flooring);
    livingFloor.needsUpdate = true;
    furn.visible = p.furniture;
    retintFurniture(furn, p, mats);
  }

  function dispose() {
    group.traverse((o) => {
      const el = (o as unknown as { element?: HTMLElement }).element;
      if (el && el.parentElement) el.remove();
    });
    group.removeFromParent();
    group.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        // don't dispose shared mats.wall etc.
      }
    });
    for (const g of geos) g.dispose();
    for (const m of extraMats) m.dispose();
  }

  return { group, collisions, spawn, floorMeshes, wallMat, hotspots, rooms, worldRooms, applyPrefs, setTime, dispose };
}

function alongLen(a: number, b: number, fallback: number) {
  return Math.abs(a) > 0.01 ? Math.abs(a) : fallback;
}

function addRailing(
  poly: [number, number][],
  group: THREE.Group,
  mats: Materials,
  collisions: Collision[],
  cutaway: boolean,
) {
  if (poly.length < 3) return;
  const h = cutaway ? 0.6 : 1.05;
  const n = poly.length;
  for (let i = 0; i < n; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % n];
    const dx = b[0] - a[0];
    const dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.3) continue;
    // Skip edges that sit against the building (shared with a livable room) —
    // a simple heuristic: skip if the midpoint is more than 0.4m "inside" a
    // large run that is likely an interior wall. We still add all edges; interior
    // walls already occupy those lines. Thin glass over a wall is fine.
    const cx = (a[0] + b[0]) / 2;
    const cz = (a[1] + b[1]) / 2;
    const ang = Math.atan2(dx, dz);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(0.03, h, len), mats.glassRail);
    glass.position.set(cx, h / 2, cz);
    glass.rotation.y = ang;
    group.add(glass);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.03, len), mats.metal);
    rail.position.set(cx, h, cz);
    rail.rotation.y = ang;
    group.add(rail);
    // posts
    const posts = Math.max(2, Math.floor(len / 1.4) + 1);
    for (let p = 0; p < posts; p++) {
      const u = posts === 1 ? 0.5 : p / (posts - 1);
      const px = a[0] + dx * u;
      const pz = a[1] + dz * u;
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.04, h, 0.04), mats.metal);
      post.position.set(px, h / 2, pz);
      group.add(post);
    }
    // collision — thin
    const nx = -dz / len;
    const nz = dx / len;
    collisions.push({
      minX: Math.min(a[0], b[0]) - 0.06,
      maxX: Math.max(a[0], b[0]) + 0.06,
      minZ: Math.min(a[1], b[1]) - 0.06,
      maxZ: Math.max(a[1], b[1]) + 0.06,
    });
    void nx; void nz;
  }
}


function makeHotspots(
  plan: UnitPlan,
  t: Transform | undefined,
  cutaway: boolean,
  group: THREE.Group,
): Hotspot[] {
  const rooms = plan.rooms;
  const kitchenRoom =
    rooms.find((r) => r.type === "kitchen") ??
    rooms.find((r) => /kitchen/i.test(r.name)) ??
    (plan.id === "penthouse" ? rooms.find((r) => r.id === "lounge") : undefined);
  const baths = rooms.filter((r) => r.type === "bathroom");
  const bathRoom =
    baths.find((r) => /master|ensuite|en-suite|en suite/i.test(`${r.name} ${r.id}`)) ??
    baths[0];
  const viewRoom =
    rooms.find((r) => r.type === "terrace") ??
    rooms.find((r) => r.type === "balcony");

  const picks: { kind: Hotspot["kind"]; room: NonNullable<typeof kitchenRoom>; title: string; note?: string }[] = [];
  if (kitchenRoom) {
    let note: string | undefined;
    if (plan.id === "penthouse") {
      note = "The first-floor plan used for this penthouse has no kitchen; an open kitchen is shown in the family lounge as an approximation.";
    } else if (kitchenRoom.type === "living") {
      note = "The 3BHK drawing combines the living room and kitchen in one space. The kitchen finish applies to the open-kitchen run.";
    }
    picks.push({ kind: "kitchen", room: kitchenRoom, title: kitchenRoom.type === "living" ? "Kitchen (open to living)" : "Kitchen", note });
  }
  if (bathRoom) {
    picks.push({ kind: "bath", room: bathRoom, title: bathRoom.name.replace(/\s+area$/, "") || "Bathroom" });
  }
  if (viewRoom) {
    const isTerrace = viewRoom.type === "terrace";
    picks.push({
      kind: "view",
      room: viewRoom,
      title: isTerrace ? "Terrace view" : "Balcony view",
    });
  }

  const gold = new THREE.MeshStandardMaterial({
    color: "#c4a265",
    emissive: "#c4a265",
    emissiveIntensity: 0.45,
    metalness: 0.55,
    roughness: 0.28,
  });
  const spots: Hotspot[] = [];
  // Unit centre, for looking outward from a balcony
  const bounds = plan.bounds;
  let ucx = (bounds.min[0] + bounds.max[0]) / 2;
  let ucz = (bounds.min[1] + bounds.max[1]) / 2;
  if (t) {
    const a = planToWorld(bounds.min[0], bounds.min[1], t);
    const b = planToWorld(bounds.max[0], bounds.max[1], t);
    ucx = (a[0] + b[0]) / 2;
    ucz = (a[1] + b[1]) / 2;
  }

  for (const pick of picks) {
    const poly = worldPoly(pick.room.polygon, t);
    const bb = aabb(poly);
    const lookY = cutaway ? 0.5 : 1.2;
    let cam: THREE.Vector3;
    let look: THREE.Vector3;
    if (pick.kind === "view") {
      const dx = bb.cx - ucx;
      const dz = bb.cz - ucz;
      const len = Math.hypot(dx, dz) || 1;
      const ox = dx / len;
      const oz = dz / len;
      cam = new THREE.Vector3(bb.cx - ox * 0.2, 1.55, bb.cz - oz * 0.2);
      look = new THREE.Vector3(bb.cx + ox * 5, 1.35, bb.cz + oz * 5);
      if (cutaway) {
        cam = new THREE.Vector3(bb.cx - ox * 2.4, 3.2, bb.cz - oz * 2.4);
        look = new THREE.Vector3(bb.cx + ox * 1.5, 0.8, bb.cz + oz * 1.5);
      }
    } else if (cutaway) {
      cam = new THREE.Vector3(bb.cx, 3.6, bb.cz + Math.max(bb.d, 2) * 0.65);
      look = new THREE.Vector3(bb.cx, 0.45, bb.cz);
    } else {
      const dist = Math.min(Math.max(Math.min(bb.w, bb.d) * 0.42, 1.35), 2.8);
      const alongW = bb.w >= bb.d;
      cam = new THREE.Vector3(
        bb.cx + (alongW ? dist : Math.min(bb.w, 1.1) * 0.25),
        1.55,
        bb.cz + (alongW ? Math.min(bb.d, 1.1) * 0.25 : dist),
      );
      look = new THREE.Vector3(bb.cx, lookY, bb.cz);
    }

    const pin = new THREE.Group();
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.55, 10), gold);
    stem.position.y = 0.28;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), gold);
    head.position.y = 0.62;
    const hit = new THREE.Mesh(
      new THREE.SphereGeometry(0.38, 10, 10),
      new THREE.MeshBasicMaterial({ visible: false }),
    );
    hit.position.y = 0.5;
    pin.add(stem, head, hit);
    pin.position.set(bb.cx, 0.02, bb.cz);
    pin.name = "hotspot";
    group.add(pin);

    const el = document.createElement("button");
    el.type = "button";
    el.className = "hotspot-lab";
    el.textContent = pick.title;
    const lab = new CSS2DObject(el);
    lab.position.set(0, 0.95, 0);
    pin.add(lab);

    const hs: Hotspot = {
      id: `${pick.kind}-${pick.room.id}`,
      kind: pick.kind,
      title: pick.title,
      roomName: pick.room.name,
      area_m2: pick.room.area_m2,
      note: pick.note,
      position: new THREE.Vector3(bb.cx, 1.2, bb.cz),
      cameraPos: cam,
      lookAt: look,
      mesh: pin,
      labelEl: el,
    };
    pin.userData.hotspot = hs;
    spots.push(hs);
  }
  return spots;
}
