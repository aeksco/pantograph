
class FormView extends Marionette.LayoutView
  template: require './templates/form'
  className: 'row'

  # TODO - this should be a behavior
  events:
    'input input':  'updateAttrs'

  initialize: ->

    # Declares throttled swap method
    modelChangeCallback = =>
      attrs = Backbone.Syphon.serialize(@)
      return @model.set(attrs)

    @onChange = _.debounce(modelChangeCallback, 500 )

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
    @onChange()

# # # # #

module.exports = FormView
