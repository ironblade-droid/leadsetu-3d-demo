import * as THREE from "three";
import type { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { Walker } from "./walker";

const TAP = 5;
const PINCH_PAN = 10;

/**
 * Mobile-friendly orbit: a 5px tap/drag threshold, a 10px pan/pinch threshold,
 * and the gesture is locked for the rest of the stroke. UI hits never reach orbit.
 * Walk mode uses this only for the look-around path (handled by Walker).
 */
export function installGestures(
  canvas: HTMLCanvasElement,
  orbit: OrbitControls,
  camera: THREE.PerspectiveCamera,
  opts: {
    isWalk: () => boolean;
    walker: Walker;
    isUiTarget: (t: EventTarget | null) => boolean;
  },
): { zoom: (dir: 1 | -1) => void; dispose: () => void } {
  // We drive touch ourselves; mouse / wheel stay on OrbitControls.
  orbit.touches.ONE = THREE.TOUCH.ROTATE;
  orbit.touches.TWO = THREE.TOUCH.DOLLY_PAN;

  type Mode = "none" | "pending" | "orbit" | "pan" | "pinch" | "look" | "blocked";
  let mode: Mode = "none";
  const pointers = new Map<number, { x: number; y: number }>();
  let origin = { x: 0, y: 0, dist: 0, midX: 0, midY: 0 };
  let last = { x: 0, y: 0, dist: 0, midX: 0, midY: 0 };

  const spherical = new THREE.Spherical();
  const offset = new THREE.Vector3();

  function captureSpherical() {
    offset.copy(camera.position).sub(orbit.target);
    spherical.setFromVector3(offset);
  }

  function applySpherical() {
    spherical.makeSafe();
    spherical.phi = Math.max(orbit.minPolarAngle, Math.min(orbit.maxPolarAngle, spherical.phi));
    spherical.radius = Math.max(orbit.minDistance, Math.min(orbit.maxDistance, spherical.radius));
    offset.setFromSpherical(spherical);
    camera.position.copy(orbit.target).add(offset);
    camera.lookAt(orbit.target);
    orbit.update();
  }

  const _dollyDir = new THREE.Vector3();

  /** Cursor-anchored zoom: camera dollies along the pointer ray, target follows. */
  function zoomToPoint(clientX: number, clientY: number, factor: number) {
    const rect = canvas.getBoundingClientRect();
    const mx = ((clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
    const my = -((clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1;
    _dollyDir.set(mx, my, 1).unproject(camera).sub(camera.position).normalize();
    const prev = camera.position.distanceTo(orbit.target);
    const next = Math.max(orbit.minDistance, Math.min(orbit.maxDistance, prev * factor));
    const delta = prev - next;
    camera.position.addScaledVector(_dollyDir, delta);
    camera.updateMatrixWorld();
    const fwd = new THREE.Vector3(0, 0, -1).transformDirection(camera.matrix);
    orbit.target.copy(camera.position).addScaledVector(fwd, next);
    camera.lookAt(orbit.target);
    orbit.update();
  }

  function zoom(dir: 1 | -1) {
    if (opts.isWalk()) return;
    // Zoom toward the frame centre for the +/- buttons (no cursor).
    zoomToPoint(window.innerWidth / 2, window.innerHeight / 2, dir < 0 ? 0.82 : 1.22);
  }

  function twoStats() {
    const pts = [...pointers.values()];
    if (pts.length < 2) return { dist: 0, midX: 0, midY: 0 };
    const dx = pts[1].x - pts[0].x;
    const dy = pts[1].y - pts[0].y;
    return { dist: Math.hypot(dx, dy), midX: (pts[0].x + pts[1].x) / 2, midY: (pts[0].y + pts[1].y) / 2 };
  }

  const onDown = (e: PointerEvent) => {
    if (opts.isUiTarget(e.target)) {
      if (pointers.size === 0) mode = "blocked";
      return;
    }
    // Only take over touch; mouse is OrbitControls.
    if (e.pointerType === "mouse") return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) {
      mode = "pending";
      origin = { x: e.clientX, y: e.clientY, dist: 0, midX: e.clientX, midY: e.clientY };
      last = { ...origin };
      orbit.enabled = false;
    } else if (pointers.size === 2) {
      const s = twoStats();
      origin = { x: s.midX, y: s.midY, dist: s.dist, midX: s.midX, midY: s.midY };
      last = { ...origin };
      mode = "pending";
      orbit.enabled = false;
    }
  };

  const onMove = (e: PointerEvent) => {
    if (!pointers.has(e.pointerId)) return;
    if (mode === "blocked") return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (opts.isWalk()) {
      if (pointers.size === 1) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        const moved = Math.hypot(e.clientX - origin.x, e.clientY - origin.y);
        if (mode === "pending" && moved > TAP) {
          mode = "look";
          opts.walker.cancelWalkTo();
        }
        if (mode === "look") opts.walker.look(dx, dy);
        last = { ...last, x: e.clientX, y: e.clientY };
      }
      return;
    }

    if (pointers.size >= 2) {
      const s = twoStats();
      const dDist = Math.abs(s.dist - origin.dist);
      const dMid = Math.hypot(s.midX - origin.midX, s.midY - origin.midY);
      if (mode === "pending" && (dDist > PINCH_PAN || dMid > PINCH_PAN)) {
        mode = dDist >= dMid * 0.85 ? "pinch" : "pan";
        captureSpherical();
      }
      if (mode === "pinch") {
        if (last.dist > 1 && s.dist > 1) {
          const factor = last.dist / s.dist;
          zoomToPoint(s.midX, s.midY, factor);
        }
      } else if (mode === "pan") {
        const dx = s.midX - last.midX;
        const dy = s.midY - last.midY;
        const dist = camera.position.distanceTo(orbit.target);
        const k = dist * 0.0022;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        const fwd = new THREE.Vector3();
        camera.matrix.extractBasis(right, up, fwd);
        orbit.target.addScaledVector(right, -dx * k);
        orbit.target.addScaledVector(up, dy * k);
        applySpherical();
      }
      last = { x: s.midX, y: s.midY, dist: s.dist, midX: s.midX, midY: s.midY };
      return;
    }

    // one-finger orbit
    const dx = e.clientX - last.x;
    const dy = e.clientY - last.y;
    const moved = Math.hypot(e.clientX - origin.x, e.clientY - origin.y);
    if (mode === "pending" && moved > TAP) {
      mode = "orbit";
      captureSpherical();
    }
    if (mode === "orbit") {
      const speed = 0.0055;
      spherical.theta -= dx * speed;
      spherical.phi -= dy * speed;
      applySpherical();
    }
    last = { ...last, x: e.clientX, y: e.clientY };
  };

  const onUp = (e: PointerEvent) => {
    if (e.pointerType === "mouse" && mode !== "blocked") return;
    pointers.delete(e.pointerId);
    if (pointers.size === 0) {
      mode = "none";
      if (!opts.isWalk()) orbit.enabled = true;
    } else if (pointers.size === 1) {
      const p = [...pointers.values()][0];
      origin = { x: p.x, y: p.y, dist: 0, midX: p.x, midY: p.y };
      last = { ...origin };
      mode = "pending";
    }
  };

  canvas.addEventListener("pointerdown", onDown, { capture: true });
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);

  return {
    zoom,
    dispose() {
      canvas.removeEventListener("pointerdown", onDown, { capture: true } as EventListenerOptions);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    },
  };
}

export function isUiEventTarget(t: EventTarget | null): boolean {
  if (!(t instanceof Element)) return false;
  return Boolean(t.closest("#ui, .hotspot-lab, .unit-card, .unit-chip, button, input, a, .sheet, .dock, .topbar, .modal-bg, .menu-pop, .tour-card, .spec-card, .joy-wrap, .zoom-stack"));
}
