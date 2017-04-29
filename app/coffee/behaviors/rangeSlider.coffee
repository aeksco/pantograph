
class RangeSlider extends Mn.Behavior

  ui:
    range: 'input[type=range]'

  onRender: ->
    @ui.range.rangeslider({ polyfill: false })

# # # # #

module.exports = RangeSlider
