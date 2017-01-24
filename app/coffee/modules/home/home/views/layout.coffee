
class HomeLayoutView extends Mn.LayoutView
  template: require './templates/layout'
  className: 'container-fluid'

  onRender: ->
    console.log 'Rendered'

# # # # #

module.exports = HomeLayoutView
