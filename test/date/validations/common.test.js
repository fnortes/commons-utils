import { isValid } from "../../../src/date/validations/common";

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
    expect(isValid("test")).toBe(false);
    expect(isValid("test", "YYYY MM DD")).toBe(false);
    expect(isValid("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(false);
    expect(isValid("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(false);
    expect(isValid("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(false);
    expect(isValid("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(false);
    expect(isValid("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(false);
  });

  it("should return true", () => {
    expect(isValid(new Date())).toBe(true);
    expect(isValid("15/07/1983", "DD/MM/YYYY")).toBe(true);
    expect(isValid("15/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(true);
    expect(isValid(new Date().getTime())).toBe(true);
  });
});
