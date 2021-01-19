import { stringIsValidJson } from './string';
import { jsonIsValid } from './json';
import { isNotEmpty } from '../../text/validations/text';

/**
 * Check if the json value is a valid JSON object.
 * @param jsonValue Is the value to validate.
 * @returns True if the json value is valid. Else false.
 */
export const isValidJson = (jsonValue: string | object): boolean => {
  switch (typeof jsonValue) {
    case 'string':
      return stringIsValidJson(jsonValue);
    case 'object':
      return jsonIsValid(jsonValue);
    default:
      return false;
  }
};

/**
 * Check if the xml string value is a valid XML.
 * @param xmlString Is the string to validate.
 * @returns True if the xml string value is valid. Else false.
 */
export const isValidXml = (xmlString: string): boolean => {
  if (isNotEmpty(xmlString) && typeof xmlString === 'string') {
    const parser: DOMParser = new window.DOMParser();
    const theDom: Document = parser.parseFromString(xmlString, 'application/xml');

    return theDom.getElementsByTagName('parsererror').length === 0;
  }

  return false;
};
