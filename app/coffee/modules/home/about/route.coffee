LayoutView  = require './views/layout'

# # # # #

class AboutRoute extends require 'hn_routing/lib/route'

  title: 'Pantograph - About'

  render: ->
    @container.show new LayoutView()

# # # # #

module.exports = AboutRoute
