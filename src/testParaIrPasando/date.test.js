// import {
//   timestampToFullYear,
//   dateToMonth,
//   timestampToMonth,
//   dateToDay,
//   timestampToDay,
//   dateToHours,
//   timestampToHours,
//   dateToMinutes,
//   timestampToMinutes,
//   dateToSeconds,
//   timestampToSeconds,
//   dateTimeToFormat,
//   timestampToFormat
// } from "../src/date/date";

describe("it should exist a to delete function", () => {
  it("should exist the method", () => {});
});

// describe("it should exist a date.timestampToFullYear function", () => {
//   it("should exist the method", () => {
//     expect(timestampToFullYear).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToFullYear()).toBe(null);
//     expect(timestampToFullYear(null)).toBe(null);
//     expect(timestampToFullYear("")).toBe(null);
//     expect(
//       timestampToFullYear({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToFullYear(2)).toBe(null);
//     expect(timestampToFullYear(-2)).toBe(null);
//   });

//   it("should return a valid year", () => {
//     expect(timestampToFullYear(timestampMilliseconds)).toBe(2020);
//     expect(timestampToFullYear(timestampMilliseconds2)).toBe(2021);
//   });
// });

// describe("it should exist a date.dateToMonth function", () => {
//   it("should exist the method", () => {
//     expect(dateToMonth).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateToMonth()).toBe(null);
//     expect(dateToMonth(null)).toBe(null);
//     expect(dateToMonth("")).toBe(null);
//     expect(
//       dateToMonth({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateToMonth(2)).toBe(null);
//     expect(dateToMonth(-2)).toBe(null);
//   });

//   it("should return a valid month", () => {
//     expect(dateToMonth(testDate)).toBe(12);
//     expect(dateToMonth(testDate, true)).toBe("12");
//     expect(dateToMonth(testDate2)).toBe(3);
//     expect(dateToMonth(testDate2, true)).toBe("03");
//   });
// });

// describe("it should exist a date.timestampToMonth function", () => {
//   it("should exist the method", () => {
//     expect(timestampToMonth).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToMonth()).toBe(null);
//     expect(timestampToMonth(null)).toBe(null);
//     expect(timestampToMonth("")).toBe(null);
//     expect(
//       timestampToMonth({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToMonth(2)).toBe(null);
//     expect(timestampToMonth(-2)).toBe(null);
//   });

//   it("should return a valid month", () => {
//     expect(timestampToMonth(timestampMilliseconds)).toBe(12);
//     expect(timestampToMonth(timestampMilliseconds, true)).toBe("12");
//     expect(timestampToMonth(timestampMilliseconds2)).toBe(3);
//     expect(timestampToMonth(timestampMilliseconds2, true)).toBe("03");
//   });
// });

// describe("it should exist a date.dateToDay function", () => {
//   it("should exist the method", () => {
//     expect(dateToDay).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateToDay()).toBe(null);
//     expect(dateToDay(null)).toBe(null);
//     expect(dateToDay("")).toBe(null);
//     expect(
//       dateToDay({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateToDay(2)).toBe(null);
//     expect(dateToDay(-2)).toBe(null);
//   });

//   it("should return a valid day", () => {
//     expect(dateToDay(testDate)).toBe(23);
//     expect(dateToDay(testDate, true)).toBe("23");

//     expect(dateToDay(testDate2)).toBe(1);
//     expect(dateToDay(testDate2, true)).toBe("01");
//   });
// });

// describe("it should exist a date.timestampToDay function", () => {
//   it("should exist the method", () => {
//     expect(timestampToDay).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToDay()).toBe(null);
//     expect(timestampToDay(null)).toBe(null);
//     expect(timestampToDay("")).toBe(null);
//     expect(
//       timestampToDay({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToDay(2)).toBe(null);
//     expect(timestampToDay(-2)).toBe(null);
//   });

//   it("should return a valid day", () => {
//     expect(timestampToDay(timestampMilliseconds)).toBe(23);
//     expect(timestampToDay(timestampMilliseconds, true)).toBe("23");

//     expect(timestampToDay(timestampMilliseconds2)).toBe(1);
//     expect(timestampToDay(timestampMilliseconds2, true)).toBe("01");
//   });
// });

// describe("it should exist a date.dateToHours function", () => {
//   it("should exist the method", () => {
//     expect(dateToHours).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateToHours()).toBe(null);
//     expect(dateToHours(null)).toBe(null);
//     expect(dateToHours("")).toBe(null);
//     expect(
//       dateToHours({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateToHours(2)).toBe(null);
//     expect(dateToHours(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(dateToHours(testDate)).toBe(18);
//     expect(dateToHours(testDate, true)).toBe("18");

//     expect(dateToHours(testDate2)).toBe(9);
//     expect(dateToHours(testDate2, true)).toBe("09");
//   });
// });

// describe("it should exist a date.timestampToHours function", () => {
//   it("should exist the method", () => {
//     expect(timestampToHours).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToHours()).toBe(null);
//     expect(timestampToHours(null)).toBe(null);
//     expect(timestampToHours("")).toBe(null);
//     expect(
//       timestampToHours({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToHours(2)).toBe(null);
//     expect(timestampToHours(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(timestampToHours(timestampMilliseconds)).toBe(18);
//     expect(timestampToHours(timestampMilliseconds, true)).toBe("18");

//     expect(timestampToHours(timestampMilliseconds2)).toBe(9);
//     expect(timestampToHours(timestampMilliseconds2, true)).toBe("09");
//   });
// });

// describe("it should exist a date.dateToMinutes function", () => {
//   it("should exist the method", () => {
//     expect(dateToMinutes).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateToMinutes()).toBe(null);
//     expect(dateToMinutes(null)).toBe(null);
//     expect(dateToMinutes("")).toBe(null);
//     expect(
//       dateToMinutes({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateToMinutes(2)).toBe(null);
//     expect(dateToMinutes(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(dateToMinutes(testDate)).toBe(7);
//     expect(dateToMinutes(testDate, true)).toBe("07");

//     expect(dateToMinutes(testDate2)).toBe(5);
//     expect(dateToMinutes(testDate2, true)).toBe("05");
//   });
// });

// describe("it should exist a date.timestampToMinutes function", () => {
//   it("should exist the method", () => {
//     expect(timestampToMinutes).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToMinutes()).toBe(null);
//     expect(timestampToMinutes(null)).toBe(null);
//     expect(timestampToMinutes("")).toBe(null);
//     expect(
//       timestampToMinutes({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToMinutes(2)).toBe(null);
//     expect(timestampToMinutes(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(timestampToMinutes(timestampMilliseconds)).toBe(7);
//     expect(timestampToMinutes(timestampMilliseconds, true)).toBe("07");

//     expect(timestampToMinutes(timestampMilliseconds2)).toBe(5);
//     expect(timestampToMinutes(timestampMilliseconds2, true)).toBe("05");
//   });
// });

// describe("it should exist a date.dateToSeconds function", () => {
//   it("should exist the method", () => {
//     expect(dateToSeconds).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateToSeconds()).toBe(null);
//     expect(dateToSeconds(null)).toBe(null);
//     expect(dateToSeconds("")).toBe(null);
//     expect(
//       dateToSeconds({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateToSeconds(2)).toBe(null);
//     expect(dateToSeconds(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(dateToSeconds(testDate)).toBe(45);
//     expect(dateToSeconds(testDate, true)).toBe("45");

//     expect(dateToSeconds(testDate2)).toBe(9);
//     expect(dateToSeconds(testDate2, true)).toBe("09");
//   });
// });

// describe("it should exist a date.timestampToSeconds function", () => {
//   it("should exist the method", () => {
//     expect(timestampToSeconds).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToSeconds()).toBe(null);
//     expect(timestampToSeconds(null)).toBe(null);
//     expect(timestampToSeconds("")).toBe(null);
//     expect(
//       timestampToSeconds({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToSeconds(2)).toBe(null);
//     expect(timestampToSeconds(-2)).toBe(null);
//   });

//   it("should return a valid hours", () => {
//     expect(timestampToSeconds(timestampMilliseconds)).toBe(45);
//     expect(timestampToSeconds(timestampMilliseconds, true)).toBe("45");

//     expect(timestampToSeconds(timestampMilliseconds2)).toBe(9);
//     expect(timestampToSeconds(timestampMilliseconds2, true)).toBe("09");
//   });
// });

// describe("it should exist a date.dateTimeToFormat function", () => {
//   it("should exist the method", () => {
//     expect(dateTimeToFormat).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(dateTimeToFormat()).toBe(null);
//     expect(dateTimeToFormat(null)).toBe(null);
//     expect(dateTimeToFormat("")).toBe(null);
//     expect(
//       dateTimeToFormat({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(dateTimeToFormat(2)).toBe(null);
//     expect(dateTimeToFormat(-2)).toBe(null);
//   });

//   it("should return a valid formatted date", () => {
//     expect(dateTimeToFormat(testDate)).toBe("2020-12-23T18:07:45+01:00");
//     expect(dateTimeToFormat(testDate, "yyyy-MM-DDTHH:mm:ssZ")).toBe("2020-12-23T18:07:45+01:00");
//     expect(dateTimeToFormat(testDate, "ddd MMM DD yyyy HH:mm:ss")).toBe("Wed Dec 23 2020 18:07:45");
//     expect(dateTimeToFormat(testDate, "DD/MM/yyyy")).toBe("23/12/2020");
//     expect(dateTimeToFormat(testDate, null, true)).toBe("2020-12-23T17:07:45Z");
//   });
// });

// describe("it should exist a date.timestampToFormat function", () => {
//   it("should exist the method", () => {
//     expect(timestampToFormat).not.toBeNull();
//   });

//   it("should return a null", () => {
//     expect(timestampToFormat()).toBe(null);
//     expect(timestampToFormat(null)).toBe(null);
//     expect(timestampToFormat("")).toBe(null);
//     expect(
//       timestampToFormat({
//         test: 1,
//       })
//     ).toBe(null);
//     expect(timestampToFormat(2)).toBe(null);
//     expect(timestampToFormat(-2)).toBe(null);
//   });

//   it("should return a valid formatted date", () => {
//     expect(timestampToFormat(timestampMilliseconds)).toBe("2020-12-23T18:07:45+01:00");
//     expect(timestampToFormat(timestampMilliseconds, "yyyy-MM-DDTHH:mm:ssZ")).toBe("2020-12-23T18:07:45+01:00");
//     expect(timestampToFormat(timestampMilliseconds, "ddd MMM DD yyyy HH:mm:ss")).toBe("Wed Dec 23 2020 18:07:45");
//     expect(timestampToFormat(timestampMilliseconds, "DD/MM/yyyy")).toBe("23/12/2020");
//     expect(timestampToFormat(timestampMilliseconds, null, true)).toBe("2020-12-23T17:07:45Z");
//   });
// });
