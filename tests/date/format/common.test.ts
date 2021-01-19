import {
  toDate,
  toLocaleDateString,
  toFullYear,
  toMonth,
  toDay,
  toHours,
  toMinutes,
  toSeconds,
  toFormat,
} from "../../../src/date/format/common";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds: number = 1608743265 * 1000;
const testDate: Date = new Date(timestampMilliseconds);
// Another test date: 2021-03-01 / 09:05:09
const timestampMilliseconds2: number = 1614585909 * 1000;
const testDate2: Date = new Date(timestampMilliseconds2);

describe("it should exist a toDate function", () => {
  test("should exist the method", () => {
    expect(toDate).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toDate("")).toBe(null);
    expect(toDate(2)).toBe(null);
    expect(toDate(-2)).toBe(null);
    expect(toDate("test")).toBe(null);
    expect(toDate("test", "YYYY MM DD")).toBe(null);
    expect(toDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid date", () => {
    const dateTest: Date | null = toDate("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z");
    const timestampTest: number = dateTest !== null ? dateTest.getTime() : 0;
    expect(timestampTest).toBe(timestampMilliseconds);
    expect(toDate(timestampMilliseconds)).toStrictEqual(testDate);
  });
});

describe("it should exist a toLocaleDateString function", () => {
  test("should exist the method", () => {
    expect(toLocaleDateString).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toLocaleDateString("")).toBe(null);
    expect(toLocaleDateString(2)).toBe(null);
    expect(toLocaleDateString(-2)).toBe(null);
    expect(toLocaleDateString("test")).toBe(null);
    expect(toLocaleDateString("test", "YYYY MM DD")).toBe(null);
    expect(toLocaleDateString("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toLocaleDateString("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toLocaleDateString("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toLocaleDateString("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toLocaleDateString("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid date string", () => {
    expect(toLocaleDateString("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe("2020-12-23");
    expect(toLocaleDateString(timestampMilliseconds)).toBe("2020-12-23");
    expect(toLocaleDateString(testDate)).toBe("2020-12-23");
  });
});

describe("it should exist a toFullYear function", () => {
  test("should exist the method", () => {
    expect(toFullYear).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toFullYear("")).toBe(null);
    expect(toFullYear(2)).toBe(null);
    expect(toFullYear(-2)).toBe(null);
    expect(toFullYear("test")).toBe(null);
    expect(toFullYear("test", "YYYY MM DD")).toBe(null);
    expect(toFullYear("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid year", () => {
    expect(toFullYear("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(2020);
    expect(toFullYear(timestampMilliseconds)).toBe(2020);
    expect(toFullYear(timestampMilliseconds2)).toBe(2021);
    expect(toFullYear(testDate)).toBe(2020);
    expect(toFullYear(testDate2)).toBe(2021);
  });
});

describe("it should exist a toMonth function", () => {
  test("should exist the method", () => {
    expect(toMonth).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toMonth("")).toBe(null);
    expect(toMonth(2)).toBe(null);
    expect(toMonth(-2)).toBe(null);
    expect(toMonth("test")).toBe(null);
    expect(toMonth("15/13/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("32/07/1983 20:45:13", true, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 26:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 20:61:13", true, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 20:45:61", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid month", () => {
    expect(toMonth("23/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(12);
    expect(toMonth("23/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("12");
    expect(toMonth("23/01/2021 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(1);
    expect(toMonth("23/01/2021 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("01");
    expect(toMonth(timestampMilliseconds)).toBe(12);
    expect(toMonth(timestampMilliseconds, true)).toBe("12");
    expect(toMonth(timestampMilliseconds2)).toBe(3);
    expect(toMonth(timestampMilliseconds2, true)).toBe("03");
    expect(toMonth(testDate)).toBe(12);
    expect(toMonth(testDate, true)).toBe("12");
    expect(toMonth(testDate2)).toBe(3);
    expect(toMonth(testDate2, true)).toBe("03");
  });
});

describe("it should exist a toDay function", () => {
  test("should exist the method", () => {
    expect(toDay).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toDay("")).toBe(null);
    expect(toDay(2)).toBe(null);
    expect(toDay(-2)).toBe(null);
    expect(toDay("test")).toBe(null);
    expect(toDay("15/13/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("32/07/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 26:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 20:61:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 20:45:61", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid day", () => {
    expect(toDay("23/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(23);
    expect(toDay("23/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("23");
    expect(toDay("01/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(1);
    expect(toDay("01/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("01");

    expect(toDay(timestampMilliseconds)).toBe(23);
    expect(toDay(timestampMilliseconds, true)).toBe("23");
    expect(toDay(timestampMilliseconds2)).toBe(1);
    expect(toDay(timestampMilliseconds2, true)).toBe("01");

    expect(toDay(testDate)).toBe(23);
    expect(toDay(testDate, true)).toBe("23");
    expect(toDay(testDate2)).toBe(1);
    expect(toDay(testDate2, true)).toBe("01");
  });
});

describe("it should exist a toHours function", () => {
  test("should exist the method", () => {
    expect(toHours).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toHours("")).toBe(null);
    expect(toHours(2)).toBe(null);
    expect(toHours(-2)).toBe(null);
    expect(toHours("test")).toBe(null);
    expect(toHours("15/13/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("32/07/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 26:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 20:61:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 20:45:61", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(toHours("23/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(18);
    expect(toHours("23/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("18");
    expect(toHours("23/12/2020 09:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(10);
    expect(toHours("23/12/2020 09:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("10");

    expect(toHours(timestampMilliseconds)).toBe(18);
    expect(toHours(timestampMilliseconds, true)).toBe("18");
    expect(toHours(timestampMilliseconds2)).toBe(9);
    expect(toHours(timestampMilliseconds2, true)).toBe("09");

    expect(toHours(testDate)).toBe(18);
    expect(toHours(testDate, true)).toBe("18");
    expect(toHours(testDate2)).toBe(9);
    expect(toHours(testDate2, true)).toBe("09");
  });
});

describe("it should exist a toMinutes function", () => {
  test("should exist the method", () => {
    expect(toMinutes).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toMinutes("")).toBe(null);
    expect(toMinutes(2)).toBe(null);
    expect(toMinutes(-2)).toBe(null);
    expect(toMinutes("test")).toBe(null);
    expect(toMinutes("15/13/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("32/07/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 26:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 20:61:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 20:45:61", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(toMinutes("23/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(7);
    expect(toMinutes("23/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("07");
    expect(toMinutes("23/12/2020 17:05:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(5);
    expect(toMinutes("23/12/2020 17:05:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("05");

    expect(toMinutes(timestampMilliseconds)).toBe(7);
    expect(toMinutes(timestampMilliseconds, true)).toBe("07");
    expect(toMinutes(timestampMilliseconds2)).toBe(5);
    expect(toMinutes(timestampMilliseconds2, true)).toBe("05");

    expect(toMinutes(testDate)).toBe(7);
    expect(toMinutes(testDate, true)).toBe("07");
    expect(toMinutes(testDate2)).toBe(5);
    expect(toMinutes(testDate2, true)).toBe("05");
  });
});

describe("it should exist a toSeconds function", () => {
  test("should exist the method", () => {
    expect(toSeconds).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toSeconds("")).toBe(null);
    expect(toSeconds(2)).toBe(null);
    expect(toSeconds(-2)).toBe(null);
    expect(toSeconds("test")).toBe(null);
    expect(toSeconds("test", false, "YYYY MM DD")).toBe(null);
    expect(toSeconds("15/13/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("32/07/1983 20:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 26:45:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 20:61:13", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 20:45:61", false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid hours", () => {
    expect(toSeconds("23/12/2020 17:07:45 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(45);
    expect(toSeconds("23/12/2020 17:07:45 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("45");
    expect(toSeconds("23/12/2020 17:07:09 +0000", false, "DD/MM/YYYY HH:mm:ss Z")).toBe(9);
    expect(toSeconds("23/12/2020 17:07:09 +0000", true, "DD/MM/YYYY HH:mm:ss Z")).toBe("09");

    expect(toSeconds(timestampMilliseconds)).toBe(45);
    expect(toSeconds(timestampMilliseconds, true)).toBe("45");
    expect(toSeconds(timestampMilliseconds2)).toBe(9);
    expect(toSeconds(timestampMilliseconds2, true)).toBe("09");

    expect(toSeconds(testDate)).toBe(45);
    expect(toSeconds(testDate, true)).toBe("45");
    expect(toSeconds(testDate2)).toBe(9);
    expect(toSeconds(testDate2, true)).toBe("09");
  });
});

describe("it should exist a toFormat function", () => {
  test("should exist the method", () => {
    expect(toFormat).not.toBeNull();
  });

  test("should return a null", () => {
    expect(toFormat("")).toBe(null);
    expect(toFormat(2)).toBe(null);
    expect(toFormat(-2)).toBe(null);
    expect(toFormat("test")).toBe(null);
    expect(toFormat("test", null, false, "YYYY MM DD")).toBe(null);
    expect(toFormat("15/13/1983 20:45:13", null, false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("32/07/1983 20:45:13", null, false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 26:45:13", null, false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 20:61:13", null, false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 20:45:61", null, false, "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  test("should return a valid formatted date", () => {
    expect(toFormat("23/12/2020 17:07:45 +0000", null, false, "DD/MM/YYYY HH:mm:ss Z")).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat("23/12/2020 17:07:45 +0000", "yyyy-MM-DDTHH:mm:ssZ", false, "DD/MM/YYYY HH:mm:ss Z")).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat("23/12/2020 17:07:45 +0000", "ddd MMM DD yyyy HH:mm:ss", false, "DD/MM/YYYY HH:mm:ss Z")).toBe("Wed Dec 23 2020 18:07:45");
    expect(toFormat("23/12/2020 17:07:45 +0000", "DD/MM/yyyy", false, "DD/MM/YYYY HH:mm:ss Z")).toBe("23/12/2020");
    expect(toFormat("23/12/2020 17:07:45 +0000", null, true, "DD/MM/YYYY HH:mm:ss Z")).toBe("2020-12-23T17:07:45Z");

    expect(toFormat(timestampMilliseconds)).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(timestampMilliseconds, "yyyy-MM-DDTHH:mm:ssZ")).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(timestampMilliseconds, "ddd MMM DD yyyy HH:mm:ss")).toBe("Wed Dec 23 2020 18:07:45");
    expect(toFormat(timestampMilliseconds, "DD/MM/yyyy")).toBe("23/12/2020");
    expect(toFormat(timestampMilliseconds, null, true)).toBe("2020-12-23T17:07:45Z");

    expect(toFormat(testDate)).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(testDate, "yyyy-MM-DDTHH:mm:ssZ")).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(testDate, "ddd MMM DD yyyy HH:mm:ss")).toBe("Wed Dec 23 2020 18:07:45");
    expect(toFormat(testDate, "DD/MM/yyyy")).toBe("23/12/2020");
    expect(toFormat(testDate, null, true)).toBe("2020-12-23T17:07:45Z");
  });
});