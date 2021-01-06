import validations from "../../../src/text/validations/index";

describe("it should exist a correct utils structure", () => {
  it("should exist the main structure", () => {
    expect(validations.text).not.toBeNull();
    expect(validations.text.isEmpty).not.toBeNull();
    expect(validations.text.isNotEmpty).not.toBeNull();
  });
});
