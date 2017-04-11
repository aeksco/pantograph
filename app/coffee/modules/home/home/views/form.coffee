
class FormView extends Marionette.LayoutView
  template: require './templates/form'
  className: 'row'

  # TODO - this should be a behavior
  events:
    'input input':  'updateAttrs'

  onRender: ->
    @setFormData()

  getFormData: (options={}) ->
    return Backbone.Syphon.serialize(@) unless options.excludeFalsey

    # Excludes false / null / empty values
    data = Backbone.Syphon.serialize(@)

    for key, val of data
      delete data[key] if not val

    return data

  setFormData: (options) ->
    Backbone.Syphon.deserialize( @, @model.toJSON() )

  updateAttrs: (e) ->
    e.stopPropagation()
    attrs = Backbone.Syphon.serialize(@)
    @model.set(attrs)

# # # # #

module.exports = FormView
