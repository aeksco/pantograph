# This file defines a manifest for Tack's client application.
# This includes configuration, Services, Components, Modules
# and the Application singleton instance

# # # # #

# Application configuration manifest
require './config'

# Application & Application layout
App       = require './application/app'
AppLayout = require './application/layout'

# Henson.js Components
# TODO - are these needed?
OverlayComponent  = require 'hn_overlay/lib/component'
FlashComponent    = require 'hn_flash/lib/component'
new OverlayComponent({ container: AppLayout.overlay })
new FlashComponent({ container: AppLayout.flash })

# Modules represent collections of endpoints in the application.
# They have routes and entities (models and collections)
# Each route represents an endpoint, or 'page' in the app.
HomeModule = require './modules/home/router'
new HomeModule({ container: AppLayout.main })

# # # # #

# Page has loaded, document is ready
$(document).on 'ready', => new App()
