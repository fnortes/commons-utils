import { leftPad, pretty, copyToClipboard, ellipsis, decodeFromBase64, encodeToBase64, toCamelCase } from "../../../src/text/format/text";
import { jsonPretty } from "../../../src/file/format/json";
import { xmlPretty } from "../../../src/file/format/xml";

const validJson: string = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;
const validXml: string = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading>
        <body>Hello</body></note>`;

describe("it should exist a leftPad function", () => {

  test("should return null", () => {
    expect(leftPad(null)).toBe(null);
  });

  test("should work fine with default values", () => {
    expect(leftPad("")).toBe("00");
    expect(leftPad("a")).toBe("0a");
    expect(leftPad("a", 1)).toBe("a");
    expect(leftPad("", 3)).toBe("000");
    expect(leftPad("a", 3)).toBe("00a");
  });

  test("should work fine with strings", () => {
    expect(leftPad("", 1, "-")).toBe("-");
    expect(leftPad("a", 4, "-")).toBe("---a");
  });

  test("should work fine with numbers", () => {
    expect(leftPad(1)).toBe("01");
    expect(leftPad(1.1)).toBe("1.1");
    expect(leftPad(1.1, 4)).toBe("01.1");
    expect(leftPad(1, 3)).toBe("001");
    expect(leftPad(1, 4, "-")).toBe("---1");
  });
});

describe("it should exist a pretty function", () => {
  test("should return a empty string", () => {
    expect(pretty()).toBe("");
    expect(pretty("")).toBe("");
    expect(pretty("", "string")).toBe("");
  });

  test("should return a null", () => {
    expect(pretty("", "xml")).toBe(null);
    expect(pretty("", "json")).toBe(null);
    expect(pretty("Test", "xml")).toBe(null);
    expect(pretty("Test", "json")).toBe(null);
  });

  test("should return 'Test'", () => {
    expect(pretty("Test")).toBe("Test");
    expect(pretty("Test", "string")).toBe("Test");
  });

  test("should return a valid XML", () => {
    expect(pretty(validXml, "xml")).toBe(xmlPretty(validXml));
  });

  test("should return a valid JSON", () => {
    expect(pretty(validJson, "json")).toBe(jsonPretty(validJson));
  });
});

describe("it should exist a copyToClipboard function", () => {
  test("should exist the method", () => {
    expect(copyToClipboard).not.toBeNull();
  });

  test("should exist the method", () => {
    document.execCommand = jest.fn();
    copyToClipboard("Test");
    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });
});

describe("it should exist a ellipsis function", () => {
  test("should exist the method", () => {
    expect(ellipsis).not.toBeNull();
  });

  test("should return a null", () => {
    expect(ellipsis(null)).toBe(null);
  });

  test("should work fine with a valid string", () => {
    expect(ellipsis("")).toBe("");
    expect(ellipsis("", 20)).toBe("");
    expect(ellipsis("Test")).toBe("Test");
    expect(ellipsis("Test", 10)).toBe("Test");
    expect(ellipsis("Test", 3)).toBe("Tes ...");
    expect(
      ellipsis(
        "Test Test Test Test Test Test Test Test Test Test Test Test Test Test "
      )
    ).toBe("Test Test Test Test Test Test Test Test  ...");
  });
});

describe("it should exist a decodeFromBase64 function", () => {
  test("should exist the method", () => {
    expect(decodeFromBase64).not.toBeNull();
  });

  test("should work fine with a undefined|null|empty|not valid string entry data", () => {
    expect(decodeFromBase64("")).toBe(null);
    expect(decodeFromBase64("test text")).toBe(null);
  });

  test("should work fine with a valid base64", () => {
    expect(decodeFromBase64("VGVzdA==")).toBe("Test");
  });
});

describe("it should exist a encodeToBase64 function", () => {
  test("should exist the method", () => {
    expect(encodeToBase64).not.toBeNull();
  });

  test("should work fine with a not valid string entry data", () => {
    expect(encodeToBase64("")).toBe(null);
  });

  test("should work fine with a valid string", () => {
    expect(encodeToBase64("Test")).toBe("VGVzdA==");
  });
});

describe("it should exist a text.toCamelCase function", () => {
  test("should exist the method", () => {
    expect(toCamelCase).not.toBeNull();
  });

  test("should work fine with a undefined|null|empty string entry data", () => {
    expect(toCamelCase("")).toBe(null);
  });

  test("should work fine with a valid string", () => {
    expect(toCamelCase("word_to_test")).toBe("wordToTest");
    expect(toCamelCase("WORD_TO_TEST")).toBe("wordToTest");
    expect(toCamelCase("WoRd_tO_Test")).toBe("wordToTest");
    expect(toCamelCase("wordtotest")).toBe("wordtotest");
  });
});