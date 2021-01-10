import date from "./date";
import string from "./string";
import timestamp from "./timestamp";

/**
 * Check if the dateToValidate param is a valid date.
 * @param {Date|String|Number} dateToValidate Is the date to validate, as Date object or String or timestamp number.
 * @param {String} mask It should not be informed if the dateToValidate param is a Date object or timestamp number.
 *                      If the dateToValidate param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Boolean} True if the date is valid. Else false.
 */
export const isValidAsDate = (dateToValidate, mask = null) => {
  switch (typeof dateToValidate) {
    case "string":
      return string.stringIsValidAsDate(dateToValidate, mask);
    case "number":
      return timestamp.timestampIsValid(dateToValidate);
    default:
      return date.dateIsValid(dateToValidate);
  }
};

const common = {
  isValidAsDate,
};

export default common;
