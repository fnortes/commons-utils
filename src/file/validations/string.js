import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the jsonString param is a valid JSON object.
 * @param {String} jsonString Is the string object to validate.
 * @return {Boolean} True if the jsonString is valid. Else false.
 */
export const stringIsValidJson = (jsonString) => {
  if (isNotEmpty(jsonString) && typeof jsonString === "string") {
    try {
      return isNotEmpty(JSON.parse(jsonString));
    } catch (error) {
      return false;
    }
  }

  return false;
};

const string = {
  stringIsValidJson,
};

export default string;
