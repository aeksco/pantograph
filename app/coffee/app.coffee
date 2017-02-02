# This file defines a manifest for Tack's client application.
# This includes configuration, Services, Components, Modules
# and the Application singleton instance

# # # # #

# Application configuration manifest
require './config'

# Application
CordovaApp = require './cordova_app'

# Application Layout
window.Layout = AppLayout = require './application/layout'

# Components are routeless services with views that are
# accessible anywhere in the application
# Used to manage the header, sidebar, flash, and confirm UI elements
SidebarComponent  = require './components/sidebar/component'
ConfirmComponents = require './components/confirm/component'

# Henson.js Components
OverlayComponent  = require 'hn_overlay/lib/component'
FlashComponent    = require 'hn_flash/lib/component'
new OverlayComponent({ container: AppLayout.overlayRegion })
new FlashComponent({ container: AppLayout.flashRegion })

# Modules represent collections of endpoints in the application.
# They have routes and entities (models and collections)
# Each route represents an endpoint, or 'page' in the app.
HomeModule = require './modules/home/router'

# # # # #

# Page has loaded, document is ready
$(document).on 'ready', => new CordovaApp()
