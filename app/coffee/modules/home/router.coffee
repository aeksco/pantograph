HomeRoute   = require './home/route'
PythonRoute = require './python/route'

# # # # #

# HomeRouter class definition
class HomeRouter extends require '../base/router'

  routes:
    '(/)':        'home'
    'python(/)':  'python'

  home: ->
    new HomeRoute({ container: @container })

  python: ->
    new PythonRoute({ container: @container })

# # # # #

module.exports = new HomeRouter({ container: window.Layout.mainRegion })
