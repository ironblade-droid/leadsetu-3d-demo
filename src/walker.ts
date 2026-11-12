import * as THREE from "three";
import type { Collision } from "./types";

const EYE = 1.6;
const RADIUS = 0.28;
const SPEED = 3.4;
const SPRINT = 5.4;
const TURN = 1.6;

export class Walker {
  position = new THREE.Vector3();
  yaw = 0;
  pitch = 0;
  enabled = false;
  locked = false;
  tv = false;
  readonly keys = new Set<string>();
  joy = { x: 0, y: 0 };
  private collisions: Collision[] = [];
  private minY = 1.6;
  private bounds: Collision | null = null;
  private walkTarget: THREE.Vector3 | null = null;
  private canvas: HTMLCanvasElement;
  private onLockChange?: (locked: boolean) => void;
  skipLockOnce = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    window.addEventListener("keydown", this.onKey);
    window.addEventListener("keyup", this.onKeyUp);
    canvas.addEventListener("click", this.requestLock);
    document.addEventListener("pointerlockchange", this.lockChange);
    canvas.addEventListener("mousemove", this.onMouse);
  }

  setCollisions(c: Collision[], bounds?: Collision) {
    this.collisions = c;
    this.bounds = bounds ?? null;
  }

  spawn(x: number, y: number, z: number, yaw: number) {
    this.position.set(x, y, z);
    this.minY = y;
    this.yaw = yaw;
    this.pitch = 0;
    this.walkTarget = null;
  }

  /** True if a point on the floor is free of wall collisions and inside bounds. */
  isWalkable(x: number, z: number): boolean {
    if (this.hits(x, z)) return false;
    if (this.bounds) {
      if (x < this.bounds.minX + 0.2 || x > this.bounds.maxX - 0.2) return false;
      if (z < this.bounds.minZ + 0.2 || z > this.bounds.maxZ - 0.2) return false;
    }
    return true;
  }

  walkTo(x: number, z: number) {
    if (!this.isWalkable(x, z)) return false;
    this.walkTarget = new THREE.Vector3(x, this.minY, z);
    return true;
  }

  cancelWalkTo() { this.walkTarget = null; }


  requestLock = () => {
    if (this.skipLockOnce) { this.skipLockOnce = false; return; }
    if (!this.enabled || this.tv) return;
    if (document.pointerLockElement !== this.canvas) {
      this.canvas.requestPointerLock().catch(() => { /* iframe may deny */ });
    }
  };

  private lockChange = () => {
    this.locked = document.pointerLockElement === this.canvas;
    this.onLockChange?.(this.locked);
  };

  setOnLock(fn: (l: boolean) => void) { this.onLockChange = fn; }

  private onKey = (e: KeyboardEvent) => {
    this.keys.add(e.code);
    if (this.enabled && ["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(e.code)) {
      e.preventDefault();
      this.walkTarget = null;
    }
  };
  private onKeyUp = (e: KeyboardEvent) => { this.keys.delete(e.code); };

  private onMouse = (e: MouseEvent) => {
    if (!this.enabled || !this.locked) return;
    this.yaw -= e.movementX * 0.0022;
    this.pitch -= e.movementY * 0.0022;
    this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch));
  };

  /** Touch look — call with dx, dy in pixels. */
  look(dx: number, dy: number) {
    if (!this.enabled) return;
    this.yaw -= dx * 0.005;
    this.pitch -= dy * 0.005;
    this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch));
  }

  update(dt: number) {
    if (!this.enabled) return;
    if (this.walkTarget) {
      const dx = this.walkTarget.x - this.position.x;
      const dz = this.walkTarget.z - this.position.z;
      const dist = Math.hypot(dx, dz);
      if (dist < 0.1) {
        this.walkTarget = null;
      } else {
        const step = SPEED * 1.15 * dt;
        const ux = dx / dist;
        const uz = dz / dist;
        const wantYaw = Math.atan2(-ux, -uz);
        let dyaw = wantYaw - this.yaw;
        while (dyaw > Math.PI) dyaw -= Math.PI * 2;
        while (dyaw < -Math.PI) dyaw += Math.PI * 2;
        this.yaw += dyaw * Math.min(1, 6 * dt);
        const s = Math.min(step, dist);
        this.tryMove(ux * s, 0);
        this.tryMove(0, uz * s);
        this.position.y = this.minY;
      }
      return;
    }
    let fwd = 0, strafe = 0;
    if (this.keys.has("KeyW") || this.keys.has("ArrowUp")) fwd += 1;
    if (this.keys.has("KeyS") || this.keys.has("ArrowDown")) fwd -= 1;
    if (this.keys.has("KeyA")) strafe -= 1;
    if (this.keys.has("KeyD")) strafe += 1;
    if (this.tv) {
      if (this.keys.has("ArrowLeft")) this.yaw += TURN * dt;
      if (this.keys.has("ArrowRight")) this.yaw -= TURN * dt;
    } else {
      if (this.keys.has("ArrowLeft")) strafe -= 1;
      if (this.keys.has("ArrowRight")) strafe += 1;
    }
    fwd += -this.joy.y;
    strafe += this.joy.x;
    const len = Math.hypot(fwd, strafe);
    if (len > 1) { fwd /= len; strafe /= len; }
    const speed = (this.keys.has("ShiftLeft") || this.keys.has("ShiftRight") ? SPRINT : SPEED);
    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    // yaw 0 looks -Z (south)
    const dx = (-fwd * sin + strafe * cos) * speed * dt;
    const dz = (-fwd * cos - strafe * sin) * speed * dt;
    this.tryMove(dx, 0);
    this.tryMove(0, dz);
    this.position.y = this.minY;
  }

  private tryMove(dx: number, dz: number) {
    const nx = this.position.x + dx;
    const nz = this.position.z + dz;
    if (this.hits(nx, nz)) return;
    if (this.bounds) {
      if (nx < this.bounds.minX + RADIUS || nx > this.bounds.maxX - RADIUS) return;
      if (nz < this.bounds.minZ + RADIUS || nz > this.bounds.maxZ - RADIUS) return;
    }
    this.position.x = nx;
    this.position.z = nz;
  }

  private hits(x: number, z: number): boolean {
    for (const c of this.collisions) {
      if (
        x + RADIUS > c.minX && x - RADIUS < c.maxX &&
        z + RADIUS > c.minZ && z - RADIUS < c.maxZ
      ) return true;
    }
    return false;
  }

  apply(camera: THREE.PerspectiveCamera) {
    camera.position.copy(this.position);
    camera.rotation.set(this.pitch, this.yaw, 0, "YXZ");
  }

  dispose() {
    window.removeEventListener("keydown", this.onKey);
    window.removeEventListener("keyup", this.onKeyUp);
    this.canvas.removeEventListener("click", this.requestLock);
    document.removeEventListener("pointerlockchange", this.lockChange);
    this.canvas.removeEventListener("mousemove", this.onMouse);
    if (document.pointerLockElement === this.canvas) document.exitPointerLock();
  }
}

export function attachJoystick(
  el: HTMLElement,
  knob: HTMLElement,
  walker: Walker,
) {
  const base = el;
  let tracking: number | null = null;
  const set = (cx: number, cy: number, x: number, y: number) => {
    const r = 42;
    let dx = x - cx, dy = y - cy;
    const l = Math.hypot(dx, dy) || 1;
    if (l > r) { dx = (dx / l) * r; dy = (dy / l) * r; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    walker.joy.x = dx / r;
    walker.joy.y = dy / r;
    walker.cancelWalkTo();
  };
  const clear = () => {
    knob.style.transform = "";
    walker.joy.x = 0;
    walker.joy.y = 0;
    tracking = null;
  };
  base.addEventListener("pointerdown", (e) => {
    tracking = e.pointerId;
    base.setPointerCapture(e.pointerId);
    const r = base.getBoundingClientRect();
    set(r.left + r.width / 2, r.top + r.height / 2, e.clientX, e.clientY);
  });
  base.addEventListener("pointermove", (e) => {
    if (tracking !== e.pointerId) return;
    const r = base.getBoundingClientRect();
    set(r.left + r.width / 2, r.top + r.height / 2, e.clientX, e.clientY);
  });
  base.addEventListener("pointerup", clear);
  base.addEventListener("pointercancel", clear);
}

export function attachLookTouch(canvas: HTMLCanvasElement, walker: Walker) {
  let id: number | null = null;
  let lx = 0, ly = 0;
  canvas.addEventListener("pointerdown", (e) => {
    if (e.button !== 0 || !walker.enabled || walker.tv) return;
    // left half is for joystick on mobile; look on the right
    if (e.clientX < window.innerWidth * 0.38) return;
    id = e.pointerId;
    lx = e.clientX; ly = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (id !== e.pointerId) return;
    walker.look(e.clientX - lx, e.clientY - ly);
    lx = e.clientX; ly = e.clientY;
  });
  const up = (e: PointerEvent) => { if (id === e.pointerId) id = null; };
  canvas.addEventListener("pointerup", up);
  canvas.addEventListener("pointercancel", up);
}
