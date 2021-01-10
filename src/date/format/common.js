import stringFormats from "./string";
import timestampFormats from "./timestamp";
import dateFormats from "./date";
import { dateIsValid } from "../validations/date";

/**
 * Get the Date object from a date value (String or timestamp Number).
 * @param {String|Number} dateValue Is the date value from which to obtain the Date object.
 * @param {String} mask It should not be informed if the dateValue param is a timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns {Date} Is the Date object obtained or null if the date value is not valid.
 */
export const toDate = (dateValue, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToDate(dateValue, mask);
    case "number":
      return timestampFormats.timestampToDate(dateValue);
    default:
      return null;
  }
};

/**
 * Returns a string with a client language sensitive representation of the date, from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the string date representation.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {String} Is the client language sensitive representation of the date or null if the string date value is not valid.
 */
export const toLocaleDateString = (dateValue, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToLocaleDateString(dateValue, mask);
    case "number":
      return timestampFormats.timestampToLocaleDateString(dateValue);
    case "object":
      return dateIsValid(dateValue) ? dateValue.toLocaleDateString() : null;
    default:
      return null;
  }
};

/**
 * Get the full year number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the full year number.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number} Is the full year number obtained.
 */
export const toFullYear = (dateValue, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToFullYear(dateValue, mask);
    case "number":
      return timestampFormats.timestampToFullYear(dateValue);
    case "object":
      return dateFormats.dateToFullYear(dateValue);
    default:
      return null;
  }
};

/**
 * Get the month number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const toMonth = (dateValue, prefixZero = false, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToMonth(dateValue, mask, prefixZero);
    case "number":
      return timestampFormats.timestampToMonth(dateValue, prefixZero);
    case "object":
      return dateFormats.dateToMonth(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the day number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const toDay = (dateValue, prefixZero = false, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToDay(dateValue, mask, prefixZero);
    case "number":
      return timestampFormats.timestampToDay(dateValue, prefixZero);
    case "object":
      return dateFormats.dateToDay(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the hours number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const toHours = (dateValue, prefixZero = false, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToHours(dateValue, mask, prefixZero);
    case "number":
      return timestampFormats.timestampToHours(dateValue, prefixZero);
    case "object":
      return dateFormats.dateToHours(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the minutes number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const toMinutes = (dateValue, prefixZero = false, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToMinutes(dateValue, mask, prefixZero);
    case "number":
      return timestampFormats.timestampToMinutes(dateValue, prefixZero);
    case "object":
      return dateFormats.dateToMinutes(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the seconds number from a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const toSeconds = (dateValue, prefixZero = false, mask = null) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToSeconds(dateValue, mask, prefixZero);
    case "number":
      return timestampFormats.timestampToSeconds(dateValue, prefixZero);
    case "object":
      return dateFormats.dateToSeconds(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the formatted string of a date value (Date object, String or timestamp Number).
 * @param {Date|String|Number} dateValue Is the date value from which to obtain the formatted string.
 * @param {String} maskToConvert Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @param {String} mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *                      If the dateValue param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {String} The string of formatted date.
 */
export const toFormat = (
  dateValue,
  maskToConvert = null,
  utc = false,
  mask = null
) => {
  switch (typeof dateValue) {
    case "string":
      return stringFormats.stringToFormat(dateValue, mask, maskToConvert, utc);
    case "number":
      return timestampFormats.timestampToFormat(dateValue, maskToConvert, utc);
    case "object":
      return dateFormats.dateToFormat(dateValue, maskToConvert, utc);
    default:
      return null;
  }
};

const common = {
  toDate,
  toLocaleDateString,
  toFullYear,
  toMonth,
  toDay,
  toHours,
  toMinutes,
  toSeconds,
  toFormat,
};

export default common;
