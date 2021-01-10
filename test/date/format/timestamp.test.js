import {
  timestampToDate,
  timestampToLocaleDateString,
  timestampToFullYear,
  timestampToMonth,
  timestampToDay,
  timestampToHours,
  timestampToMinutes,
  timestampToSeconds,
  timestampToFormat,
} from "../../../src/date/format/timestamp";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;
const testDate = new Date(timestampMilliseconds);
// Another test date: 2021-03-01 / 09:05:09
const timestampMilliseconds2 = 1614585909 * 1000;

describe("it should exist a timestampToDate function", () => {
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
    expect(timestampToDate(timestampMilliseconds)).toStrictEqual(testDate);
  });
});

describe("it should exist a timestampToLocaleDateString function", () => {
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
    expect(timestampToLocaleDateString(timestampMilliseconds)).toBe(
      "2020-12-23"
    );
  });
});

describe("it should exist a timestampToFullYear function", () => {
  it("should exist the method", () => {
    expect(timestampToFullYear).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToFullYear()).toBe(null);
    expect(timestampToFullYear(null)).toBe(null);
    expect(timestampToFullYear("")).toBe(null);
    expect(
      timestampToFullYear({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToFullYear(2)).toBe(null);
    expect(timestampToFullYear(-2)).toBe(null);
  });

  it("should return a valid year", () => {
    expect(timestampToFullYear(timestampMilliseconds)).toBe(2020);
    expect(timestampToFullYear(timestampMilliseconds2)).toBe(2021);
  });
});

describe("it should exist a timestampToMonth function", () => {
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
    expect(timestampToMonth(timestampMilliseconds2)).toBe(3);
    expect(timestampToMonth(timestampMilliseconds2, true)).toBe("03");
  });
});

describe("it should exist a timestampToDay function", () => {
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
    expect(timestampToDay(timestampMilliseconds)).toBe(23);
    expect(timestampToDay(timestampMilliseconds, true)).toBe("23");

    expect(timestampToDay(timestampMilliseconds2)).toBe(1);
    expect(timestampToDay(timestampMilliseconds2, true)).toBe("01");
  });
});

describe("it should exist a timestampToHours function", () => {
  it("should exist the method", () => {
    expect(timestampToHours).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToHours()).toBe(null);
    expect(timestampToHours(null)).toBe(null);
    expect(timestampToHours("")).toBe(null);
    expect(
      timestampToHours({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToHours(2)).toBe(null);
    expect(timestampToHours(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(timestampToHours(timestampMilliseconds)).toBe(18);
    expect(timestampToHours(timestampMilliseconds, true)).toBe("18");

    expect(timestampToHours(timestampMilliseconds2)).toBe(9);
    expect(timestampToHours(timestampMilliseconds2, true)).toBe("09");
  });
});

describe("it should exist a timestampToMinutes function", () => {
  it("should exist the method", () => {
    expect(timestampToMinutes).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToMinutes()).toBe(null);
    expect(timestampToMinutes(null)).toBe(null);
    expect(timestampToMinutes("")).toBe(null);
    expect(
      timestampToMinutes({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToMinutes(2)).toBe(null);
    expect(timestampToMinutes(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(timestampToMinutes(timestampMilliseconds)).toBe(7);
    expect(timestampToMinutes(timestampMilliseconds, true)).toBe("07");

    expect(timestampToMinutes(timestampMilliseconds2)).toBe(5);
    expect(timestampToMinutes(timestampMilliseconds2, true)).toBe("05");
  });
});

describe("it should exist a date.timestampToSeconds function", () => {
  it("should exist the method", () => {
    expect(timestampToSeconds).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToSeconds()).toBe(null);
    expect(timestampToSeconds(null)).toBe(null);
    expect(timestampToSeconds("")).toBe(null);
    expect(
      timestampToSeconds({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToSeconds(2)).toBe(null);
    expect(timestampToSeconds(-2)).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(timestampToSeconds(timestampMilliseconds)).toBe(45);
    expect(timestampToSeconds(timestampMilliseconds, true)).toBe("45");

    expect(timestampToSeconds(timestampMilliseconds2)).toBe(9);
    expect(timestampToSeconds(timestampMilliseconds2, true)).toBe("09");
  });
});

describe("it should exist a timestampToFormat function", () => {
  it("should exist the method", () => {
    expect(timestampToFormat).not.toBeNull();
  });

  it("should return a null", () => {
    expect(timestampToFormat()).toBe(null);
    expect(timestampToFormat(null)).toBe(null);
    expect(timestampToFormat("")).toBe(null);
    expect(
      timestampToFormat({
        test: 1,
      })
    ).toBe(null);
    expect(timestampToFormat(2)).toBe(null);
    expect(timestampToFormat(-2)).toBe(null);
  });

  it("should return a valid formatted date", () => {
    expect(timestampToFormat(timestampMilliseconds)).toBe(
      "2020-12-23T18:07:45+01:00"
    );
    expect(
      timestampToFormat(timestampMilliseconds, "yyyy-MM-DDTHH:mm:ssZ")
    ).toBe("2020-12-23T18:07:45+01:00");
    expect(
      timestampToFormat(timestampMilliseconds, "ddd MMM DD yyyy HH:mm:ss")
    ).toBe("Wed Dec 23 2020 18:07:45");
    expect(timestampToFormat(timestampMilliseconds, "DD/MM/yyyy")).toBe(
      "23/12/2020"
    );
    expect(timestampToFormat(timestampMilliseconds, null, true)).toBe(
      "2020-12-23T17:07:45Z"
    );
  });
});
