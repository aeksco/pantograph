
# FEATURE - pass in Bootstrap ColorPicker Options
class BootstrapColorPicker extends Mn.Behavior

  ui:
    colorpicker: '.colorpicker-element'

  onRender: ->
    @ui.colorpicker.colorpicker({ component: '.input-group-addon', align: 'left' })

# # # # #

module.exports = BootstrapColorPicker
