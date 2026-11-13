import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

export interface Engine {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  orbit: OrbitControls;
  labels: CSS2DRenderer;
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  fill: THREE.DirectionalLight;
  mobile: boolean;
  highTier: boolean;
  softwareGpu: boolean;
  start: (tick: (dt: number) => void, after?: () => void) => void;
  resize: () => void;
  /** Shift the look-at upward in portrait walk mode so furniture sits above the HUD. */
  setHudLift: (frac: number) => void;
  /** Walk-mode desired *horizontal* FOV, or null to restore the dollhouse default. */
  setWalkFov: (fov: number | null) => void;
  fps: () => number;
  aoEnabled: () => boolean;
  setAoEnabled: (on: boolean) => void;
  /** Aim the sun through the unit's windows (walk) or restore the tower sun. */
  aimWalkLighting: (center: THREE.Vector3 | null, incoming: THREE.Vector3 | null, radius: number) => void;
  cityBg: THREE.Texture | null;
  walkLit: boolean;
  dispose: () => void;
}

export function isMobileViewport(): boolean {
  return window.innerWidth < 900 || window.innerHeight < 520 || ("ontouchstart" in window && window.innerWidth < 1200);
}

function detectSoftwareGpu(renderer: THREE.WebGLRenderer): boolean {
  try {
    const gl = renderer.getContext();
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    if (!ext) return false;
    const gpu = String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || "");
    return /swiftshader|llvmpipe|softpipe|microsoft basic render|cpu/i.test(gpu);
  } catch {
    return false;
  }
}

export function createEngine(canvas: HTMLCanvasElement, labelLayer: HTMLElement): Engine {
  const mobile = isMobileViewport();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !mobile,
    powerPreference: "high-performance",
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = mobile ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const softwareGpu = detectSoftwareGpu(renderer);
  // GTAO is a desktop/high-tier path. SwiftShader (Playwright, some VMs) and
  // phones keep the cheaper baked contact-AO decals and skip the composer.
  const highTier = !mobile && !softwareGpu;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#b9cbe0");
  scene.fog = new THREE.Fog("#c5d4e3", 90, 220);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
  scene.environmentIntensity = 0.55;

  const fov = mobile ? 58 : 50;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.05, 400);
  camera.position.set(36, 28, 38);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.maxPolarAngle = Math.PI * 0.48;
  orbit.minDistance = 2;
  orbit.maxDistance = 90;
  orbit.target.set(13.7, 8, 10);
  orbit.update();
  orbit.touches.ONE = THREE.TOUCH.ROTATE;
  orbit.touches.TWO = THREE.TOUCH.DOLLY_PAN;

  const labels = new CSS2DRenderer({ element: labelLayer });
  labels.setSize(window.innerWidth, window.innerHeight);
  Object.assign(labelLayer.style, { position: "absolute", inset: "0", pointerEvents: "none" });

  // Slightly warmer, less ice-blue ambient so oak floors don't go pale.
  const hemi = new THREE.HemisphereLight("#efe8dc", "#8a7a68", 0.62);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight("#fff3d8", 2.15);
  sun.position.set(48, 62, 28);
  sun.castShadow = true;
  const map = mobile ? 1024 : 2048;
  sun.shadow.mapSize.set(map, map);
  sun.shadow.camera.near = 4;
  sun.shadow.camera.far = 140;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = mobile ? 1 : 2.5;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(13.7, 0, 10);

  const fill = new THREE.DirectionalLight("#f0e0c4", 0.42);
  fill.position.set(-30, 16, -20);
  scene.add(fill);

  const amb = new THREE.AmbientLight("#fff6ea", 0.08);
  scene.add(amb);

  let composer: EffectComposer | null = null;
  let gtaoPass: GTAOPass | null = null;
  let aoOn = highTier;
  let cityBg: THREE.Texture | null = null;

  if (highTier) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rt = new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType,
      depthBuffer: true,
    });
    composer = new EffectComposer(renderer, rt);
    composer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    composer.addPass(new RenderPass(scene, camera));
    gtaoPass = new GTAOPass(scene, camera, w, h);
    gtaoPass.output = GTAOPass.OUTPUT.Default;
    gtaoPass.blendIntensity = 0.8;
    gtaoPass.updateGtaoMaterial({
      radius: 0.28,
      samples: 12,
      thickness: 1,
      distanceExponent: 2,
      distanceFallOff: 1,
      scale: 1.15,
    });
    composer.addPass(gtaoPass);
    composer.addPass(new OutputPass());
  }

  let last = performance.now();
  let running = false;
  let tickFn: (dt: number) => void = () => {};
  let afterFn: () => void = () => {};
  let fpsEma = 60;
  let slowFrames = 0;

  function frame(now: number) {
    if (!running) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const inst = dt > 1e-4 ? 1 / dt : 60;
    fpsEma = fpsEma * 0.9 + inst * 0.1;
    // Auto-fallback: if GTAO can't hold ~30 fps, drop it and keep contact AO.
    if (aoOn && composer && inst < 26) {
      slowFrames += 1;
      if (slowFrames > 45) {
        aoOn = false;
        console.info("[engine] GTAO disabled — fps fallback", fpsEma.toFixed(1));
      }
    } else {
      slowFrames = 0;
    }
    tickFn(dt);
    if (orbit.enabled) orbit.update();
    if (composer && aoOn) composer.render();
    else renderer.render(scene, camera);
    labels.render(scene, camera);
    afterFn();
  }

  let hudLift = 0;
  let walkFov: number | null = null;
  let walkAim: { center: THREE.Vector3; incoming: THREE.Vector3; radius: number } | null = null;

  function applyProjection() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const portrait = h > w * 1.05;
    camera.aspect = w / h;
    if (walkFov != null) {
      // walkFov is the desired *horizontal* room FOV (70 typical, 85 small).
      const desiredH = (walkFov * Math.PI) / 180;
      if (portrait) {
        // Taller virtual film + crop the top (ceiling) so the horizon sits
        // near 40% from the top and furniture fills the frame, without
        // shrinking horizontal coverage.
        const fullH = Math.round(h * 1.24);
        const aspectFull = w / fullH;
        const vFull = 2 * Math.atan(Math.tan(desiredH / 2) / Math.max(aspectFull, 0.15));
        camera.fov = Math.min(122, Math.max(78, (vFull * 180) / Math.PI));
        const offsetY = fullH - h; // show the lower slice: crop ceiling
        camera.setViewOffset(w, fullH, 0, offsetY, w, h);
      } else {
        camera.fov = walkFov >= 80 ? 75 : 60;
        camera.clearViewOffset();
      }
    } else {
      camera.fov = isMobileViewport() ? 58 : 50;
      camera.clearViewOffset();
    }
    camera.near = 0.05;
    // HUD lift is now handled by the portrait film crop (we used to push
    // offsetY positive on a same-size film, which added ceiling). A tiny
    // extra crop of the top on portrait walk is already in the fullH path.
    void hudLift;
    camera.updateProjectionMatrix();
  }

  function resizeGtao(w: number, h: number) {
    if (!gtaoPass) return;
    const pass = gtaoPass as GTAOPass & {
      gtaoRenderTarget: THREE.WebGLRenderTarget;
      pdRenderTarget: THREE.WebGLRenderTarget;
      normalRenderTarget?: THREE.WebGLRenderTarget;
      width: number;
      height: number;
    };
    pass.width = w;
    pass.height = h;
    pass.gtaoRenderTarget.setSize(w, h);
    pass.pdRenderTarget.setSize(w, h);
    pass.normalRenderTarget?.setSize(w, h);
    pass.gtaoMaterial.uniforms.resolution.value.set(w, h);
  }

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    applyProjection();
    const pr = Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(pr);
    renderer.setSize(w, h);
    labels.setSize(w, h);
    if (composer) {
      composer.setPixelRatio(pr);
      composer.setSize(w, h);
      resizeGtao(Math.round(w * pr), Math.round(h * pr));
    }
  }
  window.addEventListener("resize", resize);

  return {
    renderer, scene, camera, orbit, labels, sun, hemi, fill, mobile, highTier, softwareGpu,
    get cityBg() { return cityBg; },
    set cityBg(t) { cityBg = t; },
    walkLit: false,
    start(tick, after) {
      tickFn = tick;
      afterFn = after ?? (() => {});
      running = true;
      last = performance.now();
      requestAnimationFrame(frame);
    },
    resize,
    setHudLift(frac: number) {
      const next = Math.max(0, Math.min(0.4, frac));
      if (Math.abs(next - hudLift) < 0.01) return;
      hudLift = next;
      applyProjection();
    },
    setWalkFov(fov: number | null) {
      walkFov = fov;
      applyProjection();
    },
    fps: () => fpsEma,
    aoEnabled: () => aoOn,
    setAoEnabled(on: boolean) {
      aoOn = on && highTier;
    },
    aimWalkLighting(center, incoming, radius) {
      if (!center || !incoming) {
        walkAim = null;
        (this as unknown as Engine).walkLit = false;
        sun.position.set(48, 62, 28);
        sun.target.position.set(13.7, 0, 10);
        sun.target.updateMatrixWorld();
        sun.shadow.camera.left = -50;
        sun.shadow.camera.right = 50;
        sun.shadow.camera.top = 50;
        sun.shadow.camera.bottom = -50;
        sun.shadow.camera.near = 4;
        sun.shadow.camera.far = 140;
        sun.shadow.camera.updateProjectionMatrix();
        return;
      }
      walkAim = { center: center.clone(), incoming: incoming.clone().normalize(), radius };
      (this as unknown as Engine).walkLit = true;
      const dir = walkAim.incoming;
      // Place the sun outside the windows, shining in. Elevation ~40°.
      const elev = 0.7;
      const sunDir = new THREE.Vector3(-dir.x, elev, -dir.z).normalize();
      sun.position.copy(center).addScaledVector(sunDir, Math.max(14, radius * 1.6));
      sun.target.position.copy(center);
      sun.target.updateMatrixWorld();
      sun.castShadow = true;
      const r = Math.max(6, radius);
      sun.shadow.camera.left = -r;
      sun.shadow.camera.right = r;
      sun.shadow.camera.top = r;
      sun.shadow.camera.bottom = -r;
      sun.shadow.camera.near = 2;
      sun.shadow.camera.far = Math.max(40, radius * 4);
      sun.shadow.camera.updateProjectionMatrix();
      // Warm fill from the opposite side, no shadows.
      fill.position.copy(center).add(new THREE.Vector3(dir.x, 0.5, dir.z).normalize().multiplyScalar(10));
      fill.position.y = center.y + 6;
    },
    dispose() {
      running = false;
      window.removeEventListener("resize", resize);
      composer?.dispose();
    },
  };
}

let flyGen = 0;

export function cancelFly(): void {
  flyGen += 1;
}

export function flyCamera(
  camera: THREE.PerspectiveCamera,
  orbit: OrbitControls,
  pos: THREE.Vector3,
  target: THREE.Vector3,
  duration = 1.15,
): Promise<void> {
  const gen = ++flyGen;
  const fromP = camera.position.clone();
  const fromT = orbit.target.clone();
  const t0 = performance.now();
  const was = orbit.enabled;
  orbit.enabled = false;
  return new Promise((resolve) => {
    function step(now: number) {
      if (gen !== flyGen) {
        resolve();
        return;
      }
      const u = Math.min(1, (now - t0) / (duration * 1000));
      const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      camera.position.lerpVectors(fromP, pos, e);
      orbit.target.lerpVectors(fromT, target, e);
      camera.lookAt(orbit.target);
      if (u < 1) requestAnimationFrame(step);
      else {
        orbit.enabled = was;
        resolve();
      }
    }
    requestAnimationFrame(step);
  });
}

/** Animate a first-person camera to an eye-level room viewpoint. Does not touch orbit. */
export function flyEye(
  camera: THREE.PerspectiveCamera,
  fromPos: THREE.Vector3,
  fromYaw: number,
  fromPitch: number,
  toPos: THREE.Vector3,
  toYaw: number,
  toPitch = 0,
  duration = 1.05,
  onFrame?: (pos: THREE.Vector3, yaw: number, pitch: number) => void,
): Promise<void> {
  const gen = ++flyGen;
  let yaw0 = fromYaw;
  let yaw1 = toYaw;
  while (yaw1 - yaw0 > Math.PI) yaw1 -= Math.PI * 2;
  while (yaw1 - yaw0 < -Math.PI) yaw1 += Math.PI * 2;
  const t0 = performance.now();
  return new Promise((resolve) => {
    function step(now: number) {
      if (gen !== flyGen) {
        resolve();
        return;
      }
      const u = Math.min(1, (now - t0) / (duration * 1000));
      const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      const pos = new THREE.Vector3().lerpVectors(fromPos, toPos, e);
      const yaw = yaw0 + (yaw1 - yaw0) * e;
      const pitch = fromPitch + (toPitch - fromPitch) * e;
      camera.position.copy(pos);
      camera.rotation.set(pitch, yaw, 0, "YXZ");
      onFrame?.(pos, yaw, pitch);
      if (u < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}

export type TimeOfDay = "morning" | "golden" | "night";

export function applyTimeOfDay(engine: Engine, time: TimeOfDay): void {
  const { scene, sun, hemi, fill, renderer } = engine;
  if (time === "morning") {
    if (!engine.walkLit) sun.position.set(48, 62, 28);
    sun.color.set("#fff6e8");
    sun.intensity = 2.2;
    hemi.color.set("#efe8dc");
    hemi.groundColor.set("#8a7a68");
    hemi.intensity = 0.58;
    fill.color.set("#f0e0c4");
    fill.intensity = 0.42;
    renderer.toneMappingExposure = 1.08;
    scene.fog = new THREE.Fog("#c5d4e3", 110, 240);
    if (engine.cityBg) {
      scene.background = engine.cityBg;
      scene.backgroundIntensity = 1.05;
      scene.backgroundBlurriness = 0.015;
      scene.backgroundRotation.set(0, 0.35, 0);
    } else {
      scene.background = new THREE.Color("#b9cbe0");
    }
  } else if (time === "golden") {
    if (!engine.walkLit) sun.position.set(62, 16, 22);
    sun.color.set("#ffb060");
    sun.intensity = 2.05;
    hemi.color.set("#ffd9a8");
    hemi.groundColor.set("#8a5a38");
    hemi.intensity = 0.48;
    fill.color.set("#ffb07a");
    fill.intensity = 0.38;
    renderer.toneMappingExposure = 1.0;
    scene.fog = new THREE.Fog("#e0a070", 90, 200);
    if (engine.cityBg) {
      scene.background = engine.cityBg;
      scene.backgroundIntensity = 0.78;
      scene.backgroundBlurriness = 0.04;
      scene.backgroundRotation.set(0, 1.1, 0);
    } else {
      scene.background = new THREE.Color("#eeb07a");
    }
  } else {
    if (!engine.walkLit) sun.position.set(-30, 28, 40);
    sun.color.set("#b0c0e8");
    sun.intensity = 0.18;
    hemi.color.set("#1a2848");
    hemi.groundColor.set("#0a0c12");
    hemi.intensity = 0.22;
    fill.color.set("#3a5080");
    fill.intensity = 0.1;
    renderer.toneMappingExposure = 0.82;
    scene.fog = new THREE.Fog("#101828", 60, 160);
    if (engine.cityBg) {
      scene.background = engine.cityBg;
      scene.backgroundIntensity = 0.12;
      scene.backgroundBlurriness = 0.08;
      scene.backgroundRotation.set(0, 2.2, 0);
    } else {
      scene.background = new THREE.Color("#0b1020");
    }
  }
  if (!engine.walkLit) {
    sun.target.position.set(13.7, 0, 10);
    sun.target.updateMatrixWorld();
  }
}

/** Studio HDRI for indoor reflections only (marble, oak, ceramics). */
export async function loadHdriEnvironment(engine: Engine, url: string): Promise<void> {
  try {
    const loader = new RGBELoader();
    const tex = await loader.loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(engine.renderer);
    const env = pmrem.fromEquirectangular(tex).texture;
    tex.dispose();
    pmrem.dispose();
    engine.scene.environment = env;
    engine.scene.environmentIntensity = 0.58;
  } catch (err) {
    console.warn("[engine] HDRI failed, keeping RoomEnvironment", err);
  }
}

/** City / skyline HDRI used as the sky (window views), not as the reflection env. */
export async function loadCityBackground(engine: Engine, url: string): Promise<void> {
  try {
    const loader = new RGBELoader();
    const tex = await loader.loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    engine.cityBg = tex;
    engine.scene.background = tex;
    engine.scene.backgroundIntensity = 1.05;
    engine.scene.backgroundBlurriness = 0.015;
    engine.scene.backgroundRotation.set(0, 0.35, 0);
  } catch (err) {
    console.warn("[engine] city HDRI failed, keeping solid sky", err);
  }
}

/** Extra downward pitch on tall portrait viewports so furniture fills the frame. */
export function portraitPitchBias(): number {
  return window.innerHeight > window.innerWidth * 1.05 ? (-7 * Math.PI) / 180 : 0;
}
