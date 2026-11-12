import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export interface Engine {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  orbit: OrbitControls;
  labels: CSS2DRenderer;
  sun: THREE.DirectionalLight;
  hemi: THREE.HemisphereLight;
  fill: THREE.DirectionalLight;
  start: (tick: (dt: number) => void) => void;
  resize: () => void;
  dispose: () => void;
}

export function createEngine(canvas: HTMLCanvasElement, labelLayer: HTMLElement): Engine {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    powerPreference: "high-performance",
    alpha: false,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color("#b9cbe0");
  scene.fog = new THREE.Fog("#c5d4e3", 90, 220);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture;
  scene.environmentIntensity = 0.55;

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(36, 28, 38);

  const orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = 0.08;
  orbit.maxPolarAngle = Math.PI * 0.48;
  orbit.minDistance = 2;
  orbit.maxDistance = 90;
  orbit.target.set(13.7, 8, 10);
  orbit.update();

  const labels = new CSS2DRenderer({ element: labelLayer });
  labels.setSize(window.innerWidth, window.innerHeight);
  Object.assign(labelLayer.style, { position: "absolute", inset: "0", pointerEvents: "none" });

  const hemi = new THREE.HemisphereLight("#dce7f2", "#b8a890", 0.85);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight("#fff3d8", 2.35);
  sun.position.set(48, 62, 28);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 140;
  sun.shadow.camera.left = -50;
  sun.shadow.camera.right = 50;
  sun.shadow.camera.top = 50;
  sun.shadow.camera.bottom = -50;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(13.7, 0, 10);

  const fill = new THREE.DirectionalLight("#c5d8ef", 0.35);
  fill.position.set(-30, 20, -20);
  scene.add(fill);

  const amb = new THREE.AmbientLight("#ffffff", 0.12);
  scene.add(amb);

  let last = performance.now();
  let running = false;
  let tickFn: (dt: number) => void = () => {};

  function frame(now: number) {
    if (!running) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    tickFn(dt);
    orbit.update();
    renderer.render(scene, camera);
    labels.render(scene, camera);
  }

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    labels.setSize(w, h);
  }
  window.addEventListener("resize", resize);

  return {
    renderer, scene, camera, orbit, labels, sun, hemi, fill,
    start(tick) {
      tickFn = tick;
      running = true;
      last = performance.now();
      requestAnimationFrame(frame);
    },
    resize,
    dispose() {
      running = false;
      window.removeEventListener("resize", resize);
    },
  };
}

export function flyCamera(
  camera: THREE.PerspectiveCamera,
  orbit: OrbitControls,
  pos: THREE.Vector3,
  target: THREE.Vector3,
  duration = 1.15,
): Promise<void> {
  const fromP = camera.position.clone();
  const fromT = orbit.target.clone();
  const t0 = performance.now();
  orbit.enabled = false;
  return new Promise((resolve) => {
    function step(now: number) {
      const u = Math.min(1, (now - t0) / (duration * 1000));
      const e = u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2;
      camera.position.lerpVectors(fromP, pos, e);
      orbit.target.lerpVectors(fromT, target, e);
      orbit.update();
      if (u < 1) requestAnimationFrame(step);
      else {
        orbit.enabled = true;
        resolve();
      }
    }
    requestAnimationFrame(step);
  });
}


export type TimeOfDay = "morning" | "golden" | "night";

export function applyTimeOfDay(engine: Engine, time: TimeOfDay): void {
  const { scene, sun, hemi, fill, renderer } = engine;
  if (time === "morning") {
    sun.position.set(48, 62, 28);
    sun.color.set("#fff6e8");
    sun.intensity = 2.35;
    hemi.color.set("#dce7f2");
    hemi.groundColor.set("#b8a890");
    hemi.intensity = 0.85;
    fill.color.set("#c5d8ef");
    fill.intensity = 0.35;
    scene.background = new THREE.Color("#b9cbe0");
    scene.fog = new THREE.Fog("#c5d4e3", 90, 220);
    renderer.toneMappingExposure = 1.12;
  } else if (time === "golden") {
    sun.position.set(62, 16, 22);
    sun.color.set("#ffb060");
    sun.intensity = 2.2;
    hemi.color.set("#ffd9a8");
    hemi.groundColor.set("#8a5a38");
    hemi.intensity = 0.55;
    fill.color.set("#ff9a6a");
    fill.intensity = 0.3;
    scene.background = new THREE.Color("#eeb07a");
    scene.fog = new THREE.Fog("#e0a070", 70, 180);
    renderer.toneMappingExposure = 1.02;
  } else {
    sun.position.set(-30, 28, 40);
    sun.color.set("#b0c0e8");
    sun.intensity = 0.16;
    hemi.color.set("#1a2848");
    hemi.groundColor.set("#0a0c12");
    hemi.intensity = 0.22;
    fill.color.set("#3a5080");
    fill.intensity = 0.08;
    scene.background = new THREE.Color("#0b1020");
    scene.fog = new THREE.Fog("#101828", 50, 150);
    renderer.toneMappingExposure = 0.8;
  }
  sun.target.position.set(13.7, 0, 10);
}
