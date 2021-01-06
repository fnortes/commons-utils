import dateUtils from "../../src/date/index";

describe("it should exist a correct utils structure", () => {
  it("should exist the main structure", () => {
    expect(dateUtils.validations).not.toBeNull();
    expect(dateUtils.validations.date).not.toBeNull();
    expect(dateUtils.validations.date.isValid).not.toBeNull();
    expect(dateUtils.validations.timestamp).not.toBeNull();
    expect(dateUtils.validations.timestamp.isCorrect).not.toBeNull();
    expect(dateUtils.validations.timestamp.isValid).not.toBeNull();

    expect(dateUtils.format).not.toBeNull();
    expect(dateUtils.format.date).not.toBeNull();
    expect(dateUtils.format.timestamp).not.toBeNull();
    expect(dateUtils.format.string).not.toBeNull();
  });
});
