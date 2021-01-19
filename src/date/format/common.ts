import { stringToDate, stringToLocaleDateString, stringToFullYear, stringToMonth, stringToDay, stringToHours, stringToMinutes, stringToSeconds, stringToFormat } from "./string";
import { timestampToDate, timestampToLocaleDateString, timestampToFullYear, timestampToMonth, timestampToDay, timestampToHours, timestampToMinutes, timestampToSeconds, timestampToFormat } from "./timestamp";
import { dateToFullYear, dateToMonth, dateToDay, dateToHours, dateToMinutes, dateToSeconds, dateToFormat } from "./date";
import { dateIsValid } from "../validations/date";

/**
 * Get the Date object from a date value (String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the Date object.
 * @param mask It should not be informed if the dateValue param is a timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the Date object obtained or null if the date value is not valid.
 */
export const toDate = (dateValue: string | number, mask?: string): Date | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToDate(dateValue, mask) : null;
    case "number":
      return timestampToDate(dateValue);
    default:
      return null;
  }
};

/**
 * Returns a string with a client language sensitive representation of the date, from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the string date representation.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the client language sensitive representation of the date or null if the string date value is not valid.
 */
export const toLocaleDateString = (dateValue: Date | string | number, mask?: string): string | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToLocaleDateString(dateValue, mask) : null;
    case "number":
      return timestampToLocaleDateString(dateValue);
    case "object":
      return dateIsValid(dateValue) ? dateValue.toLocaleDateString() : null;
    default:
      return null;
  }
};

/**
 * Get the full year number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the full year number.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the full year number obtained.
 */
export const toFullYear = (dateValue: Date | string | number, mask?: string): number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToFullYear(dateValue, mask) : null;
    case "number":
      return timestampToFullYear(dateValue);
    case "object":
      return dateToFullYear(dateValue);
    default:
      return null;
  }
};

/**
 * Get the month number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the month number.
 * @param prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the month number obtained (as string if it is prefixed).
 */
export const toMonth = (dateValue: Date | string | number, prefixZero: boolean = false, mask?: string): string | number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToMonth(dateValue, mask, prefixZero) : null;
    case "number":
      return timestampToMonth(dateValue, prefixZero);
    case "object":
      return dateToMonth(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the day number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the day number.
 * @param prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the day number obtained (as string if it is prefixed).
 */
export const toDay = (dateValue: Date | string | number, prefixZero: boolean = false, mask?: string): string | number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToDay(dateValue, mask, prefixZero) : null;
    case "number":
      return timestampToDay(dateValue, prefixZero);
    case "object":
      return dateToDay(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the hours number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the hours number.
 * @param prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the hours number obtained (as string if it is prefixed).
 */
export const toHours = (dateValue: Date | string | number, prefixZero: boolean = false, mask?: string): string | number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToHours(dateValue, mask, prefixZero) : null;
    case "number":
      return timestampToHours(dateValue, prefixZero);
    case "object":
      return dateToHours(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the minutes number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the minutes number.
 * @param prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the minutes number obtained (as string if it is prefixed).
 */
export const toMinutes = (dateValue: Date | string | number, prefixZero: boolean = false, mask?: string): string | number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToMinutes(dateValue, mask, prefixZero) : null;
    case "number":
      return timestampToMinutes(dateValue, prefixZero);
    case "object":
      return dateToMinutes(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the seconds number from a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the seconds number.
 * @param prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the seconds number obtained (as string if it is prefixed).
 */
export const toSeconds = (dateValue: Date | string | number, prefixZero: boolean = false, mask?: string): string | number | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToSeconds(dateValue, mask, prefixZero) : null;
    case "number":
      return timestampToSeconds(dateValue, prefixZero);
    case "object":
      return dateToSeconds(dateValue, prefixZero);
    default:
      return null;
  }
};

/**
 * Get the formatted string of a date value (Date object, String or timestamp Number).
 * @param dateValue Is the date value from which to obtain the formatted string.
 * @param maskToConvert Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param utc False by default. If it is true, convert local time to UTC time.
 * @param mask It should not be informed if the dateValue param is a Date object or timestamp number.
 *             If the dateValue param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns The string of formatted date.
 */
export const toFormat = (dateValue: Date | string | number, maskToConvert?: string | null, utc: boolean = false, mask?: string): string | null => {
  switch (typeof dateValue) {
    case "string":
      return mask ? stringToFormat(dateValue, mask, maskToConvert, utc) : null;
    case "number":
      return timestampToFormat(dateValue, maskToConvert, utc);
    case "object":
      return dateToFormat(dateValue, maskToConvert, utc);
    default:
      return null;
  }
};