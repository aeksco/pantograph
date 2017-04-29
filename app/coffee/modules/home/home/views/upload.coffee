
class UploadView extends Mn.LayoutView
  template: require './templates/upload'
  className: 'row'

  ui:
    img: '[data-display=svg]'

  events:
    'change input[type=file]': 'onInputChange'

  onInputChange: (e) ->

    # Cache e.target
    file = e.target.files[0]

    # Return without a file
    return unless file

    # Pipes non-svg image through Potrace
    if file.type != 'image/svg+xml'
      Potrace.loadImageFromFile(file)
      Potrace.process =>
        svg = Potrace.getSVG(1)
        @onUploadSVG(svg)

      # Short circuits onInputChange
      return

    # Opens SVG Images

    # Render SVG in Canvas
    renderReader = new FileReader()
    renderReader.onload = => @onRenderReaderUpload(renderReader.result)
    renderReader.readAsDataURL(file)

    # Parse XML inside SVG file
    xmlReader = new FileReader()
    xmlReader.onload = => @onUploadSVG(xmlReader.result)
    xmlReader.readAsText(file)

  # Displays the uploaded
  onRenderReaderUpload: (fileData) ->
    @ui.img.attr('src', fileData)
    @ui.img.fadeIn()

  # onUploadSVG
  # Callback when SVG images have been uploaded
  onUploadSVG: (svg) ->

    # Parses XML out of SVG text
    svgDocument = $.parseXML(svg)

    # 'Flatten' SVG
    flatten(svgDocument.children[0])

    # Write to global paths
    svgPaths = $('path', svgDocument).map( ->
      $(this).attr('d')
    ).get()

    # TODO - get the filename?
    # Sends SVG Paths to THREE.js renderer
    @model.trigger('render:svg', svgPaths)

# # # # #

module.exports = UploadView
