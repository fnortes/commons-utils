import timestampValidations from "../validations/timestamp";

/**
 * Get the Date object from a timestamp value.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the Date object.
 * @returns {Date} Is the Date object obtained or null if the timestamp is not valid.
 */
export const toDate = (timestampValue) =>
  timestampValidations.isCorrect(timestampValue)
    ? new Date(timestampValue)
    : null;

/**
 * Returns a string with a client language sensitive representation of the date, from a timestamp.
 * @param {Number} timestampValue Is the timestamp value from which to obtain the string date representation.
 * @return {String} Is the client language sensitive representation of the date or null if the timestamp is not valid.
 */
export const toLocaleDateString = (timestampValue) => {
  const dateConverted = timestamp.toDate(timestampValue);

  return dateConverted != null ? dateConverted.toLocaleDateString() : null;
};

const timestamp = {
  toDate,
  toLocaleDateString,
};

export default timestamp;
