import { isTimestamp, timestampIsValid, dateToTimestamp } from "../src/date";

describe("it should exist a date.isTimestamp function", () => {
  it("should exist the method", () => {
    expect(isTimestamp).not.toBeNull();
  });

  it("should return false", () => {
    expect(isTimestamp()).toBe(false);
    expect(isTimestamp(null)).toBe(false);
    expect(isTimestamp("")).toBe(false);
    expect(isTimestamp({ test: 1 })).toBe(false);
    expect(isTimestamp(2)).toBe(false);
    expect(isTimestamp(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(isTimestamp(new Date().getTime())).toBe(true);
  });
});

describe("it should exist a date.timestampIsValid function", () => {
  it("should exist the method", () => {
    expect(timestampIsValid).not.toBeNull();
  });

  it("should return false", () => {
    expect(timestampIsValid()).toBe(false);
    expect(timestampIsValid(null)).toBe(false);
    expect(timestampIsValid("")).toBe(false);
    expect(timestampIsValid({ test: 1 })).toBe(false);
    expect(timestampIsValid(2)).toBe(false);
    expect(timestampIsValid(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(timestampIsValid(new Date().getTime())).toBe(true);
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
    expect(dateToTimestamp({ test: 1 })).toBe(null);
  });

  it("should return a valid timestamp", () => {
    const dateTest = new Date();
    expect(dateToTimestamp(dateTest)).toBe(Date.parse(dateTest));
  });
});

// describe("it should exist a text.ellipsis function", () => {
//   it("should exist the method", () => {
//     expect(ellipsis).not.toBeNull();
//   });

//   it("should work fine with a undefined entry data", () => {
//     expect(ellipsis()).toBe("");
//   });

//   it("should work fine with a null entry data", () => {
//     console.log = jest.fn();

//     expect(ellipsis(null)).toBe(null);
//     expect(console.log).toHaveBeenCalledWith("'null' is not a string");
//   });

//   it("should work fine with a valid string", () => {
//     expect(ellipsis("")).toBe("");
//     expect(ellipsis("", 20)).toBe("");
//     expect(ellipsis("Test")).toBe("Test");
//     expect(ellipsis("Test", 10)).toBe("Test");
//     expect(ellipsis("Test", 3)).toBe("Tes ...");
//     expect(
//       ellipsis(
//         "Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
//       )
//     ).toBe("Test Test Test Test Test Test Test Test  ...");
//   });
// });

// describe("it should exist a text.decodeFromBase64 function", () => {
//   it("should exist the method", () => {
//     expect(decodeFromBase64).not.toBeNull();
//   });

//   it("should work fine with a undefined|null|empty string entry data", () => {
//     expect(decodeFromBase64()).toBe(null);
//     expect(decodeFromBase64(null)).toBe(null);
//     expect(decodeFromBase64("")).toBe(null);
//   });

//   it("should work fine with a not valid base64", () => {
//     console.log = jest.fn();

//     expect(decodeFromBase64("Prueba")).toBe(null);
//     expect(console.log).toHaveBeenCalledWith("'Prueba' is not a base64 data");
//   });

//   it("should work fine with a valid base64", () => {
//     expect(decodeFromBase64("VGVzdA==")).toBe("Test");
//   });
// });

// describe("it should exist a text.encodeToBase64 function", () => {
//   it("should exist the method", () => {
//     expect(encodeToBase64).not.toBeNull();
//   });

//   it("should work fine with a undefined|null|empty string entry data", () => {
//     expect(encodeToBase64()).toBe(null);
//     expect(encodeToBase64(null)).toBe(null);
//     expect(encodeToBase64("")).toBe(null);
//   });

//   it("should work fine with a valid string", () => {
//     expect(encodeToBase64("Test")).toBe("VGVzdA==");
//   });
// });

// describe("it should exist a text.toCamelCase function", () => {
//   it("should exist the method", () => {
//     expect(toCamelCase).not.toBeNull();
//   });

//   it("should work fine with a undefined|null|empty string entry data", () => {
//     expect(toCamelCase()).toBe(null);
//     expect(toCamelCase(null)).toBe(null);
//     expect(toCamelCase("")).toBe(null);
//     expect(toCamelCase(5)).toBe(null);
//   });

//   it("should work fine with a valid string", () => {
//     expect(toCamelCase("word_to_test")).toBe("wordToTest");
//     expect(toCamelCase("WORD_TO_TEST")).toBe("wordToTest");
//     expect(toCamelCase("WoRd_tO_Test")).toBe("wordToTest");
//     expect(toCamelCase("wordtotest")).toBe("wordtotest");
//   });
// });
