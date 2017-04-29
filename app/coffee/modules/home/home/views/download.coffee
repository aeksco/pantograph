
# DownloadView class definition
# Defines an interface to download the image in SVG or STL format
class DownloadView extends Marionette.LayoutView
  template: require './templates/download'
  className: 'row'

  triggers:
    'click [data-download=stl]': 'download:stl'
    'click [data-download=svg]': 'download:svg'

# # # # #

module.exports = DownloadView
