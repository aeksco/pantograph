AboutView  = require './views/layout'

# # # # #

class AboutComponent extends require 'hn_modal/lib/abstract'

  radioEvents:
    'about show': 'showAbout'

  showAbout: ->
    aboutView = new AboutView()
    @showModal(aboutView)

# # # # #

module.exports = AboutComponent
