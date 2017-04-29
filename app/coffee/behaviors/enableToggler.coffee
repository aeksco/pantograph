
class EnableToggler extends Mn.Behavior

  ui:
    enableButton: '[data-enabled]'
    enableInput:  'input[name=enabled]'

  events:
    'click @ui.enableButton': 'onEnableChange'

  onEnableChange: (e) ->

    # Updates UI
    el = @$(e.currentTarget)
    return if el.hasClass('active')
    el.addClass('active').siblings('.btn').removeClass('active')
    el.blur()

    # Updates input
    enable = el.data('enable')
    @ui.shapeInput.val(enable).trigger('change')

# # # # #

module.exports = EnableToggler
