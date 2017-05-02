ObjectBuilder = require './objectBuilder'

# # # # #

# RenderSetting class definition
# Defines a class to model the 'edges' attribute on the FormModel instance
class RenderSetting extends Backbone.RelationalModel

  initialize: ->
    @parent = FormModel.find({ id: 'default' })

# Backbone.RelationalModel.setup()
RenderSetting.setup()

# # # # #

# PlatformSetting class definition
# Defines a class to model the 'platform' attribute on the FormModel instance
class PlatformSetting extends RenderSetting

  defaults:
    enabled:  false
    shape:    'rect' # or 'circ'
    height:   2
    buffer:   5

# Backbone.RelationalModel.setup()
PlatformSetting.setup()

# # # # #

# FormModel class definition
# Defines the top-level configuration model for ObjectBuilder
class FormModel extends Backbone.RelationalModel

  # Default attributes
  defaults:
    id: 'default'

    # Core Options
    width:      60
    height:     2
    invert:     false
    color:      '#333333'

    bevel:      false
    bevelThickness:  1

    # Platform Options
    platform: {}

    # Edge Options
    edges:
      color:    0xffffff
      enabled:  true

  # Relations
  relations: [
      type: Backbone.HasOne
      key: 'edges'
      relatedModel: RenderSetting
    ,
      type: Backbone.HasOne
      key: 'platform'
      relatedModel: PlatformSetting
  ]

  # initialize
  # Attaches new ObjectBuilder instance to the model
  initialize: (options={}) ->
    @objectBuilder = new ObjectBuilder()

# # # # #

module.exports = new FormModel()
