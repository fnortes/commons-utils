import xml from "../../file/format/xml";
import json from "../../file/format/json";
import {
  isBase64Encoded,
  isNotBlankString,
  isNotEmpty,
  isNotNull,
} from "../validations/text";

const TYPES_CONTENT = ["string", "xml", "json"];

/**
 * Left fill a string or number, up to the length.
 * @param {String|Number} pad Is the value to fill.
 * @param {Number} length Is the final length of the returned string.
 * @param {String} char Es the char used to fill the pad.
 * @return {String} Is the formatted string.
 */
export const leftPad = (pad, length = 2, char = "0") => {
  if (isNotNull(pad)) {
    pad = pad + "";

    return pad.length >= length
      ? pad
      : new Array(length - pad.length + 1).join(char) + pad;
  }

  return null;
};

/**
 * Convert a data string entry into a pretty string.
 * @param {String} data Is the string value to format.
 * @param {String} typeContent One of ["string", "xml", "json"]. "string by default".
 * @return {String} Is the formatted string.
 */
export const pretty = (data = "", typeContent = TYPES_CONTENT[0]) => {
  let result = "";

  switch (typeContent) {
    case TYPES_CONTENT[1]:
      result = xml.pretty(data);
      break;
    case TYPES_CONTENT[2]:
      result = json.pretty(data);
      break;
    default:
      result = data;
      break;
  }

  return result;
};

/**
 * Copy any string content to user clipboard.
 * @param {String} data Is the string value to copy.
 * @param {String} typeContent One of ["string", "xml", "json"]. "string by default".
 * @return {String} Is the formatted string.
 */
export const copyToClipboard = (data, typeContent = TYPES_CONTENT[0]) => {
  const textarea = document.createElement("textarea");
  const selection = document.getSelection();
  const range = document.createRange();

  textarea.textContent = text.pretty(data, typeContent);
  document.body.appendChild(textarea);

  // Internet Explorer 6-11
  const isIE = /* @cc_on!@*/ false || Boolean(document.documentMode);
  // Edge 20+
  const isEdge = !isIE && Boolean(window.StyleMedia);

  if (isEdge) {
    textarea.select();
  } else {
    range.selectNode(textarea);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  document.execCommand("copy");

  if (!isEdge) {
    selection.removeAllRanges();
  }

  document.body.removeChild(textarea);
};

/**
 * Abbreviate the input text string with ellipsis to the maximum length
 * @param {String} data Is the string value to abbreviate.
 * @param {Number} maxLength Is the maximum length of the string to abbreviate. 40 by default.
 * @return {String} Is the input text string with ellipsis.
 */
export const ellipsis = (data, maxLength = 40) => {
  if (isNotNull(data)) {
    const newContent = data.substr(0, maxLength);

    return newContent + (data.length > maxLength ? " ..." : "");
  }

  return null;
};

/**
 * Decode a Base64 encoded string.
 * @param {String} data Is the Base64 string value to decode.
 * @return {String} Is the string value decoded.
 */
export const decodeFromBase64 = (data) => {
  if (isBase64Encoded(data)) {
    return decodeURIComponent(escape(window.atob(data)));
  }

  return null;
};

/**
 * Encode in Base64 a string value.
 * @param {String} data Is the string value to encode.
 * @return {String} Is the string value encoded.
 */
export const encodeToBase64 = (data) => {
  if (isNotEmpty(data)) {
    return window.btoa(unescape(encodeURIComponent(data)));
  }

  return null;
};

/**
 * converts an uppercase text string, separated by underscores, to Camel Case.
 * @param {String} data Is the string value to format.
 * @return {String} Is the string value formatted.
 */
export const toCamelCase = (data) => {
  if (isNotBlankString(data)) {
    return data
      .split("_")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join("");
  }

  return null;
};

const text = {
  leftPad,
  pretty,
  copyToClipboard,
  ellipsis,
  decodeFromBase64,
  encodeToBase64,
  toCamelCase,
};

export default text;
