import { describe, expect, test } from "@jest/globals";
import { format, formatFromUtf8 } from "./format";

describe("formatFromUtf8", () => {
    test("hasBom", () => {
        expect(formatFromUtf8("\ufeff//aaa")).toBe("\ufeff// aaa\n");
    });

    test("no Bom", () => {
        expect(formatFromUtf8("//aaa")).toBe("// aaa\n");
    });
});

describe("roots", () => {
    describe("newLine", () => {
        test("erace empty lines at top", () => {
            expect(format("\n// comment\n")).toBe("// comment\n");
            expect(format("\n\n// comment\n")).toBe("// comment\n");
        });

        test("erase serial newLines over 2 (001)", () => {
            expect(format("// comment\n    \n\n\n// comment\n\n\n"))
                .toBe("// comment\n\n// comment\n");
        });

        test("erace serial newLines over 2 (002)", () => {
            expect(format("// comment\r\n    \r\n\r\n\r\n// comment\r\n    \r\n\r\n\r\n"))
                .toBe("// comment\r\n\r\n// comment\r\n");
        });
    });

    describe("someSpaces", () => {
        test("erase unitted spaces", () => {
            expect(format(`    `)).toBe("");
        });
    });

    describe("continueLine", () => {
        test("erace empty continueLine", () => {
            expect(format("// comment\n\n/\n   /\n")).toBe("// comment\n");
        });
    });

    describe("functionBlock", () => {
        test("case one-line", () => {
            expect(format(`    OnBoot{}`)).toBe(`OnBoot
{
}
`)
        });

        test("case side-hooked bracket", () => {
            expect(format(`OnBoot {
}`)).toBe(`OnBoot
{
}
`);
        });

        test("case multiple functions", () => {
            expect(format(`  OnBoot {
}OnFirstBoot {}`)).toBe(`OnBoot
{
}
OnFirstBoot
{
}
`)
        });
    });

    describe("preprocess", () => {
        test("erace indent", () => {
            expect(format("    #define    aaa bbb\n")).toBe("#define aaa bbb\n");
        });
    });
});
