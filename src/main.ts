import "./styles.css";
import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { applyTimeOfDay, createEngine, flyCamera, type Engine } from "./engine";
import { loadMaterials, STYLE_DEFAULTS, type Materials } from "./materials";
import { buildTower, type TowerBuild } from "./tower";
import { buildInterior, type InteriorBuild, type Hotspot } from "./interior";
import { Walker, attachJoystick, attachLookTouch } from "./walker";
import { HUD, storeLead, areaLabel } from "./ui";
import type { Prefs, TimeOfDay, UnitPlan, View, Collision } from "./types";
import {
  CORE,
  PENTHOUSE_FLOOR,
  UNIT_A,
  UNIT_B,
  UNIT_C,
  UNIT_PH,
  floorY,
  plateCenter,
  slotsForFloor,
  unitCode,
  describeFloor,
  type Slot,
} from "./layout";

const DEFAULT_PREFS: Prefs = {
  style: "modern",
  flooring: STYLE_DEFAULTS.modern.flooring,
  wallColor: STYLE_DEFAULTS.modern.wall,
  kitchen: STYLE_DEFAULTS.modern.kitchen,
  furniture: true,
};

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
  plans!: Record<string, UnitPlan>;
  tower!: TowerBuild;
  walker!: Walker;
  hud!: HUD;
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
    this.mats = await loadMaterials(this.engine.renderer, (p) => setLoad(0.05 + p * 0.75));
    this.plans = await loadPlans();
    setLoad(0.88);

    this.engine.scene.add(this.world);
    this.engine.scene.add(this.interiorRoot);

    this.tower = buildTower(this.mats);
    this.world.add(this.tower.group);

    this.walker = new Walker(canvas);
    this.walker.tv = this.tv;
    attachLookTouch(canvas, this.walker);

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
    });

    this.bindPointer(canvas);
    this.bindKeys();
    this.showTower(false);
    this.hud.setView(this.view);

    const joyBase = () => document.getElementById("joy-base");
    const joyKnob = () => document.getElementById("joy-knob");
    // Attach after first render; re-query when HUD rerenders via MutationObserver-lite
    const tryJoy = () => {
      const b = joyBase();
      const k = joyKnob();
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

    this.engine.start((dt) => this.tick(dt));
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
    if (this.view.kind === "flat" && this.view.cam === "walk") {
      this.engine.orbit.enabled = false;
      this.walker.update(dt);
      this.walker.apply(this.engine.camera);
    } else {
      this.engine.orbit.enabled = true;
    }
  }

  clearInteriors() {
    for (const i of this.interiors) i.dispose();
    this.interiors = [];
    for (const l of this.unitLabels) {
      l.element?.remove();
      l.removeFromParent();
    }
    this.unitLabels = [];
    for (const l of this.roomLights) {
      l.removeFromParent();
    }
    this.roomLights = [];
    this.interiorRoot.clear();
  }

  setPrefs(p: Prefs) {
    this.prefs = p;
    for (const i of this.interiors) i.applyPrefs(p);
    // Rebuild furniture when style or furniture flag changes — applyPrefs already toggles visibility;
    // style fabrics need a rebuild.
    if (this.view.kind === "flat") {
      const { floor, unitId, cam } = this.view;
      this.showFlat(floor, unitId, cam, true);
    } else if (this.view.kind === "floor") {
      this.showFloor(this.view.floor, true);
    }
  }

  async showTower(fly = true) {
    this.walker.enabled = false;
    if (document.pointerLockElement) document.exitPointerLock();
    this.clearInteriors();
    this.world.visible = true;
    this.tower.setIsolated(null);
    this.tower.highlight(null);
    this.hud.spec = null;
    this.view = { kind: "tower", hoverFloor: null };
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
    this.walker.enabled = false;
    if (document.pointerLockElement) document.exitPointerLock();
    this.clearInteriors();
    this.world.visible = true;
    this.tower.setIsolated(floor);
    this.tower.highlight(floor);
    const keepSpec = false;
    this.hud.spec = null;
    void keepSpec;
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
      // Place label at unit centre, above walls
      const t = slot.transform;
      const [lx, lz] = [t.ox + t.width / 2, t.oz + t.depth / 2];
      lab.position.set(lx, y + 2.2, lz);
      this.interiorRoot.add(lab);
      this.unitLabels.push(lab);
    }
    // Core label
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
    spawnAt?: { x: number; z: number },
  ) {
    if (document.pointerLockElement && cam !== "walk") document.exitPointerLock();
    const prevPos = this.walker.position.clone();
    const prevYaw = this.walker.yaw;
    const openId = this.hud.spec?.id ?? null;
    this.clearInteriors();
    // Keep the tower out of the flat views so plaza signs and trees don't crowd the unit.
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
    });
    this.interiorRoot.add(built.group);
    this.interiors.push(built);

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
    sun2.castShadow = cam === "dollhouse";
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

    const xf = slot.transform;
    const cx = xf.ox + xf.width / 2;
    const cz = xf.oz + xf.depth / 2;

    if (cam === "walk") {
      this.walker.setCollisions(built.collisions, boundsOf(built.collisions, plan, slot));
      let sx = spawnAt?.x ?? built.spawn.x;
      let sz = spawnAt?.z ?? built.spawn.z;
      let yaw = built.spawn.yaw;
      if (keepCam && !spawnAt) {
        sx = prevPos.x;
        sz = prevPos.z;
        yaw = prevYaw;
      }
      this.walker.spawn(sx, 1.6, sz, yaw);
      this.walker.apply(this.engine.camera);
      this.walker.enabled = true;
      this.engine.orbit.enabled = false;
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
  }

  async openHotspot(h: Hotspot) {
    this.walker.skipLockOnce = true;
    if (document.pointerLockElement) document.exitPointerLock();
    this.hud.showSpec(h);
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
      if (e.buttons) {
        if (Math.hypot(e.clientX - this.downXY.x, e.clientY - this.downXY.y) > 5) this.dragging = true;
      }
      this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      if (this.view.kind === "tower") this.hoverTower();
    };
    const onUp = (e: PointerEvent) => {
      if (this.dragging) return;
      if ((e.target as HTMLElement).closest?.("#ui, #labels")) return;
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
        if (this.view.kind === "flat" && this.view.cam === "walk") {
          this.showFlat(this.view.floor, this.view.unitId, "dollhouse");
          return;
        }
        if (this.view.kind === "flat") {
          this.showFloor(this.view.floor);
          return;
        }
        if (this.view.kind === "floor") this.showTower();
        return;
      }
      if (!this.tv) return;
      // TV remote navigation when not walking, or when menu is open
      const view = this.view;
      if (view.kind === "flat" && view.cam === "walk") {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          this.showFlat(view.floor, view.unitId, "dollhouse");
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
          // visually pulse the matching card
          document.querySelectorAll(".unit-card").forEach((c) => {
            c.classList.toggle("hov", c.textContent?.includes(ids[i]) ?? false);
          });
          e.preventDefault();
        }
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          this.showFlat(view.floor, view.hoverUnit ?? ids[0], "dollhouse");
          e.preventDefault();
        }
      } else if (view.kind === "flat") {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
          this.showFlat(view.floor, view.unitId, "walk");
          e.preventDefault();
        }
      }
    });
  }
}

function boundsOf(cols: Collision[], plan: UnitPlan, slot: Slot): Collision {
  const b = plan.bounds;
  // Transform corners
  const corners = [
    [b.min[0], b.min[1]],
    [b.max[0], b.min[1]],
    [b.max[0], b.max[1]],
    [b.min[0], b.max[1]],
  ];
  // Use collision AABB union plus a margin — simpler and includes balcony
  if (!cols.length) {
    return { minX: slot.transform.ox - 2, maxX: slot.transform.ox + slot.transform.width + 2, minZ: slot.transform.oz - 2, maxZ: slot.transform.oz + slot.transform.depth + 3 };
  }
  return {
    minX: Math.min(...cols.map((c) => c.minX)) - 2.5,
    maxX: Math.max(...cols.map((c) => c.maxX)) + 2.5,
    minZ: Math.min(...cols.map((c) => c.minZ)) - 2.5,
    maxZ: Math.max(...cols.map((c) => c.maxZ)) + 2.5,
  };
  void corners;
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
  (document.getElementById("tips") as HTMLElement | null)?.addEventListener(
    "remove",
    () => clearInterval(id),
  );
  // Clear when the loading screen is dismissed
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
    if (dismissed || hold) return;
    dismissed = true;
    loading?.classList.add("done");
  };
  btn?.addEventListener("click", go);
  // Auto-dismiss so onboarding never blocks the demo. ?hold=1 keeps it for screenshots.
  if (!hold) window.setTimeout(go, 7000);
}

new App().start().catch((err) => {
  console.error(err);
  const sub = document.querySelector(".load-sub");
  if (sub) sub.textContent = "Could not load the walkthrough. Check the console.";
});
