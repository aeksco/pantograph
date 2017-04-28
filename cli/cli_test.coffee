# # # # #
# Dependencies
fs              = require 'fs'
# potrace         = require 'potrace'
potrace         = require 'potrace'
potrace         = require 'potrace-js/src/index.js'
THREE           = require 'three.js-node'
# Backbone        = require 'backbone'
# _               = require 'underscore'

# # # # #
# CLI Args
rootDirectory   = process.argv[2]

unless rootDirectory
  console.log 'ERROR: NO DIRECTORY SPECIFIED.'
  return

console.log 'ROOT FOUND'
console.log rootDirectory

# # # # #

# console.log THREE

canvasWidth  = 1200
canvasHeight = 900

# Renderer Setup
# renderer = new THREE.WebGLRenderer({ antialias: true })
# renderer.setClearColor(0xe0e0e0)
# renderer.setPixelRatio(window.devicePixelRatio)
# renderer.setSize(canvasWidth, canvasHeight)

# Scene
scene = new THREE.Scene()

# Camera
# camera = new THREE.PerspectiveCamera(50, canvasWidth / canvasHeight, 1, 1000)
# camera.position.set(0, -200, 200)

# Controls
# controls = new THREE.OrbitControls(camera, renderer.domElement)
# controls.minDistance = 50
# controls.maxDistance = 200

# Lights
# scene.add new THREE.AmbientLight(0x222222)

# Lights
light = new THREE.DirectionalLight(0xF3F3F3)
light.position.set(0.75, 0.75, 1.0).normalize()
scene.add(light)

# Lights
# light = new THREE.PointLight(0xF3F3F3)
# light.position.copy(camera.position)
# scene.add(light)

# Grids
helper = new THREE.GridHelper(70, 10)
helper.rotation.x = Math.PI / 2
scene.add(helper)

# Group of objects in the scene
group = new THREE.Group()
scene.add(group)

# Triggers frame animation
# @startAnimate()

# # # # #

# # Writes output to file
# fs.writeFile jsonOutputFile, JSON.stringify(output, null, 2), (err) =>

#   # Error handling
#   throw err if err

#   # Pipes the CSV output
#   console.log 'DONE'

# return
