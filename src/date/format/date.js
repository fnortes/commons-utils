import moment from "moment";
import dateValidations from "../validations/date";
import { leftPad } from "../../text/format/text";

/**
 * Get the timestamp value from a Date.
 * @param {Date} dateToConvert Is the date from which to obtain the timestamp.
 * @return {Number} Is the timestamp value or null if the date is not valid.
 */
export const dateToTimestamp = (dateToConvert) =>
  dateValidations.dateIsValid(dateToConvert)
    ? parseFloat(moment(dateToConvert).format("x"))
    : null;

/**
 * Get the full year number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the full year number.
 * @return {Number} Is the full year number obtained.
 */
export const dateToFullYear = (dateToConvert) =>
  dateValidations.dateIsValid(dateToConvert)
    ? dateToConvert.getFullYear()
    : null;

/**
 * Get the month number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the month number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @return {Number|String} Is the month number obtained (as string if it is prefixed).
 */
export const dateToMonth = (dateToConvert, prefixZero = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    const month = dateToConvert.getMonth() + 1;

    return prefixZero ? leftPad(month) : month;
  }

  return null;
};

/**
 * Get the day number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the day number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @return {Number|String} Is the day number obtained (as string if it is prefixed).
 */
export const dateToDay = (dateToConvert, prefixZero = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    const day = dateToConvert.getDate();

    return prefixZero ? leftPad(day) : day;
  }

  return null;
};

/**
 * Get the hours number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the hours number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @return {Number|String} Is the hours number obtained (as string if it is prefixed).
 */
export const dateToHours = (dateToConvert, prefixZero = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    const hours = dateToConvert.getHours();

    return prefixZero ? leftPad(hours) : hours;
  }

  return null;
};

/**
 * Get the minutes number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the minutes number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @return {Number|String} Is the minutes number obtained (as string if it is prefixed).
 */
export const dateToMinutes = (dateToConvert, prefixZero = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    const minutes = dateToConvert.getMinutes();

    return prefixZero ? leftPad(minutes) : minutes;
  }

  return null;
};

/**
 * Get the seconds number from a Date object.
 * @param {Date} dateToConvert Is the Date object from which to obtain the seconds number.
 * @param {Boolean} prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @return {Number|String} Is the seconds number obtained (as string if it is prefixed).
 */
export const dateToSeconds = (dateToConvert, prefixZero = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    const seconds = dateToConvert.getSeconds();

    return prefixZero ? leftPad(seconds) : seconds;
  }

  return null;
};

/**
 * Get the formatted string of a date.
 * @param {Date} dateToConvert Is the Date object from which to obtain the formatted string.
 * @param {String} mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param {Boolean} utc False by default. If it is true, convert local time to UTC time.
 * @return {String} The string of formatted date.
 */
export const dateToFormat = (dateToConvert, mask = null, utc = false) => {
  if (dateValidations.dateIsValid(dateToConvert)) {
    let dateObject = moment(dateToConvert);

    if (utc) {
      dateObject = dateObject.utc();
    }

    return dateObject.format(mask);
  }

  return null;
};

const date = {
  dateToTimestamp,
  dateToFullYear,
  dateToMonth,
  dateToDay,
  dateToHours,
  dateToMinutes,
  dateToSeconds,
  dateToFormat,
};

export default date;
