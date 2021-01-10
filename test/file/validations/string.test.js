import { stringIsValidJson } from "../../../src/file/validations/string";

const validJson = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a stringIsValidJson function", () => {
  it("should exist the method", () => {
    expect(stringIsValidJson).not.toBeNull();
  });

  it("should return false", () => {
    expect(stringIsValidJson()).toBe(false);
    expect(stringIsValidJson(null)).toBe(false);
    expect(stringIsValidJson("")).toBe(false);
    expect(stringIsValidJson("test")).toBe(false);
    expect(stringIsValidJson(2)).toBe(false);
    expect(stringIsValidJson(-2)).toBe(false);
    expect(stringIsValidJson({})).toBe(false);
    expect(
      stringIsValidJson({
        test: "test",
      })
    ).toBe(false);
    expect(stringIsValidJson(new Date())).toBe(false);
  });

  it("should return true", () => {
    expect(stringIsValidJson("{}")).toBe(true);
    expect(stringIsValidJson(validJson)).toBe(true);
  });
});
