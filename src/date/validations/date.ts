import moment from "moment";

/**
 * Check if the dateToValidate param is a valid date.
 * @param dateToValidate Is the date to validate.
 * @returns True if the date is valid. Else false.
 */
export const dateIsValid = (dateToValidate: Date | null): boolean => dateToValidate instanceof Date && moment(dateToValidate).isValid();