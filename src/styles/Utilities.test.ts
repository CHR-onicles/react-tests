import { describe, expect, it } from "vitest";

import { alpha, bp, media, mq, rem } from "./Utilities.styled";


describe("Properly convert from px to rem", () => {
  it("0 returns the string '0', not 0rem", () => expect(rem(0)).toBe("0"));

  it("16px returns 1rem", () => expect(rem(16)).toBe("1rem"));

  it("48px returns 3rem", () => expect(rem(48)).toBe("3rem"));

  it("-48px returns -3rem", () => expect(rem(-48)).toBe("-3rem"));

  it("32px with omitUnit flag as true returns 2", () =>
    expect(rem(32, true)).toBe("2"));

  it("16px with omitUnit flag as true appended with another unit returns 1 + appended unit", () =>
    expect(rem(16, true) + "vh").toBe("1vh"));
});

describe("Media queries work as intended", () => {
  it("bp.small returns 768px => 48em", () => expect(bp.small).toBe("48em"));
  it("mq.small returns the right query", () =>
    expect(mq.small).toBe("(min-width: 48em)"));
  it("media function returns right query", () =>
    expect(media(bp.large1)).toBe("@media screen and (min-width: 75em)"));
});

describe("Alpha function works as intended", () => {
  it("Invalid opacity value throws an error", () => {
    expect(() => alpha("#fff", -1)).toThrow(
      "Opacity has to be between 0 and 1"
    );
    expect(() => alpha("#fff", 2)).toThrow("Opacity has to be between 0 and 1");
  });
  it("Opacity value scales from 1 to 100% properly", () =>
    expect(alpha("hsl(0, 100%, 100%)", 0.5)).toBe(
      "color-mix(in srgb, hsl(0, 100%, 100%) 50%, rgb(0,0,0,0))"
    ));
  it("Empty color value throws an error", () =>
    expect(() => alpha("")).toThrow("No color was provided"));
});
