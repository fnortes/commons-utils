import moment from 'moment';

/**
 * Check if the timestamp has a valid format.
 * @param value Is the timestamp value to check.
 * @returns True if the timestamp has a valid format. Else false.
 */
export const timestampIsCorrect = (value: any): boolean => {
  const parsed: number = parseFloat(value);

  return !Number.isNaN(parsed) && Number.isFinite(parsed) && /^\d+\.?\d+$/.test(value);
};

/**
 * Check if the timestamp has a valid format and is a valid date.
 * @param value Is the timestamp value to check.
 * @returns True if the timestamp has a valid date. Else false.
 */
export const timestampIsValid = (value: any): boolean => timestampIsCorrect(value) && moment(value).isValid();
