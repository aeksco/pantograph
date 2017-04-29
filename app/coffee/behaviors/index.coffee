# Marionette Behaviors manifest
module.exports =
  SubmitButton:           require 'hn_behaviors/lib/submitButton'
  DownloadFile:           require 'hn_behaviors/lib/downloadFile'
  BootstrapSwitch:        require './bootstrapSwitch' # TODO - abstract INTO to Henson.js
  BootstrapColorPicker:   require './bootstrapColorPicker' # TODO - abstract INTO to Henson.js
  Form:                   require './form' # TODO - abstract INTO to Henson.js
  RangeSlider:            require './rangeSlider' # TODO - abstract INTO to Henson.js
  EnableToggler:          require './enableToggler' # TODO - abstract INTO to Henson.js
