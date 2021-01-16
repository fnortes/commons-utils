/**
 * Check if the entry value is null or undefined.
 * @param {any} value Is the any value to check.
 * @return {Boolean} True if the entry value is null or undefined. Else false.
 */
export const isNull = (value: any): boolean => value === undefined || value === null;
