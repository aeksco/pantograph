
class EditorView extends Marionette.LayoutView
  template: require './templates/object'
  className: 'row'

  behaviors:
    Form: {}
    # RangeSlider: {}
    BootstrapSwitch: {}
    EnableToggler: {}

  initialize: ->

    # Declares throttled swap method
    modelChangeCallback = =>
      attrs = Backbone.Syphon.serialize(@)
      return @model.set(attrs)

    @onChange = _.debounce(modelChangeCallback, 500 )

  onSwitchChange: ->
    @updateAttrs()

# # # # #

module.exports = EditorView
