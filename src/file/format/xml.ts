import { isValidXml } from "../validations/common";

/**
 * Convert a data xml string entry into a pretty string.
 * @param data Is the entry data to format.
 * @param originalTab Is the string to use for the indentation, by default it is the tab.
 * @returns Is the pretty formatted string.
 */
export const xmlPretty = (data: string, originalTab: string = "\t"): string | null => {
  if (isValidXml(data)) {
    let formatted: string = "";
    let indent: string = "";

    data.split(/>\s*</).forEach((node: string) => {
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