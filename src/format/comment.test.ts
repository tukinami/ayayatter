import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds } from "../parser";
import { formatCommentLine, formatCommentLong, formatCommentLongArrays } from "./comment";

describe("formatCommentLine", () => {
    test("checking value", () => {
        expect(formatCommentLine(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.commentLine,
                spaces: [],
                commentRaw: ["a", "b"],
                endOfLine: { kind: ASTKinds.newLine, newLine: "\r\n", spaces: [] }
            },
        )).toBe("// ab\r\n");
    });
});

describe("formatCommentLong", () => {
    test("checking value", () => {
        expect(formatCommentLong(
            {
                kind: ASTKinds.commentLong,
                commentRaw: [
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: "a" },
                    { kind: ASTKinds.commentLongBody_2, c: "b" },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                ],
                comment: " ab  ",
            }
        )).toBe("/* ab */")
    })
});

describe("formatCommentLongArrays", () => {
    test("checking value", () => {
        expect(formatCommentLongArrays([
            [{
                kind: ASTKinds.commentLong,
                commentRaw: [
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: "a" },
                    { kind: ASTKinds.commentLongBody_2, c: "b" },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                ],
                comment: " ab  ",
            }],
            [{
                kind: ASTKinds.commentLong,
                commentRaw: [
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: "a" },
                    { kind: ASTKinds.commentLongBody_2, c: "b" },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                ],
                comment: " ab  ",
            }],
            [{
                kind: ASTKinds.commentLong,
                commentRaw: [
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: "a" },
                    { kind: ASTKinds.commentLongBody_2, c: "b" },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                    { kind: ASTKinds.commentLongBody_2, c: " " },
                ],
                comment: " ab  ",
            }],
        ])).toBe(`/* ab *//* ab *//* ab */`);
    });
});
