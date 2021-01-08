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
} from "../../../src/date/format/string";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;

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
    expect(toDate("test")).toBe(null);
    expect(toDate("test", "YYYY MM DD")).toBe(null);
    expect(toDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid date", () => {
    expect(
      toDate("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z").getTime()
    ).toBe(timestampMilliseconds);
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
    expect(toLocaleDateString("test")).toBe(null);
    expect(toLocaleDateString("test", "YYYY MM DD")).toBe(null);
    expect(
      toLocaleDateString("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      toLocaleDateString("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      toLocaleDateString("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      toLocaleDateString("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      toLocaleDateString("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
  });

  it("should return a valid date string", () => {
    expect(
      toLocaleDateString("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe("2020-12-23");
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
    expect(toFullYear("test")).toBe(null);
    expect(toFullYear("test", "YYYY MM DD")).toBe(null);
    expect(toFullYear("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFullYear("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid year", () => {
    expect(
      toFullYear("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(2020);
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
    expect(toMonth("test")).toBe(null);
    expect(toMonth("test", "YYYY MM DD")).toBe(null);
    expect(toMonth("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMonth("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid month", () => {
    expect(toMonth("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      12
    );
    expect(
      toMonth("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("12");
    expect(toMonth("23/01/2021 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      1
    );
    expect(
      toMonth("23/01/2021 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("01");
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
    expect(toDay("test")).toBe(null);
    expect(toDay("test", "YYYY MM DD")).toBe(null);
    expect(toDay("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toDay("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid day", () => {
    expect(toDay("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      23
    );
    expect(
      toDay("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("23");

    expect(toDay("01/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(1);
    expect(
      toDay("01/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("01");
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
    expect(toHours("test")).toBe(null);
    expect(toHours("test", "YYYY MM DD")).toBe(null);
    expect(toHours("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toHours("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(toHours("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      18
    );
    expect(
      toHours("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("18");

    expect(toHours("23/12/2020 09:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      10
    );
    expect(
      toHours("23/12/2020 09:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("10");
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
    expect(toMinutes("test")).toBe(null);
    expect(toMinutes("test", "YYYY MM DD")).toBe(null);
    expect(toMinutes("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toMinutes("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(
      toMinutes("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(7);
    expect(
      toMinutes("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("07");

    expect(
      toMinutes("23/12/2020 17:05:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(5);
    expect(
      toMinutes("23/12/2020 17:05:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("05");
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
    expect(toSeconds("test")).toBe(null);
    expect(toSeconds("test", "YYYY MM DD")).toBe(null);
    expect(toSeconds("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toSeconds("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid hours", () => {
    expect(
      toSeconds("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(45);
    expect(
      toSeconds("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("45");

    expect(
      toSeconds("23/12/2020 17:07:09 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(9);
    expect(
      toSeconds("23/12/2020 17:07:09 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("09");
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
    expect(toFormat("test")).toBe(null);
    expect(toFormat("test", "YYYY MM DD")).toBe(null);
    expect(toFormat("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(null);
    expect(toFormat("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(null);
  });

  it("should return a valid formatted date", () => {
    expect(toFormat("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")).toBe(
      "2020-12-23T18:07:45+01:00"
    );
    expect(
      toFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "yyyy-MM-DDTHH:mm:ssZ"
      )
    ).toBe("2020-12-23T18:07:45+01:00");
    expect(
      toFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "ddd MMM DD yyyy HH:mm:ss"
      )
    ).toBe("Wed Dec 23 2020 18:07:45");
    expect(
      toFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "DD/MM/yyyy"
      )
    ).toBe("23/12/2020");
    expect(
      toFormat("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", null, true)
    ).toBe("2020-12-23T17:07:45Z");
  });
});
