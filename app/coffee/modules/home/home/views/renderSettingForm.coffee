
class RenderSettingsForm extends Marionette.LayoutView
  template: require './templates/render_setting_form'
  className: 'row'

  behaviors:
    BootstrapSwitch: {}
    BootstrapColorPicker: {}

  # TODO - this should be a behavior
  ui:
    checkbox: 'input[type=checkbox]'
    toggleForm: '[data-click=toggle-form]'  # TODO - abstract into behavior
    toggleTarget: '[data-toggle=form]'      # TODO - abstract into behavior

  events:
    'change @ui.checkbox':'updateAttrs'
    'input input':  'updateAttrs'
    'click @ui.toggleForm': 'toggleForm' # TODO - behavior
    'switchChange.bootstrapSwitch @ui.checkbox':  'updateAttrs'

  toggleForm: ->
    @ui.toggleTarget.slideToggle('fast')

  modelEvents:
    'change': 'onModelChange'

  # TODO - This is a little hack-ey
  onModelChange: ->
    @model.parent.trigger('child:change')

  templateHelpers: ->
    return { title: @options.title }

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

module.exports = RenderSettingsForm
