UploadView    = require './upload'
FormView      = require './form'
RenderView    = require './scene'
PlatformForm  = require './platformForm'
DownloadForm = require './downloadForm'

# # # # #

class LayoutView extends Marionette.LayoutView
  template: require './templates/layout'
  className: 'container-fluid'

  behaviors:
    DownloadFile: {}

  regions:
    uploadRegion:         '[data-region=upload]'
    formRegion:           '[data-region=form]'
    edgeFormRegion:       '[data-region=edge-form]'
    normalsFormRegion:    '[data-region=normals-form]'
    wireframeFormRegion:  '[data-region=wireframe-form]'
    platformFormRegion:   '[data-region=platform-form]'
    downloadFormRegion:   '[data-region=download-form]'
    renderRegion:         '[data-region=render]'

  onRender: ->

    # Upload Form
    @uploadRegion.show new UploadView({ model: @model })

    # Editor Form
    @formRegion.show new FormView({ model: @model })
    @platformFormRegion.show new PlatformForm({ model: @model.get('platform') })

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
