import { isIe, isEdge } from "../src/browser";

describe("it should exist a isIe function", () => {
  test("should return false", () => {
    expect(isIe()).toBeFalsy();
  });
});