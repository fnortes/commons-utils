import commonValidations from "../validations/common";

/**
 * Convert a data xml string entry into a pretty string.
 * @param {String} data Is the entry data to format.
 * @param {String} originalTab Is the string to use for the indentation, by default it is the tab.
 * @return {String} Is the pretty formatted string.
 */
export const xmlPretty = (data, originalTab = "\t") => {
  if (commonValidations.isValidXml(data)) {
    let formatted = "";
    let indent = "";

    data.split(/>\s*</).forEach((node) => {
      if (node.match(/^\/\w/)) {
        indent = indent.substring(originalTab.length);
      }
      formatted += `${indent}<${node}>\r\n`;

      if (node.match(/^<?\w[^>]*[^\/]$/)) {
        indent += originalTab;
      }
    });

    return formatted.substring(1, formatted.length - 3);
  }

  return null;
};

const xml = {
  xmlPretty,
};

export default xml;
