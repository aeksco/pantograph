
class PlatformForm extends Marionette.LayoutView
  template: require './templates/platform'
  className: 'row'

  behaviors:
    Form: {}
    BootstrapSwitch: {}

  ui:
    shape:      '[data-shape]'
    shapeInput: 'input[name=shape]'

  events:
    'click @ui.shape': 'onShapeChange'

  modelEvents:
    'change': 'onModelChange'

  onShapeChange: (e) ->
    # console.log 'onShapeChange'

    # Updates UI
    el = @$(e.currentTarget)
    return if el.hasClass('active')
    el.addClass('active').siblings('.btn').removeClass('active')
    el.blur()

    # Updates platform shape
    shape = el.data('shape')
    console.log shape
    @ui.shapeInput.val(shape)

  onModelChange: ->
    @model.parent.trigger('child:change')

  onSwitchChange: ->
    @updateAttrs()

# # # # #

module.exports = PlatformForm
