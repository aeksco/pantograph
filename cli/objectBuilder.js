import transformSVGPath from './dee_three';
import THREE from 'three.js-node';

// // // // //

// ObjectBuilder class definition
// Accepts parametes from the FormModel
export default class ObjectBuilder {

  // svgToThree
  extrudeSVG(paths, options) {

    // Bevel?
    // options.bevelEnabled = if options.typeDepth < 0 or !options.wantBasePlate then false else options.bevelEnabled

    // Shapes?
    let shapes = [];

    // Iterates over each path...
    for (let each of Array.from(paths)) {

      console.log(each);

      // Turn each SVG path into a three.js shape
      let path = transformSVGPath(each);

      // We may have had the winding order backward.
      // TODO - the Path.prototype.toShapes method is not defined in Three.js v0.84
      let newShapes = path.toShapes(options.svgWindingIsCW);

      // Add these three.js shapes to an array.
      shapes = shapes.concat(newShapes);
    }

    // Negative typeDepths are ok, but can't be deeper than the base
    // if options.wantBasePlate and options.typeDepth < 0 and Math.abs(options.typeDepth) > options.platform.height
    //   options.typeDepth = -1 * options.platform.height

    // Extrude all the shapes WITHOUT BEVEL
    // extruded = new THREE.ExtrudeGeometry(shapes, { amount: options.typeDepth, bevelEnabled: false })
    let extruded = new THREE.ExtrudeGeometry(shapes, { amount: options.height, bevelEnabled: false });

    // Find the bounding box of this extrusion with no bevel
    // there's probably a smarter way to get a bounding box without extruding...
    extruded.computeBoundingBox();
    let svgWidth = extruded.boundingBox.max.x - (extruded.boundingBox.min.x);
    let svgHeight = extruded.boundingBox.max.y - (extruded.boundingBox.min.y);
    let maxBbExtent = svgWidth > svgHeight ? svgWidth : svgHeight;

    // Extrude with bevel instead if requested.
    if (options.bevelEnabled) {
      extruded = new THREE.ExtrudeGeometry(shapes, {
        amount: options.bevelEnabled ? 0 : options.typeDepth,
        bevelEnabled: options.bevelEnabled,
        bevelThickness: options.typeDepth,
        bevelSize: (options.typeDepth * maxBbExtent) / options.typeSize,
        bevelSegments: 1
      }
      );
    }

    // Use negative scaling to invert the image
    // Why do we have to flip the image to keep original SVG orientation?
    if (!options.wantInvertedType) {
      let invertTransform = new THREE.Matrix4().makeScale(-1, 1, 1);
      extruded.applyMatrix(invertTransform);
    }

    // Into a mesh of triangles
    let mesh = new THREE.Mesh(extruded, options.material);

    // Scale to requested size (lock aspect ratio)
    let scaleTransform = new THREE.Matrix4().makeScale(options.typeSize / maxBbExtent, options.typeSize / maxBbExtent, 1);

    // Keep the depth as-is
    mesh.geometry.applyMatrix(scaleTransform);

    // Center on X/Y origin
    mesh.geometry.computeBoundingBox();
    let boundBox = mesh.geometry.boundingBox;
    let translateTransform = new THREE.Matrix4().makeTranslation(-(Math.abs((boundBox.max.x - (boundBox.min.x)) / 2) + boundBox.min.x), -(Math.abs((boundBox.max.y - (boundBox.min.y)) / 2) + boundBox.min.y), 0);
    mesh.geometry.applyMatrix(translateTransform);

    // Rotate 180 deg
    // Why is this required? Different coordinate systems for SVG and three.js?
    let rotateTransform = new THREE.Matrix4().makeRotationZ(Math.PI);
    mesh.geometry.applyMatrix(rotateTransform);

    // So that these attributes of the mesh are populated for later
    mesh.geometry.computeBoundingBox();
    mesh.geometry.computeBoundingSphere();

    return mesh;
  }

  // # # # # # # # # #

  getRectangularPlatform(mesh, opts) {

    // Determine the finished size of the extruded SVG with potential bevel
    let svgBoundBox = mesh.geometry.boundingBox;
    let svgWidth = svgBoundBox.max.x - (svgBoundBox.min.x);
    let svgHeight = svgBoundBox.max.y - (svgBoundBox.min.y);
    let maxBbExtent = svgWidth > svgHeight ? svgWidth : svgHeight;

    // Now make the rectangular base plate
    let platformGeometry = new THREE.BoxGeometry(maxBbExtent + opts.platform.buffer, maxBbExtent + opts.platform.buffer, opts.platform.height);
    let platformMesh = new THREE.Mesh(platformGeometry, opts.material);
    return platformMesh;
  }

  // # # # #

  getCircularPlatform(mesh, opts) {
    // Find SVG bounding radius
    let svgBoundRadius = mesh.geometry.boundingSphere.radius;

    // TODO - abstract into function
    let svgBoundBox = mesh.geometry.boundingBox;
    let svgWidth = svgBoundBox.max.x - (svgBoundBox.min.x);
    let svgHeight = svgBoundBox.max.y - (svgBoundBox.min.y);
    let maxBbExtent = svgWidth > svgHeight ? svgWidth : svgHeight;

    // Gets radius
    let sqrt = Math.sqrt( Math.pow((maxBbExtent/2),  2) + Math.pow((maxBbExtent/2), 2));
    let radius = sqrt + opts.platform.buffer;

    // Gets
    let platformGeometry = new THREE.CylinderGeometry(svgBoundRadius + opts.platform.buffer, svgBoundRadius + opts.platform.buffer, opts.platform.height, 64);

    // Number of faces around the cylinder
    let platformMesh = new THREE.Mesh(platformGeometry, opts.material);
    let rotateTransform = new THREE.Matrix4().makeRotationX(Math.PI / 2);
    platformMesh.geometry.applyMatrix(rotateTransform);
    return platformMesh;
  }

  // # # # #

  getPlatformObject(mesh, opts) {
    // Rectangular platform
    // TODO - cicular platform
    let platformMesh;
    if (opts.platform.shape === 'rect') {
      platformMesh = this.getRectangularPlatform(mesh, opts);
    } else {
      platformMesh = this.getCircularPlatform(mesh, opts);
    }

    // By default, base is straddling Z-axis, put it flat on the print surface.
    let translateTransform = new THREE.Matrix4().makeTranslation(0, 0, opts.platform.height / 2);
    platformMesh.geometry.applyMatrix(translateTransform);

    return platformMesh;
  }

  // # # # #

  // Platform Helper
  setPlatform(mesh, opts) {
    let finalObj;
    if (!opts.platform.enabled) { return mesh; }

    console.log('PLATFORM IS ENABLED');

    // Offset mesh to accomodate platform height
    // Shift the SVG portion away from the bed to account for the base
    let translateTransform = new THREE.Matrix4().makeTranslation(0, 0, opts.platform.height);
    mesh.geometry.applyMatrix(translateTransform);

    // # # # #

    // Gets platform object
    let platform_mesh = this.getPlatformObject(mesh, opts);

    // For constructive solid geometry (CSG) actions
    let baseCSG = new ThreeBSP(platform_mesh);
    let svgCSG = new ThreeBSP(mesh);

    // # If we haven't inverted the type, the SVG is "inside-out"
    if (!opts.wantInvertedType) {
      svgCSG = new ThreeBSP(svgCSG.tree.clone().invert());
    }

    // Positive typeDepth means raised
    // Negative typeDepth means sunken
    // TODO - should be range slider from (-x - x)
    if (opts.typeDepth > 0) {
      finalObj = baseCSG.union(svgCSG).toMesh(opts.material);
    } else {
      finalObj = baseCSG.intersect(svgCSG).toMesh(opts.material);
    }

    // Merges mesh and platform
    return finalObj;
  }

  // Wireframe Helper
  setWireframe(mesh, opts) {
    if (!opts.wireframe.enabled) { return false; }
    let wireframe = new THREE.WireframeHelper(mesh, opts.wireframe.color);
    this.objects.push(wireframe);
  }

  // Normals Helper
  setNormals(mesh, opts) {
    if (!opts.normals.enabled) { return false; }
    let normals = new THREE.FaceNormalsHelper(mesh, 2, opts.normals.color, 1);
    this.objects.push(normals);
  }

  // Edges helper
  setEdges(mesh, opts) {
    if (!opts.edges.enabled) { return false; }
    let edges = new THREE.EdgesHelper(mesh, opts.edges.color);
    this.objects.push(edges);
  }

  // Render object in scene
  build(paths, options) {

    // Color
    // TODO - abstract into helper method
    options.color = new THREE.Color(options.objectColor);

    // Material (derived from color)
    // TODO - abstract into helper method
    if (options.wantInvertedType) {
      options.material = new THREE.MeshLambertMaterial({
        color:    options.color,
        emissive: options.color
      });

    } else {
      options.material = new THREE.MeshLambertMaterial({
        color:    options.color,
        emissive: options.color,
        side:     THREE.DoubleSide
      });
    }

    // Create an extrusion from the SVG path shapes
    let svgMesh = this.extrudeSVG(paths, options);

    // Creates a platform and attaches to svgMesh, if platform.enabled
    svgMesh = this.setPlatform(svgMesh, options);

    // Array of objects returned by this method
    // Each object will be rendered in the THREE scene
    this.objects = [];

    // Add the final geometry to the scene
    this.objects.push(svgMesh);

    // Wireframe
    this.setWireframe(svgMesh, options);

    // Normals
    this.setNormals(svgMesh, options);

    // Edges
    this.setEdges(svgMesh, options);

    return this.objects;
  }
}

// # # # #

