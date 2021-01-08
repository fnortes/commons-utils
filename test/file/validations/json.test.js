import { isValid } from "../../../src/file/validations/json";

describe("it should exist a isValid function", () => {
  it("should exist the method", () => {
    expect(isValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValid()).toBe(false);
    expect(isValid(null)).toBe(false);
    expect(isValid("")).toBe(false);
    expect(isValid(2)).toBe(false);
    expect(isValid(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(isValid({})).toBe(true);
    expect(
      isValid({
        test: "test",
      })
    ).toBe(true);
    expect(isValid(new Date())).toBe(true);
  });
});
