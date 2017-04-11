
# ApplicationLayout class definition
# Defines a Marionette.LayoutView to manage
# top-level application regions
class AppLayout extends Marionette.LayoutView
  el: 'body'

  template: false

  regions:
    mainRegion: '[data-region=main]'
    flashRegion:    '[data-region=flash]'
    overlayRegion:  '[data-region=overlay]'
    sidebarRegion:  '[data-region=sidebar]'

# # # # #

module.exports = new AppLayout().render()
