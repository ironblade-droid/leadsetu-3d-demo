import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GTAOPass } from "three/examples/jsm/postprocessing/GTAOPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

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
  cityBgNight: THREE.Texture | null;
  cityBgGolden: THREE.Texture | null;
  cityEnv: THREE.Texture | null;
  cityEnvNight: THREE.Texture | null;
  cityEnvGolden: THREE.Texture | null;
  walkLit: boolean;
  setOutlined: (objects: THREE.Object3D[]) => void;
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
  renderer.toneMapping = THREE.AgXToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const softwareGpu = detectSoftwareGpu(renderer);
  // GTAO is a desktop/high-tier path. SwiftShader (Playwright, some VMs) and
  // phones keep the cheaper baked contact-AO decals and skip the composer.
  const highTier = !mobile && !softwareGpu;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#b9cbe0");
  scene.fog = new THREE.Fog("#c5d4e3", 160, 480);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
  scene.environmentIntensity = 0.55;

  const fov = mobile ? 58 : 50;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.05, 900);
  camera.position.set(56, 5.5, 78);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.maxPolarAngle = Math.PI * 0.495;
  orbit.minDistance = 2;
  orbit.maxDistance = 140;
  orbit.zoomToCursor = true;
  orbit.target.set(13.7, 6, 10);
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
  sun.shadow.camera.far = 200;
  sun.shadow.camera.left = -60;
  sun.shadow.camera.right = 60;
  sun.shadow.camera.top = 70;
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
  let cityBgNight: THREE.Texture | null = null;
  let cityBgGolden: THREE.Texture | null = null;
  let cityEnv: THREE.Texture | null = null;
  let cityEnvNight: THREE.Texture | null = null;
  let cityEnvGolden: THREE.Texture | null = null;
  let outlinePass: OutlinePass | null = null;

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
    outlinePass = new OutlinePass(new THREE.Vector2(w, h), scene, camera);
    outlinePass.edgeStrength = 3.4;
    outlinePass.edgeGlow = 0.4;
    outlinePass.edgeThickness = 1.5;
    outlinePass.visibleEdgeColor.set("#f0d48a");
    outlinePass.hiddenEdgeColor.set("#8a6a30");
    outlinePass.pulsePeriod = 2.4;
    outlinePass.downSampleRatio = 1.5;
    composer.addPass(outlinePass);
    const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.16, 0.42, 0.84);
    composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  // Subtle vignette over the canvas, under the HUD (works on software GPUs too).
  const host = canvas.parentElement;
  if (host && !host.querySelector("#vignette")) {
    const vig = document.createElement("div");
    vig.id = "vignette";
    host.appendChild(vig);
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
    if (composer) {
      if (gtaoPass) gtaoPass.enabled = aoOn;
      composer.render();
    } else {
      renderer.render(scene, camera);
    }
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
        camera.fov = walkFov >= 80 ? 78 : 63;
        camera.clearViewOffset();
      }
    } else {
      camera.fov = isMobileViewport() ? 60 : 53;
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
      outlinePass?.setSize(w, h);
    }
  }
  window.addEventListener("resize", resize);

  return {
    renderer, scene, camera, orbit, labels, sun, hemi, fill, mobile, highTier, softwareGpu,
    get cityBg() { return cityBg; },
    set cityBg(t) { cityBg = t; },
    get cityBgNight() { return cityBgNight; },
    set cityBgNight(t) { cityBgNight = t; },
    get cityBgGolden() { return cityBgGolden; },
    set cityBgGolden(t) { cityBgGolden = t; },
    get cityEnv() { return cityEnv; },
    set cityEnv(t) { cityEnv = t; },
    get cityEnvNight() { return cityEnvNight; },
    set cityEnvNight(t) { cityEnvNight = t; },
    get cityEnvGolden() { return cityEnvGolden; },
    set cityEnvGolden(t) { cityEnvGolden = t; },
    walkLit: false,
    setOutlined(objects: THREE.Object3D[]) {
      if (outlinePass) outlinePass.selectedObjects = objects;
    },
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
  duration = 0.5,
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
  duration = 0.5,
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
  // Sky-only puresky HDRIs: never a city photograph as the background
  // (those break scale and, at night, read as a yellow-green blur). The
  // city is a distant 3D silhouette. Blurriness is always 0.
  if (time === "morning") {
    if (!engine.walkLit) sun.position.set(48, 62, 28);
    sun.color.set("#fff6e8");
    sun.intensity = 2.2;
    hemi.color.set("#efe8dc");
    hemi.groundColor.set("#6a7a58");
    hemi.intensity = 0.58;
    fill.color.set("#f0e0c4");
    fill.intensity = 0.42;
    renderer.toneMappingExposure = 1.08;
    scene.fog = new THREE.Fog("#c8d6e4", 220, 560);
    if (engine.cityBg) {
      scene.background = engine.cityBg;
      scene.backgroundIntensity = 1.05;
      scene.backgroundBlurriness = 0;
      scene.backgroundRotation.set(0, 0.35, 0);
    } else {
      scene.background = new THREE.Color("#8fb4d8");
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
    scene.fog = new THREE.Fog("#d8b090", 220, 540);
    const goldenBg = engine.cityBgGolden ?? engine.cityBg;
    if (goldenBg) {
      scene.background = goldenBg;
      scene.backgroundIntensity = 1.0;
      scene.backgroundBlurriness = 0;
      scene.backgroundRotation.set(0, 0.15, 0);
    } else {
      scene.background = new THREE.Color("#eeb07a");
    }
  } else {
    // Dark-blue night sky (stars + moon), sharp, no city HDRI. Warm
    // practicals on the balcony and a far 3D skyline carry the lights.
    if (!engine.walkLit) sun.position.set(-30, 48, 20);
    sun.color.set("#c8d4f0");
    sun.intensity = 0.12;
    hemi.color.set("#1e2c50");
    hemi.groundColor.set("#0a0c12");
    hemi.intensity = 0.28;
    fill.color.set("#ffb070");
    fill.intensity = 0.22;
    renderer.toneMappingExposure = 0.92;
    scene.fog = new THREE.Fog("#081018", 240, 620);
    const nightBg = engine.cityBgNight ?? engine.cityBg;
    if (nightBg) {
      scene.background = nightBg;
      scene.backgroundIntensity = 0.42;
      scene.backgroundBlurriness = 0;
      scene.backgroundRotation.set(0, 0.55, 0);
    } else {
      scene.background = new THREE.Color("#071018");
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

/** Sky-only (puresky) HDRI used as the day background, and as a PMREM for facade glass. */
export async function loadCityBackground(engine: Engine, url: string): Promise<void> {
  try {
    const loader = new RGBELoader();
    const tex = await loader.loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    engine.cityBg = tex;
    engine.scene.background = tex;
    engine.scene.backgroundIntensity = 1.05;
    engine.scene.backgroundBlurriness = 0;
    engine.scene.backgroundRotation.set(0, 0.35, 0);
    const pmrem = new THREE.PMREMGenerator(engine.renderer);
    engine.cityEnv = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
  } catch (err) {
    console.warn("[engine] sky HDRI failed, keeping solid sky", err);
  }
}

/** Sunset puresky for golden hour. */
export async function loadGoldenBackground(engine: Engine, url: string): Promise<void> {
  try {
    const loader = new RGBELoader();
    const tex = await loader.loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    engine.cityBgGolden = tex;
    const pmrem = new THREE.PMREMGenerator(engine.renderer);
    engine.cityEnvGolden = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
  } catch (err) {
    console.warn("[engine] golden sky HDRI failed", err);
  }
}

/** Night puresky (dark blue, stars, moon) — never a city photograph. */
export async function loadNightBackground(engine: Engine, url: string): Promise<void> {
  try {
    const loader = new RGBELoader();
    const tex = await loader.loadAsync(url);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    engine.cityBgNight = tex;
    const pmrem = new THREE.PMREMGenerator(engine.renderer);
    engine.cityEnvNight = pmrem.fromEquirectangular(tex).texture;
    pmrem.dispose();
  } catch (err) {
    console.warn("[engine] night sky HDRI failed", err);
  }
}

/** Extra downward pitch on tall portrait viewports so furniture fills the frame. */
export function portraitPitchBias(): number {
  return window.innerHeight > window.innerWidth * 1.05 ? (-7 * Math.PI) / 180 : 0;
}
