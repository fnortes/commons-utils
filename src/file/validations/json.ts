import { isNotEmpty } from "../../text/validations/text";

/**
 * Check if the jsonObject param is a valid JSON object.
 * @param jsonObject Is the object to validate.
 * @returns True if the jsonObject is valid. Else false.
 */
export const jsonIsValid = (jsonObject: object | null): boolean => isNotEmpty(jsonObject) && typeof jsonObject === "object";