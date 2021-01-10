import { jsonIsValid } from "../../../src/file/validations/json";

describe("it should exist a jsonIsValid function", () => {
  it("should exist the method", () => {
    expect(jsonIsValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(jsonIsValid()).toBe(false);
    expect(jsonIsValid(null)).toBe(false);
    expect(jsonIsValid("")).toBe(false);
    expect(jsonIsValid(2)).toBe(false);
    expect(jsonIsValid(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(jsonIsValid({})).toBe(true);
    expect(
      jsonIsValid({
        test: "test",
      })
    ).toBe(true);
    expect(jsonIsValid(new Date())).toBe(true);
  });
});
