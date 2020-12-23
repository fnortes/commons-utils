import {
  isTimestamp,
  isTimestampValid,
  dateToTimestamp,
  timestampToDate,
  timestampToLocaleDateString,
  timestampToDay,
  timestampToMonth,
} from "../src/date";
import { leftPad } from "../src/number";

const currentDate = new Date();
const timestampMilliseconds = 1608743265 * 1000;

describe("it should exist a date.isTimestamp function", () => {
  it("should exist the method", () => {
    expect(isTimestamp).not.toBeNull();
  });

  it("should return false", () => {
    expect(isTimestamp()).toBe(false);
    expect(isTimestamp(null)).toBe(false);
    expect(isTimestamp("")).toBe(false);
    expect(
      isTimestamp({
        test: 1,
      })
    ).toBe(false);
    expect(isTimestamp(2)).toBe(false);
    expect(isTimestamp(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(isTimestamp(new Date().getTime())).toBe(true);
    expect(isTimestamp(timestampMilliseconds)).toBe(true);
  });
});

describe("it should exist a date.isTimestampValid function", () => {
  it("should exist the method", () => {
    expect(isTimestampValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(isTimestampValid()).toBe(false);
    expect(isTimestampValid(null)).toBe(false);
    expect(isTimestampValid("")).toBe(false);
    expect(
      isTimestampValid({
        test: 1,
      })
    ).toBe(false);
    expect(isTimestampValid(2)).toBe(false);
    expect(isTimestampValid(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(isTimestampValid(new Date().getTime())).toBe(true);
    expect(isTimestampValid(timestampMilliseconds)).toBe(true);
  });
});

describe("it should exist a date.dateToTimestamp function", () => {
  it("should exist the method", () => {
    expect(dateToTimestamp).not.toBeNull();
  });

  it("should return a null", () => {
    expect(dateToTimestamp()).toBe(null);
    expect(dateToTimestamp(null)).toBe(null);
    expect(dateToTimestamp("")).toBe(null);
    expect(dateToTimestamp(2)).toBe(null);
    expect(
      dateToTimestamp({
        test: 1,
      })
    ).toBe(null);
  });

  it("should return a valid timestamp", () => {
    expect(dateToTimestamp(currentDate)).toBe(Date.parse(currentDate));
  });
});

describe("it should exist a date.timestampToDate function", () => {
  it("should exist the method", () => {
    expect(timestampToDate).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToDate()).toBe(null);
    expect(timestampToDate(null)).toBe(null);
    expect(timestampToDate("")).toBe(null);
    expect(
      timestampToDate({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToDate(2)).toBe(null);
    expect(timestampToDate(-2)).toBe(null);
  });

  it("should return a valid date", () => {
    expect(timestampToDate(currentDate.getTime())).toStrictEqual(currentDate);
    expect(timestampToDate(timestampMilliseconds)).toStrictEqual(
      new Date(timestampMilliseconds)
    );
  });
});

describe("it should exist a date.timestampToLocaleDateString function", () => {
  it("should exist the method", () => {
    expect(timestampToLocaleDateString).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToLocaleDateString()).toBe(null);
    expect(timestampToLocaleDateString(null)).toBe(null);
    expect(timestampToLocaleDateString("")).toBe(null);
    expect(
      timestampToLocaleDateString({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToLocaleDateString(2)).toBe(null);
    expect(timestampToLocaleDateString(-2)).toBe(null);
  });

  it("should return a valid date string", () => {
    expect(timestampToLocaleDateString(currentDate.getTime())).toBe(
      currentDate.toLocaleDateString()
    );
    expect(timestampToLocaleDateString(timestampMilliseconds)).toBe(
      new Date(timestampMilliseconds).toLocaleDateString()
    );
  });
});

describe("it should exist a date.timestampToDay function", () => {
  it("should exist the method", () => {
    expect(timestampToDay).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToDay()).toBe(null);
    expect(timestampToDay(null)).toBe(null);
    expect(timestampToDay("")).toBe(null);
    expect(
      timestampToDay({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToDay(2)).toBe(null);
    expect(timestampToDay(-2)).toBe(null);
  });

  it("should return a valid day", () => {
    expect(timestampToDay(currentDate.getTime())).toBe(currentDate.getDate());
    expect(timestampToDay(currentDate.getTime(), true)).toBe(
      leftPad(currentDate.getDate())
    );
    expect(timestampToDay(timestampMilliseconds)).toBe(
      new Date(timestampMilliseconds).getDate()
    );
    expect(timestampToDay(timestampMilliseconds, true)).toBe(
      leftPad(new Date(timestampMilliseconds).getDate())
    );
  });
});

describe("it should exist a date.timestampToMonth function", () => {
  it("should exist the method", () => {
    expect(timestampToMonth).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToMonth()).toBe(null);
    expect(timestampToMonth(null)).toBe(null);
    expect(timestampToMonth("")).toBe(null);
    expect(
      timestampToMonth({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToMonth(2)).toBe(null);
    expect(timestampToMonth(-2)).toBe(null);
  });

  it("should return a valid month", () => {
    expect(timestampToMonth(timestampMilliseconds)).toBe(12);
    expect(timestampToMonth(timestampMilliseconds, true)).toBe("12");
    expect(timestampToMonth(1590340065 * 1000)).toBe(5);
    expect(timestampToMonth(1590340065 * 1000, true)).toBe("05");
  });
});
