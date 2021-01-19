import {
  timestampIsCorrect,
  timestampIsValid,
} from "../../../src/date/validations/timestamp";

describe("it should exist a timestampIsCorrect function", () => {
  test("should exist the method", () => {
    expect(timestampIsCorrect).not.toBeNull();
  });

  test("should return false", () => {
    expect(timestampIsCorrect(null)).toBe(false);
    expect(timestampIsCorrect("")).toBe(false);
    expect(
      timestampIsCorrect({
        test: 1,
      })
    ).toBe(false);
    expect(timestampIsCorrect(2)).toBe(false);
    expect(timestampIsCorrect(-2)).toBe(false);
    expect(timestampIsCorrect(new Date())).toBe(false);
  });

  test("should return true", () => {
    expect(timestampIsCorrect(new Date().getTime())).toBe(true);
  });
});

describe("it should exist a timestampIsValid function", () => {
  test("should exist the method", () => {
    expect(timestampIsValid).not.toBeNull();
  });

  test("should return false", () => {
    expect(timestampIsValid(null)).toBe(false);
    expect(timestampIsValid("")).toBe(false);
    expect(
      timestampIsValid({
        test: 1,
      })
    ).toBe(false);
    expect(timestampIsValid(2)).toBe(false);
    expect(timestampIsValid(-2)).toBe(false);
    expect(timestampIsValid(new Date())).toBe(false);
  });

  test("should return true", () => {
    expect(timestampIsValid(new Date().getTime())).toBe(true);
  });
});