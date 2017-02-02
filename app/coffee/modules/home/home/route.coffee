LayoutView  = require './views/layout'
FormModel = require '../model'

# # # # #

class HomeRoute extends require '../../base/route'

  render: ->
    @container.show new LayoutView({ model: new FormModel() })

# # # # #

module.exports = HomeRoute
