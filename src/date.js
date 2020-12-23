import { leftPad } from "./number";

/**
 *
 * @param {Number} timestamp
 * @return {Boolean}
 */
export const isTimestamp = (timestamp) => {
  const parsed = parseFloat(timestamp);

  return (
    !Number.isNaN(parsed) &&
    Number.isFinite(parsed) &&
    /^\d+\.?\d+$/.test(timestamp)
  );
};

/**
 *
 * @param {Number} timestamp
 * @return {Boolean}
 */
export const isTimestampValid = (timestamp) => {
  let result = false;

  if (isTimestamp(timestamp)) {
    const date = new Date(timestamp);
    result = date && date.toString() !== "Invalid Date";
  }

  return result;
};

/**
 *
 * @param {Date} dateToConvert
 * @return {Number}
 */
export const dateToTimestamp = (dateToConvert) => {
  let result = null;

  if (
    dateToConvert &&
    dateToConvert !== null &&
    typeof dateToConvert === "object"
  ) {
    const timestamp = Date.parse(dateToConvert);
    result = date.isTimestampValid(timestamp) ? timestamp : null;
  }

  return result;
};

/**
 * Devuelve un objeto date.
 * @param {number} timestamp fecha en formato number
 * @returns {Date} un objeto date
 */
export const timestampToDate = (timestamp) =>
  date.isTimestamp(timestamp) ? new Date(timestamp) : null;

/**
 * Devuelve la fecha con formato
 * @param {number} timestamp fecha en formato timestamp
 * @return {Date} fecha formateada
 */
export const timestampToLocaleDateString = (timestamp) => {
  const dateConverted = timestampToDate(timestamp);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

/**
 * Devuelve el dia de la fecha
 * @param {timestamp} timestamp fecha en formato timestamp
 * @param {prefixZero} prefixZero Indica si anadir zero
 * @return {number} Dia
 */
export const timestampToDay = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  if (dateToConvert !== null) {
    const day = dateToConvert.getDate();

    return prefixZero ? leftPad(day) : day;
  }

  return null;
};

/**
 * Devuelve el mes de la fecha
 * @param {timestamp} timestamp fecha en formato timestamp
 * @param {prefixZero} prefixZero Indica si anadir zero
 * @return {number} Mes
 */
export const timestampToMonth = (timestamp, prefixZero = false) => {
  const dateToConvert = date.timestampToDate(timestamp);

  if (dateToConvert !== null) {
    const month = dateToConvert.getMonth() + 1;

    return prefixZero ? leftPad(month) : month;
  }

  return null;
};

const date = {
  isTimestamp,
  isTimestampValid,
  dateToTimestamp,
  timestampToDate,
  timestampToLocaleDateString,
  timestampToDay,
  timestampToMonth,
};

export default date;
