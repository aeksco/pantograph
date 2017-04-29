UploadView    = require './upload'
ObjectForm    = require './object'
PlatformForm  = require './platform'
DownloadForm  = require './download'
RenderView    = require './render'

# # # # #

# LayoutView class definition
# Defines the top-level application view
class LayoutView extends Marionette.LayoutView
  template: require './templates/layout'
  className: 'container-fluid'

  behaviors:
    DownloadFile: {}
    BootstrapSwitch: {}

  regions:
    uploadRegion:   '[data-region=upload]'
    objectRegion:   '[data-region=object]'
    platformRegion: '[data-region=platform]'
    downloadRegion: '[data-region=download]'
    renderRegion:   '[data-region=render]'

  onRender: ->

    # Render View
    @renderView = new RenderView({ model: @model })
    @renderRegion.show( @renderView )

    # Upload Form
    @uploadView = new UploadView({ model: @model })
    @uploadRegion.show @uploadView

    # Object Form
    @objectRegion.show new ObjectForm({ model: @model })

    # Platform Form
    @platformRegion.show new PlatformForm({ model: @model.get('platform') })

    # Download Form
    @downloadForm = new DownloadForm()
    @downloadForm.on 'download:stl', => @onDownloadSTL()
    @downloadForm.on 'download:svg', => @onDownloadSVG()
    @downloadRegion.show(@downloadForm)

  # Generates unique filename for the STL & SVG downloads
  generateFilename: (extension) ->
    date  = new Date().toJSON().slice(0,10).replace(/-/g, '_')
    filename = ['pantograph_export_', date, '.', extension ]
    return filename.join('')

  # onDownloadSTL
  # Downloads the STL
  onDownloadSTL: ->
    return unless @uploadView.uploadedSVG
    exporter = new THREE.STLExporter()
    scene = @renderView.scene
    stl = exporter.parse( scene )
    @downloadFile({ content: stl, type: 'text/plain', filename: @generateFilename('stl') })

  # onDownloadSVG
  # Downloads the SVG
  onDownloadSVG: ->
    return unless @uploadView.uploadedSVG
    @downloadFile({ content: @uploadView.uploadedSVG, type: 'text/plain', filename: @generateFilename('svg') })

# # # # #

module.exports = LayoutView
