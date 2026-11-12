import "./styles.css";
import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { applyTimeOfDay, cancelFly, createEngine, flyCamera, flyEye, loadHdriEnvironment, type Engine } from "./engine";
import { loadMaterials, STYLE_DEFAULTS, type Materials } from "./materials";
import { buildTower, type TowerBuild } from "./tower";
import { buildInterior, type InteriorBuild, type Hotspot } from "./interior";
import { loadCatalog, type Catalog } from "./catalog";
import { Walker, attachJoystick } from "./walker";
import { HUD, storeLead, areaLabel, type TourState } from "./ui";
import { installGestures, isUiEventTarget } from "./gestures";
import type { RoomStop } from "./rooms";
import type { Prefs, TimeOfDay, UnitPlan, View } from "./types";
import {
  CORE,
  PENTHOUSE_FLOOR,
  floorY,
  plateCenter,
  slotsForFloor,
  unitCode,
} from "./layout";

const DEFAULT_PREFS: Prefs = {
  style: "modern",
  flooring: STYLE_DEFAULTS.modern.flooring,
  wallColor: STYLE_DEFAULTS.modern.wall,
  kitchen: STYLE_DEFAULTS.modern.kitchen,
  furniture: true,
};

const TOUR_DWELL = 4200;

async function loadPlans(): Promise<Record<string, UnitPlan>> {
  const base = import.meta.env.BASE_URL;
  const [a, b, c] = await Promise.all([
    fetch(`${base}data/2bhk.json`).then((r) => r.json()),
    fetch(`${base}data/3bhk.json`).then((r) => r.json()),
    fetch(`${base}data/penthouse.json`).then((r) => r.json()),
  ]);
  return { "2bhk": a, "3bhk": b, penthouse: c };
}

class App {
  engine!: Engine;
  mats!: Materials;
  catalog: Catalog | null = null;
  plans!: Record<string, UnitPlan>;
  tower!: TowerBuild;
  walker!: Walker;
  hud!: HUD;
  gestures!: { zoom: (dir: 1 | -1) => void; dispose: () => void };
  tv: boolean;
  prefs: Prefs = { ...DEFAULT_PREFS };
  view: View = { kind: "tower", hoverFloor: null };
  interiors: InteriorBuild[] = [];
  unitLabels: CSS2DObject[] = [];
  world = new THREE.Group();
  interiorRoot = new THREE.Group();
  ray = new THREE.Raycaster();
  pointer = new THREE.Vector2();
  dragging = false;
  downXY = { x: 0, y: 0 };
  roomLights: THREE.Light[] = [];
  time: TimeOfDay = "morning";
  private flying = false;
  roomStops: RoomStop[] = [];
  currentRoom: string | null = null;
  tour: TourState | null = null;
  private tourTimer: number | null = null;

  constructor() {
    const q = new URLSearchParams(location.search);
    this.tv = q.get("tv") === "1" || q.get("tv") === "true";
  }

  async start() {
    const canvas = document.getElementById("scene") as HTMLCanvasElement;
    const labels = document.getElementById("labels") as HTMLElement;
    const ui = document.getElementById("ui") as HTMLElement;
    setLoad(0.05);

    this.engine = createEngine(canvas, labels);
    this.mats = await loadMaterials(this.engine.renderer, (p) => setLoad(0.05 + p * 0.55));
    const catP = loadCatalog(this.engine.renderer, (p) => setLoad(0.6 + p * 0.2));
    const hdriP = loadHdriEnvironment(this.engine, `${import.meta.env.BASE_URL}hdris/studio_small_08_1k.hdr`);
    this.plans = await loadPlans();
    this.catalog = await catP;
    await hdriP;
    setLoad(0.88);

    this.engine.scene.add(this.world);
    this.engine.scene.add(this.interiorRoot);

    this.tower = buildTower(this.mats);
    this.world.add(this.tower.group);

    this.walker = new Walker(canvas);
    this.walker.tv = this.tv;

    this.gestures = installGestures(canvas, this.engine.orbit, this.engine.camera, {
      isWalk: () => this.view.kind === "flat" && this.view.cam === "walk" && !this.flying,
      walker: this.walker,
      isUiTarget: isUiEventTarget,
    });

    this.hud = new HUD(ui, this.prefs, this.plans, this.tv, {
      onGotoTower: () => this.showTower(),
      onGotoFloor: (f) => this.showFloor(f),
      onGotoUnit: (f, id) => this.showFlat(f, id, "dollhouse"),
      onCam: (cam) => {
        if (this.view.kind === "flat") this.showFlat(this.view.floor, this.view.unitId, cam);
      },
      onPrefs: (p) => this.setPrefs(p),
      onBook: (data) => {
        storeLead(data);
        this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.");
      },
      onTime: (tm) => this.setTime(tm),
      onRoom: (id) => { this.stopTour(false); void this.goRoom(id); },
      onTour: (act) => this.handleTour(act),
      onZoom: (dir) => this.gestures.zoom(dir),
    });

    this.bindPointer(canvas);
    this.bindKeys();
    this.showTower(false);
    this.hud.setView(this.view);

    const tryJoy = () => {
      const b = document.getElementById("joy-base");
      const k = document.getElementById("joy-knob");
      if (b && k && !b.dataset.ready) {
        b.dataset.ready = "1";
        attachJoystick(b, k, this.walker);
      }
    };
    const mo = new MutationObserver(tryJoy);
    mo.observe(ui, { childList: true, subtree: true });
    tryJoy();

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add("touch");
    }

    startTips();
    setLoad(1);
    finishLoading();

    this.engine.start((dt) => this.tick(dt), () => this.afterRender());
    this.exposeApi();
  }

  setTime(tm: TimeOfDay) {
    this.time = tm;
    this.hud.setTime(tm);
    this.applySceneTime();
  }

  applySceneTime() {
    applyTimeOfDay(this.engine, this.time);
    this.tower.setTime(this.time);
    for (const i of this.interiors) i.setTime(this.time);
    const night = this.time === "night";
    const golden = this.time === "golden";
    const walk = this.view.kind === "flat" && this.view.cam === "walk";
    for (const l of this.roomLights) {
      if (l instanceof THREE.HemisphereLight) {
        if (night) {
          l.color.set("#2a3a58");
          l.groundColor.set("#161018");
          l.intensity = 0.16;
        } else if (golden) {
          l.color.set("#ffd9a8");
          l.groundColor.set("#8a5a38");
          l.intensity = walk ? 0.5 : 0.35;
        } else {
          l.color.set("#f4efe6");
          l.groundColor.set("#8a7a68");
          l.intensity = walk ? 0.9 : 0.45;
        }
      } else if (l instanceof THREE.DirectionalLight) {
        l.intensity = night ? 0.06 : golden ? (walk ? 0.35 : 0.55) : walk ? 0.55 : 0.9;
        l.color.set(night ? "#a0b4e0" : golden ? "#ffb060" : "#fff4df");
      }
    }
  }

  tick(dt: number) {
    if (this.flying) return;
    if (this.view.kind === "flat" && this.view.cam === "walk") {
      this.engine.orbit.enabled = false;
      this.walker.update(dt);
      this.walker.apply(this.engine.camera);
    } else if (!this.flying) {
      this.engine.orbit.enabled = true;
    }
  }

  afterRender() {
    this.syncHotspotLabels();
  }

  syncHotspotLabels() {
    const interiors = this.interiors;
    if (!interiors.length) return;
    const compact = document.body.classList.contains("compact");
    const cam = this.engine.camera;
    const w = window.innerWidth;
    const h = window.innerHeight;
    const chrome = this.chromeRects();
    for (const built of interiors) {
      for (const hs of built.hotspots) {
        const el = hs.labelEl;
        if (!el) continue;
        if (compact) {
          el.classList.add("is-hidden");
          continue;
        }
        const wp = hs.position;
        const cs = wp.clone().applyMatrix4(cam.matrixWorldInverse);
        if (cs.z > -0.15) {
          el.classList.add("is-hidden");
          continue;
        }
        const ndc = wp.clone().project(cam);
        if (ndc.z < -1 || ndc.z > 1) {
          el.classList.add("is-hidden");
          continue;
        }
        let x = (ndc.x * 0.5 + 0.5) * w;
        let y = (-ndc.y * 0.5 + 0.5) * h;
        const pad = 10;
        const off = x < -30 || y < -20 || x > w + 30 || y > h + 20;
        if (off) {
          el.classList.add("is-hidden");
          continue;
        }
        // Occlusion: a wall between the camera and the pin.
        const dir = wp.clone().sub(cam.position);
        const dist = dir.length();
        dir.multiplyScalar(1 / (dist || 1));
        this.ray.set(cam.position, dir);
        const walls: THREE.Object3D[] = [];
        built.group.traverse((o) => {
          if (o instanceof THREE.Mesh && o.name !== "hotspot" && !o.name.startsWith("studio")) walls.push(o);
        });
        const hits = this.ray.intersectObjects(walls, true);
        const blocked = hits.some((hit) => hit.distance < dist - 0.45 && !isHotspotObj(hit.object));
        if (blocked) {
          el.classList.add("is-hidden");
          continue;
        }
        const ew = el.offsetWidth || 80;
        const eh = el.offsetHeight || 22;
        x = Math.max(pad + ew / 2, Math.min(w - pad - ew / 2, x));
        y = Math.max(pad + eh / 2, Math.min(h - pad - eh / 2, y));
        const box = { x: x - ew / 2, y: y - eh / 2, w: ew, h: eh };
        if (chrome.some((c) => intersects(box, c))) {
          el.classList.add("is-hidden");
          continue;
        }
        el.classList.remove("is-hidden");
      }
    }
  }

  chromeRects(): { x: number; y: number; w: number; h: number }[] {
    const sel = ".topbar, .sheet, .room-dock, .dock, .tour-card, .menu-pop, .modal-bg, .zoom-stack, .joy-wrap";
    return [...this.hud.root.querySelectorAll(sel)].flatMap((el) => {
      const st = getComputedStyle(el);
      if (st.display === "none" || st.visibility === "hidden") return [];
      const r = el.getBoundingClientRect();
      if (r.width < 4 || r.height < 4) return [];
      return [{ x: r.x, y: r.y, w: r.width, h: r.height }];
    });
  }

  clearInteriors() {
    for (const i of this.interiors) i.dispose();
    this.interiors = [];
    for (const l of this.unitLabels) {
      l.element?.remove();
      l.removeFromParent();
    }
    this.unitLabels = [];
    for (const l of this.roomLights) l.removeFromParent();
    this.roomLights = [];
    this.interiorRoot.clear();
  }

  setPrefs(p: Prefs) {
    this.prefs = p;
    for (const i of this.interiors) i.applyPrefs(p);
    if (this.view.kind === "flat") {
      const { floor, unitId, cam } = this.view;
      const keepRoom = this.currentRoom;
      void this.showFlat(floor, unitId, cam, true).then(() => {
        if (keepRoom) this.hud.setCurrentRoom(keepRoom);
      });
    } else if (this.view.kind === "floor") {
      this.showFloor(this.view.floor, true);
    }
  }

  async showTower(fly = true) {
    this.stopTour(true);
    this.walker.enabled = false;
    cancelFly();
    if (document.pointerLockElement) document.exitPointerLock();
    this.clearInteriors();
    this.roomStops = [];
    this.currentRoom = null;
    this.world.visible = true;
    this.tower.setIsolated(null);
    this.tower.highlight(null);
    this.hud.spec = null;
    this.view = { kind: "tower", hoverFloor: null };
    this.engine.setHudLift(0);
    this.hud.setView(this.view);
    this.applySceneTime();
    const [cx, cz] = plateCenter();
    const pos = new THREE.Vector3(38, 30, 42);
    const target = new THREE.Vector3(cx, 10, cz);
    if (fly) await flyCamera(this.engine.camera, this.engine.orbit, pos, target, 1.1);
    else {
      this.engine.camera.position.copy(pos);
      this.engine.orbit.target.copy(target);
      this.engine.orbit.update();
    }
  }

  async showFloor(floor: number, keepCam = false) {
    this.stopTour(true);
    this.walker.enabled = false;
    cancelFly();
    if (document.pointerLockElement) document.exitPointerLock();
    this.clearInteriors();
    this.roomStops = [];
    this.currentRoom = null;
    this.world.visible = true;
    this.tower.setIsolated(floor);
    this.tower.highlight(floor);
    this.hud.spec = null;
    this.view = { kind: "floor", floor, hoverUnit: null };
    this.hud.setView(this.view);
    this.applySceneTime();

    const y = floorY(floor);
    const slots = slotsForFloor(floor);
    for (const slot of slots) {
      const plan = this.plans[slot.planId];
      const built = buildInterior(plan, this.prefs, this.mats, {
        transform: slot.transform,
        showCeiling: false,
        y,
        cutaway: true,
        catalog: this.catalog,
      });
      built.group.userData.unitId = unitCode(floor, slot.suffix);
      built.group.userData.slot = slot;
      this.interiorRoot.add(built.group);
      this.interiors.push(built);

      const el = document.createElement("button");
      el.type = "button";
      el.className = "unit-card";
      el.innerHTML = `<div class="u-id">${unitCode(floor, slot.suffix)}</div>
        <div class="u-meta">${slot.typeLabel}<br>${areaLabel(plan)}</div>`;
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        this.showFlat(floor, unitCode(floor, slot.suffix), "dollhouse");
      });
      const lab = new CSS2DObject(el);
      const t = slot.transform;
      const [lx, lz] = [t.ox + t.width / 2, t.oz + t.depth / 2];
      lab.position.set(lx, y + 2.2, lz);
      this.interiorRoot.add(lab);
      this.unitLabels.push(lab);
    }
    const coreEl = document.createElement("div");
    coreEl.className = "unit-card";
    coreEl.style.pointerEvents = "none";
    coreEl.innerHTML = `<div class="u-meta">Lifts &amp; stairs</div>`;
    const coreLab = new CSS2DObject(coreEl);
    coreLab.position.set(CORE.x + CORE.w / 2, y + 1.6, CORE.z + CORE.d / 2);
    this.interiorRoot.add(coreLab);
    this.unitLabels.push(coreLab);

    if (!keepCam) {
      const [cx, cz] = plateCenter();
      await flyCamera(
        this.engine.camera,
        this.engine.orbit,
        new THREE.Vector3(cx + 0.8, y + 28, cz + 4.5),
        new THREE.Vector3(cx, y + 0.2, cz),
        1.0,
      );
    }
  }

  async showFlat(
    floor: number,
    unitId: string,
    cam: "dollhouse" | "walk",
    keepCam = false,
    spawnAt?: { x: number; z: number; yaw?: number },
    opts: { skipSpawn?: boolean } = {},
  ) {
    if (document.pointerLockElement && cam !== "walk") document.exitPointerLock();
    const prevPos = this.walker.position.clone();
    const prevYaw = this.walker.yaw;
    const openId = this.hud.spec?.id ?? null;
    const keepRoom = this.currentRoom;
    this.clearInteriors();
    this.world.visible = false;
    this.tower.setIsolated(null);
    this.tower.highlight(null);
    this.view = { kind: "flat", floor, unitId, cam };
    this.hud.setView(this.view);

    const suffix = unitId.replace(/^\d+/, "");
    const slots = slotsForFloor(floor);
    const slot = slots.find((s) => s.suffix === suffix) ?? slots[0];
    const plan = this.plans[slot.planId];
    const built = buildInterior(plan, this.prefs, this.mats, {
      transform: slot.transform,
      showCeiling: cam === "walk",
      y: 0,
      cutaway: cam === "dollhouse",
      hotspots: true,
      catalog: this.catalog,
    });
    this.interiorRoot.add(built.group);
    this.interiors.push(built);
    this.roomStops = built.rooms;

    if (cam === "dollhouse") {
      const studio = new THREE.Mesh(
        new THREE.CircleGeometry(48, 48),
        new THREE.MeshStandardMaterial({
          color: this.time === "night" ? "#1a1e28" : this.time === "golden" ? "#c9a078" : "#d8d2c6",
          roughness: 0.95,
          metalness: 0,
        }),
      );
      studio.rotation.x = -Math.PI / 2;
      studio.position.y = -0.04;
      studio.receiveShadow = true;
      studio.name = "studio-ground";
      this.interiorRoot.add(studio);
    }

    const fill = new THREE.HemisphereLight("#f4efe6", "#8a7a68", cam === "walk" ? 0.9 : 0.45);
    this.interiorRoot.add(fill);
    this.roomLights.push(fill);
    const sun2 = new THREE.DirectionalLight("#fff4df", cam === "walk" ? 0.55 : 0.9);
    sun2.position.set(8, 12, 6);
    sun2.castShadow = cam === "dollhouse" && !this.engine.mobile;
    this.interiorRoot.add(sun2);
    this.roomLights.push(sun2);
    this.applySceneTime();

    for (const h of built.hotspots) {
      h.labelEl?.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openHotspot(h);
      });
    }
    if (openId) {
      const again = built.hotspots.find((h) => h.id === openId);
      if (again) this.hud.showSpec(again);
      else this.hud.spec = null;
    }

    this.hud.setRooms(this.roomStops, keepRoom);

    const xf = slot.transform;
    const cx = xf.ox + xf.width / 2;
    const cz = xf.oz + xf.depth / 2;

    if (cam === "walk") {
      this.walker.setCollisions(built.collisions, built.worldRooms);
      if (!opts.skipSpawn) {
        let sx = spawnAt?.x ?? built.spawn.x;
        let sz = spawnAt?.z ?? built.spawn.z;
        let yaw = spawnAt?.yaw ?? built.spawn.yaw;
        let pitch = spawnAt?.yaw !== undefined ? -0.18 : (built.spawn.pitch ?? -0.18);
        if (keepCam && !spawnAt && prevPos.y > 0.5 && this.walker.isWalkable(prevPos.x, prevPos.z)) {
          sx = prevPos.x;
          sz = prevPos.z;
          yaw = prevYaw;
          pitch = this.walker.pitch;
        }
        this.walker.spawn(sx, 1.6, sz, yaw, pitch);
        this.walker.apply(this.engine.camera);
        this.walker.enabled = true;
      } else {
        this.walker.enabled = false;
      }
      this.engine.orbit.enabled = false;
      if (!this.currentRoom && !opts.skipSpawn) {
        const home =
          this.roomStops.find((r) => r.type === "living") ??
          this.roomStops.find((r) => r.type === "foyer") ??
          this.roomStops[0];
        if (home) {
          this.currentRoom = home.id;
          this.hud.setCurrentRoom(home.id, false);
        }
      }
    } else {
      this.walker.enabled = false;
      this.engine.orbit.enabled = true;
      if (!keepCam) {
        await flyCamera(
          this.engine.camera,
          this.engine.orbit,
          new THREE.Vector3(cx + 8, plan.wallHeight + 7, cz + 9),
          new THREE.Vector3(cx, 1.0, cz),
          0.9,
        );
      }
    }
    this.engine.setHudLift(cam === "walk" ? 0.24 : 0);
  }

  cameraYaw(): number {
    const d = new THREE.Vector3();
    this.engine.camera.getWorldDirection(d);
    return Math.atan2(-d.x, -d.z);
  }

  cameraPitch(): number {
    const e = new THREE.Euler().setFromQuaternion(this.engine.camera.quaternion, "YXZ");
    return e.x;
  }

  async goRoom(id: string) {
    const stop = this.roomStops.find((r) => r.id === id);
    if (!stop || this.view.kind !== "flat") return;
    this.hud.spec = null;
    this.currentRoom = id;
    this.walker.skipLockOnce = true;
    if (document.pointerLockElement) document.exitPointerLock();

    if (this.view.cam !== "walk") {
      const { floor, unitId } = this.view;
      // Rebuild with full-height walls and a ceiling, keep the current camera, then fly in.
      await this.showFlat(floor, unitId, "walk", true, undefined, { skipSpawn: true });
    }

    await this.flyToStop(stop);
    this.hud.setCurrentRoom(id);
  }

  async flyToStop(stop: RoomStop) {
    if (this.view.kind !== "flat") return;
    cancelFly();
    this.flying = true;
    this.walker.enabled = false;
    this.engine.orbit.enabled = false;
    const fromPos = this.engine.camera.position.clone();
    const fromYaw = this.cameraYaw();
    const fromPitch = this.cameraPitch();
    try {
      await flyEye(this.engine.camera, fromPos, fromYaw, fromPitch, stop.position, stop.yaw, stop.pitch, 1.15);
      this.walker.spawn(stop.walkX, 1.6, stop.walkZ, stop.yaw, stop.pitch);
      this.walker.apply(this.engine.camera);
      this.walker.enabled = true;
    } finally {
      this.flying = false;
      this.engine.orbit.enabled = false;
    }
  }

  handleTour(act: "start" | "stop" | "next" | "prev" | "toggle") {
    if (act === "start") void this.startTour();
    else if (act === "stop") this.stopTour(false);
    else if (act === "next") void this.tourStep(1);
    else if (act === "prev") void this.tourStep(-1);
    else if (act === "toggle") this.toggleTourPlay();
  }

  async startTour() {
    if (!this.roomStops.length || this.view.kind !== "flat") return;
    this.tour = { active: true, playing: true, index: 0 };
    this.hud.setTour(this.tour);
    await this.goRoom(this.roomStops[0].id);
    this.scheduleTour();
  }

  stopTour(silent = false) {
    this.clearTourTimer();
    const was = this.tour;
    this.tour = null;
    if (was && !silent) this.hud.setTour(null);
  }

  toggleTourPlay() {
    if (!this.tour) return;
    this.tour = { ...this.tour, playing: !this.tour.playing };
    this.hud.setTour(this.tour);
    if (this.tour.playing) this.scheduleTour();
    else this.clearTourTimer();
  }

  async tourStep(dir: number) {
    if (!this.roomStops.length) return;
    if (!this.tour) {
      this.tour = { active: true, playing: false, index: 0 };
    }
    const next = this.tour.index + dir;
    if (next < 0) return;
    if (next >= this.roomStops.length) {
      this.stopTour(false);
      return;
    }
    this.tour = { ...this.tour, index: next };
    this.hud.setTour(this.tour);
    await this.goRoom(this.roomStops[next].id);
    if (this.tour?.playing) this.scheduleTour();
  }

  scheduleTour() {
    this.clearTourTimer();
    if (!this.tour?.playing) return;
    this.tourTimer = window.setTimeout(() => {
      void this.tourStep(1);
    }, TOUR_DWELL);
  }

  clearTourTimer() {
    if (this.tourTimer !== null) {
      clearTimeout(this.tourTimer);
      this.tourTimer = null;
    }
  }

  async openHotspot(h: Hotspot) {
    this.walker.skipLockOnce = true;
    if (document.pointerLockElement) document.exitPointerLock();
    this.hud.showSpec(h);
    // Prefer a matching room stop so we land at eye level inside, not at a cutaway camera.
    const match = this.roomStops.find((r) => r.name === h.title || r.id === h.id.replace(/^(kitchen|bath|view)-/, "") || (h.kind === "kitchen" && r.type === "kitchen") || (h.kind === "bath" && r.type === "bathroom") || (h.kind === "view" && (r.type === "balcony" || r.type === "terrace")));
    if (match) {
      this.stopTour(false);
      await this.goRoom(match.id);
      return;
    }
    if (this.flying) return;
    this.flying = true;
    const pos = h.cameraPos.clone();
    const look = h.lookAt.clone();
    try {
      const wasWalk = this.view.kind === "flat" && this.view.cam === "walk";
      if (wasWalk) this.walker.enabled = false;
      await flyCamera(this.engine.camera, this.engine.orbit, pos, look, 0.8);
      if (wasWalk) {
        this.engine.orbit.enabled = false;
        const yaw = Math.atan2(-(look.x - pos.x), -(look.z - pos.z));
        const walkable = this.walker.isWalkable(pos.x, pos.z);
        this.walker.spawn(walkable ? pos.x : h.position.x, 1.6, walkable ? pos.z : h.position.z, yaw);
        this.walker.apply(this.engine.camera);
        this.walker.enabled = true;
      }
    } finally {
      this.flying = false;
    }
  }

  bindPointer(canvas: HTMLCanvasElement) {
    const onDown = (e: PointerEvent) => {
      this.dragging = false;
      this.downXY = { x: e.clientX, y: e.clientY };
    };
    const onMove = (e: PointerEvent) => {
      if (e.buttons || e.pressure) {
        if (Math.hypot(e.clientX - this.downXY.x, e.clientY - this.downXY.y) > 5) this.dragging = true;
      }
      this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (this.view.kind === "tower") this.hoverTower();
    };
    const onUp = (e: PointerEvent) => {
      if (this.dragging) return;
      if (isUiEventTarget(e.target)) return;
      this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.clickScene();
    };
    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
  }

  hoverTower() {
    if (this.view.kind !== "tower") return;
    this.ray.setFromCamera(this.pointer, this.engine.camera);
    const hits = this.ray.intersectObjects(this.tower.floorHits, false);
    const f = hits.length ? (hits[0].object.userData.floor as number) : null;
    if (f !== this.view.hoverFloor) {
      this.tower.highlight(f);
      this.hud.setHoverFloor(f);
    }
  }

  clickScene() {
    this.ray.setFromCamera(this.pointer, this.engine.camera);
    if (this.view.kind === "tower") {
      const hits = this.ray.intersectObjects(this.tower.floorHits, false);
      if (hits.length) this.showFloor(hits[0].object.userData.floor as number);
      return;
    }
    if (this.view.kind === "floor") {
      const meshes = this.interiors.flatMap((i) => {
        const arr: THREE.Object3D[] = [];
        i.group.traverse((o) => { if (o instanceof THREE.Mesh) arr.push(o); });
        return arr;
      });
      const hits = this.ray.intersectObjects(meshes, false);
      if (hits.length) {
        let o: THREE.Object3D | null = hits[0].object;
        while (o) {
          if (o.userData.unitId) {
            this.showFlat(this.view.floor, o.userData.unitId as string, "dollhouse");
            return;
          }
          o = o.parent;
        }
      }
      return;
    }
    if (this.view.kind === "flat") {
      if (document.pointerLockElement) return;
      const spots = this.interiors.flatMap((i) => i.hotspots.map((h) => h.mesh));
      const sh = this.ray.intersectObjects(spots, true);
      if (sh.length) {
        let o: THREE.Object3D | null = sh[0].object;
        while (o) {
          const hs = o.userData.hotspot as Hotspot | undefined;
          if (hs) {
            this.walker.skipLockOnce = true;
            this.openHotspot(hs);
            return;
          }
          o = o.parent;
        }
      }
      const floors = this.interiors.flatMap((i) => i.floorMeshes);
      const fh = this.ray.intersectObjects(floors, false);
      if (!fh.length) return;
      const pt = fh[0].point;
      this.walker.skipLockOnce = true;
      if (this.view.cam !== "walk") {
        this.showFlat(this.view.floor, this.view.unitId, "walk", false, { x: pt.x, z: pt.z });
        return;
      }
      if (!this.walker.walkTo(pt.x, pt.z)) {
        const cam = this.engine.camera.position;
        this.walker.walkTo(pt.x + (cam.x - pt.x) * 0.1, pt.z + (cam.z - pt.z) * 0.1);
      }
    }
  }

  bindKeys() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        if (document.pointerLockElement) {
          document.exitPointerLock();
          return;
        }
        this.hud.goBack();
        return;
      }
      if (!this.tv) return;
      const view = this.view;
      if (view.kind === "flat") {
        if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
          if (!this.roomStops.length) return;
          let i = this.roomStops.findIndex((r) => r.id === this.currentRoom);
          if (i < 0) i = 0;
          i += e.code === "ArrowRight" ? 1 : -1;
          i = Math.max(0, Math.min(this.roomStops.length - 1, i));
          this.stopTour(false);
          void this.goRoom(this.roomStops[i].id);
          e.preventDefault();
          return;
        }
        if (view.cam === "walk" && (e.code === "Enter" || e.code === "NumpadEnter")) {
          this.showFlat(view.floor, view.unitId, "dollhouse");
          e.preventDefault();
          return;
        }
        if (view.cam === "dollhouse" && (e.code === "Enter" || e.code === "NumpadEnter")) {
          this.showFlat(view.floor, view.unitId, "walk");
          e.preventDefault();
        }
        return;
      }
      if (view.kind === "tower") {
        const cur = view.hoverFloor ?? 1;
        if (e.code === "ArrowUp") {
          const n = Math.min(PENTHOUSE_FLOOR, cur + 1);
          this.tower.highlight(n);
          this.hud.setHoverFloor(n);
          e.preventDefault();
        }
        if (e.code === "ArrowDown") {
          const n = Math.max(1, cur - 1);
          this.tower.highlight(n);
          this.hud.setHoverFloor(n);
          e.preventDefault();
        }
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          this.showFloor(view.hoverFloor ?? 1);
          e.preventDefault();
        }
      } else if (view.kind === "floor") {
        const slots = slotsForFloor(view.floor);
        const ids = slots.map((s) => unitCode(view.floor, s.suffix));
        let i = Math.max(0, ids.indexOf(view.hoverUnit ?? ids[0]));
        if (e.code === "ArrowRight" || e.code === "ArrowLeft") {
          i = (i + (e.code === "ArrowRight" ? 1 : ids.length - 1)) % ids.length;
          this.view = { ...view, hoverUnit: ids[i] };
          this.hud.setView(this.view);
          document.querySelectorAll(".unit-card, .unit-chip").forEach((c) => {
            c.classList.toggle("hov", c.textContent?.includes(ids[i]) ?? false);
          });
          e.preventDefault();
        }
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          this.showFlat(view.floor, view.hoverUnit ?? ids[0], "dollhouse");
          e.preventDefault();
        }
      }
    });
  }

  exposeApi() {
    const api = {
      ready: true,
      view: () => this.view,
      gotoTower: () => this.showTower(),
      gotoFloor: (f: number) => this.showFloor(f),
      gotoFlat: (f: number, id: string, cam: "dollhouse" | "walk" = "dollhouse") => this.showFlat(f, id, cam),
      setCam: (cam: "dollhouse" | "walk") => {
        if (this.view.kind === "flat") return this.showFlat(this.view.floor, this.view.unitId, cam);
      },
      setTime: (t: TimeOfDay) => this.setTime(t),
      setPrefs: (p: Partial<Prefs>) => this.setPrefs({ ...this.prefs, ...p }),
      setSheet: (open: boolean) => this.hud.setSheet(open),
      rooms: () => this.roomStops,
      goRoom: (id: string) => this.goRoom(id),
      startTour: () => this.startTour(),
      stopTour: () => this.stopTour(false),
      tourStep: (d: number) => this.tourStep(d),
      setTourPlaying: (p: boolean) => {
        if (!this.tour) return;
        this.tour = { ...this.tour, playing: p };
        this.hud.setTour(this.tour);
        if (p) this.scheduleTour();
        else this.clearTourTimer();
      },
      openForm: () => this.hud.openForm(),
      closeForm: () => this.hud.closeForm(),
      submitLead: (name: string, phone: string) => {
        const unit = this.hud.unitOfInterest();
        storeLead({ name, phone, unit });
        this.hud.closeForm();
        this.hud.toast("Request saved on this device. A sales executive would follow up in Lead Setu.");
      },
      toast: (m: string) => this.hud.toast(m),
      currentRoom: () => this.currentRoom,
      tour: () => this.tour,
      prefs: () => this.prefs,
    };
    (window as unknown as { __leadsetu: typeof api }).__leadsetu = api;
  }
}

function isHotspotObj(o: THREE.Object3D): boolean {
  let x: THREE.Object3D | null = o;
  while (x) {
    if (x.name === "hotspot" || x.userData.hotspot) return true;
    x = x.parent;
  }
  return false;
}

function intersects(
  a: { x: number; y: number; w: number; h: number },
  b: { x: number; y: number; w: number; h: number },
): boolean {
  const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  return ix > 6 && iy > 6;
}

function setLoad(p: number) {
  const bar = document.getElementById("load-bar");
  const pct = document.getElementById("load-pct");
  const v = Math.round(Math.max(0, Math.min(1, p)) * 100);
  if (bar) (bar as HTMLElement).style.width = v + "%";
  if (pct) pct.textContent = v + "%";
}

function startTips() {
  const tips = [...document.querySelectorAll<HTMLElement>("#tips .tip")];
  const dots = [...document.querySelectorAll<HTMLButtonElement>("#tips [data-dot]")];
  if (!tips.length) return;
  let i = 0;
  const show = (n: number) => {
    i = (n + tips.length) % tips.length;
    tips.forEach((el, k) => el.classList.toggle("on", k === i));
    dots.forEach((el, k) => el.classList.toggle("on", k === i));
  };
  show(0);
  dots.forEach((d, k) => d.addEventListener("click", () => show(k)));
  const id = window.setInterval(() => show(i + 1), 3200);
  const loading = document.getElementById("loading");
  if (loading) {
    const obs = new MutationObserver(() => {
      if (loading.classList.contains("done")) {
        clearInterval(id);
        obs.disconnect();
      }
    });
    obs.observe(loading, { attributes: true, attributeFilter: ["class"] });
  }
}

function finishLoading() {
  const loading = document.getElementById("loading");
  const btn = document.getElementById("start-explore") as HTMLButtonElement | null;
  if (btn) btn.hidden = false;
  const hold = new URLSearchParams(location.search).get("hold") === "1";
  let dismissed = false;
  const go = () => {
    if (dismissed) return;
    dismissed = true;
    loading?.classList.add("done");
    document.body.classList.remove("booting");
  };
  btn?.addEventListener("click", go);
  // ?hold=1 skips only the auto-dismiss timer, so screenshots can capture onboarding
  // and still click Start exploring.
  if (!hold) window.setTimeout(go, 7000);
}

new App().start().catch((err) => {
  console.error(err);
  const sub = document.querySelector(".load-sub");
  if (sub) sub.textContent = "Could not load the walkthrough. Check the console.";
});
