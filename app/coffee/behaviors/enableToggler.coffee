
class EnableToggler extends Mn.Behavior

  ui:
    enableButton: '[data-enabled]'

  events:
    'click @ui.enableButton': 'onEnableChange'

  onEnableChange: (e) ->

    # Updates UI
    el = @$(e.currentTarget)
    return if el.hasClass('active')
    el.addClass('active').siblings('.btn').removeClass('active')
    el.blur()

    # Updates input
    enable = el.data('enabled')
    state = if enable == 1 then true else false

    # Input El
    el = $("input[name=#{@options.targetName}]")
    el.val(state)
    el.trigger('change')

# # # # #

module.exports = EnableToggler
