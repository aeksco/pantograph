import gl from 'gl';
import THREE from 'three.js-node';

// // // // //

// Constants
const width  = 600;
const height = 400;
const VIEW_ANGLE = 45;
const ASPECT = width / height;
const NEAR = 0.1;
const FAR  = 100;

// // // // //

// Scene
let Scene = new THREE.Scene();

// Camera
let camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
Scene.add(camera);
camera.position.set(0, 2, 2);
camera.lookAt(Scene.position);

let rtTexture = new THREE.WebGLRenderTarget(
    width, height, {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat
});

// Renderer Setup
let canvas = new Object() // Mock canvas

let renderer = new THREE.WebGLRenderer({
  antialias: true,
  width: 0,
  height: 0,
  canvas: canvas, // This parameter is usually not specified
  context: gl()   // Use the headless-gl context for drawing offscreen
});


renderer.render(Scene, camera, rtTexture, true);

// Renderer color
renderer.setClearColor(0xe0e0e0);

// Lights
let light = new THREE.DirectionalLight(0xF3F3F3);
light.position.set(0.75, 0.75, 1.0).normalize();
Scene.add(light);

// Grids
let helper = new THREE.GridHelper(70, 10);
helper.rotation.x = Math.PI / 2;
Scene.add(helper);

// Group of objects in the Scene
let Group = new THREE.Group();
Scene.add(Group);

// Exports Three.js Scene & Group
// export {
//   Scene,
//   Group
// };

let obj = { scene: Scene, group: Group }
export default obj
