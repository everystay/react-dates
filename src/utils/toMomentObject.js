import moment from 'moment';

import {
  DISPLAY_FORMAT,
  ISO_FORMAT,
  CUSTOM_FORMAT_1,
  CUSTOM_FORMAT_2,
  CUSTOM_FORMAT_3,
  CUSTOM_FORMAT_4,
  CUSTOM_FORMAT_5,
  CUSTOM_FORMAT_6,
  CUSTOM_FORMAT_7,
  CUSTOM_FORMAT_8,
  CUSTOM_FORMAT_9,
  CUSTOM_FORMAT_10,
  CUSTOM_FORMAT_11,
} from '../../constants';

const customFormatsArr = [
  CUSTOM_FORMAT_1,
  CUSTOM_FORMAT_2,
  CUSTOM_FORMAT_3,
  CUSTOM_FORMAT_4,
  CUSTOM_FORMAT_5,
  CUSTOM_FORMAT_6,
  CUSTOM_FORMAT_7,
  CUSTOM_FORMAT_8,
  CUSTOM_FORMAT_9,
  CUSTOM_FORMAT_10,
  CUSTOM_FORMAT_11,
];

export default function toMomentObject(dateString, customFormat) {
  const dateFormats = customFormat ?
    [customFormat, DISPLAY_FORMAT, ISO_FORMAT] :
    [DISPLAY_FORMAT, ISO_FORMAT];
  const date = moment(dateString, dateFormats.concat(customFormatsArr), true);
  return date.isValid() ? date.hour(12) : null;
}
