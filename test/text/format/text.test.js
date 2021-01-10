import {
  leftPad,
  pretty,
  copyToClipboard,
  ellipsis,
  decodeFromBase64,
  encodeToBase64,
  toCamelCase,
} from "../../../src/text/format/text";
import text from "../../../src/text/format/text";
import json from "../../../src/file/format/json";
import xml from "../../../src/file/format/xml";

const validJson = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;
const validXml = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading>
        <body>Hello</body></note>`;
// Test Date: 2020-12-23 / 18:07:45
const timestampMilliseconds = 1608743265 * 1000;
const testDate = new Date(timestampMilliseconds);

describe("it should exist a leftPad function", () => {
  it("should exist the method", () => {
    expect(leftPad).not.toBeNull();
  });

  it("should return null", () => {
    expect(leftPad()).toBe(null);
    expect(leftPad(null)).toBe(null);
  });

  it("should work fine with default values", () => {
    const currentDate = new Date();

    expect(leftPad(currentDate)).toBe(currentDate.toString());
    expect(leftPad("")).toBe("00");
    expect(leftPad("a")).toBe("0a");
    expect(leftPad("a", 1)).toBe("a");
    expect(leftPad("", 3)).toBe("000");
    expect(leftPad("a", 3)).toBe("00a");
  });

  it("should work fine with strings", () => {
    expect(leftPad("", 1, "-")).toBe("-");
    expect(leftPad("a", 4, "-")).toBe("---a");
  });

  it("should work fine with numbers", () => {
    expect(leftPad(1)).toBe("01");
    expect(leftPad(1.1)).toBe("1.1");
    expect(leftPad(1.1, 4)).toBe("01.1");
    expect(leftPad(1, 3)).toBe("001");
    expect(leftPad(1, 4, "-")).toBe("---1");
  });
});

describe("it should exist a pretty function", () => {
  it("should exist the method", () => {
    expect(pretty).not.toBeNull();
  });

  it("should return a empty string", () => {
    expect(pretty()).toBe("");
    expect(pretty("")).toBe("");
    expect(pretty("", "string")).toBe("");
  });

  it("should return a null", () => {
    expect(pretty("", "xml")).toBe(null);
    expect(pretty("", "json")).toBe(null);
    expect(pretty("Test", "xml")).toBe(null);
    expect(pretty("Test", "json")).toBe(null);
  });

  it("should return 'Test'", () => {
    expect(pretty("Test")).toBe("Test");
    expect(pretty("Test", "string")).toBe("Test");
  });

  it("should return a valid XML", () => {
    expect(pretty(validXml, "xml")).toBe(xml.xmlPretty(validXml));
  });

  it("should return a valid JSON", () => {
    expect(pretty(validJson, "json")).toBe(json.jsonPretty(validJson));
  });
});

describe("it should exist a copyToClipboard function", () => {
  document.execCommand = jest.fn().mockImplementation(() => {});

  it("should exist the method", () => {
    expect(copyToClipboard).not.toBeNull();
  });

  it("should call to pretty with correct params", () => {
    text.pretty = jest.fn();

    text.copyToClipboard("Test");
    expect(text.pretty).toHaveBeenCalledWith("Test", "string");

    copyToClipboard("Test", "string");
    expect(text.pretty).toHaveBeenCalledWith("Test", "string");

    text.copyToClipboard(validJson, "json");
    expect(text.pretty).toHaveBeenCalledWith(validJson, "json");

    text.copyToClipboard(validXml, "xml");
    expect(text.pretty).toHaveBeenCalledWith(validXml, "xml");
  });
});

describe("it should exist a ellipsis function", () => {
  it("should exist the method", () => {
    expect(ellipsis).not.toBeNull();
  });

  it("should work fine with a undefined entry data", () => {
    expect(ellipsis()).toBe(null);
    expect(ellipsis(null)).toBe(null);
  });

  it("should work fine with a valid string", () => {
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
  it("should exist the method", () => {
    expect(decodeFromBase64).not.toBeNull();
  });

  it("should work fine with a undefined|null|empty|not valid string entry data", () => {
    expect(decodeFromBase64()).toBe(null);
    expect(decodeFromBase64(null)).toBe(null);
    expect(decodeFromBase64("")).toBe(null);
    expect(decodeFromBase64("test text")).toBe(null);
  });

  it("should work fine with a valid base64", () => {
    expect(decodeFromBase64("VGVzdA==")).toBe("Test");
  });
});

describe("it should exist a encodeToBase64 function", () => {
  it("should exist the method", () => {
    expect(encodeToBase64).not.toBeNull();
  });

  it("should work fine with a not valid string entry data", () => {
    expect(encodeToBase64()).toBe(null);
    expect(encodeToBase64(null)).toBe(null);
    expect(encodeToBase64("")).toBe(null);
  });

  it("should work fine with a valid string", () => {
    expect(encodeToBase64(2)).toBe("Mg==");
    expect(encodeToBase64(-2)).toBe("LTI=");
    expect(
      encodeToBase64({
        test: 1,
      })
    ).toBe("W29iamVjdCBPYmplY3Rd");
    expect(encodeToBase64("Test")).toBe("VGVzdA==");
    expect(encodeToBase64(testDate)).toBe(
      "V2VkIERlYyAyMyAyMDIwIDE4OjA3OjQ1IEdNVCswMTAwIChHTVQrMDE6MDAp"
    );
  });
});

describe("it should exist a text.toCamelCase function", () => {
  it("should exist the method", () => {
    expect(toCamelCase).not.toBeNull();
  });

  it("should work fine with a undefined|null|empty string entry data", () => {
    expect(toCamelCase()).toBe(null);
    expect(toCamelCase(null)).toBe(null);
    expect(toCamelCase("")).toBe(null);
    expect(toCamelCase(5)).toBe(null);
  });

  it("should work fine with a valid string", () => {
    expect(toCamelCase("word_to_test")).toBe("wordToTest");
    expect(toCamelCase("WORD_TO_TEST")).toBe("wordToTest");
    expect(toCamelCase("WoRd_tO_Test")).toBe("wordToTest");
    expect(toCamelCase("wordtotest")).toBe("wordtotest");
  });
});
