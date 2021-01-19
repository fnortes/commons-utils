import { dateIsValid } from "../../../src/date/validations/date";

describe("it should exist a dateIsValid function", () => {
  test("should exist the method", () => {
    expect(dateIsValid).not.toBeNull();
  });

  test("should return false", () => {
    expect(dateIsValid(null)).toBe(false);
  });

  test("should return true", () => {
    expect(dateIsValid(new Date())).toBe(true);
  });
});