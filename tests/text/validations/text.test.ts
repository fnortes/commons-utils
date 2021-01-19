import { isNull, isNotNull, isEmpty, isNotEmpty, isEmptyString, isNotEmptyString, isBlankString, isNotBlankString, isBlank, isNotBlank, isBase64Encoded } from "../../../src/text/validations/text";

describe("it should exist a isNull function", () => {
  test("should return true", () => {
    expect(isNull(undefined)).toBeTruthy();
    expect(isNull(null)).toBeTruthy();
  });

  test("should return false", () => {
    expect(isNull("")).toBeFalsy();
    expect(isNull("a")).toBeFalsy();
    expect(isNull(new Date())).toBeFalsy();
    expect(isNull(2)).toBeFalsy();
    expect(isNull(-2)).toBeFalsy();
    expect(isNull({ test: 1 })).toBeFalsy();
  });
});

describe("it should exist a isNotNull function", () => {
  test("should return false", () => {
    expect(isNotNull(undefined)).toBeFalsy();
    expect(isNotNull(null)).toBeFalsy();
  });

  test("should return true", () => {
    expect(isNotNull("")).toBeTruthy();
    expect(isNotNull("a")).toBeTruthy();
    expect(isNotNull(new Date())).toBeTruthy();
    expect(isNotNull(2)).toBeTruthy();
    expect(isNotNull(-2)).toBeTruthy();
    expect(isNotNull({ test: 1 })).toBeTruthy();
  });
});

describe("it should exist a isEmpty function", () => {
  test("should return true", () => {
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty("")).toBeTruthy();
  });

  test("should return false", () => {
    expect(isEmpty("a")).toBeFalsy();
    expect(isEmpty(new Date())).toBeFalsy();
    expect(isEmpty(2)).toBeFalsy();
    expect(isEmpty(-2)).toBeFalsy();
    expect(isEmpty({ test: 1 })).toBeFalsy();
  });
});

describe("it should exist a isNotEmpty function", () => {
  test("should return false", () => {
    expect(isNotEmpty(undefined)).toBeFalsy();
    expect(isNotEmpty(null)).toBeFalsy();
    expect(isNotEmpty("")).toBeFalsy();
  });

  test("should return true", () => {
    expect(isNotEmpty("a")).toBeTruthy();
    expect(isNotEmpty(new Date())).toBeTruthy();
    expect(isNotEmpty(2)).toBeTruthy();
    expect(isNotEmpty(-2)).toBeTruthy();
    expect(isNotEmpty({ test: 1 })).toBeTruthy();
  });
});

describe("it should exist a isEmptyString function", () => {
  test("should return true", () => {
    expect(isEmptyString("")).toBeTruthy();
  });

  test("should return false", () => {
    expect(isEmptyString(undefined)).toBeFalsy();
    expect(isEmptyString(null)).toBeFalsy();
    expect(isEmptyString(" ")).toBeFalsy();
    expect(isEmptyString("a")).toBeFalsy();
    expect(isEmptyString(new Date())).toBeFalsy();
    expect(isEmptyString(2)).toBeFalsy();
    expect(isEmptyString(-2)).toBeFalsy();
    expect(isEmptyString({ test: 1 })).toBeFalsy();
  });
});

describe("it should exist a isNotEmptyString function", () => {
  test("should return false", () => {
    expect(isNotEmptyString("")).toBeFalsy();
    expect(isNotEmptyString(undefined)).toBeFalsy();
    expect(isNotEmptyString(null)).toBeFalsy();
    expect(isNotEmptyString(new Date())).toBeFalsy();
    expect(isNotEmptyString(2)).toBeFalsy();
    expect(isNotEmptyString(-2)).toBeFalsy();
    expect(isNotEmptyString({ test: 1 })).toBeFalsy();
  });

  test("should return true", () => {
    expect(isNotEmptyString(" ")).toBeTruthy();
    expect(isNotEmptyString("a")).toBeTruthy();
  });
});

describe("it should exist a isBlankString function", () => {
  test("should return true", () => {
    expect(isBlankString("")).toBeTruthy();
    expect(isBlankString("  ")).toBeTruthy();
  });

  test("should return false", () => {
    expect(isBlankString(undefined)).toBeFalsy();
    expect(isBlankString(null)).toBeFalsy();
    expect(isBlankString("a")).toBeFalsy();
    expect(isBlankString(new Date())).toBeFalsy();
    expect(isBlankString(2)).toBeFalsy();
    expect(isBlankString(-2)).toBeFalsy();
    expect(isBlankString({ test: 1 })).toBeFalsy();
  });
});

describe("it should exist a isNotBlankString function", () => {
  test("should return false", () => {
    expect(isNotBlankString("")).toBeFalsy();
    expect(isNotBlankString("  ")).toBeFalsy();
    expect(isNotBlankString(undefined)).toBeFalsy();
    expect(isNotBlankString(null)).toBeFalsy();
    expect(isNotBlankString(new Date())).toBeFalsy();
    expect(isNotBlankString(2)).toBeFalsy();
    expect(isNotBlankString(-2)).toBeFalsy();
    expect(isNotBlankString({ test: 1 })).toBeFalsy();
  });

  test("should return true", () => {
    expect(isNotBlankString("a")).toBeTruthy();
  });
});

describe("it should exist a isBlank function", () => {
  test("should return true", () => {
    expect(isBlank("")).toBeTruthy();
    expect(isBlank("  ")).toBeTruthy();
    expect(isBlank(undefined)).toBeTruthy();
    expect(isBlank(null)).toBeTruthy();
  });

  test("should return false", () => {
    expect(isBlank("a")).toBeFalsy();
    expect(isBlank(new Date())).toBeFalsy();
    expect(isBlank(2)).toBeFalsy();
    expect(isBlank(-2)).toBeFalsy();
    expect(isBlank({ test: 1 })).toBeFalsy();
  });
});

describe("it should exist a isNotBlank function", () => {
  test("should return false", () => {
    expect(isNotBlank("")).toBeFalsy();
    expect(isNotBlank("  ")).toBeFalsy();
    expect(isNotBlank(undefined)).toBeFalsy();
    expect(isNotBlank(null)).toBeFalsy();
  });

  test("should return true", () => {
    expect(isNotBlank("a")).toBeTruthy();
    expect(isNotBlank(new Date())).toBeTruthy();
    expect(isNotBlank(2)).toBeTruthy();
    expect(isNotBlank(-2)).toBeTruthy();
    expect(isNotBlank({ test: 1 })).toBeTruthy();
  });
});

describe("it should exist a isBase64Encoded function", () => {
  test("should return false", () => {
    expect(isBase64Encoded(undefined)).toBeFalsy();
    expect(isBase64Encoded(null)).toBeFalsy();
    expect(isBase64Encoded("")).toBeFalsy();
    expect(isBase64Encoded("test text")).toBeFalsy();
    expect(isBase64Encoded(new Date())).toBeFalsy();
    expect(isBase64Encoded(2)).toBeFalsy();
    expect(isBase64Encoded(-2)).toBeFalsy();
    expect(isBase64Encoded({ test: 1 })).toBeFalsy();
  });

  test("should return true", () => {
    const validBase64Encoded =
      "U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=";
    expect(isBase64Encoded(validBase64Encoded)).toBeTruthy();
  });
});