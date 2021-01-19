import { dateIsValid } from './date';
import { stringIsValidAsDate } from './string';
import { timestampIsValid } from './timestamp';

/**
 * Check if the dateToValidate param is a valid date.
 * @param dateToValidate Is the date to validate, as Date object or String or timestamp number.
 * @param mask It should not be informed if the dateToValidate param is a Date object or timestamp number.
 *             If the dateToValidate param is a String, it is the mask or pattern to be used when validating the date.
 *             More information in https://momentjs.com/docs/#/displaying/
 * @returns True if the date is valid. Else false.
 */
export const isValidAsDate = (dateToValidate: Date | string | number, mask: string | null = null): boolean => {
  switch (typeof dateToValidate) {
    case 'string':
      return stringIsValidAsDate(dateToValidate, mask);
    case 'number':
      return timestampIsValid(dateToValidate);
    default:
      return dateIsValid(dateToValidate);
  }
};
