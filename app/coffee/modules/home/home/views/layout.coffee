UploadView    = require './upload'
FormView      = require './form'
RenderView    = require './scene'
PlatformForm  = require './platformForm'
RenderSettingForm = require './renderSettingForm'
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
    @edgeFormRegion.show new RenderSettingForm({ model: @model.get('edges'), title: 'Edges' })
    @normalsFormRegion.show new RenderSettingForm({ model: @model.get('normals'), title: 'Normals' })
    @wireframeFormRegion.show new RenderSettingForm({ model: @model.get('wireframe'), title: 'Wireframe' })
    @uploadRegion.show new UploadView({ model: @model })
    @formRegion.show new FormView({ model: @model })
    @platformFormRegion.show new PlatformForm({ model: @model.get('platform') })

    # Render View
    @renderView = new RenderView({ model: @model })
    @renderRegion.show( @renderView )

    # Download Form
    @downloadForm = new DownloadForm()
    @downloadForm.on 'download:stl', => @onDownload()
    @downloadFormRegion.show(@downloadForm)

  onDownload: ->
    exporter = new THREE.STLExporter()
    scene = @renderView.scene
    stl = exporter.parse( scene )
    @downloadFile({ content: stl, type: 'text/plain', filename: 'test.stl' })

# # # # #

module.exports = LayoutView
