ObjectBuilder = require './objectBuilder'

# # # # #

class RenderSetting extends Backbone.RelationalModel

  initialize: ->
    @parent = FormModel.find({ id: 'default' })

RenderSetting.setup()

# # # # #

class PlatformSetting extends RenderSetting

  defaults:
    enabled:  false
    # shape:    'rect'
    shape:    'circ'
    height:   2
    buffer:   5

PlatformSetting.setup()

# # # # #

# TODO - each one of these represents a SINGLE object
# Ideally the tool would allow multiple objects to be placed?
class FormModel extends Backbone.RelationalModel

  # TODO - validations
  defaults:
    id: 'default'

    # Core Options
    typeSize:         60
    typeDepth:        1
    height:           2
    wantInvertedType: false
    svgWindingIsCW:   false

    # TODO - bevel options
    bevelEnabled:     false

    # Platform Options
    platform: {}

    # Rendering Options
    # TODO - should this be part of an object sub model?
    objectColor:      '#333333'

    edges:
      color:    0xffffff
      enabled:  true

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
    # TODO - ObjectBuilder should not be attached to the model?
    @objectBuilder = new ObjectBuilder()

# # # # #

module.exports = new FormModel()
