import { isCorrect, isValid } from "../../../src/date/validations/timestamp";

describe("it should exist a isCorrect function", () => {
  it("should exist the method", () => {
    expect(isCorrect).not.toBeNull();
  });

  it("should return false", () => {
    expect(isCorrect()).toBe(false);
    expect(isCorrect(null)).toBe(false);
    expect(isCorrect("")).toBe(false);
    expect(
      isCorrect({
        test: 1,
      })
    ).toBe(false);
    expect(isCorrect(2)).toBe(false);
    expect(isCorrect(-2)).toBe(false);
    expect(isCorrect(new Date())).toBe(false);
  });

  it("should return true", () => {
    expect(isCorrect(new Date().getTime())).toBe(true);
  });
});

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
    expect(isValid(new Date())).toBe(false);
  });

  it("should return true", () => {
    expect(isValid(new Date().getTime())).toBe(true);
  });
});
