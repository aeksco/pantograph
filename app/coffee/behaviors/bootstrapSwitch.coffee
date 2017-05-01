
# FEATURE - pass in Bootstrap Switch Options / disable switch
class BootstrapSwitch extends Mn.Behavior

  ui:
    checkbox: 'input[type=checkbox]'

  events:
    'switchChange.bootstrapSwitch @ui.checkbox':  '_on_switch_change'

  onRender: ->
    @ui.checkbox.bootstrapSwitch({ size: 'mini', onText: 'Enabled', offText: 'Disabled' })

  _on_switch_change: ->
    @view.triggerMethod 'switch:change'

# # # # #

module.exports = BootstrapSwitch
