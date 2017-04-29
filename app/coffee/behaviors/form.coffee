
class FormBehavior extends Mn.Behavior

  ui:
    checkbox: 'input[type=checkbox]'
    number:   'input[type=number]'
    range:    'input[type=range]'
    text:     'input[type=text]'
    hidden:   'input[type=hidden]'

  events:
    'change @ui.checkbox':  'updateAttrs'
    'change @ui.hidden':    'updateAttrs'
    'input  @ui.range':     'updateAttrs'
    'input  @ui.number':    'updateAttrs'
    'input  @ui.text':      'updateAttrs'

  initialize: ->
    @view.updateAttrs = => @updateAttrs()
    @view.getFormData = (options) => @getFormData(options)

  onRender: ->
    @setFormData()

  getFormData: (options={}) ->
    return Backbone.Syphon.serialize(@view) unless options.excludeFalsey

    # Excludes false / null / empty values
    data = Backbone.Syphon.serialize(@view)

    for key, val of data
      delete data[key] if not val

    return data

  setFormData: (options) ->
    Backbone.Syphon.deserialize( @view, @view.model.toJSON() )

  updateAttrs: (e) ->
    console.log 'UPDATED!'
    e?.stopPropagation()
    attrs = Backbone.Syphon.serialize(@view)
    @view.model.set(attrs)

# # # # #

module.exports = FormBehavior
