import { isValidJson } from "../validations/common";

/**
 * Convert a data json entry (as String or Object) into a pretty string.
 * @param data Is the entry data to format.
 * @returns Is the pretty formatted string.
 */
export const jsonPretty = (data: string | object): string | null => {
  if (isValidJson(data)) {
    const newData: string = typeof data === "object" ? data : JSON.parse(data);

    return JSON.stringify(newData, undefined, 2);
  }

  return null;
};