LayoutView  = require './views/layout'
FormModelInstance = require '../model'

# # # # #

class HomeRoute extends require 'hn_routing/lib/route'

  title: 'Pantograph - Home'

  render: ->
    @container.show new LayoutView({ model: FormModelInstance })

# # # # #

module.exports = HomeRoute
