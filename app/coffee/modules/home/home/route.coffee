LayoutView  = require './views/layout'
FormModel = require '../model'

# # # # #

class HomeRoute extends require 'hn_routing/lib/route'

  title: 'Pantograph - Home'

  render: ->
    @container.show new LayoutView({ model: new FormModel() })

# # # # #

module.exports = HomeRoute
