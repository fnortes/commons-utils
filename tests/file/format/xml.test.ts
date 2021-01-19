import { xmlPretty } from "../../../src/file/format/xml";

const validXml: string = `<note><to>Tov</to><from>Jain</from><heading>Reminder</heading><body>Hello</body></note>`;

describe("it should exist a xmlPretty function", () => {
  test("should exist the method", () => {
    expect(xmlPretty).not.toBeNull();
  });

  test("should return a valid xml string", () => {
    const text1: string | null = xmlPretty(validXml);
    const text2: string | null = xmlPretty(validXml, "    ");
    const lengthText1: number = text1 !== null ? text1.length : 0;
    const lengthText2: number = text2 !== null ? text2.length : 0;

    expect(lengthText1).toBe(101);
    expect(lengthText2).toBe(113);
  });
});