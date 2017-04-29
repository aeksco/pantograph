
class FormView extends Marionette.LayoutView
  template: require './templates/form'
  className: 'row'

  behaviors:
    Form: {}
    RangeSlider: {}
    BootstrapSwitch: {}

  initialize: ->

    # Declares throttled swap method
    modelChangeCallback = =>
      attrs = Backbone.Syphon.serialize(@)
      return @model.set(attrs)

    @onChange = _.debounce(modelChangeCallback, 500 )

  onSwitchChange: ->
    @updateAttrs()

# # # # #

module.exports = FormView
