import moment from 'moment';
import { dateIsValid } from '../validations/date';
import { leftPad } from '../../text/format/text';

/**
 * Get the timestamp value from a Date.
 * @param dateToConvert Is the date from which to obtain the timestamp.
 * @returns Is the timestamp value or null if the date is not valid.
 */
export const dateToTimestamp = (dateToConvert: Date | null): number | null =>
  dateIsValid(dateToConvert) ? parseFloat(moment(dateToConvert).format('x')) : null;

/**
 * Get the full year number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the full year number.
 * @returns Is the full year number obtained.
 */
export const dateToFullYear = (dateToConvert: Date | null): number | null =>
  dateToConvert !== null && dateIsValid(dateToConvert) ? dateToConvert.getFullYear() : null;

/**
 * Get the month number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the month number.
 * @param prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @returns Is the month number obtained (as string if it is prefixed).
 */
export const dateToMonth = (dateToConvert: Date | null, prefixZero: boolean = false): number | string | null => {
  if (dateToConvert !== null && dateIsValid(dateToConvert)) {
    const month: number = dateToConvert.getMonth() + 1;

    return prefixZero ? leftPad(month) : month;
  }

  return null;
};

/**
 * Get the day number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the day number.
 * @param prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @returns Is the day number obtained (as string if it is prefixed).
 */
export const dateToDay = (dateToConvert: Date | null, prefixZero: boolean = false): number | string | null => {
  if (dateToConvert !== null && dateIsValid(dateToConvert)) {
    const day: number = dateToConvert.getDate();

    return prefixZero ? leftPad(day) : day;
  }

  return null;
};

/**
 * Get the hours number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the hours number.
 * @param prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @returns Is the hours number obtained (as string if it is prefixed).
 */
export const dateToHours = (dateToConvert: Date | null, prefixZero: boolean = false): number | string | null => {
  if (dateToConvert !== null && dateIsValid(dateToConvert)) {
    const hours: number = dateToConvert.getHours();

    return prefixZero ? leftPad(hours) : hours;
  }

  return null;
};

/**
 * Get the minutes number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the minutes number.
 * @param prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @returns Is the minutes number obtained (as string if it is prefixed).
 */
export const dateToMinutes = (dateToConvert: Date | null, prefixZero: boolean = false): number | string | null => {
  if (dateToConvert !== null && dateIsValid(dateToConvert)) {
    const minutes: number = dateToConvert.getMinutes();

    return prefixZero ? leftPad(minutes) : minutes;
  }

  return null;
};

/**
 * Get the seconds number from a Date object.
 * @param dateToConvert Is the Date object from which to obtain the seconds number.
 * @param prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @returns Is the seconds number obtained (as string if it is prefixed).
 */
export const dateToSeconds = (dateToConvert: Date | null, prefixZero: boolean = false): number | string | null => {
  if (dateToConvert !== null && dateIsValid(dateToConvert)) {
    const seconds: number = dateToConvert.getSeconds();

    return prefixZero ? leftPad(seconds) : seconds;
  }

  return null;
};

/**
 * Get the formatted string of a date.
 * @param dateToConvert Is the Date object from which to obtain the formatted string.
 * @param mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param utc False by default. If it is true, convert local time to UTC time.
 * @returns The string of formatted date.
 */
export const dateToFormat = (dateToConvert: Date | null, mask?: string | null, utc: boolean = false): string | null => {
  if (dateIsValid(dateToConvert)) {
    let dateObject: moment.Moment = moment(dateToConvert);

    if (utc) {
      dateObject = dateObject.utc();
    }

    return dateObject.format(mask !== null ? mask : undefined);
  }

  return null;
};
