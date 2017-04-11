
# Application class definition
# Manages lifecycle and bootstraps application
# mobile device on which the app is running
class Application extends Marionette.Service

  # Starts the application immediately
  initialize: ->
    @onReady()

  # Starts the application
  # Starts Backbone.history (enables routing)
  onReady: ->
    Backbone.history.start()

# # # # #

module.exports = Application
