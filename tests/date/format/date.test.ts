import {
  dateToTimestamp,
  dateToFullYear,
  dateToMonth,
  dateToDay,
  dateToHours,
  dateToMinutes,
  dateToSeconds,
  dateToFormat,
} from "../../../src/date/format/date";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds: number = 1608743265 * 1000;
const testDate: Date = new Date(timestampMilliseconds);
// Another test date: 2021-03-01 / 09:05:09
const timestampMilliseconds2: number = 1614585909 * 1000;
const testDate2: Date = new Date(timestampMilliseconds2);

describe("it should exist a dateToTimestamp function", () => {
  test("should exist the method", () => {
    expect(dateToTimestamp).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToTimestamp(null)).toBe(null);
  });

  test("should return a valid timestamp", () => {
    expect(dateToTimestamp(testDate)).toBe(timestampMilliseconds);
  });
});

describe("it should exist a dateToFullYear function", () => {
  test("should exist the method", () => {
    expect(dateToFullYear).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToFullYear(null)).toBe(null);
  });

  test("should return a valid year", () => {
    expect(dateToFullYear(testDate)).toBe(2020);
    expect(dateToFullYear(testDate2)).toBe(2021);
  });
});

describe("it should exist a dateToMonth function", () => {
  test("should exist the method", () => {
    expect(dateToMonth).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToMonth(null)).toBe(null);
  });

  test("should return a valid month", () => {
    expect(dateToMonth(testDate)).toBe(12);
    expect(dateToMonth(testDate, true)).toBe("12");
    expect(dateToMonth(testDate2)).toBe(3);
    expect(dateToMonth(testDate2, true)).toBe("03");
  });
});

describe("it should exist a dateToDay function", () => {
  test("should exist the method", () => {
    expect(dateToDay).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToDay(null)).toBe(null);
  });

  test("should return a valid day", () => {
    expect(dateToDay(testDate)).toBe(23);
    expect(dateToDay(testDate, true)).toBe("23");

    expect(dateToDay(testDate2)).toBe(1);
    expect(dateToDay(testDate2, true)).toBe("01");
  });
});

describe("it should exist a dateToHours function", () => {
  test("should exist the method", () => {
    expect(dateToHours).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToHours(null)).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(dateToHours(testDate)).toBe(18);
    expect(dateToHours(testDate, true)).toBe("18");

    expect(dateToHours(testDate2)).toBe(9);
    expect(dateToHours(testDate2, true)).toBe("09");
  });
});

describe("it should exist a dateToMinutes function", () => {
  test("should exist the method", () => {
    expect(dateToMinutes).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToMinutes(null)).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(dateToMinutes(testDate)).toBe(7);
    expect(dateToMinutes(testDate, true)).toBe("07");

    expect(dateToMinutes(testDate2)).toBe(5);
    expect(dateToMinutes(testDate2, true)).toBe("05");
  });
});

describe("it should exist a dateToSeconds function", () => {
  test("should exist the method", () => {
    expect(dateToSeconds).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToSeconds(null)).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(dateToSeconds(testDate)).toBe(45);
    expect(dateToSeconds(testDate, true)).toBe("45");

    expect(dateToSeconds(testDate2)).toBe(9);
    expect(dateToSeconds(testDate2, true)).toBe("09");
  });
});

describe("it should exist a dateToFormat function", () => {
  test("should exist the method", () => {
    expect(dateToFormat).not.toBeNull();
  });

  test("should return a null", () => {
    expect(dateToFormat(null)).toBe(null);
  });

  test("should return a valid formatted date", () => {
    expect(dateToFormat(testDate)).toBe("2020-12-23T18:07:45+01:00");
    expect(dateToFormat(testDate, "yyyy-MM-DDTHH:mm:ssZ")).toBe("2020-12-23T18:07:45+01:00");
    expect(dateToFormat(testDate, "ddd MMM DD yyyy HH:mm:ss")).toBe("Wed Dec 23 2020 18:07:45");
    expect(dateToFormat(testDate, "DD/MM/yyyy")).toBe("23/12/2020");
    expect(dateToFormat(testDate, null, true)).toBe("2020-12-23T17:07:45Z");
  });
});