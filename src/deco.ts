import * as THREE from "three";
import type { Materials } from "./materials";
import { aabb } from "./furniture";

function signedArea(poly: [number, number][]): number {
  let a = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    a += poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
  }
  return a;
}

/** Inward unit normal of edge a→b, given polygon winding. */
function inward(a: [number, number], b: [number, number], sign: number): [number, number] {
  const dx = b[0] - a[0], dz = b[1] - a[1];
  const len = Math.hypot(dx, dz) || 1;
  // CCW (sign>0): inward is to the left of the directed edge.
  return [(-dz / len) * sign, (dx / len) * sign];
}

/**
 * True when most of the edge sits against a real wall (not an open-plan opening).
 */
function edgeAlongWall(
  a: [number, number],
  b: [number, number],
  walls: { x: number; z: number; w: number; d: number }[],
): boolean {
  if (!walls.length) return true;
  const pad = 0.18;
  const samples = 5;
  let hits = 0;
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const x = a[0] + (b[0] - a[0]) * t;
    const z = a[1] + (b[1] - a[1]) * t;
    for (const w of walls) {
      if (x >= w.x - pad && x <= w.x + w.w + pad && z >= w.z - pad && z <= w.z + w.d + pad) {
        hits += 1;
        break;
      }
    }
  }
  return hits >= 3;
}

/** Wood skirting, 11 cm high and ~2.5 cm proud, only along edges that meet a wall. */
export function addRoomSkirting(
  poly: [number, number][],
  group: THREE.Group,
  mat: THREE.Material,
  geos: THREE.BufferGeometry[],
  walls: { x: number; z: number; w: number; d: number }[] = [],
): void {
  if (poly.length < 3) return;
  const sign = signedArea(poly) >= 0 ? 1 : -1;
  const H = 0.11;
  const T = 0.026;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.18) continue;
    if (!edgeAlongWall(a, b, walls)) continue;
    const [nx, nz] = inward(a, b, sign);
    const cx = (a[0] + b[0]) / 2 + nx * (T / 2 + 0.005);
    const cz = (a[1] + b[1]) / 2 + nz * (T / 2 + 0.005);
    // Length along local +Z so rotation.y = atan2(dx, dz) aligns with the edge
    // (the previous BoxGeometry(len, H, T) was 90° off and drew bars across the room).
    const geo = new THREE.BoxGeometry(T, H, len - 0.02);
    geos.push(geo);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(cx, H / 2, cz);
    mesh.rotation.y = Math.atan2(dx, dz);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.name = "skirting";
    group.add(mesh);
  }
}

/**
 * False ceiling / cove tray with recessed downlights for living rooms and
 * master bedrooms. A 28 cm soffit drops 16 cm from the slab, with a thin
 * inner lip and emissive cans (plus a few spot lights off-mobile).
 */
export function addFalseCeiling(
  poly: [number, number][],
  wallH: number,
  group: THREE.Group,
  mats: Materials,
  opts: { mobile: boolean; geos: THREE.BufferGeometry[]; extraMats: THREE.Material[]; lights: THREE.Light[] },
): void {
  if (poly.length < 3) return;
  const sign = signedArea(poly) >= 0 ? 1 : -1;
  const SOFFIT = 0.42;
  const DROP = 0.16;
  const LIP = 0.04;
  const plaster = mats.ceiling.clone();
  plaster.color.set("#f3f0ea");
  plaster.roughness = 0.9;
  opts.extraMats.push(plaster);

  const soffitY = wallH - DROP / 2;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 0.4) continue;
    const [nx, nz] = inward(a, b, sign);
    const cx = (a[0] + b[0]) / 2 + nx * (SOFFIT / 2);
    const cz = (a[1] + b[1]) / 2 + nz * (SOFFIT / 2);
    const geo = new THREE.BoxGeometry(SOFFIT, DROP, len - 0.04);
    opts.geos.push(geo);
    const mesh = new THREE.Mesh(geo, plaster);
    mesh.position.set(cx, soffitY, cz);
    mesh.rotation.y = Math.atan2(dx, dz);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    mesh.name = "cove-soffit";
    group.add(mesh);
    // Inner lip drops a little further for a cove profile.
    const lx = (a[0] + b[0]) / 2 + nx * (SOFFIT - LIP / 2);
    const lz = (a[1] + b[1]) / 2 + nz * (SOFFIT - LIP / 2);
    const lipGeo = new THREE.BoxGeometry(LIP, LIP, len - 0.08);
    opts.geos.push(lipGeo);
    const lip = new THREE.Mesh(lipGeo, plaster);
    lip.position.set(lx, wallH - DROP - LIP / 2, lz);
    lip.rotation.y = Math.atan2(dx, dz);
    lip.name = "cove-lip";
    group.add(lip);
  }

  // Recessed downlight cans along the inner soffit edge, ~1.7 m apart.
  const glow = mats.emissive.clone();
  glow.emissive.set("#fff1d0");
  glow.emissiveIntensity = 1.4;
  glow.color.set("#fff6e4");
  opts.extraMats.push(glow);
  const bb = aabb(poly);
  const cans: { x: number; z: number }[] = [];
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i];
    const b = poly[(i + 1) % poly.length];
    const dx = b[0] - a[0], dz = b[1] - a[1];
    const len = Math.hypot(dx, dz);
    if (len < 1.2) continue;
    const [nx, nz] = inward(a, b, sign);
    const nCans = Math.max(1, Math.floor(len / 1.7));
    for (let k = 1; k <= nCans; k++) {
      const t = k / (nCans + 1);
      const x = a[0] + dx * t + nx * (SOFFIT - 0.08);
      const z = a[1] + dz * t + nz * (SOFFIT - 0.08);
      cans.push({ x, z });
    }
  }
  // Cap so a large living room doesn't spawn 20 lights.
  const maxCans = opts.mobile ? 6 : 10;
  const step = Math.max(1, Math.ceil(cans.length / maxCans));
  let spots = 0;
  const maxSpots = opts.mobile ? 0 : 4;
  for (let i = 0; i < cans.length; i += step) {
    const { x, z } = cans[i];
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.075, 0.04, 16), glow);
    can.position.set(x, wallH - DROP + 0.01, z);
    can.name = "downlight";
    group.add(can);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.075, 0.008, 6, 16),
      mats.blackMetal,
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(x, wallH - DROP - 0.005, z);
    group.add(ring);
    if (spots < maxSpots) {
      const spot = new THREE.SpotLight("#fff3d6", 1.35, 6.5, 0.42, 0.45, 1.4);
      spot.position.set(x, wallH - DROP - 0.05, z);
      spot.target.position.set(x, 0, z);
      spot.castShadow = false;
      group.add(spot);
      group.add(spot.target);
      opts.lights.push(spot);
      spots += 1;
    }
  }
  // A central can in larger rooms.
  if (bb.w * bb.d > 16) {
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.085, 0.04, 16), glow);
    can.position.set(bb.cx, wallH - 0.04, bb.cz);
    can.name = "downlight-centre";
    group.add(can);
  }
  void SOFFIT;
}


/** Architrave around a door opening: two jambs, a lintel and a threshold. */
export function addDoorFrame(
  ax: number, az: number, bx: number, bz: number,
  doorH: number,
  group: THREE.Group,
  mat: THREE.Material,
  geos: THREE.BufferGeometry[],
): void {
  const dx = bx - ax, dz = bz - az;
  const len = Math.hypot(dx, dz) || 0.9;
  const alongX = Math.abs(dx) > Math.abs(dz);
  const mx = (ax + bx) / 2, mz = (az + bz) / 2;
  const T = 0.07, D = 0.11;
  const jamb = (x: number, z: number) => {
    const geo = new THREE.BoxGeometry(alongX ? T : D, doorH, alongX ? D : T);
    geos.push(geo);
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, doorH / 2, z);
    m.castShadow = false;
    m.receiveShadow = true;
    m.name = "door-frame";
    group.add(m);
  };
  jamb(ax, az);
  jamb(bx, bz);
  const lintelGeo = new THREE.BoxGeometry(alongX ? len + T : D, T, alongX ? D : len + T);
  geos.push(lintelGeo);
  const lintel = new THREE.Mesh(lintelGeo, mat);
  lintel.position.set(mx, doorH + T / 2, mz);
  lintel.name = "door-lintel";
  lintel.receiveShadow = true;
  group.add(lintel);
  const thGeo = new THREE.BoxGeometry(alongX ? len + T : D, 0.018, alongX ? D : len + T);
  geos.push(thGeo);
  const th = new THREE.Mesh(thGeo, mat);
  th.position.set(mx, 0.009, mz);
  th.name = "door-threshold";
  group.add(th);
}

/** A 2-gang switch / socket plate just inside a door, at 1.15 m. */
export function addSwitchPlate(
  ax: number, az: number, bx: number, bz: number,
  group: THREE.Group,
  plateMat: THREE.Material,
  rockerMat: THREE.Material,
  geos: THREE.BufferGeometry[],
): void {
  const dx = bx - ax, dz = bz - az;
  const len = Math.hypot(dx, dz) || 1;
  const nx = -dz / len, nz = dx / len;
  const x = ax + dx * 0.18 + nx * 0.05;
  const z = az + dz * 0.18 + nz * 0.05;
  const ang = Math.atan2(nx, nz);
  const y = 1.15;
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.086, 0.126, 0.01), plateMat);
  geos.push(plate.geometry);
  plate.position.set(x, y, z);
  plate.rotation.y = ang;
  plate.name = "switch-plate";
  group.add(plate);
  for (const oy of [0.022, -0.022]) {
    const rocker = new THREE.Mesh(new THREE.BoxGeometry(0.048, 0.032, 0.012), rockerMat);
    geos.push(rocker.geometry);
    rocker.position.set(x + nx * 0.008, y + oy, z + nz * 0.008);
    rocker.rotation.y = ang;
    rocker.name = "switch-rocker";
    group.add(rocker);
  }
}
