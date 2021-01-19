import {
  isNull, isNotNull, isEmpty, isNotEmpty, isEmptyString, isNotEmptyString, isBlankString, isNotBlankString, isBlank, isNotBlank, isBase64Encoded,
  leftPad, pretty, copyToClipboard, ellipsis, decodeFromBase64, encodeToBase64, toCamelCase, xmlPretty, jsonPretty, isValidJson, isValidXml,
  jsonIsValid, stringIsValidJson, toDate, toLocaleDateString, toFullYear, toMonth, toDay, toHours, toMinutes, toSeconds, toFormat, dateToTimestamp,
  dateToFullYear, dateToMonth, dateToDay, dateToHours, dateToMinutes, dateToSeconds, dateToFormat, stringToDate, stringToLocaleDateString,
  stringToFullYear, stringToMonth, stringToDay, stringToHours, stringToMinutes, stringToSeconds, stringToFormat, timestampToDate,
  timestampToLocaleDateString, timestampToFullYear, timestampToMonth, timestampToDay, timestampToHours, timestampToMinutes, timestampToSeconds,
  timestampToFormat, isValidAsDate, dateIsValid, stringIsValidAsDate, timestampIsCorrect, timestampIsValid, isIe, isEdge
} from "../src/index";

test("All functions exist", () => {
  expect(isNull).toBeInstanceOf(Function);
  expect(isNotNull).toBeInstanceOf(Function);
  expect(isEmpty).toBeInstanceOf(Function);
  expect(isNotEmpty).toBeInstanceOf(Function);
  expect(isEmptyString).toBeInstanceOf(Function);
  expect(isNotEmptyString).toBeInstanceOf(Function);
  expect(isBlankString).toBeInstanceOf(Function);
  expect(isNotBlankString).toBeInstanceOf(Function);
  expect(isBlank).toBeInstanceOf(Function);
  expect(isNotBlank).toBeInstanceOf(Function);
  expect(isBase64Encoded).toBeInstanceOf(Function);
  expect(leftPad).toBeInstanceOf(Function);
  expect(pretty).toBeInstanceOf(Function);
  expect(copyToClipboard).toBeInstanceOf(Function);
  expect(ellipsis).toBeInstanceOf(Function);
  expect(decodeFromBase64).toBeInstanceOf(Function);
  expect(encodeToBase64).toBeInstanceOf(Function);
  expect(toCamelCase).toBeInstanceOf(Function);
  expect(isIe).toBeInstanceOf(Function);
  expect(isEdge).toBeInstanceOf(Function);
  expect(xmlPretty).toBeInstanceOf(Function);
  expect(jsonPretty).toBeInstanceOf(Function);
  expect(isValidJson).toBeInstanceOf(Function);
  expect(isValidXml).toBeInstanceOf(Function);
  expect(jsonIsValid).toBeInstanceOf(Function);
  expect(stringIsValidJson).toBeInstanceOf(Function);
  expect(toDate).toBeInstanceOf(Function);
  expect(toLocaleDateString).toBeInstanceOf(Function);
  expect(toFullYear).toBeInstanceOf(Function);
  expect(toMonth).toBeInstanceOf(Function);
  expect(toDay).toBeInstanceOf(Function);
  expect(toHours).toBeInstanceOf(Function);
  expect(toMinutes).toBeInstanceOf(Function);
  expect(toSeconds).toBeInstanceOf(Function);
  expect(toFormat).toBeInstanceOf(Function);
  expect(dateToTimestamp).toBeInstanceOf(Function);
  expect(dateToFullYear).toBeInstanceOf(Function);
  expect(dateToMonth).toBeInstanceOf(Function);
  expect(dateToDay).toBeInstanceOf(Function);
  expect(dateToHours).toBeInstanceOf(Function);
  expect(dateToMinutes).toBeInstanceOf(Function);
  expect(dateToSeconds).toBeInstanceOf(Function);
  expect(dateToFormat).toBeInstanceOf(Function);
  expect(stringToDate).toBeInstanceOf(Function);
  expect(stringToLocaleDateString).toBeInstanceOf(Function);
  expect(stringToFullYear).toBeInstanceOf(Function);
  expect(stringToMonth).toBeInstanceOf(Function);
  expect(stringToDay).toBeInstanceOf(Function);
  expect(stringToHours).toBeInstanceOf(Function);
  expect(stringToMinutes).toBeInstanceOf(Function);
  expect(stringToSeconds).toBeInstanceOf(Function);
  expect(stringToFormat).toBeInstanceOf(Function);
  expect(timestampToDate).toBeInstanceOf(Function);
  expect(timestampToLocaleDateString).toBeInstanceOf(Function);
  expect(timestampToFullYear).toBeInstanceOf(Function);
  expect(timestampToMonth).toBeInstanceOf(Function);
  expect(timestampToDay).toBeInstanceOf(Function);
  expect(timestampToHours).toBeInstanceOf(Function);
  expect(timestampToMinutes).toBeInstanceOf(Function);
  expect(timestampToSeconds).toBeInstanceOf(Function);
  expect(timestampToFormat).toBeInstanceOf(Function);
  expect(isValidAsDate).toBeInstanceOf(Function);
  expect(dateIsValid).toBeInstanceOf(Function);
  expect(stringIsValidAsDate).toBeInstanceOf(Function);
  expect(timestampIsCorrect).toBeInstanceOf(Function);
  expect(timestampIsValid).toBeInstanceOf(Function);
});