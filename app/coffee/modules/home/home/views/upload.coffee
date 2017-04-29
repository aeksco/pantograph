
# UploadView class definition
# Defines an interface to upload images
# Manages conversion of raster images to SVG using Potrace
class UploadView extends Mn.LayoutView
  template: require './templates/upload'
  className: 'row'

  events:
    'change input[type=file]': 'onInputChange'

  # onInputChange
  # Manages input change event
  # Converts input image into SVG into Potrace
  onInputChange: (e) ->

    # Cache e.target
    file = e.target.files[0]

    # Return without a file
    return unless file

    # Parse SVG file
    if file.type == 'image/svg+xml'
      xmlReader = new FileReader()
      xmlReader.onload = => @onUploadSVG(xmlReader.result)
      xmlReader.readAsText(file)
      return

    # Pipes non-svg image through Potrace
    else
      Potrace.loadImageFromFile(file)
      Potrace.process => @onUploadSVG(Potrace.getSVG(1))
      return

  # onUploadSVG
  # Callback when SVG images have been uploaded
  onUploadSVG: (svg) ->

    # Caches uploaded SVG
    @uploadedSVG = svg

    # Parses XML out of SVG text
    svgDocument = $.parseXML(svg)

    # 'Flatten' SVG
    flatten(svgDocument.children[0])

    # Isolates paths inside of parsed SVG/XML document
    svgPaths = $('path', svgDocument).map( -> $(this).attr('d') ).get()

    # Sends SVG Paths to THREE.js renderer
    @model.trigger('render:svg', svgPaths)

# # # # #

module.exports = UploadView
