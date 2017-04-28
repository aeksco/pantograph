import THREE from 'three.js-node';

// // // // //

// Scene
let Scene = new THREE.Scene();

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
