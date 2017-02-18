
class RenderView extends Marionette.LayoutView
  template: require './templates/render'
  className: 'row'

  ui:
    scene: '[data-display=scene]'

  modelEvents:
    'change':       'onModelChange'
    'render:svg':   'buildObject'
    'child:change': 'onModelChange'

  onModelChange: ->
    return unless @paths
    @buildObject(@paths)

  onRender: ->
    # Initializes THREE.js scene
    @initScene()

    # Appends scene in view template
    view = @ui.scene[0]
    view.append(@renderer.domElement)

  # Initializes THREE.js scene
  initScene: =>
    # Dimensions
    # TODO - this should be standardized
    # canvasWidth  = window.innerWidth / 2 - 100
    # canvasHeight = window.innerHeight - 60
    canvasWidth  = 1200
    canvasHeight = 900

    # Renderer Setup
    # TODO - use @sceneConfig
    @renderer = new THREE.WebGLRenderer({ antialias: true })
    @renderer.setClearColor(0xe0e0e0)
    @renderer.setPixelRatio(window.devicePixelRatio)
    @renderer.setSize(canvasWidth, canvasHeight)

    # Scene
    @scene = new THREE.Scene()

    # Camera
    @camera = new THREE.PerspectiveCamera(50, canvasWidth / canvasHeight, 1, 1000)
    @camera.position.set(0, -200, 200)

    # Controls
    @controls = new THREE.OrbitControls(@camera, @renderer.domElement)
    @controls.minDistance = 50
    @controls.maxDistance = 200

    # Lights
    # @scene.add new THREE.AmbientLight(0x222222)

    # Lights
    light = new THREE.DirectionalLight(0xF3F3F3)
    light.position.set(0.75, 0.75, 1.0).normalize()
    @scene.add(light)

    # Lights
    light = new THREE.PointLight(0xF3F3F3)
    light.position.copy(@camera.position)
    @scene.add(light)

    # Grids
    helper = new THREE.GridHelper(70, 10)
    helper.rotation.x = Math.PI / 2
    @scene.add(helper)

    # Group of objects in the scene
    @group = new THREE.Group()
    @scene.add(@group)

    # Triggers frame animation
    # @animate()
    @startAnimate()

    # WindowResize event handler
    window.addEventListener 'resize', @onWindowResize, false

  # # # # #

  startAnimate: =>
    setInterval( =>
      requestAnimationFrame(@animate)
    , 50)

  # Manages frame-by-frame animation in THREE.js scene
  animate: =>
    # requestAnimationFrame(@animate)
    @controls.update()
    @renderer.render(@scene, @camera)
    return

  # TODO - debug this
  onWindowResize: =>
    console.log 'ON WINDOW RESIZE'
    # canvasWidth  = window.innerWidth / 2 - 100
    # canvasHeight = window.innerHeight - 60
    # @camera.aspect = canvasWidth / canvasHeight
    # @camera.updateProjectionMatrix()
    # @renderer.setSize(canvasWidth, canvasHeight)
    # return

  # Removes items from group (used before re-render)
  # clearGroup: =>
  #   @group.remove(child) for child in @group.children
  #   return true

  # Why does this work, and the above does not?
  clearGroup: =>
    i = @group.children.length
    while i >= 0
      @group.remove(@group.children[i])
      i--

    return true

  # Render object in scene
  buildObject: (paths) =>

    # TODO - this is Voodoo
    paths = paths || @paths
    @paths = paths

    # Empties out existing objects
    @clearGroup()

    # Gets options from FormModel
    options = _.clone(@model.toJSON())

    # Gets objects from ObjectBuilder
    # TODO - ObjectBuilder should not be attached to the model?
    objects = @model.objectBuilder.build(paths, options)

    # Adds each object to the scene
    @group.add(obj) for obj in objects

    # Returns
    return true

# # # # #

module.exports = RenderView
