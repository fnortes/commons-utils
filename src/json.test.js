import json from "./json";

const validJson = `{"note":{"to": "Tove", "from": "Jani", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a json.format function", () => {
  it("should exist the method", () => {
    expect(json.format).not.toBeNull();
  });

  it("should return a valid json object", () => {
    expect(json.format(validJson)).not.toBe(validJson);
    expect(json.format(JSON.parse(validJson))).not.toBe(validJson);
  });

  it("should return the original entry data because it is not a valid JSON", () => {
    console.log = jest.fn();

    json.format("Test");

    expect(console.log).toHaveBeenCalledWith(
      "'Test' is not a valid JSON object or a string parseable to JSON"
    );
  });
});
