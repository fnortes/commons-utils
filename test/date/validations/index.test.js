import validations from "../../../src/date/validations/index";

describe("it should exist a correct utils structure", () => {
  it("should exist the main structure", () => {
    expect(validations.common).not.toBeNull();
    expect(validations.common.isValid).not.toBeNull();

    expect(validations.date).not.toBeNull();
    expect(validations.date.isValid).not.toBeNull();

    expect(validations.string).not.toBeNull();
    expect(validations.string.isValidDate).not.toBeNull();

    expect(validations.timestamp).not.toBeNull();
    expect(validations.timestamp.isCorrect).not.toBeNull();
    expect(validations.timestamp.isValid).not.toBeNull();
  });
});
