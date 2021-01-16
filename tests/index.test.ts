import { isNull } from "../src/index";

test("isNull", () => {
  expect(isNull(undefined)).toBeTruthy();
  expect(isNull(null)).toBeTruthy();
});