import { isNotEmpty } from '../../text/validations/text';

/**
 * Check if the jsonString param is a valid JSON object.
 * @param jsonString Is the string object to validate.
 * @returns True if the jsonString is valid. Else false.
 */
export const stringIsValidJson = (jsonString: string): boolean => {
  if (isNotEmpty(jsonString) && typeof jsonString === 'string') {
    try {
      return isNotEmpty(JSON.parse(jsonString));
    } catch (error) {
      return false;
    }
  }

  return false;
};
