
// Notes - perhaps headless browser will work well?
// https://gist.github.com/bsergean/08be90a2f21205062ccc

// // // // //
// Dependencies
import fs             from 'fs';
import potrace        from 'potrace';
import THREE          from 'three.js-node';
import ObjectBuilder  from './objectBuilder';
import ThreeScene     from './three_scene';
import STLExporter    from 'three-stlexporter';

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

// Writes STL to file
var writeToFile = stl => {
  return new Promise((resolve, reject) => {

    // Writes to file
    fs.writeFile('result.stl', stl, err => {

      // Error handling
      if (err) { return reject(err); }

      // Pipes the CSV output
      return resolve(true);
    });

  });
}

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


// Builds Objects
let objects = buildObject(Paths, buildOptions);

// Add Objects to scene
for (let obj of Array.from(objects)) {
  ThreeScene.group.add(obj);
}

// console.log("BUILD OBJECTS");
// console.log(ThreeScene.group);
// console.log(Group);
// console.log(objects)


// // // // //

// New STLExporter
let exporter = new STLExporter()

// Exports STL from Scene
let stl = exporter.parse(ThreeScene.scene)


console.log('EXPORTER???');

console.log(ThreeScene.group);
// console.log(stl);
// console.log(typeof(stl));

// writeToFile(stl);
