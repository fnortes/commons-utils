import {
  toTimestamp,
  toFullYear,
  toMonth,
  toDay,
  toHours,
  toMinutes,
  toSeconds,
  toFormat,
} from "../../../src/date/format/date";

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
    expect(toMonth(testDate)).toBe(12);
    expect(toMonth(testDate, true)).toBe("12");
    expect(toMonth(testDate2)).toBe(3);
    expect(toMonth(testDate2, true)).toBe("03");
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
    expect(toDay(testDate)).toBe(23);
    expect(toDay(testDate, true)).toBe("23");

    expect(toDay(testDate2)).toBe(1);
    expect(toDay(testDate2, true)).toBe("01");
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
    expect(toHours(testDate)).toBe(18);
    expect(toHours(testDate, true)).toBe("18");

    expect(toHours(testDate2)).toBe(9);
    expect(toHours(testDate2, true)).toBe("09");
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
    expect(toMinutes(testDate)).toBe(7);
    expect(toMinutes(testDate, true)).toBe("07");

    expect(toMinutes(testDate2)).toBe(5);
    expect(toMinutes(testDate2, true)).toBe("05");
  });
});

describe("it should exist a toSeconds function", () => {
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
    expect(toSeconds(testDate)).toBe(45);
    expect(toSeconds(testDate, true)).toBe("45");

    expect(toSeconds(testDate2)).toBe(9);
    expect(toSeconds(testDate2, true)).toBe("09");
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
    expect(toFormat(testDate)).toBe("2020-12-23T18:07:45+01:00");
    expect(toFormat(testDate, "yyyy-MM-DDTHH:mm:ssZ")).toBe(
      "2020-12-23T18:07:45+01:00"
    );
    expect(toFormat(testDate, "ddd MMM DD yyyy HH:mm:ss")).toBe(
      "Wed Dec 23 2020 18:07:45"
    );
    expect(toFormat(testDate, "DD/MM/yyyy")).toBe("23/12/2020");
    expect(toFormat(testDate, null, true)).toBe("2020-12-23T17:07:45Z");
  });
});
