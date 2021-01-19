import { isEdge } from './../../browser';
import { xmlPretty } from '../../file/format/xml';
import { jsonPretty } from '../../file/format/json';
import { isBase64Encoded, isNotBlankString, isNotEmpty, isNotNull } from '../validations/text';

const TYPES_CONTENT: string[] = ['string', 'xml', 'json'];

/**
 * Left fill a string or number, up to the length.
 * @param pad Is the value to fill.
 * @param length Is the final length of the returned string.
 * @param char Es the char used to fill the pad.
 * @returns Is the formatted string.
 */
export const leftPad = (pad: string | number | null, length: number = 2, char: string = '0'): string | null => {
  if (isNotNull(pad)) {
    pad = pad + '';

    return pad.length >= length ? pad : new Array(length - pad.length + 1).join(char) + pad;
  }

  return null;
};

/**
 * Convert a data string entry into a pretty string.
 * @param data Is the string value to format.
 * @param typeContent One of ["string", "xml", "json"]. "string by default".
 * @returns Is the formatted string.
 */
export const pretty = (data: string = '', typeContent: string = TYPES_CONTENT[0]): string | null => {
  switch (typeContent) {
    case TYPES_CONTENT[1]:
      return xmlPretty(data);
    case TYPES_CONTENT[2]:
      return jsonPretty(data);
    default:
      return data;
  }
};

/**
 * Copy any string content to user clipboard.
 * @param data Is the string value to copy.
 * @param typeContent One of ["string", "xml", "json"]. "string by default".
 */
export const copyToClipboard = (data: string, typeContent: string = TYPES_CONTENT[0]): void => {
  const textarea: HTMLTextAreaElement = document.createElement('textarea');
  const selection: Selection | null = document.getSelection();
  const range: Range = document.createRange();

  textarea.textContent = pretty(data, typeContent);
  document.body.appendChild(textarea);

  const edge = isEdge();

  if (edge) {
    textarea.select();
  } else {
    range.selectNode(textarea);
    if (selection !== null) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  document.execCommand('copy');

  if (!edge && selection !== null) {
    selection.removeAllRanges();
  }

  document.body.removeChild(textarea);
};

/**
 * Abbreviate the input text string with ellipsis to the maximum length
 * @param data Is the string value to abbreviate.
 * @param maxLength Is the maximum length of the string to abbreviate. 40 by default.
 * @returns Is the input text string with ellipsis.
 */
export const ellipsis = (data: string | null, maxLength: number = 40): string | null => {
  if (isNotNull(data) && data !== null) {
    const newContent: string = data.substr(0, maxLength);

    return newContent + (data.length > maxLength ? ' ...' : '');
  }

  return null;
};

/**
 * Decode a Base64 encoded string.
 * @param data Is the Base64 string value to decode.
 * @returns Is the string value decoded.
 */
export const decodeFromBase64 = (data: string): string | null => {
  if (isBase64Encoded(data)) {
    return decodeURIComponent(escape(window.atob(data)));
  }

  return null;
};

/**
 * Encode in Base64 a string value.
 * @param data Is the string value to encode.
 * @returns Is the string value encoded.
 */
export const encodeToBase64 = (data: string): string | null => {
  if (isNotEmpty(data)) {
    return window.btoa(unescape(encodeURIComponent(data)));
  }

  return null;
};

/**
 * converts an uppercase text string, separated by underscores, to Camel Case.
 * @param data Is the string value to format.
 * @returns Is the string value formatted.
 */
export const toCamelCase = (data: string): string | null => {
  if (isNotBlankString(data)) {
    return data
      .split('_')
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  return null;
};
