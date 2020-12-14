import xml from "./xml";

const validXml = `<note><to>Tove</to><from>Jani</from><heading>Reminder</heading>
        <body>Hello</body></note>`;

describe("it should exist a xml.format function", () => {
  it("should exist the method", () => {
    expect(xml.format).not.toBeNull();
  });

  it("should return a valid string without originalTab", () => {
    expect(xml.format(validXml).length).toBe(102);
  });

  it("should return a valid string with originalTab", () => {
    expect(xml.format(validXml, "    ").length).toBe(114);
  });
});
