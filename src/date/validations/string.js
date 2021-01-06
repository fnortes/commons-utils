import moment from "moment";
import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the dateToValidate string value is a valid date.
 * @param {String} dateToValidate Is the date to validate, as string.
 * @param {String} mask Is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Boolean} True if the date is valid. Else false.
 */
export const isValidDate = (dateToValidate, mask) =>
  typeof dateToValidate === "string" &&
  typeof mask === "string" &&
  isNotEmpty(dateToValidate) &&
  isNotEmpty(mask) &&
  moment(dateToValidate, mask).isValid();

const string = {
  isValidDate,
};

export default string;
