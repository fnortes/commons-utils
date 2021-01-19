import moment from "moment";
import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the dateToValidate string value is a valid date.
 * @param dateToValidate Is the date to validate, as string.
 * @param mask Is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @returns True if the date is valid. Else false.
 */
export const stringIsValidAsDate = (dateToValidate: string, mask: string | null): boolean => typeof dateToValidate === "string" && typeof mask === "string" && isNotEmpty(dateToValidate) && isNotEmpty(mask) && moment(dateToValidate, mask).isValid();