import { leftPad } from "../src/number";

describe("it should exist a number.leftPad function", () => {
  it("should exist the method", () => {
    expect(leftPad).not.toBeNull();
  });

  it("should return null", () => {
    expect(leftPad()).toBe(null);
    expect(leftPad(null)).toBe(null);
  });

  it("should work fine with default values", () => {
    const currentDate = new Date();

    expect(leftPad(currentDate)).toBe(currentDate.toString());
    expect(leftPad("")).toBe("00");
    expect(leftPad("a")).toBe("0a");
    expect(leftPad("a", 1)).toBe("a");
    expect(leftPad("", 3)).toBe("000");
    expect(leftPad("a", 3)).toBe("00a");
  });

  it("should work fine with strings", () => {
    expect(leftPad("", 1, "-")).toBe("-");
    expect(leftPad("a", 4, "-")).toBe("---a");
  });

  it("should work fine with numbers", () => {
    expect(leftPad(1)).toBe("01");
    expect(leftPad(1.1)).toBe("1.1");
    expect(leftPad(1.1, 4)).toBe("01.1");
    expect(leftPad(1, 3)).toBe("001");
    expect(leftPad(1, 4, "-")).toBe("---1");
  });
});
