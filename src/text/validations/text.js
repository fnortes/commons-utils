/**
 * Check if the entry value is null or undefined.
 * @param {any} value Is the any value to check.
 * @return {Boolean} True if the entry value is null or undefined. Else false.
 */
export const isNull = (value) => value === undefined || value === null;

/**
 * Check if the entry value is not null or undefined.
 * @param {any} value Is the any value to check.
 * @return {Boolean} True if the entry value is not null or undefined. Else false.
 */
export const isNotNull = (value) => !text.isNull(value);

/**
 * Check if the entry value is empty (null or undefined is considered as empty too).
 * @param {any} value Is the any value to check.
 * @return {Boolean} True if the entry value is empty. Else false.
 */
export const isEmpty = (value) =>
  value === undefined || value === null || String(value).length === 0;

/**
 * Check if the entry value is not empty (null or undefined is considered as empty).
 * @param {any} value Is the any value to check.
 * @return {Boolean} True if the entry value is not empty. Else false.
 */
export const isNotEmpty = (value) => !text.isEmpty(value);

/**
 * Check if the entry value is type of string and empty.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is a empty string. Else false.
 */
export const isEmptyString = (value) =>
  typeof value === "string" && value.length === 0;

/**
 * Check if the entry value is type of string and not empty.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is not a empty string. Else false.
 */
export const isNotEmptyString = (value) =>
  typeof value === "string" && value.length > 0;

/**
 * Check if the entry value is type of string and empty after cleaning the blanks.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is a blank string. Else false.
 */
export const isBlankString = (value) =>
  typeof value === "string" && value.trim() === "";

/**
 * Check if the entry value is type of string and not empty after cleaning the blanks.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is not a blank string. Else false.
 */
export const isNotBlankString = (value) =>
  typeof value === "string" && value.trim().length > 0;

/**
 * Check if the entry value is empty or is type of string and empty after cleaning the blanks.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is empty or a blank string. Else false.
 */
export const isBlank = (value) =>
  text.isEmpty(value) || text.isBlankString(value);

/**
 * Check if the entry value is not empty or is not type of string and empty after cleaning the blanks.
 * @param {String} value Is the value to check.
 * @return {Boolean} True if the entry value is not empty or a not blank string. Else false.
 */
export const isNotBlank = (value) => !text.isBlank(value);

/**
 * Check if a string value is encoded in Base64.
 * @param {String} value Is the string value to check.
 * @return {Boolean} True if the entry value is encoded in Base64. Else false.
 */
export const isBase64Encoded = (value) =>
  text.isNotBlankString(value) && btoa(atob(value)) === value;

const text = {
  isNull,
  isNotNull,
  isEmpty,
  isNotEmpty,
  isEmptyString,
  isNotEmptyString,
  isBlankString,
  isNotBlankString,
  isBlank,
  isNotBlank,
  isBase64Encoded,
};

export default text;
