import { dateIsValid } from "../../../src/date/validations/date";

describe("it should exist a dateIsValid function", () => {
  it("should exist the method", () => {
    expect(dateIsValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(dateIsValid()).toBe(false);
    expect(dateIsValid(null)).toBe(false);
    expect(dateIsValid("")).toBe(false);
    expect(
      dateIsValid({
        test: 1,
      })
    ).toBe(false);
    expect(dateIsValid(2)).toBe(false);
    expect(dateIsValid(-2)).toBe(false);
    expect(dateIsValid(new Date().getTime())).toBe(false);
  });

  it("should return true", () => {
    expect(dateIsValid(new Date())).toBe(true);
  });
});
