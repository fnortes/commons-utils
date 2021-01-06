/**
 * Check if the string param is empty (null or undefined is considered as empty too).
 * @param {String} string Is the string value to check.
 * @return {Boolean} True if the string value is empty. Else false.
 */
export const isEmpty = (string) =>
  string === undefined || string === null || String(string).length === 0;

/**
 * Check if the string param is not empty (null or undefined is considered as empty).
 * @param {String} string Is the string value to check.
 * @return {Boolean} True if the string value is not empty. Else false.
 */
export const isNotEmpty = (string) => !text.isEmpty(string);

const text = {
  isEmpty,
  isNotEmpty,
};

export default text;
