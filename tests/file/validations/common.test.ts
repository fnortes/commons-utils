import { isValidJson, isValidXml } from "../../../src/file/validations/common";

const validJson: string = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;
const validXml: string = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading>
         <body>Hello</body></note>`;

describe("it should exist a isValidJson function", () => {
  test("should exist the method", () => {
    expect(isValidJson).not.toBeNull();
  });

  test("should return false", () => {
    expect(isValidJson("")).toBe(false);
    expect(isValidJson("test")).toBe(false);
  });

  test("should return true", () => {
    expect(isValidJson({})).toBe(true);
    expect(isValidJson({ test: "test" })).toBe(true);
    expect(isValidJson(new Date())).toBe(true);
    expect(isValidJson("{}")).toBe(true);
    expect(isValidJson(validJson)).toBe(true);
  });
});

describe("it should exist a isValidXml function", () => {
  test("should exist the method", () => {
    expect(isValidXml).not.toBeNull();
  });

  test("should return false", () => {
    expect(isValidXml("")).toBe(false);
    expect(isValidXml("test")).toBe(false);
  });

  test("should return true", () => {
    expect(isValidXml(validXml)).toBe(true);
  });
});