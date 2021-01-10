import { stringIsValidAsDate } from "../../../src/date/validations/string";

describe("it should exist a stringIsValidAsDate function", () => {
  it("should exist the method", () => {
    expect(stringIsValidAsDate).not.toBeNull();
  });

  it("should return false", () => {
    expect(stringIsValidAsDate()).toBe(false);
    expect(stringIsValidAsDate(null)).toBe(false);
    expect(stringIsValidAsDate("")).toBe(false);
    expect(
      stringIsValidAsDate({
        test: 1,
      })
    ).toBe(false);
    expect(stringIsValidAsDate(2)).toBe(false);
    expect(stringIsValidAsDate(-2)).toBe(false);
    expect(stringIsValidAsDate(new Date(), "YYYY MM DD")).toBe(false);
    expect(stringIsValidAsDate("test")).toBe(false);
    expect(stringIsValidAsDate("test", "YYYY MM DD")).toBe(false);
    expect(
      stringIsValidAsDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(false);
    expect(
      stringIsValidAsDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(false);
    expect(
      stringIsValidAsDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(false);
    expect(
      stringIsValidAsDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(false);
    expect(
      stringIsValidAsDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")
    ).toBe(false);
  });

  it("should return true", () => {
    expect(stringIsValidAsDate("15/07/1983", "DD/MM/YYYY")).toBe(true);
    expect(
      stringIsValidAsDate("15/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(true);
  });
});
