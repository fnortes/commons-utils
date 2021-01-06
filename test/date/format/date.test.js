import { toTimestamp, toFullYear } from "../../../src/date/format/date";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;
const testDate = new Date(timestampMilliseconds);
// Another test date: 2021-03-01 / 09:05:09
const timestampMilliseconds2 = 1614585909 * 1000;
const testDate2 = new Date(timestampMilliseconds2);

describe("it should exist a toTimestamp function", () => {
  it("should exist the method", () => {
    expect(toTimestamp).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toTimestamp()).toBe(null);
    expect(toTimestamp(null)).toBe(null);
    expect(toTimestamp("")).toBe(null);
    expect(toTimestamp(2)).toBe(null);
    expect(
      toTimestamp({
        test: 1,
      })
    ).toBe(null);
  });

  it("should return a valid timestamp", () => {
    expect(toTimestamp(testDate)).toBe(timestampMilliseconds);
  });
});

describe("it should exist a toFullYear function", () => {
  it("should exist the method", () => {
    expect(toFullYear).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toFullYear()).toBe(null);
    expect(toFullYear(null)).toBe(null);
    expect(toFullYear("")).toBe(null);
    expect(
      toFullYear({
        test: 1,
      })
    ).toBe(null);
    expect(toFullYear(2)).toBe(null);
    expect(toFullYear(-2)).toBe(null);
  });

  it("should return a valid year", () => {
    expect(toFullYear(testDate)).toBe(2020);
    expect(toFullYear(testDate2)).toBe(2021);
  });
});
