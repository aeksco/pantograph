# Marionette Behaviors manifest
module.exports =
  SubmitButton:           require 'hn_behaviors/lib/submitButton'
  DownloadFile:           require 'hn_behaviors/lib/downloadFile'
  BootstrapSwitch:        require './bootstrapSwitch' # TODO - abstract INTO to Henson.js
  BootstrapColorPicker:   require './bootstrapColorPicker' # TODO - abstract INTO to Henson.js
