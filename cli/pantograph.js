// // // // //
// Dependencies
import fs       from 'fs';
import potrace  from 'potrace';
import THREE    from 'three.js-node';
import ObjectBuilder from './objectBuilder';
import ThreeScene from './three_scene';
// import Group from './three_scene';

// TODO - remove after flatten is working.
import Paths from './paths_test'

// // // // //
// CLI Args
let inputImage  = process.argv[3];
let outputImage = process.argv[4];


// CLI Error message
if (!inputImage) {
  console.log('ERROR: NO DIRECTORY SPECIFIED.');
  return;
}

// console.log('ROOT FOUND');
// console.log(inputImage);
// console.log(outputImage);

// // // // //
// Setup

let MyBuilder = new ObjectBuilder();

// // // // //
// Functions

// Traces image with potrace
var traceImage = inputImage => {
  return new Promise((resolve, reject) => {
    potrace.trace(inputImage, function(err, svg) {
      if (err) return reject(err)
      return resolve(svg);
    });
  });
};

// // // // //

// // # Writes output to file
// // fs.writeFile jsonOutputFile, JSON.stringify(output, null, 2), (err) =>

// //   # Error handling
// //   throw err if err

// //   # Pipes the CSV output
// //   console.log 'DONE'

// // return

// // // // //
// Object Builder

const buildOptions = {
  "id": "default",
  "typeSize": 60,
  "typeDepth": 1,
  "height": 2,
  "wantInvertedType": false,
  "svgWindingIsCW": false,
  "bevelEnabled": false,
  "platform": {
    "enabled": false,
    "shape": "circ",
    "height": 2,
    "buffer": 5
  },
  "objectColor": "#333333",
  "edges": {
    "color": 16777215,
    "enabled": true
  },
  "normals": {
    "color": 0,
    "enabled": false
  },
  "wireframe": {
    "color": 16777215,
    "enabled": false
  }
};

// Build Object
var buildObject = (paths, options) => {
  return MyBuilder.build(Paths, buildOptions)
};

// // // // //
// Main function
// traceImage(inputImage)
// .then((svg) => {
//   console.log('TRACED IMAGE')
//   console.log(ObjectBuilder)
//   console.log(MyBuilder)

//   // console.log(svg)
// })

let objects = buildObject(Paths, buildOptions);

// console.log("BUILD OBJECTS");
// console.log(ThreeScene.group);
// console.log(Group);
// console.log(objects)


// // // // //


// exporter = new THREE.STLExporter()
// scene = @renderView.scene
// stl = exporter.parse( scene )
