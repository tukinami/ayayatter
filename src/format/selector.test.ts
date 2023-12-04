import { describe, expect, test } from "@jest/globals";
import { ASTKinds, commentLong } from "../parser";
import { formatSelector } from "./selector";

describe("formatSelector", () => {
    test("checking value", () => {
        expect(formatSelector({
            kind: ASTKinds.selector,
            prefix: {
                kind: ASTKinds.selectorPrefix,
                nameRaw: {
                    kind: ASTKinds.selectorPrefixName,
                    c1: [],
                    c2: [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
                    c3: [],
                    c4: [],
                    name: "melt",
                    comments: [[], [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])], [], []]
                },
            },
            main: {
                kind: ASTKinds.selectorMain,
                nameRaw: {
                    kind: ASTKinds.selectorMainName_4,
                    c1: [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
                    c2: [],
                    c3: [],
                    c4: [],
                    c5: [],
                    name: "array",
                    comments: [[new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])], [], [], [], []],
                },
            },
            suffix: {
                kind: ASTKinds.selectorSuffix,
                nameRaw: {
                    kind: ASTKinds.selectorSuffixName,
                    c1: [],
                    c2: [],
                    c3: [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
                    name: "pool",
                    comments: [[], [], [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])]],
                },
            },
        })).toBe("/* 1 */melt_/* 1 */array/* 1 */_pool");
    });
});
