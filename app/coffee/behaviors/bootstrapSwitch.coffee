
# FEATURE - pass in Bootstrap Switch Options / disable switch
class BootstrapSwitch extends Mn.Behavior

  ui:
    checkbox: 'input[type=checkbox]'

  # events:
  #   'switchChange.bootstrapSwitch @ui.checkbox':  'updateAttrs'

  onRender: ->
    @ui.checkbox.bootstrapSwitch({ onText: 'Yes', offText: 'No' })

  # updateAttrs: (e, val) =>
  #   console.log e
  #   console.log val
  #   @view.updateAttrs() # TODO - clean this up

# # # # #

module.exports = BootstrapSwitch
