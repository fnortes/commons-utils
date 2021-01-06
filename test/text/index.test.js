import textUtils from "../../src/text/index";

describe("it should exist a correct utils structure", () => {
  it("should exist the main structure", () => {
    expect(textUtils.validations).not.toBeNull();
    expect(textUtils.validations.text).not.toBeNull();
    expect(textUtils.validations.text.isEmpty).not.toBeNull();
    expect(textUtils.validations.text.isNotEmpty).not.toBeNull();

    expect(textUtils.format).not.toBeNull();
    expect(textUtils.format.text).not.toBeNull();
    expect(textUtils.format.text.getPrettyText).not.toBeNull();
    expect(textUtils.format.text.copyToClipboard).not.toBeNull();
    expect(textUtils.format.text.ellipsis).not.toBeNull();
    expect(textUtils.format.text.decodeFromBase64).not.toBeNull();
    expect(textUtils.format.text.encodeToBase64).not.toBeNull();
    expect(textUtils.format.text.toCamelCase).not.toBeNull();
  });
});
