import { jsonPretty } from "../../../src/file/format/json";

const validJson = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a jsonPretty function", () => {
  it("should exist the method", () => {
    expect(jsonPretty).not.toBeNull();
  });

  it("should return a null", () => {
    expect(jsonPretty()).toBe(null);
    expect(jsonPretty(null)).toBe(null);
    expect(jsonPretty("")).toBe(null);
    expect(jsonPretty("test")).toBe(null);
    expect(jsonPretty(2)).toBe(null);
    expect(jsonPretty(-2)).toBe(null);
  });

  it("should return a valid json object", () => {
    expect(
      jsonPretty({
        test: 1,
      })
    ).not.toBe(null);
    expect(jsonPretty(validJson)).not.toBe(null);
    expect(jsonPretty(JSON.parse(validJson))).not.toBe(null);
  });
});
