UploadView  = require './upload'
FormView    = require './form'
RenderView  = require './scene'

RenderSettingForm = require './renderSettingForm'

# # # # #

class LayoutView extends Marionette.LayoutView
  template: require './templates/layout'
  className: 'container-fluid'

  regions:
    uploadRegion:         '[data-region=upload]'
    formRegion:           '[data-region=form]'
    edgeFormRegion:       '[data-region=edge-form]'
    normalsFormRegion:    '[data-region=normals-form]'
    wireframeFormRegion:  '[data-region=wireframe-form]'
    renderRegion:         '[data-region=render]'

  onRender: ->
    @edgeFormRegion.show new RenderSettingForm({ model: @model.get('edges'), title: 'Edges' })
    @normalsFormRegion.show new RenderSettingForm({ model: @model.get('normals'), title: 'Normals' })
    @wireframeFormRegion.show new RenderSettingForm({ model: @model.get('wireframe'), title: 'Wireframe' })
    @uploadRegion.show new UploadView({ model: @model })
    @formRegion.show new FormView({ model: @model })
    @renderRegion.show new RenderView({ model: @model })

# # # # #

module.exports = LayoutView
