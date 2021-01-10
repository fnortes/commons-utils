import {
  stringToDate,
  stringToLocaleDateString,
  stringToFullYear,
  stringToMonth,
  stringToDay,
  stringToHours,
  stringToMinutes,
  stringToSeconds,
  stringToFormat,
} from "../../../src/date/format/string";

// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;

describe("it should exist a stringToDate function", () => {
  it("should exist the method", () => {
    expect(stringToDate).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToDate()).toBe(null);
    expect(stringToDate(null)).toBe(null);
    expect(stringToDate("")).toBe(null);
    expect(
      stringToDate({
        test: 1,
      })
    ).toBe(null);
    expect(stringToDate(2)).toBe(null);
    expect(stringToDate(-2)).toBe(null);
    expect(stringToDate("test")).toBe(null);
    expect(stringToDate("test", "YYYY MM DD")).toBe(null);
    expect(stringToDate("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDate("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDate("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDate("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDate("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid date", () => {
    expect(
      stringToDate(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z"
      ).getTime()
    ).toBe(timestampMilliseconds);
  });
});

describe("it should exist a stringToLocaleDateString function", () => {
  it("should exist the method", () => {
    expect(stringToLocaleDateString).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToLocaleDateString()).toBe(null);
    expect(stringToLocaleDateString(null)).toBe(null);
    expect(stringToLocaleDateString("")).toBe(null);
    expect(
      stringToLocaleDateString({
        test: 1,
      })
    ).toBe(null);
    expect(stringToLocaleDateString(2)).toBe(null);
    expect(stringToLocaleDateString(-2)).toBe(null);
    expect(stringToLocaleDateString("test")).toBe(null);
    expect(stringToLocaleDateString("test", "YYYY MM DD")).toBe(null);
    expect(
      stringToLocaleDateString("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      stringToLocaleDateString("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      stringToLocaleDateString("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      stringToLocaleDateString("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
    expect(
      stringToLocaleDateString("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")
    ).toBe(null);
  });

  it("should return a valid date string", () => {
    expect(
      stringToLocaleDateString(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z"
      )
    ).toBe("2020-12-23");
  });
});

describe("it should exist a stringToFullYear function", () => {
  it("should exist the method", () => {
    expect(stringToFullYear).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToFullYear()).toBe(null);
    expect(stringToFullYear(null)).toBe(null);
    expect(stringToFullYear("")).toBe(null);
    expect(
      stringToFullYear({
        test: 1,
      })
    ).toBe(null);
    expect(stringToFullYear(2)).toBe(null);
    expect(stringToFullYear(-2)).toBe(null);
    expect(stringToFullYear("test")).toBe(null);
    expect(stringToFullYear("test", "YYYY MM DD")).toBe(null);
    expect(stringToFullYear("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFullYear("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFullYear("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFullYear("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFullYear("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid year", () => {
    expect(
      stringToFullYear("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(2020);
  });
});

describe("it should exist a stringToMonth function", () => {
  it("should exist the method", () => {
    expect(stringToMonth).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToMonth()).toBe(null);
    expect(stringToMonth(null)).toBe(null);
    expect(stringToMonth("")).toBe(null);
    expect(
      stringToMonth({
        test: 1,
      })
    ).toBe(null);
    expect(stringToMonth(2)).toBe(null);
    expect(stringToMonth(-2)).toBe(null);
    expect(stringToMonth("test")).toBe(null);
    expect(stringToMonth("test", "YYYY MM DD")).toBe(null);
    expect(stringToMonth("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMonth("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMonth("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMonth("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMonth("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid month", () => {
    expect(
      stringToMonth("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(12);
    expect(
      stringToMonth("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("12");
    expect(
      stringToMonth("23/01/2021 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(1);
    expect(
      stringToMonth("23/01/2021 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("01");
  });
});

describe("it should exist a stringToDay function", () => {
  it("should exist the method", () => {
    expect(stringToDay).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToDay()).toBe(null);
    expect(stringToDay(null)).toBe(null);
    expect(stringToDay("")).toBe(null);
    expect(
      stringToDay({
        test: 1,
      })
    ).toBe(null);
    expect(stringToDay(2)).toBe(null);
    expect(stringToDay(-2)).toBe(null);
    expect(stringToDay("test")).toBe(null);
    expect(stringToDay("test", "YYYY MM DD")).toBe(null);
    expect(stringToDay("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDay("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDay("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDay("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToDay("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid day", () => {
    expect(
      stringToDay("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(23);
    expect(
      stringToDay("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("23");

    expect(
      stringToDay("01/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(1);
    expect(
      stringToDay("01/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("01");
  });
});

describe("it should exist a stringToHours function", () => {
  it("should exist the method", () => {
    expect(stringToHours).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToHours()).toBe(null);
    expect(stringToHours(null)).toBe(null);
    expect(stringToHours("")).toBe(null);
    expect(
      stringToHours({
        test: 1,
      })
    ).toBe(null);
    expect(stringToHours(2)).toBe(null);
    expect(stringToHours(-2)).toBe(null);
    expect(stringToHours("test")).toBe(null);
    expect(stringToHours("test", "YYYY MM DD")).toBe(null);
    expect(stringToHours("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToHours("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToHours("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToHours("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToHours("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid hours", () => {
    expect(
      stringToHours("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(18);
    expect(
      stringToHours("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("18");

    expect(
      stringToHours("23/12/2020 09:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(10);
    expect(
      stringToHours("23/12/2020 09:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z", true)
    ).toBe("10");
  });
});

describe("it should exist a stringToMinutes function", () => {
  it("should exist the method", () => {
    expect(stringToMinutes).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToMinutes()).toBe(null);
    expect(stringToMinutes(null)).toBe(null);
    expect(stringToMinutes("")).toBe(null);
    expect(
      stringToMinutes({
        test: 1,
      })
    ).toBe(null);
    expect(stringToMinutes(2)).toBe(null);
    expect(stringToMinutes(-2)).toBe(null);
    expect(stringToMinutes("test")).toBe(null);
    expect(stringToMinutes("test", "YYYY MM DD")).toBe(null);
    expect(stringToMinutes("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMinutes("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMinutes("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMinutes("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToMinutes("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid hours", () => {
    expect(
      stringToMinutes("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(7);
    expect(
      stringToMinutes(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        true
      )
    ).toBe("07");

    expect(
      stringToMinutes("23/12/2020 17:05:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(5);
    expect(
      stringToMinutes(
        "23/12/2020 17:05:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        true
      )
    ).toBe("05");
  });
});

describe("it should exist a stringToSeconds function", () => {
  it("should exist the method", () => {
    expect(stringToSeconds).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToSeconds()).toBe(null);
    expect(stringToSeconds(null)).toBe(null);
    expect(stringToSeconds("")).toBe(null);
    expect(
      stringToSeconds({
        test: 1,
      })
    ).toBe(null);
    expect(stringToSeconds(2)).toBe(null);
    expect(stringToSeconds(-2)).toBe(null);
    expect(stringToSeconds("test")).toBe(null);
    expect(stringToSeconds("test", "YYYY MM DD")).toBe(null);
    expect(stringToSeconds("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToSeconds("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToSeconds("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToSeconds("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToSeconds("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid hours", () => {
    expect(
      stringToSeconds("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(45);
    expect(
      stringToSeconds(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        true
      )
    ).toBe("45");

    expect(
      stringToSeconds("23/12/2020 17:07:09 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe(9);
    expect(
      stringToSeconds(
        "23/12/2020 17:07:09 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        true
      )
    ).toBe("09");
  });
});

describe("it should exist a stringToFormat function", () => {
  it("should exist the method", () => {
    expect(stringToFormat).not.toBeNull();
  });

  it("should return a null", () => {
    expect(stringToFormat()).toBe(null);
    expect(stringToFormat(null)).toBe(null);
    expect(stringToFormat("")).toBe(null);
    expect(
      stringToFormat({
        test: 1,
      })
    ).toBe(null);
    expect(stringToFormat(2)).toBe(null);
    expect(stringToFormat(-2)).toBe(null);
    expect(stringToFormat("test")).toBe(null);
    expect(stringToFormat("test", "YYYY MM DD")).toBe(null);
    expect(stringToFormat("15/13/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFormat("32/07/1983 20:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFormat("15/07/1983 26:45:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFormat("15/07/1983 20:61:13", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
    expect(stringToFormat("15/07/1983 20:45:61", "DD/MM/YYYY HH:mm:ss")).toBe(
      null
    );
  });

  it("should return a valid formatted date", () => {
    expect(
      stringToFormat("23/12/2020 17:07:45 +0000", "DD/MM/YYYY HH:mm:ss Z")
    ).toBe("2020-12-23T18:07:45+01:00");
    expect(
      stringToFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "yyyy-MM-DDTHH:mm:ssZ"
      )
    ).toBe("2020-12-23T18:07:45+01:00");
    expect(
      stringToFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "ddd MMM DD yyyy HH:mm:ss"
      )
    ).toBe("Wed Dec 23 2020 18:07:45");
    expect(
      stringToFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        "DD/MM/yyyy"
      )
    ).toBe("23/12/2020");
    expect(
      stringToFormat(
        "23/12/2020 17:07:45 +0000",
        "DD/MM/YYYY HH:mm:ss Z",
        null,
        true
      )
    ).toBe("2020-12-23T17:07:45Z");
  });
});
