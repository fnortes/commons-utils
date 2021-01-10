import moment from "moment";
import stringValidations from "../validations/string";
import dateFormats from "./date";

/**
 * Get the Date object from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the Date object.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns {Date} Is the Date object obtained or null if the string date is not valid.
 */
export const stringToDate = (dateStringValue, mask) =>
  stringValidations.stringIsValidAsDate(dateStringValue, mask)
    ? moment(dateStringValue, mask).toDate()
    : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the string date representation.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {String} Is the client language sensitive representation of the date or null if the string date value is not valid.
 */
export const stringToLocaleDateString = (dateStringValue, mask) => {
  const dateConverted = string.stringToDate(dateStringValue, mask);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the full year number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number} Is the full year number obtained.
 */
export const stringToFullYear = (dateStringValue, mask) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToFullYear(dateToConvert);
};

/**
 * Get the month number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the month number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const stringToMonth = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the day number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const stringToDay = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the hours number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const stringToHours = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the minutes number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const stringToMinutes = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the seconds number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const stringToSeconds = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {String} maskToConvert Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const stringToFormat = (
  dateStringValue,
  mask,
  maskToConvert = null,
  utc = false
) => {
  const dateToConvert = string.stringToDate(dateStringValue, mask);

  return dateFormats.dateToFormat(dateToConvert, maskToConvert, utc);
};

const string = {
  stringToDate,
  stringToLocaleDateString,
  stringToFullYear,
  stringToMonth,
  stringToDay,
  stringToHours,
  stringToMinutes,
  stringToSeconds,
  stringToFormat,
};

export default string;
