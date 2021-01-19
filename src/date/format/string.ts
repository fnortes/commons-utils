import moment from "moment";
import { stringIsValidAsDate } from "../validations/string";
import { dateToFullYear, dateToMonth, dateToDay, dateToHours, dateToMinutes, dateToSeconds, dateToFormat } from "./date";

/**
 * Get the Date object from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the Date object.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the Date object obtained or null if the string date is not valid.
 */
export const stringToDate = (dateStringValue: string, mask: string): Date | null => stringIsValidAsDate(dateStringValue, mask) ? moment(dateStringValue, mask).toDate() : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the string date representation.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the client language sensitive representation of the date or null if the string date value is not valid.
 */
export const stringToLocaleDateString = (dateStringValue: string, mask: string): string | null => {
  const dateConverted: Date | null = stringToDate(dateStringValue, mask);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the full year number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns Is the full year number obtained.
 */
export const stringToFullYear = (dateStringValue: string, mask: string): number | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToFullYear(dateToConvert);
};

/**
 * Get the month number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the month number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @returns Is the month number obtained (as string if it is prefixed).
 */
export const stringToMonth = (dateStringValue: string, mask: string, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the day number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @returns Is the day number obtained (as string if it is prefixed).
 */
export const stringToDay = (dateStringValue: string, mask: string, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the hours number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @returns Is the hours number obtained (as string if it is prefixed).
 */
export const stringToHours = (dateStringValue: string, mask: string, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the minutes number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @returns Is the minutes number obtained (as string if it is prefixed).
 */
export const stringToMinutes = (dateStringValue: string, mask: string, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a string date value.
 * @param dateStringValue Is the string date value from which to obtain the seconds number.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @returns Is the seconds number obtained (as string if it is prefixed).
 */
export const stringToSeconds = (dateStringValue: string, mask: string, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a string date value.
 * @param dateStringValue Is the string date value from which to obtain the formatted string.
 * @param mask Is the mask or pattern to be used when convert the date. More information in https://momentjs.com/docs/#/displaying/
 * @param maskToConvert Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param utc False by default. If it is true, convert local time to UTC time.
 * @returns The string of formatted date.
 */
export const stringToFormat = (dateStringValue: string, mask: string, maskToConvert?: string | null, utc: boolean = false): string | null => {
  const dateToConvert: Date | null = stringToDate(dateStringValue, mask);

  return dateToFormat(dateToConvert, maskToConvert, utc);
};