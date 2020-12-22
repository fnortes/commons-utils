import json from "../src/json";
import {
  getPrettyText,
  copyToClipboard,
  ellipsis,
  decodeFromBase64,
  encodeToBase64,
  toCamelCase,
} from "../src/text";
import text from "../src/text";
import xml from "../src/xml";

const validJson = `{"note":{"to": "Tove", "from": "Jani", "heading": "Reminder", "body": "Hello"}}`;
const validXml = `<note><to>Tove</to><from>Jani</from><heading>Reminder</heading>
        <body>Hello</body></note>`;

describe("it should exist a text.getPrettyText function", () => {
  it("should exist the method", () => {
    expect(getPrettyText).not.toBeNull();
  });

  it("should return a empty string", () => {
    expect(getPrettyText()).toBe("");
    expect(getPrettyText("")).toBe("");
    expect(getPrettyText("", "string")).toBe("");
    expect(getPrettyText("", "xml")).toBe("");
    expect(getPrettyText("", "json")).toBe("");
  });

  it("should return 'Test'", () => {
    expect(getPrettyText("Test")).toBe("Test");
    expect(getPrettyText("Test", "string")).toBe("Test");
    expect(getPrettyText("Test", "xml")).toBe("Test");
    expect(getPrettyText("Test", "json")).toBe("Test");
  });

  it("should return a valid XML", () => {
    expect(getPrettyText(validXml, "xml")).toBe(xml.format(validXml));
  });

  it("should return a valid JSON", () => {
    expect(getPrettyText(validJson, "json")).toBe(json.format(validJson));
  });
});

describe("it should exist a text.copyToClipboard function", () => {
  document.execCommand = jest.fn().mockImplementation(() => {});

  it("should exist the method", () => {
    expect(copyToClipboard).not.toBeNull();
  });

  it("should call to getPrettyText with correct params", () => {
    text.getPrettyText = jest.fn();

    text.copyToClipboard("Test");
    expect(text.getPrettyText).toHaveBeenCalledWith("Test", "string");

    copyToClipboard("Test", "string");
    expect(text.getPrettyText).toHaveBeenCalledWith("Test", "string");

    text.copyToClipboard(validJson, "json");
    expect(text.getPrettyText).toHaveBeenCalledWith(validJson, "json");

    text.copyToClipboard(validXml, "xml");
    expect(text.getPrettyText).toHaveBeenCalledWith(validXml, "xml");
  });
});

describe("it should exist a text.ellipsis function", () => {
  it("should exist the method", () => {
    expect(ellipsis).not.toBeNull();
  });

  it("should work fine with a undefined entry data", () => {
    expect(ellipsis()).toBe("");
  });

  it("should work fine with a null entry data", () => {
    console.log = jest.fn();

    expect(ellipsis(null)).toBe(null);
    expect(console.log).toHaveBeenCalledWith("'null' is not a string");
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

describe("it should exist a text.decodeFromBase64 function", () => {
  it("should exist the method", () => {
    expect(decodeFromBase64).not.toBeNull();
  });

  it("should work fine with a undefined|null|empty string entry data", () => {
    expect(decodeFromBase64()).toBe(null);
    expect(decodeFromBase64(null)).toBe(null);
    expect(decodeFromBase64("")).toBe(null);
  });

  it("should work fine with a not valid base64", () => {
    console.log = jest.fn();

    expect(decodeFromBase64("Prueba")).toBe(null);
    expect(console.log).toHaveBeenCalledWith("'Prueba' is not a base64 data");
  });

  it("should work fine with a valid base64", () => {
    expect(decodeFromBase64("VGVzdA==")).toBe("Test");
  });
});

describe("it should exist a text.encodeToBase64 function", () => {
  it("should exist the method", () => {
    expect(encodeToBase64).not.toBeNull();
  });

  it("should work fine with a undefined|null|empty string entry data", () => {
    expect(encodeToBase64()).toBe(null);
    expect(encodeToBase64(null)).toBe(null);
    expect(encodeToBase64("")).toBe(null);
  });

  it("should work fine with a valid string", () => {
    expect(encodeToBase64("Test")).toBe("VGVzdA==");
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
