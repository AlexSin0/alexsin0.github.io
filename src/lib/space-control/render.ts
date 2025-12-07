import * as THREE from "three";
import { Vector3 } from "three";
import { locationMarker, mapToVec3, Timer } from "./3d-utils";
import { Satellite } from "./Satellite";
import { EARTH_RADIUS, SCALE } from "./3d-utils";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30);

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const loader = new OBJLoader();
const rocketGroup = await loader.loadAsync("/models/rocket.obj");
const rocketMesh = rocketGroup.children[0] as THREE.Mesh;
rocketMesh.geometry.scale(0.6, 0.6, 0.6);

const markerGroup = await loader.loadAsync("/models/star.obj");
const markerMesh = markerGroup.children[0] as THREE.Mesh;

markerMesh.material = new THREE.MeshBasicMaterial({ color: "#F00" });
markerMesh.geometry.scale(0.035, 0.035, 0.035);

const marker = locationMarker(56.9475, 24.106389, 0.05, markerMesh);
scene.add(marker);

let selected: Satellite | null = null;
const satellites: Satellite[] = [
  new Satellite(
    "Probe-1",
    new Vector3(8, 0, 0),
    new Vector3(0.0, 0.035, -0.012),
    rocketMesh.clone(),
    "#FA0",
  ),
];

function lookAtEarthPoint(lat: number, lon: number, zoom: number) {
  const target = mapToVec3(lat, lon, EARTH_RADIUS);
  camera.position.copy(target.multiplyScalar(zoom));
  camera.lookAt(new Vector3());
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function setLookAtEarthPointScroll(t = 0) {
  if (t < 1) lookAtEarthPoint(lerp(60, 57, t), lerp(10, 24, t), lerp(2, 3, t));
  else if (t < 2)
    lookAtEarthPoint(
      lerp(57, 40, t - 1),
      lerp(24, 40, t - 1),
      lerp(3, 7, t - 1),
    );
  else
    lookAtEarthPoint(
      40, // lerp(40, 40 + 360, t) % 360,
      lerp(40, 40 + 360, (t - 2) / 4) % 360,
      7,
    );
}

function setup(renderer: THREE.WebGLRenderer) {
  console.log("Scene setup");

  setLookAtEarthPointScroll();
  blueMarble();

  scene.add(
    ...satellites.map((v) => {
      v.orbit.init(scene);
      return v.mesh;
    }),
  );
}

function update(time: number, deltaTime: number) {
  scrollUpdate();

  satellites.forEach((sat) => sat.sim(2.5));
  satellites.forEach((sat) =>
    sat.mesh.setRotationFromQuaternion(
      new THREE.Quaternion().setFromUnitVectors(
        new Vector3(0, 1, 0),
        sat.velocity.clone().normalize(),
      ),
    ),
  );
}

function blueMarble() {
  const wireMat = new THREE.MeshBasicMaterial({
    color: "#035",
    wireframe: true,
  });
  const sphereGeom = new THREE.SphereGeometry(EARTH_RADIUS - 0.05);
  const sphereMesh = new THREE.Mesh(sphereGeom, wireMat);
  scene.add(sphereMesh);

  const baseMat = new THREE.MeshBasicMaterial({
    color: "#000",
    transparent: false,
    opacity: 0.6,
  });
  const baseGeom = new THREE.SphereGeometry(EARTH_RADIUS - 0.1);
  const baseMesh = new THREE.Mesh(baseGeom, baseMat);
  scene.add(baseMesh);
}

function importCoastline(canvas: HTMLCanvasElement) {
  const lineMat = new THREE.LineBasicMaterial({ color: "#0F0" });

  import("./maps/coastline50.json").then((coastline) => {
    const lines = coastline.features.map((feature) => {
      const cords = feature.geometry.coordinates;
      const path = cords.map((point) =>
        mapToVec3(point[1], point[0], EARTH_RADIUS),
      );
      const geometry = new THREE.BufferGeometry().setFromPoints(path);
      const line = new THREE.Line(geometry, lineMat);
      return line;
    });

    scene.add(...lines);

    canvas.classList.add("fade-in");
  });
}

let lastScrollT = 0;
function scrollUpdate() {
  const t = window.scrollY / window.innerHeight;
  setLookAtEarthPointScroll(t);
}

export function initRender(canvas: HTMLCanvasElement) {
  console.log("Innit render");

  canvas.classList.add("fade-in");

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);

  function resizeCanvas() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", resizeCanvas, false);
  resizeCanvas();

  let lastTime = 0;
  let deltaTime = 0;

  function animate(time: number) {
    requestAnimationFrame(animate);
    deltaTime = time - lastTime;
    lastTime = time;

    update(time, deltaTime);

    renderer.render(scene, camera);
  }

  setup(renderer);
  importCoastline(canvas);

  animate(0);
}
