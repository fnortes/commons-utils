export const format = (xml, originalTab = null) => {
  let formatted = "";
  let indent = "";
  const tab = originalTab || "\t";

  xml.split(/>\s*</).forEach((node) => {
    if (node.match(/^\/\w/)) {
      indent = indent.substring(tab.length);
    }
    formatted += `${indent}<${node}>\r\n`;

    if (node.match(/^<?\w[^>]*[^\/]$/)) {
      indent += tab;
    }
  });

  return formatted.substring(1, formatted.length - 3);
};

const xml = {
  format,
};

export default xml;
