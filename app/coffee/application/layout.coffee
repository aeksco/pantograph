
# ApplicationLayout class definition
# Defines a Marionette.LayoutView to manage
# top-level application regions
class AppLayout extends Marionette.LayoutView
  el: 'body'

  template: false

  regions:
    main:     '[data-region=main]'
    flash:    '[data-region=flash]'
    overlay:  '[data-region=overlay]'

# # # # #

module.exports = new AppLayout().render()
