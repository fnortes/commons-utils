import moment from "moment";
import stringValidations from "../validations/string";
import dateFormats from "./date";

/**
 * Get the Date object from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the Date object.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns {Date} Is the Date object obtained or null if the string date is not valid.
 */
export const toDate = (dateStringValue, mask) =>
  stringValidations.isValidDate(dateStringValue, mask)
    ? moment(dateStringValue, mask).toDate()
    : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the string date representation.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {String} Is the client language sensitive representation of the date or null if the string date value is not valid.
 */
export const toLocaleDateString = (dateStringValue, mask) => {
  const dateConverted = string.toDate(dateStringValue, mask);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the full year number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Number} Is the full year number obtained.
 */
export const toFullYear = (dateStringValue, mask) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toFullYear(dateToConvert);
};

/**
 * Get the month number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the month number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const toMonth = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the day number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const toDay = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the hours number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const toHours = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the minutes number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const toMinutes = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the seconds number.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const toSeconds = (dateStringValue, mask, prefixZero = false) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a string date value.
 * @param {String} dateStringValue Is the string date value from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param {String} maskToConvert Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const toFormat = (
  dateStringValue,
  mask,
  maskToConvert = null,
  utc = false
) => {
  const dateToConvert = string.toDate(dateStringValue, mask);

  return dateFormats.toFormat(dateToConvert, maskToConvert, utc);
};

const string = {
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

export default string;
