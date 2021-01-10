import { isValidAsDate } from "../../../src/date/validations/common";

describe("it should exist a isValidAsDate function", () => {
  it("should exist the method", () => {
    expect(isValidAsDate).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValidAsDate()).toBe(false);
    expect(isValidAsDate(null)).toBe(false);
    expect(isValidAsDate("")).toBe(false);
    expect(
      isValidAsDate({
        test: 1,
      })
    ).toBe(false);
    expect(isValidAsDate(2)).toBe(false);
    expect(isValidAsDate(-2)).toBe(false);
    expect(isValidAsDate("test")).toBe(false);
    expect(isValidAsDate("test", "YYYY MM DD")).toBe(false);
    expect(isValidAsDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidAsDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidAsDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidAsDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidAsDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
  });

  it("should return true", () => {
    expect(isValidAsDate(new Date())).toBe(true);
    expect(isValidAsDate("15/07/1983", "DD/MM/YYYY")).toBe(true);
    expect(isValidAsDate("15/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      true
    );
    expect(isValidAsDate(new Date().getTime())).toBe(true);
  });
});
