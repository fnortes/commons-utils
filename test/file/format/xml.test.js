import { xmlPretty } from "../../../src/file/format/xml";

const validXml = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading><body>Hello</body></note>`;

describe("it should exist a xmlPretty function", () => {
  it("should exist the method", () => {
    expect(xmlPretty).not.toBeNull();
  });

  it("should return a valid xml string", () => {
    expect(xmlPretty(validXml).length).toBe(101);
    expect(xmlPretty(validXml, "    ").length).toBe(113);
  });
});
