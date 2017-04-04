Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toMomentObject;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var customFormatsArr = [_constants.CUSTOM_FORMAT_1, _constants.CUSTOM_FORMAT_2, _constants.CUSTOM_FORMAT_3, _constants.CUSTOM_FORMAT_4, _constants.CUSTOM_FORMAT_5, _constants.CUSTOM_FORMAT_6, _constants.CUSTOM_FORMAT_7, _constants.CUSTOM_FORMAT_8, _constants.CUSTOM_FORMAT_9, _constants.CUSTOM_FORMAT_10, _constants.CUSTOM_FORMAT_11];

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];
  var date = (0, _moment2['default'])(dateString, dateFormats.concat(customFormatsArr), true);
  return date.isValid() ? date.hour(12) : null;
}