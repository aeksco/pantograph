HomeRoute = require './home/route'
AboutRoute = require './about/route'

# # # # #

# HomeRouter class definition
class HomeRouter extends require 'hn_routing/lib/router'

  routes:
    '(/)':      'home'
    'about(/)': 'about'

  home: ->
    new HomeRoute({ container: @container })

  about: ->
    new AboutRoute({ container: @container })

# # # # #

module.exports = HomeRouter
