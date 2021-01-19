import { jsonIsValid } from "../../../src/file/validations/json";

describe("it should exist a jsonIsValid function", () => {
  test("should exist the method", () => {
    expect(jsonIsValid).not.toBeNull();
  });

  test("should return false", () => {
    expect(jsonIsValid(null)).toBe(false);
  });

  test("should return true", () => {
    expect(jsonIsValid({})).toBe(true);
    expect(jsonIsValid({ test: "test" })).toBe(true);
    expect(jsonIsValid(new Date())).toBe(true);
  });
});