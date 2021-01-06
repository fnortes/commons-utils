import { isValidDate } from "../../../src/date/validations/string";

describe("it should exist a isValidDate function", () => {
  it("should exist the method", () => {
    expect(isValidDate).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValidDate()).toBe(false);
    expect(isValidDate(null)).toBe(false);
    expect(isValidDate("")).toBe(false);
    expect(
      isValidDate({
        test: 1,
      })
    ).toBe(false);
    expect(isValidDate(2)).toBe(false);
    expect(isValidDate(-2)).toBe(false);
    expect(isValidDate(new Date(), "YYYY MM DD")).toBe(false);
    expect(isValidDate("test")).toBe(false);
    expect(isValidDate("test", "YYYY MM DD")).toBe(false);
    expect(isValidDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
    expect(isValidDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      false
    );
  });

  it("should return true", () => {
    expect(isValidDate("15/07/1983", "DD/MM/YYYY")).toBe(true);
    expect(isValidDate("15/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      true
    );
  });
});
