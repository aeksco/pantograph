
class FormBehavior extends Mn.Behavior

  ui:
    checkbox: 'input[type=checkbox]'
    number:   'input[type=number]'
    text:     'input[type=text]'

  events: ->
    return {} unless @options.bindData
    return events =
      'change @ui.checkbox':  'updateAttrs'
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
    e?.stopPropagation()
    attrs = Backbone.Syphon.serialize(@view)
    @view.model.set(attrs)

# # # # #

module.exports = FormBehavior
