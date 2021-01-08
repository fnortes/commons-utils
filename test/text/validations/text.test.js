import {
  isNull,
  isNotNull,
  isEmpty,
  isNotEmpty,
  isEmptyString,
  isNotEmptyString,
  isBlankString,
  isNotBlankString,
  isBlank,
  isNotBlank,
  isBase64Encoded,
} from "../../../src/text/validations/text";

describe("it should exist a isNull function", () => {
  it("should exist the method", () => {
    expect(isNull).not.toBeNull();
  });

  it("should return true", () => {
    expect(isNull()).toBe(true);
    expect(isNull(null)).toBe(true);
  });

  it("should return false", () => {
    expect(isNull("")).toBe(false);
    expect(isNull("a")).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(2)).toBe(false);
    expect(isNull(-2)).toBe(false);
    expect(
      isNull({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotNull function", () => {
  it("should exist the method", () => {
    expect(isNotNull).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotNull()).toBe(false);
    expect(isNotNull(null)).toBe(false);
  });

  it("should return true", () => {
    expect(isNotNull("")).toBe(true);
    expect(isNotNull("a")).toBe(true);
    expect(isNotNull(new Date())).toBe(true);
    expect(isNotNull(2)).toBe(true);
    expect(isNotNull(-2)).toBe(true);
    expect(
      isNotNull({
        test: 1,
      })
    ).toBe(true);
  });
});

describe("it should exist a isEmpty function", () => {
  it("should exist the method", () => {
    expect(isEmpty).not.toBeNull();
  });

  it("should return true", () => {
    expect(isEmpty()).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty("")).toBe(true);
  });

  it("should return false", () => {
    expect(isEmpty("a")).toBe(false);
    expect(isEmpty(new Date())).toBe(false);
    expect(isEmpty(2)).toBe(false);
    expect(isEmpty(-2)).toBe(false);
    expect(
      isEmpty({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotEmpty function", () => {
  it("should exist the method", () => {
    expect(isNotEmpty).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotEmpty()).toBe(false);
    expect(isNotEmpty(null)).toBe(false);
    expect(isNotEmpty("")).toBe(false);
  });

  it("should return true", () => {
    expect(isNotEmpty("a")).toBe(true);
    expect(isNotEmpty(new Date())).toBe(true);
    expect(isNotEmpty(2)).toBe(true);
    expect(isNotEmpty(-2)).toBe(true);
    expect(
      isNotEmpty({
        test: 1,
      })
    ).toBe(true);
  });
});

describe("it should exist a isEmptyString function", () => {
  it("should exist the method", () => {
    expect(isEmptyString).not.toBeNull();
  });

  it("should return true", () => {
    expect(isEmptyString("")).toBe(true);
  });

  it("should return false", () => {
    expect(isEmptyString()).toBe(false);
    expect(isEmptyString(null)).toBe(false);
    expect(isEmptyString(" ")).toBe(false);
    expect(isEmptyString("a")).toBe(false);
    expect(isEmptyString(new Date())).toBe(false);
    expect(isEmptyString(2)).toBe(false);
    expect(isEmptyString(-2)).toBe(false);
    expect(
      isEmptyString({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotEmptyString function", () => {
  it("should exist the method", () => {
    expect(isNotEmptyString).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotEmptyString("")).toBe(false);
    expect(isNotEmptyString()).toBe(false);
    expect(isNotEmptyString(null)).toBe(false);
    expect(isNotEmptyString(new Date())).toBe(false);
    expect(isNotEmptyString(2)).toBe(false);
    expect(isNotEmptyString(-2)).toBe(false);
    expect(
      isNotEmptyString({
        test: 1,
      })
    ).toBe(false);
  });

  it("should return true", () => {
    expect(isNotEmptyString(" ")).toBe(true);
    expect(isNotEmptyString("a")).toBe(true);
  });
});

describe("it should exist a isBlankString function", () => {
  it("should exist the method", () => {
    expect(isBlankString).not.toBeNull();
  });

  it("should return true", () => {
    expect(isBlankString("")).toBe(true);
    expect(isBlankString("  ")).toBe(true);
  });

  it("should return false", () => {
    expect(isBlankString()).toBe(false);
    expect(isBlankString(null)).toBe(false);
    expect(isBlankString("a")).toBe(false);
    expect(isBlankString(new Date())).toBe(false);
    expect(isBlankString(2)).toBe(false);
    expect(isBlankString(-2)).toBe(false);
    expect(
      isBlankString({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotBlankString function", () => {
  it("should exist the method", () => {
    expect(isNotBlankString).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotBlankString("")).toBe(false);
    expect(isNotBlankString("  ")).toBe(false);
    expect(isNotBlankString()).toBe(false);
    expect(isNotBlankString(null)).toBe(false);
    expect(isNotBlankString(new Date())).toBe(false);
    expect(isNotBlankString(2)).toBe(false);
    expect(isNotBlankString(-2)).toBe(false);
    expect(
      isNotBlankString({
        test: 1,
      })
    ).toBe(false);
  });

  it("should return true", () => {
    expect(isNotBlankString("a")).toBe(true);
  });
});

describe("it should exist a isBlank function", () => {
  it("should exist the method", () => {
    expect(isBlank).not.toBeNull();
  });

  it("should return true", () => {
    expect(isBlank("")).toBe(true);
    expect(isBlank("  ")).toBe(true);
    expect(isBlank()).toBe(true);
    expect(isBlank(null)).toBe(true);
  });

  it("should return false", () => {
    expect(isBlank("a")).toBe(false);
    expect(isBlank(new Date())).toBe(false);
    expect(isBlank(2)).toBe(false);
    expect(isBlank(-2)).toBe(false);
    expect(
      isBlank({
        test: 1,
      })
    ).toBe(false);
  });
});

describe("it should exist a isNotBlank function", () => {
  it("should exist the method", () => {
    expect(isNotBlank).not.toBeNull();
  });

  it("should return false", () => {
    expect(isNotBlank("")).toBe(false);
    expect(isNotBlank("  ")).toBe(false);
    expect(isNotBlank()).toBe(false);
    expect(isNotBlank(null)).toBe(false);
  });

  it("should return true", () => {
    expect(isNotBlank("a")).toBe(true);
    expect(isNotBlank(new Date())).toBe(true);
    expect(isNotBlank(2)).toBe(true);
    expect(isNotBlank(-2)).toBe(true);
    expect(
      isNotBlank({
        test: 1,
      })
    ).toBe(true);
  });
});

describe("it should exist a isBase64Encoded function", () => {
  it("should exist the method", () => {
    expect(isBase64Encoded).not.toBeNull();
  });

  it("should return false", () => {
    expect(isBase64Encoded()).toBe(false);
    expect(isBase64Encoded(null)).toBe(false);
    expect(isBase64Encoded("")).toBe(false);
    expect(isBase64Encoded("test text")).toBe(false);
    expect(isBase64Encoded(new Date())).toBe(false);
    expect(isBase64Encoded(2)).toBe(false);
    expect(isBase64Encoded(-2)).toBe(false);
    expect(
      isBase64Encoded({
        test: 1,
      })
    ).toBe(false);
  });

  it("should return true", () => {
    const validBase64Encoded =
      "U29tZVN0cmluZ09idmlvdXNseU5vdEJhc2U2NEVuY29kZWQ=";
    expect(isBase64Encoded(validBase64Encoded)).toBe(true);
  });
});
