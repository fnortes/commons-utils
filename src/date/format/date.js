import moment from "moment";
import dateValidations from "../validations/date";
import { leftPad } from "../../number/number";

/**
 * Get the timestamp value from a Date.
 * @param {Date} dateToConvert Is the date from which to obtain the timestamp.
 * @return {Number} Is the timestamp value or null if the date is not valid.
 */
export const toTimestamp = (dateToConvert) =>
  dateValidations.isValid(dateToConvert)
    ? parseFloat(moment(dateToConvert).format("x"))
    : null;

/**
 * Get the full year number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the full year number.
 * @return {Number} Is the full year number obtained.
 */
export const toFullYear = (dateToConvert) =>
  dateValidations.isValid(dateToConvert) ? dateToConvert.getFullYear() : null;

/**
 *
 * SEGUIR REVISANDO POR AQUÍ, DEJANDO EN ESTE FICHERO TODAS LAS FUNCIONES QUE SEAN DE FORMATEO A PARTIR DE UN DATE DE ENTRADA.
 * LAS QUE SEAN DE FORMATEO A PARTIR DE UN TIMESTAMP DE ENTRADA PASARLAS A SU FICHERO YA CREADO.
 */

/**
 * Get the full year number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the full year number.
 * @return {Number} Is the full year number obtained.
 */
export const timestampToFullYear = (timestamp) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.toFullYear(dateToConvert);
};

/**
 * Get the month number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const dateToMonth = (dateToConvert, prefixZero = false) => {
  if (date.isDateValid(dateToConvert)) {
    const month = dateToConvert.getMonth() + 1;

    return prefixZero ? leftPad(month) : month;
  }

  return null;
};

/**
 * Get the month number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const timestampToMonth = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateToMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const dateToDay = (dateToConvert, prefixZero = false) => {
  if (date.isDateValid(dateToConvert)) {
    const day = dateToConvert.getDate();

    return prefixZero ? leftPad(day) : day;
  }

  return null;
};

/**
 * Get the day number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const timestampToDay = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateToDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const dateToHours = (dateToConvert, prefixZero = false) => {
  if (date.isDateValid(dateToConvert)) {
    const hours = dateToConvert.getHours();

    return prefixZero ? leftPad(hours) : hours;
  }

  return null;
};

/**
 * Get the hours number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const timestampToHours = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateToHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const dateToMinutes = (dateToConvert, prefixZero = false) => {
  if (date.isDateValid(dateToConvert)) {
    const minutes = dateToConvert.getMinutes();

    return prefixZero ? leftPad(minutes) : minutes;
  }

  return null;
};

/**
 * Get the minutes number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const timestampToMinutes = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateToMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const dateToSeconds = (dateToConvert, prefixZero = false) => {
  if (date.isDateValid(dateToConvert)) {
    const seconds = dateToConvert.getSeconds();

    return prefixZero ? leftPad(seconds) : seconds;
  }

  return null;
};

/**
 * Get the seconds number from a timestamp value.
 * @param {Number} timestamp Is the timestamp value from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const timestampToSeconds = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateToSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a date.
 * @param {Date} dateToConvert Is the Date object from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const dateTimeToFormat = (dateToConvert, mask = null, utc = false) => {
  if (date.isDateValid(dateToConvert)) {
    let dateObject = moment(dateToConvert);
    if (utc) {
      dateObject = dateObject.utc();
    }
    return dateObject.format(mask);
  }

  return null;
};

/**
 * Get the formatted string of a timestamp.
 * @param {Number} timestamp Is the timestamp value from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const timestampToFormat = (timestamp, mask = null, utc = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  return date.dateTimeToFormat(dateToConvert, mask, utc);
};

const date = {
  toTimestamp,
  toFullYear,
  // timestampToFullYear,
  // dateToMonth,
  // timestampToMonth,
  // dateToDay,
  // timestampToDay,
  // dateToHours,
  // timestampToHours,
  // dateToMinutes,
  // timestampToMinutes,
  // dateToSeconds,
  // timestampToSeconds,
  // dateTimeToFormat,
  // timestampToFormat
};

export default date;
