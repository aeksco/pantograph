
# ApplicationLayout class definition
# Defines a Marionette.LayoutView to manage
# top-level application regions
class AppLayout extends Marionette.LayoutView
  el: 'body'

  template: false

  regions:
    main:     '[data-region=main]'
    modal:
      selector:     '[data-region=modal]'
      regionClass:  require 'hn_regions/lib/regions/modal'

# # # # #

module.exports = new AppLayout().render()
