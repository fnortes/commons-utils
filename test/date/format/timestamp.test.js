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
} from "../../../src/date/format/timestamp";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;
const testDate = new Date(timestampMilliseconds);
// Another test date: 2021-03-01 / 09:05:09
const timestampMilliseconds2 = 1614585909 * 1000;

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
    expect(toLocaleDateString(timestampMilliseconds)).toBe("2020-12-23");
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
    expect(toFullYear(timestampMilliseconds)).toBe(2020);
    expect(toFullYear(timestampMilliseconds2)).toBe(2021);
  });
});

describe("it should exist a toMonth function", () => {
  it("should exist the method", () => {
    expect(toMonth).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toMonth()).toBe(null);
    expect(toMonth(null)).toBe(null);
    expect(toMonth("")).toBe(null);
    expect(
      toMonth({
        test: 1,
      })
    ).toBe(null);
    expect(toMonth(2)).toBe(null);
    expect(toMonth(-2)).toBe(null);
  });

  it("should return a valid month", () => {
    expect(toMonth(timestampMilliseconds)).toBe(12);
    expect(toMonth(timestampMilliseconds, true)).toBe("12");
    expect(toMonth(timestampMilliseconds2)).toBe(3);
    expect(toMonth(timestampMilliseconds2, true)).toBe("03");
  });
});

describe("it should exist a toDay function", () => {
  it("should exist the method", () => {
    expect(toDay).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toDay()).toBe(null);
    expect(toDay(null)).toBe(null);
    expect(toDay("")).toBe(null);
    expect(
      toDay({
        test: 1,
      })
    ).toBe(null);
    expect(toDay(2)).toBe(null);
    expect(toDay(-2)).toBe(null);
  });

  it("should return a valid day", () => {
    expect(toDay(timestampMilliseconds)).toBe(23);
    expect(toDay(timestampMilliseconds, true)).toBe("23");

    expect(toDay(timestampMilliseconds2)).toBe(1);
    expect(toDay(timestampMilliseconds2, true)).toBe("01");
  });
});

describe("it should exist a toHours function", () => {
  it("should exist the method", () => {
    expect(toHours).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toHours()).toBe(null);
    expect(toHours(null)).toBe(null);
    expect(toHours("")).toBe(null);
    expect(
      toHours({
        test: 1,
      })
    ).toBe(null);
    expect(toHours(2)).toBe(null);
    expect(toHours(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(toHours(timestampMilliseconds)).toBe(18);
    expect(toHours(timestampMilliseconds, true)).toBe("18");

    expect(toHours(timestampMilliseconds2)).toBe(9);
    expect(toHours(timestampMilliseconds2, true)).toBe("09");
  });
});

describe("it should exist a toMinutes function", () => {
  it("should exist the method", () => {
    expect(toMinutes).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toMinutes()).toBe(null);
    expect(toMinutes(null)).toBe(null);
    expect(toMinutes("")).toBe(null);
    expect(
      toMinutes({
        test: 1,
      })
    ).toBe(null);
    expect(toMinutes(2)).toBe(null);
    expect(toMinutes(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(toMinutes(timestampMilliseconds)).toBe(7);
    expect(toMinutes(timestampMilliseconds, true)).toBe("07");

    expect(toMinutes(timestampMilliseconds2)).toBe(5);
    expect(toMinutes(timestampMilliseconds2, true)).toBe("05");
  });
});

describe("it should exist a date.toSeconds function", () => {
  it("should exist the method", () => {
    expect(toSeconds).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toSeconds()).toBe(null);
    expect(toSeconds(null)).toBe(null);
    expect(toSeconds("")).toBe(null);
    expect(
      toSeconds({
        test: 1,
      })
    ).toBe(null);
    expect(toSeconds(2)).toBe(null);
    expect(toSeconds(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(toSeconds(timestampMilliseconds)).toBe(45);
    expect(toSeconds(timestampMilliseconds, true)).toBe("45");

    expect(toSeconds(timestampMilliseconds2)).toBe(9);
    expect(toSeconds(timestampMilliseconds2, true)).toBe("09");
  });
});

describe("it should exist a toFormat function", () => {
  it("should exist the method", () => {
    expect(toFormat).not.toBeNull();
  });

  it("should return a null", () => {
    expect(toFormat()).toBe(null);
    expect(toFormat(null)).toBe(null);
    expect(toFormat("")).toBe(null);
    expect(
      toFormat({
        test: 1,
      })
    ).toBe(null);
    expect(toFormat(2)).toBe(null);
    expect(toFormat(-2)).toBe(null);
  });

  it("should return a valid formatted date", () => {
    expect(toFormat(timestampMilliseconds)).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(timestampMilliseconds, "yyyy-MM-DDTHH:mm:ssZ")).toBe(
      "2020-12-23T18:07:45+01:00"
    );
    expect(toFormat(timestampMilliseconds, "ddd MMM DD yyyy HH:mm:ss")).toBe(
      "Wed Dec 23 2020 18:07:45"
    );
    expect(toFormat(timestampMilliseconds, "DD/MM/yyyy")).toBe("23/12/2020");
    expect(toFormat(timestampMilliseconds, null, true)).toBe(
      "2020-12-23T17:07:45Z"
    );
  });
});
