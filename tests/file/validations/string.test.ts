import { stringIsValidJson } from "../../../src/file/validations/string";

const validJson: string = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a stringIsValidJson function", () => {
  test("should exist the method", () => {
    expect(stringIsValidJson).not.toBeNull();
  });

  test("should return false", () => {
    expect(stringIsValidJson("")).toBe(false);
    expect(stringIsValidJson("test")).toBe(false);
  });

  test("should return true", () => {
    expect(stringIsValidJson("{}")).toBe(true);
    expect(stringIsValidJson(validJson)).toBe(true);
  });
});