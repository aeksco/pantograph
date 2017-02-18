ObjectBuilder = require './objectBuilder'

# # # # #

class RenderSetting extends Backbone.RelationalModel

  initialize: ->
    @parent = FormModel.find({ id: 'default' })

RenderSetting.setup()

# # # # #

class PlatformSetting extends RenderSetting

  defaults:
    enabled:  true
    shape:    'rect' # or 'circ'
    height:   5
    buffer:   5

PlatformSetting.setup()

# # # # #

class FormModel extends Backbone.RelationalModel

  # TODO - validations
  defaults:
    id: 'default'

    # Core Options
    typeSize:         60
    typeDepth:        10
    height:           10
    wantInvertedType: false
    svgWindingIsCW:   false
    bevelEnabled:     false

    # Platform Options
    platform: {}

    # Rendering Options
    # TODO - should this be part of an object sub model?
    objectColor:      '#333333'

    edges:
      color:    0xffffff
      enabled:  false

    normals:
      color:    0x000000
      enabled:  false

    wireframe:
      color:    0xffffff
      enabled:  false

  # Relations
  relations: [
      type: Backbone.HasOne
      key: 'edges'
      relatedModel: RenderSetting
    ,
      type: Backbone.HasOne
      key: 'normals'
      relatedModel: RenderSetting
    ,
      type: Backbone.HasOne
      key: 'wireframe'
      relatedModel: RenderSetting
    ,
      type: Backbone.HasOne
      key: 'platform'
      relatedModel: PlatformSetting
  ]

  initialize: (options={}) ->
    # TODO - ObjectBuilder should not be attached to the model
    @objectBuilder = new ObjectBuilder()

# # # # #

module.exports = FormModel
