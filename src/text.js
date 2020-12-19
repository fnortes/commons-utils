import xml from "./xml";
import json from "./json";

const TYPES_CONTENT = ["string", "xml", "json"];

export const getPrettyText = (data = "", typeContent = TYPES_CONTENT[0]) => {
  let result = "";

  switch (typeContent) {
    case TYPES_CONTENT[1]:
      result = xml.format(data);
      break;
    case TYPES_CONTENT[2]:
      result = json.format(data);
      break;
    default:
      result = data;
      break;
  }

  return result;
};

export const copyToClipboard = (data, typeContent = TYPES_CONTENT[0]) => {
  const textarea = document.createElement("textarea");
  const selection = document.getSelection();
  const range = document.createRange();

  textarea.textContent = text.getPrettyText(data, typeContent);
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

export const ellipsis = (text = "", maxLength = 40) => {
  try {
    const newContent = text.substr(0, maxLength);

    return newContent + (text.length > maxLength ? " ..." : "");
  } catch (err) {
    console.log(`'${text}' is not a string`);
    return text;
  }
};

const text = {
  getPrettyText,
  copyToClipboard,
  ellipsis,
};

export default text;
