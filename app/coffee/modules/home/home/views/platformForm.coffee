
class BaseForm extends Marionette.LayoutView
  template: require './templates/platform_form'
  className: 'row'

  behaviors:
    BootstrapSwitch: {}

  # TODO - this should be a behavior
  ui:
    checkbox: 'input[type=checkbox]'

  events:
    'change @ui.checkbox':'updateAttrs'
    'input input':  'updateAttrs'
    'click .toggle-form': 'toggleForm' # TODO - behavior
    'switchChange.bootstrapSwitch @ui.checkbox':  'updateAttrs' # TODO - behavior

  toggleForm: ->
    @$('.form').slideToggle('fast')

  modelEvents:
    'change': 'onModelChange'

  # TODO - This is a little hack-ey
  onModelChange: ->
    @model.parent.trigger('child:change')

  onRender: ->
    @setFormData()

  getFormData: (options={}) ->
    return Backbone.Syphon.serialize(@) unless options.excludeFalsey

    # Excludes false / null / empty values
    data = Backbone.Syphon.serialize(@)

    for key, val of data
      delete data[key] if not val

    return data

  setFormData: (options) ->
    Backbone.Syphon.deserialize( @, @model.toJSON() )

  updateAttrs: (e) ->
    e.stopPropagation()
    attrs = Backbone.Syphon.serialize(@)
    @model.set(attrs)

# # # # #

module.exports = BaseForm
