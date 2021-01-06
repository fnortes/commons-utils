import { isValid } from "../../../src/date/validations/date";

describe("it should exist a isValid function", () => {
  it("should exist the method", () => {
    expect(isValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValid()).toBe(false);
    expect(isValid(null)).toBe(false);
    expect(isValid("")).toBe(false);
    expect(
      isValid({
        test: 1,
      })
    ).toBe(false);
    expect(isValid(2)).toBe(false);
    expect(isValid(-2)).toBe(false);
    expect(isValid(new Date().getTime())).toBe(false);
  });

  it("should return true", () => {
    expect(isValid(new Date())).toBe(true);
  });
});
