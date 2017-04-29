
class PlatformForm extends Marionette.LayoutView
  template: require './templates/platform_form'
  className: 'row'

  behaviors:
    BootstrapSwitch: {}
    Form: {}

  modelEvents:
    'change': 'onModelChange'

  onModelChange: ->
    @model.parent.trigger('child:change')

  onSwitchChange: ->
    console.log 'onSwitchChange'
    @updateAttrs()

# # # # #

module.exports = PlatformForm
