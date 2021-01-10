import moment from "moment";

/**
 * Check if the timestamp has a valid format.
 * @param {Number} value Is the timestamp value to check.
 * @return {Boolean} True if the timestamp has a valid format. Else false.
 */
export const timestampIsCorrect = (value) => {
  const parsed = parseFloat(value);

  return (
    !Number.isNaN(parsed) &&
    Number.isFinite(parsed) &&
    /^\d+\.?\d+$/.test(value)
  );
};

/**
 * Check if the timestamp has a valid format and is a valid date.
 * @param {Number} value Is the timestamp value to check.
 * @return {Boolean} True if the timestamp has a valid date. Else false.
 */
export const timestampIsValid = (value) =>
  timestamp.timestampIsCorrect(value) && moment(value).isValid();

const timestamp = {
  timestampIsCorrect,
  timestampIsValid,
};

export default timestamp;
