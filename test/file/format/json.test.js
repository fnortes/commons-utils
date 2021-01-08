import { pretty } from "../../../src/file/format/json";

const validJson = `{"note":{"to": "Tov", "from": "Jain", "heading": "Reminder", "body": "Hello"}}`;

describe("it should exist a pretty function", () => {
  it("should exist the method", () => {
    expect(pretty).not.toBeNull();
  });

  it("should return a null", () => {
    expect(pretty()).toBe(null);
    expect(pretty(null)).toBe(null);
    expect(pretty("")).toBe(null);
    expect(pretty("test")).toBe(null);
    expect(pretty(2)).toBe(null);
    expect(pretty(-2)).toBe(null);
  });

  it("should return a valid json object", () => {
    expect(
      pretty({
        test: 1,
      })
    ).not.toBe(null);
    expect(pretty(validJson)).not.toBe(null);
    expect(pretty(JSON.parse(validJson))).not.toBe(null);
  });
});
