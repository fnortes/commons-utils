import { isEmpty, isNotEmpty } from "../../../src/text/validations/text";

describe("it should exist a isEmpty function", () => {
  it("should exist the method", () => {
    expect(isEmpty).not.toBeNull();
  });

  it("should return true", () => {
    expect(isEmpty()).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty("")).toBe(true);
  });

  it("should return false", () => {
    expect(isEmpty("a")).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
    expect(isEmpty(2)).toBe(false);
    expect(isEmpty(-2)).toBe(false);
    expect(
      isEmpty({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotEmpty function", () => {
  it("should exist the method", () => {
    expect(isNotEmpty).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotEmpty()).toBe(false);
    expect(isNotEmpty(null)).toBe(false);
    expect(isNotEmpty("")).toBe(false);
  });

  it("should return true", () => {
    expect(isNotEmpty("a")).toBe(true);
    expect(isNotEmpty(new Date())).toBe(true);
    expect(isNotEmpty(2)).toBe(true);
    expect(isNotEmpty(-2)).toBe(true);
    expect(
      isNotEmpty({
        test: 1,
      })
    ).toBe(true);
  });
});
