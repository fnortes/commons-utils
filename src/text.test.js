import json from "./json";
import text from "./text";
import xml from "./xml";

const validJson = `{"note":{"to": "Tove", "from": "Jani", "heading": "Reminder", "body": "Hello"}}`;
const validXml = `<note><to>Tove</to><from>Jani</from><heading>Reminder</heading>
        <body>Hello</body></note>`;

describe("it should exist a text.getPrettyText function", () => {
  it("should exist the method", () => {
    expect(text.getPrettyText).not.toBeNull();
  });

  it("should return a empty string", () => {
    expect(text.getPrettyText()).toBe("");
    expect(text.getPrettyText("")).toBe("");
    expect(text.getPrettyText("", "string")).toBe("");
    expect(text.getPrettyText("", "xml")).toBe("");
    expect(text.getPrettyText("", "json")).toBe("");
  });

  it("should return 'Test'", () => {
    expect(text.getPrettyText("Test")).toBe("Test");
    expect(text.getPrettyText("Test", "string")).toBe("Test");
    expect(text.getPrettyText("Test", "xml")).toBe("Test");
    expect(text.getPrettyText("Test", "json")).toBe("Test");
  });

  it("should return a valid XML", () => {
    expect(text.getPrettyText(validXml, "xml")).toBe(xml.format(validXml));
  });

  it("should return a valid JSON", () => {
    expect(text.getPrettyText(validJson, "json")).toBe(json.format(validJson));
  });
});

describe("it should exist a text.copyToClipboard function", () => {
  document.execCommand = jest.fn().mockImplementation((text) => {});

  it("should exist the method", () => {
    expect(text.copyToClipboard).not.toBeNull();
  });

  it("should call to getPrettyText with correct params", () => {
    text.getPrettyText = jest.fn();

    text.copyToClipboard("Test");
    expect(text.getPrettyText).toHaveBeenCalledWith("Test", "string");

    text.copyToClipboard("Test", "string");
    expect(text.getPrettyText).toHaveBeenCalledWith("Test", "string");

    text.copyToClipboard(validJson, "json");
    expect(text.getPrettyText).toHaveBeenCalledWith(validJson, "json");

    text.copyToClipboard(validXml, "xml");
    expect(text.getPrettyText).toHaveBeenCalledWith(validXml, "xml");
  });
});
