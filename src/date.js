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
export const timestampIsValid = (timestamp) => {
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
    result = date.timestampIsValid(timestamp) ? timestamp : null;
  }

  return result;
};

const date = {
  isTimestamp,
  timestampIsValid,
  dateToTimestamp,
};

export default date;
