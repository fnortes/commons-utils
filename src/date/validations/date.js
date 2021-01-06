import moment from "moment";

/**
 * Check if the dateToValidate param is a valid date.
 * @param {Date} dateToValidate Is the date to validate.
 * @return {Boolean} True if the date is valid. Else false.
 */
export const isValid = (dateToValidate) =>
  dateToValidate instanceof Date && moment(dateToValidate).isValid();

const date = {
  isValid,
};

export default date;
