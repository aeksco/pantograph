
class DownloadView extends Marionette.LayoutView
  template: require './templates/download'
  className: 'row'

  triggers:
    'click [data-download=stl]': 'download:stl'

# # # # #

module.exports = DownloadView
