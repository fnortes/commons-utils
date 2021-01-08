import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the jsonObject param is a valid JSON object.
 * @param {Object} jsonObject Is the object to validate.
 * @return {Boolean} True if the jsonObject is valid. Else false.
 */
export const isValid = (jsonObject) =>
  isNotEmpty(jsonObject) && typeof jsonObject === "object";

const json = {
  isValid,
};

export default json;
