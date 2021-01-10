import timestampValidations from "../validations/timestamp";
import dateFormats from "./date";

/**
 * Get the Date object from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the Date object.
 * @returns {Date} Is the Date object obtained or null if the timestamp is not valid.
 */
export const timestampToDate = (timestampValue) =>
  timestampValidations.timestampIsCorrect(timestampValue)
    ? new Date(timestampValue)
    : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a timestamp.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the string date representation.
 * @return {String} Is the client language sensitive representation of the date or null if the timestamp is not valid.
 */
export const timestampToLocaleDateString = (timestampValue) => {
  const dateConverted = timestamp.timestampToDate(timestampValue);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the full year number.
 * @return {Number} Is the full year number obtained.
 */
export const timestampToFullYear = (timestampValue) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToFullYear(dateToConvert);
};

/**
 * Get the month number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const timestampToMonth = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const timestampToDay = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const timestampToHours = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const timestampToMinutes = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const timestampToSeconds = (timestampValue, prefixZero = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a timestamp.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const timestampToFormat = (timestampValue, mask = null, utc = false) => {
  const dateToConvert = timestamp.timestampToDate(timestampValue);

  return dateFormats.dateToFormat(dateToConvert, mask, utc);
};

const timestamp = {
  timestampToDate,
  timestampToLocaleDateString,
  timestampToFullYear,
  timestampToMonth,
  timestampToDay,
  timestampToHours,
  timestampToMinutes,
  timestampToSeconds,
  timestampToFormat,
};

export default timestamp;
