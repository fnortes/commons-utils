import stringValidations from "./string";
import jsonValidations from "./json";
import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the json value is a valid JSON object.
 * @param {String|Object} jsonValue Is the value to validate.
 * @return {Boolean} True if the json value is valid. Else false.
 */
export const isValidJson = (jsonValue) => {
  switch (typeof jsonValue) {
    case "string":
      return stringValidations.stringIsValidJson(jsonValue);
    case "object":
      return jsonValidations.jsonIsValid(jsonValue);
    default:
      return false;
  }
};

/**
 * Check if the xml string value is a valid XML.
 * @param {String} xmlString Is the string to validate.
 * @return {Boolean} True if the xml string value is valid. Else false.
 */
export const isValidXml = (xmlString) => {
  if (isNotEmpty(xmlString) && typeof xmlString === "string") {
    const parser = new window.DOMParser();
    const theDom = parser.parseFromString(xmlString, "application/xml");

    return theDom.getElementsByTagName("parsererror").length === 0;
  }

  return false;
};

const common = {
  isValidJson,
  isValidXml,
};

export default common;
