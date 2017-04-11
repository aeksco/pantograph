gulp = require 'gulp'

# Paths config

nodeModules = './node_modules/'

paths =
  src:          './app/'
  dest:         './build/'
  node_modules: './node_modules/'
  jadeSrc:      './app/index.jade'

  bundle:
    src: 'coffee/manifest.coffee'
    dest: 'app.js'

  nwk_package:
    src:  './app/nwk_package.coffee'
    dest: './build/package.json'

  nwk_release:
    src:        './build/**/**'
    version:    '0.14.6'
    # platforms: ['osx64', 'linux64']
    platforms: ['osx64']

  sass:
    src:  './app/sass/manifest.sass'
    dest: './build/css/'

  copy:
    font_awesome:
      src:  nodeModules + 'font-awesome/fonts/*'
      dest: './build/fonts'

    img:
      src:  './app/img/*'
      dest: './build/img'

    # python:
    #   src:  './app/python/*'
    #   dest: './build/python'

    python:
      src:  nodeModules + 'bootstrap-colorpicker/dist/img/bootstrap-colorpicker/*'
      dest: './build/img/bootstrap-colorpicker'

  concat:
    dest: 'vendor.js'
    src: [
      nodeModules + 'jquery/dist/jquery.js'
      nodeModules + 'underscore/underscore.js'

      # Backbone
      nodeModules + 'backbone/backbone.js'
      nodeModules + 'backbone-relational/backbone-relational.js'
      nodeModules + 'backbone.babysitter/lib/backbone.babysitter.js'
      nodeModules + 'backbone.wreqr/lib/backbone.wreqr.js'
      nodeModules + 'backbone.marionette/lib/core/backbone.marionette.js'
      nodeModules + 'backbone-metal/dist/backbone-metal.js'
      nodeModules + 'backbone-routing/dist/backbone-routing.js'
      nodeModules + 'backbone.radio/build/backbone.radio.js'
      nodeModules + 'backbone.syphon/lib/backbone.syphon.js'

      # Marionette
      nodeModules + 'marionette-service/dist/marionette-service.js'

      # Bootstrap
      nodeModules + 'tether/dist/js/tether.min.js'
      nodeModules + 'bootstrap/dist/js/bootstrap.min.js'
      nodeModules + 'bootstrap-switch/dist/js/bootstrap-switch.min.js'
      nodeModules + 'bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js'

      # Utility
      nodeModules + 'bluebird/js/browser/bluebird.min.js'
      nodeModules + 'potrace/potrace.js'
      # nodeModules + 'd3/build/d3.js'

      # Three.js
      # nodeModules + 'three/build/three.js' # 0.84
      nodeModules + 'three/three.js' # 0.73
      nodeModules + 'three/examples/js/controls/OrbitControls.js'

      # D3-Three3.js - SVG -> Three.js geometry
      # https://github.com/asutherland/d3-threeD
      './vendor/d3-threeD.js'

      # Flatten.js - "Flatten" an SVG document by applying all transforms to the paths
      # https://gist.github.com/timo22345/9413158
      './vendor/flatten.js'

      # https://github.com/chandlerprall/ThreeCSG
      # Constructive Solid Geometry
      # NOTE - only used when exporting geometry with base plate
      # NOTE - should consider using this version: https://github.com/sshirokov/ThreeBSP
      './vendor/ThreeCSG.js'

      # Three.js STL Exporter
      nodeModules + 'three-stlexporter/STLExporter.js'

    ]

# Import Plugins
plugins = require 'gulp_tasks/gulp/config/plugins'
plugins.browserify = require 'gulp-browserify'

# Import tasks
require('gulp_tasks/gulp/tasks/env')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/copy')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/sass')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/jade')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/watch')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/webserver')(gulp, paths, plugins)
require('gulp_tasks/gulp/tasks/noop')(gulp, paths, plugins)
require('./gulp/shared')(gulp, paths, plugins)

# Watch Task
gulp.task 'watch', ->
  gulp.watch paths.src + '**/*.coffee',  ['bundle']
  gulp.watch paths.src + '**/*.jade',    ['bundle', 'jade']
  gulp.watch paths.src + '**/*.sass',    ['sass']

# # # # #

# TODO - put these tasks into a separate file

# Flushes build directory
# TODO - finish this.
# gulp.task 'flush_build', ->
#   console.log 'FLUSH BUILD'
#   return true

# NodeWebKit Package.json
gulp.task 'nodewebkit_package', ->
  str = require paths.nwk_package.src
  plugins.fs.writeFileSync( paths.nwk_package.dest, str)
  return true

# NodeWebKit Releases
NwBuilder = require 'nw-builder'
gulp.task 'nodewebkit_release', ->
  nw = new NwBuilder
    files:        paths.nwk_release.src
    platforms:    paths.nwk_release.platforms
    version:      paths.nwk_release.version
    downloadUrl:  'https://dl.nwjs.io/'

  # Log NWK Build
  nw.on 'log', console.log

  # Build returns a promise
  nw.build()
  .then ->
    console.log 'NWK Build complete'
    return

  .catch (error) ->
    console.log 'NWK Build Error!'
    console.error error
    return

# Copy Python files
gulp.task 'copy_python', ->
  gulp.src paths.copy.python.src
    .pipe plugins.plumber()
    .pipe gulp.dest paths.copy.python.dest

# # # # #

# Build tasks
gulp.task 'default', ['dev']

gulp.task 'dev', =>
  plugins.runSequence.use(gulp)('env_dev', 'copy_fontawesome', 'copy_python', 'copy_images', 'sass', 'jade', 'concat', 'bundle', 'watch', 'webserver')

gulp.task 'release', =>
  plugins.runSequence.use(gulp)('env_prod', 'copy_fontawesome', 'copy_python', 'copy_images', 'sass', 'jade', 'concat', 'bundle', => console.log 'Release completed.' )

gulp.task 'nwk_release', =>
  plugins.runSequence.use(gulp)('env_dev', 'copy_fontawesome', 'copy_python', 'copy_images', 'sass', 'jade', 'concat', 'bundle', 'nodewebkit_package', 'nodewebkit_release', => console.log 'NWK Release completed.' )
