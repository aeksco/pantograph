UploadView      = require './upload'
ObjectEditor    = require './objectEditor'
RenderView      = require './render'
PlatformEditor  = require './platformEditor'
DownloadForm    = require './downloadForm'

# # # # #

class LayoutView extends Marionette.LayoutView
  template: require './templates/layout'
  className: 'container-fluid'

  behaviors:
    DownloadFile: {}
    BootstrapSwitch: {}

  regions:
    uploadRegion:         '[data-region=upload]'
    formRegion:           '[data-region=object-editor]'
    platformFormRegion:   '[data-region=platform-editor]'
    downloadFormRegion:   '[data-region=download]'
    renderRegion:         '[data-region=render]'

  onRender: ->

    # Upload Form
    @uploadRegion.show new UploadView({ model: @model })

    # Editor Form
    @formRegion.show new ObjectEditor({ model: @model })
    @platformFormRegion.show new PlatformEditor({ model: @model.get('platform') })

    # Render View
    @renderView = new RenderView({ model: @model })
    @renderRegion.show( @renderView )

    # Download Form
    @downloadForm = new DownloadForm()
    @downloadForm.on 'download:stl', => @onDownloadSTL()
    @downloadForm.on 'download:svg', => @onDownloadSVG()
    @downloadFormRegion.show(@downloadForm)

  onDownloadSTL: ->
    exporter = new THREE.STLExporter()
    scene = @renderView.scene
    stl = exporter.parse( scene )
    @downloadFile({ content: stl, type: 'text/plain', filename: 'test.stl' })

  onDownloadSVG: ->
    console.log 'ON DOWNLOAD SVG'

# # # # #

module.exports = LayoutView
