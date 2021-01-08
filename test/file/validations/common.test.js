import { isValidJson, isValidXml } from "../../../src/file/validations/common";

const validJson = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;
const validXml = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading>
         <body>Hello</body></note>`;

describe("it should exist a isValidJson function", () => {
  it("should exist the method", () => {
    expect(isValidJson).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValidJson()).toBe(false);
    expect(isValidJson(null)).toBe(false);
    expect(isValidJson("")).toBe(false);
    expect(isValidJson("test")).toBe(false);
    expect(isValidJson(2)).toBe(false);
    expect(isValidJson(-2)).toBe(false);
  });

  it("should return true", () => {
    expect(isValidJson({})).toBe(true);
    expect(
      isValidJson({
        test: "test",
      })
    ).toBe(true);
    expect(isValidJson(new Date())).toBe(true);
    expect(isValidJson("{}")).toBe(true);
    expect(isValidJson(validJson)).toBe(true);
  });
});

describe("it should exist a isValidXml function", () => {
  it("should exist the method", () => {
    expect(isValidXml).not.toBeNull();
  });

  it("should return false", () => {
    expect(isValidXml()).toBe(false);
    expect(isValidXml(null)).toBe(false);
    expect(isValidXml("")).toBe(false);
    expect(isValidXml("test")).toBe(false);
    expect(isValidXml(2)).toBe(false);
    expect(isValidXml(-2)).toBe(false);
    expect(isValidXml({})).toBe(false);
    expect(
      isValidXml({
        test: "test",
      })
    ).toBe(false);
    expect(isValidXml(new Date())).toBe(false);
  });

  it("should return true", () => {
    expect(isValidXml(validXml)).toBe(true);
  });
});
