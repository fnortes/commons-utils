import commonValidations from "../validations/common";

/**
 * Convert a data json entry (as String or Object) into a pretty string.
 * @param {String|Object} data Is the entry data to format.
 * @return {String} Is the pretty formatted string.
 */
export const pretty = (data) => {
  if (commonValidations.isValidJson(data)) {
    const newData = typeof data === "object" ? data : JSON.parse(data);

    return JSON.stringify(newData, undefined, 2);
  }

  return null;
};

const json = {
  pretty,
};

export default json;
