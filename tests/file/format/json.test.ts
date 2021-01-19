import { jsonPretty } from "../../../src/file/format/json";

const validJson: string = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a jsonPretty function", () => {
  test("should exist the method", () => {
    expect(jsonPretty).not.toBeNull();
  });

  test("should return a null", () => {
    expect(jsonPretty("")).toBe(null);
    expect(jsonPretty("test")).toBe(null);
  });

  test("should return a valid json object", () => {
    expect(jsonPretty({ test: 1 })).not.toBe(null);
    expect(jsonPretty(validJson)).not.toBe(null);
    expect(jsonPretty(JSON.parse(validJson))).not.toBe(null);
  });
});