import { isValidJson } from "../../../src/file/validations/string";

const validJson = `{"note":{"to": "Tove", "from": "Jani", "heading": "Reminder", "body": "Hello"}}`;

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
    expect(isValidJson({})).toBe(false);
    expect(
      isValidJson({
        test: "test",
      })
    ).toBe(false);
    expect(isValidJson(new Date())).toBe(false);
  });

  it("should return true", () => {
    expect(isValidJson("{}")).toBe(true);
    expect(isValidJson(validJson)).toBe(true);
  });
});
