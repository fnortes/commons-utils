// import {
//   dateTimeToFormat,
//   isDateValid
// } from "./date";

// const isValid = (dateToValidate, mask = null) => {
//   let dateObject = null;

//   if (typeof dateToValidate === "string") {
//     dateObject = moment(dateToValidate, mask, true);
//   } else {
//     dateObject = moment(dateToValidate);
//   }

//   return dateObject.isValid();
// };

/**
 * Check if the dateToValidate param is a valid date.
 * @param {Date|String} dateToValidate Is the date to validate, as Date object or String.
 * @param {String} mask It should not be informed if the dateToValidate param is a Date object.
 *                      If the dateToValidate param is a String, it is the mask or pattern to be used when validating the date. More information in https://momentjs.com/docs/#/displaying/
 * @return {Boolean} True if the date is valid. Else false.
 */
// export const isDateValid = (dateToValidate, mask = null) => (typeof dateToValidate === "string" || dateToValidate instanceof Date) && moment(dateToValidate, mask).isValid();

export const date = {
  isValidAsDate,
  // isValidAsString,
  // isValidAsTimestamp
  // isValid,
};
