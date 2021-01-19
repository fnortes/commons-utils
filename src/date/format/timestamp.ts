import { timestampIsCorrect } from "../validations/timestamp";
import { dateToFullYear, dateToMonth, dateToDay, dateToHours, dateToMinutes, dateToSeconds, dateToFormat } from "./date";

/**
 * Get the Date object from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the Date object.
 * @returns Is the Date object obtained or null if the timestamp is not valid.
 */
export const timestampToDate = (timestampValue: any): Date | null => timestampIsCorrect(timestampValue) ? new Date(timestampValue) : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a timestamp.
 * @param timestampValue Is the timestamp value from which to obtain the string date representation.
 * @returns Is the client language sensitive representation of the date or null if the timestamp is not valid.
 */
export const timestampToLocaleDateString = (timestampValue: any): string | null => {
  const dateConverted: Date | null = timestampToDate(timestampValue);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Get the full year number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the full year number.
 * @returns Is the full year number obtained.
 */
export const timestampToFullYear = (timestampValue: any): number | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToFullYear(dateToConvert);
};

/**
 * Get the month number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the month number.
 * @param prefixZero False by default. If it is true, the returned month number is prefixed by zero if necessary.
 * @returns Is the month number obtained (as string if it is prefixed).
 */
export const timestampToMonth = (timestampValue: any, prefixZero: boolean = false): string | number | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToMonth(dateToConvert, prefixZero);
};

/**
 * Get the day number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the day number.
 * @param prefixZero False by default. If it is true, the returned day number is prefixed by zero if necessary.
 * @returns Is the day number obtained (as string if it is prefixed).
 */
export const timestampToDay = (timestampValue: any, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToDay(dateToConvert, prefixZero);
};

/**
 * Get the hours number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the hours number.
 * @param prefixZero False by default. If it is true, the returned hours number is prefixed by zero if necessary.
 * @returns Is the hours number obtained (as string if it is prefixed).
 */
export const timestampToHours = (timestampValue: any, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToHours(dateToConvert, prefixZero);
};

/**
 * Get the minutes number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the minutes number.
 * @param prefixZero False by default. If it is true, the returned minutes number is prefixed by zero if necessary.
 * @returns Is the minutes number obtained (as string if it is prefixed).
 */
export const timestampToMinutes = (timestampValue: any, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToMinutes(dateToConvert, prefixZero);
};

/**
 * Get the seconds number from a timestamp value.
 * @param timestampValue Is the timestamp value from which to obtain the seconds number.
 * @param prefixZero False by default. If it is true, the returned seconds number is prefixed by zero if necessary.
 * @returns Is the seconds number obtained (as string if it is prefixed).
 */
export const timestampToSeconds = (timestampValue: any, prefixZero: boolean = false): number | string | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToSeconds(dateToConvert, prefixZero);
};

/**
 * Get the formatted string of a timestamp.
 * @param timestampValue Is the timestamp value from which to obtain the formatted string.
 * @param mask Is the mask or pattern to be used when formatting the date. if null, "yyyy-MM-DDTHH:mm:ssZ" is used by default. More information in https://momentjs.com/docs/#/displaying/
 * @param utc False by default. If it is true, convert local time to UTC time.
 * @returns The string of formatted date.
 */
export const timestampToFormat = (timestampValue: any, mask?: string | null, utc: boolean = false): string | null => {
  const dateToConvert: Date | null = timestampToDate(timestampValue);

  return dateToFormat(dateToConvert, mask, utc);
};