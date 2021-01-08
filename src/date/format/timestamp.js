import timestampValidations from "../validations/timestamp";
import dateFormats from "./date";

/**
 * Get the Date object from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the Date object.
 * @returns {Date} Is the Date object obtained or null if the timestamp is not valid.
 */
export const toDate = (timestampValue) =>
  timestampValidations.isCorrect(timestampValue)
    ? new Date(timestampValue)
    : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a timestamp.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the string date representation.
 * @return {String} Is the client language sensitive representation of the date or null if the timestamp is not valid.
 */
export const toLocaleDateString = (timestampValue) => {
  const dateConverted = timestamp.toDate(timestampValue);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the full year number.
 * @return {Number} Is the full year number obtained.
 */
export const toFullYear = (timestampValue) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toFullYear(dateToConvert);
};

/**
 * Get the month number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const toMonth = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const toDay = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const toHours = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const toMinutes = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const toSeconds = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a timestamp.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const toFormat = (timestampValue, mask = null, utc = false) => {
  const dateToConvert = timestamp.toDate(timestampValue);

  return dateFormats.toFormat(dateToConvert, mask, utc);
};

const timestamp = {
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

export default timestamp;
