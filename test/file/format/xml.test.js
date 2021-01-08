import { pretty } from "../../../src/file/format/xml";

const validXml = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading><body>Hello</body></note>`;

describe("it should exist a pretty function", () => {
  it("should exist the method", () => {
    expect(pretty).not.toBeNull();
  });

  it("should return a valid xml string", () => {
    expect(pretty(validXml).length).toBe(101);
    expect(pretty(validXml, "    ").length).toBe(113);
  });
});
