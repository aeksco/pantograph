
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

    # Ensure file exists, and file.type is SVG
    return if file && file.type != 'image/svg+xml'

    # Render SVG in Canvas
    renderReader = new FileReader()
    renderReader.onload = => @onRenderReaderUpload(renderReader.result)
    renderReader.readAsDataURL(file)

    # Parse XML inside SVG file
    xmlReader = new FileReader()
    xmlReader.onload = => @onXmlReaderUpload(xmlReader)
    xmlReader.readAsText(file)

  # Displays the uploaded
  onRenderReaderUpload: (fileData) ->
    @ui.img.attr('src', fileData)
    @ui.img.fadeIn()

  onXmlReaderUpload: (xmlReader) ->

    # Parses XML out of SVG text
    svgDocument = $.parseXML(xmlReader.result)

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
