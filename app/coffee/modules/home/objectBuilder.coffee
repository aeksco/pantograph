
# ObjectBuilder class definition
# Accepts parametes from the FormModel
class ObjectBuilder

  # svgToThree
  extrudeSVG: (paths, options) ->

    # Bevel?
    # options.bevelEnabled = if options.typeDepth < 0 or !options.wantBasePlate then false else options.bevelEnabled

    # Shapes?
    shapes = []

    # Iterates over each path...
    for each in paths

      # Turn each SVG path into a three.js shape
      path = d3.transformSVGPath(each)

      # We may have had the winding order backward.
      # TODO - the Path.prototype.toShapes method is not defined in Three.js v0.84
      newShapes = path.toShapes(options.svgWindingIsCW)

      # Add these three.js shapes to an array.
      shapes = shapes.concat(newShapes)

    # Negative typeDepths are ok, but can't be deeper than the base
    # if options.wantBasePlate and options.typeDepth < 0 and Math.abs(options.typeDepth) > options.platform.height
    #   options.typeDepth = -1 * options.platform.height

    # Extrude all the shapes WITHOUT BEVEL
    # extruded = new THREE.ExtrudeGeometry(shapes, { amount: options.typeDepth, bevelEnabled: false })
    extruded = new THREE.ExtrudeGeometry(shapes, { amount: options.height, bevelEnabled: false })

    # Find the bounding box of this extrusion with no bevel
    # there's probably a smarter way to get a bounding box without extruding...
    extruded.computeBoundingBox()
    svgWidth = extruded.boundingBox.max.x - (extruded.boundingBox.min.x)
    svgHeight = extruded.boundingBox.max.y - (extruded.boundingBox.min.y)
    maxBbExtent = if svgWidth > svgHeight then svgWidth else svgHeight

    # Extrude with bevel instead if requested.
    if options.bevelEnabled
      extruded = new THREE.ExtrudeGeometry shapes,
        amount: if options.bevelEnabled then 0 else options.typeDepth
        bevelEnabled: options.bevelEnabled
        bevelThickness: options.typeDepth
        bevelSize: options.typeDepth * maxBbExtent / options.typeSize
        bevelSegments: 1

    # Use negative scaling to invert the image
    # Why do we have to flip the image to keep original SVG orientation?
    if !options.wantInvertedType
      invertTransform = new THREE.Matrix4().makeScale(-1, 1, 1)
      extruded.applyMatrix(invertTransform)

    # Into a mesh of triangles
    mesh = new THREE.Mesh(extruded, options.material)

    # Scale to requested size (lock aspect ratio)
    scaleTransform = new THREE.Matrix4().makeScale(options.typeSize / maxBbExtent, options.typeSize / maxBbExtent, 1)

    # Keep the depth as-is
    mesh.geometry.applyMatrix(scaleTransform)

    # Center on X/Y origin
    mesh.geometry.computeBoundingBox()
    boundBox = mesh.geometry.boundingBox
    translateTransform = new THREE.Matrix4().makeTranslation(-(Math.abs((boundBox.max.x - (boundBox.min.x)) / 2) + boundBox.min.x), -(Math.abs((boundBox.max.y - (boundBox.min.y)) / 2) + boundBox.min.y), 0)
    mesh.geometry.applyMatrix(translateTransform)

    # Rotate 180 deg
    # Why is this required? Different coordinate systems for SVG and three.js?
    rotateTransform = new THREE.Matrix4().makeRotationZ(Math.PI)
    mesh.geometry.applyMatrix rotateTransform

    # So that these attributes of the mesh are populated for later
    mesh.geometry.computeBoundingBox()
    mesh.geometry.computeBoundingSphere()

    return mesh

  # # # # # # # # # #

  getRectangularPlatform: (mesh, opts) ->

    # Determine the finished size of the extruded SVG with potential bevel
    svgBoundBox = mesh.geometry.boundingBox
    svgWidth = svgBoundBox.max.x - (svgBoundBox.min.x)
    svgHeight = svgBoundBox.max.y - (svgBoundBox.min.y)
    maxBbExtent = if svgWidth > svgHeight then svgWidth else svgHeight

    # Now make the rectangular base plate
    platformGeometry = new THREE.BoxGeometry(maxBbExtent + opts.platform.buffer, maxBbExtent + opts.platform.buffer, opts.platform.height)
    platformMesh = new THREE.Mesh(platformGeometry, opts.material)
    return platformMesh

  # # # # #

  getCircularPlatform: (mesh, opts) ->
    # Find SVG bounding radius
    svgBoundRadius = mesh.geometry.boundingSphere.radius

    # TODO - abstract into function
    svgBoundBox = mesh.geometry.boundingBox
    svgWidth = svgBoundBox.max.x - (svgBoundBox.min.x)
    svgHeight = svgBoundBox.max.y - (svgBoundBox.min.y)
    maxBbExtent = if svgWidth > svgHeight then svgWidth else svgHeight

    # Gets radius
    sqrt = Math.sqrt( Math.pow((maxBbExtent/2),  2) + Math.pow((maxBbExtent/2), 2))
    radius = sqrt + opts.platform.buffer

    # Gets
    platformGeometry = new THREE.CylinderGeometry(svgBoundRadius + opts.platform.buffer, svgBoundRadius + opts.platform.buffer, opts.platform.height, 64)

    # Number of faces around the cylinder
    platformMesh = new THREE.Mesh(platformGeometry, opts.material)
    rotateTransform = new THREE.Matrix4().makeRotationX(Math.PI / 2)
    platformMesh.geometry.applyMatrix(rotateTransform)
    return platformMesh

  # # # # #

  getPlatformObject: (mesh, opts) ->
    # Rectangular platform
    # TODO - cicular platform
    if opts.platform.shape == 'rect'
      platformMesh = @getRectangularPlatform(mesh, opts)
    else
      platformMesh = @getCircularPlatform(mesh, opts)

    # By default, base is straddling Z-axis, put it flat on the print surface.
    translateTransform = new THREE.Matrix4().makeTranslation(0, 0, opts.platform.height / 2)
    platformMesh.geometry.applyMatrix(translateTransform)

    return platformMesh

  # # # # #

  # Platform Helper
  setPlatform: (mesh, opts) ->
    return mesh unless opts.platform.enabled

    console.log 'PLATFORM IS ENABLED'

    # Offset mesh to accomodate platform height
    # Shift the SVG portion away from the bed to account for the base
    translateTransform = new THREE.Matrix4().makeTranslation(0, 0, opts.platform.height)
    mesh.geometry.applyMatrix(translateTransform)

    # # # # #

    # Gets platform object
    platform_mesh = @getPlatformObject(mesh, opts)

    # For constructive solid geometry (CSG) actions
    baseCSG = new ThreeBSP(platform_mesh)
    svgCSG = new ThreeBSP(mesh)

    # # If we haven't inverted the type, the SVG is "inside-out"
    if !opts.wantInvertedType
      svgCSG = new ThreeBSP(svgCSG.tree.clone().invert())

    # Positive typeDepth means raised
    # Negative typeDepth means sunken
    # TODO - should be range slider from (-x - x)
    if opts.typeDepth > 0
      finalObj = baseCSG.union(svgCSG).toMesh(opts.material)
    else
      finalObj = baseCSG.intersect(svgCSG).toMesh(opts.material)

    # Merges mesh and platform
    return finalObj

  # Wireframe Helper
  setWireframe: (mesh, opts) ->
    return false unless opts.wireframe.enabled
    wireframe = new THREE.WireframeHelper(mesh, opts.wireframe.color)
    @objects.push(wireframe)
    return

  # Normals Helper
  setNormals: (mesh, opts) ->
    return false unless opts.normals.enabled
    normals = new THREE.FaceNormalsHelper(mesh, 2, opts.normals.color, 1)
    @objects.push(normals)
    return

  # Edges helper
  setEdges: (mesh, opts) ->
    return false unless opts.edges.enabled
    edges = new THREE.EdgesHelper(mesh, opts.edges.color)
    @objects.push(edges)
    return

  # Render object in scene
  build: (paths, options) ->

    # Color
    # TODO - abstract into helper method
    options.color = new THREE.Color(options.objectColor)

    # Material (derived from color)
    # TODO - abstract into helper method
    if options.wantInvertedType
      options.material = new THREE.MeshLambertMaterial({
        color:    options.color
        emissive: options.color
      })

    else
      options.material = new THREE.MeshLambertMaterial({
        color:    options.color
        emissive: options.color
        side:     THREE.DoubleSide
      })

    # Create an extrusion from the SVG path shapes
    svgMesh = @extrudeSVG(paths, options)

    # Creates a platform and attaches to svgMesh, if platform.enabled
    svgMesh = @setPlatform(svgMesh, options)

    # Array of objects returned by this method
    # Each object will be rendered in the THREE scene
    @objects = []

    # Add the final geometry to the scene
    @objects.push(svgMesh)

    # Wireframe
    @setWireframe(svgMesh, options)

    # Normals
    @setNormals(svgMesh, options)

    # Edges
    @setEdges(svgMesh, options)

    return @objects

# # # # #

module.exports = ObjectBuilder
