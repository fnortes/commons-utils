import { toDate, toLocaleDateString } from "../../../src/date/format/timestamp";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;
const testDate = new Date(timestampMilliseconds);

describe("it should exist a toDate function", () => {
  it("should exist the method", () => {
    expect(toDate).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toDate()).toBe(null);
    expect(toDate(null)).toBe(null);
    expect(toDate("")).toBe(null);
    expect(
      toDate({
        test: 1,
      })
    ).toBe(null);
    expect(toDate(2)).toBe(null);
    expect(toDate(-2)).toBe(null);
  });

  it("should return a valid date", () => {
    expect(toDate(timestampMilliseconds)).toStrictEqual(testDate);
  });
});

describe("it should exist a toLocaleDateString function", () => {
  it("should exist the method", () => {
    expect(toLocaleDateString).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toLocaleDateString()).toBe(null);
    expect(toLocaleDateString(null)).toBe(null);
    expect(toLocaleDateString("")).toBe(null);
    expect(
      toLocaleDateString({
        test: 1,
      })
    ).toBe(null);
    expect(toLocaleDateString(2)).toBe(null);
    expect(toLocaleDateString(-2)).toBe(null);
  });

  it("should return a valid date string", () => {
    expect(toLocaleDateString(timestampMilliseconds)).toBe("23/12/2020");
  });
});
