
class RangeSlider extends Mn.Behavior

  ui:
    range: 'input[type=range]'

  onRender: ->
    @ui.range.rangeslider()

# # # # #

module.exports = RangeSlider
