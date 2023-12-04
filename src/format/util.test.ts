import { describe, expect, test } from "@jest/globals";
import { ASTKinds, commentLong, newLine } from "./../parser";
import { eraseNewLineAfterTarget, toOnlyCommentLongs } from "./util";

describe("toOnlyCommentLongs", () => {
    test("checking value", () => {

        const testCase = [
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            {
                kind: ASTKinds.someSpaces,
                spaces: [" ", " ", " ", " "],
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            "string1",
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            {
                kind: ASTKinds.commentLine,
                spaces: [],
                commentRaw: [" ", "b", "b"],
                endOfLine: "\r\n",
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
        ];

        expect(toOnlyCommentLongs(
            testCase,
        )).toStrictEqual([
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
        ]);
    });
});

describe("eraseNewLineAfterTarget", () => {
    test("checking value", () => {
        const testCase = [
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            {
                kind: ASTKinds.someSpaces,
                spaces: [" ", " ", " ", " "],
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            "string1",
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            {
                kind: ASTKinds.commentLine,
                spaces: [],
                commentRaw: [" ", "b", "b"],
                endOfLine: "\r\n",
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
        ];

        expect(eraseNewLineAfterTarget(
            testCase,
            [ASTKinds.someSpaces, ASTKinds.commentLong]
        )).toStrictEqual([
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            {
                kind: ASTKinds.someSpaces,
                spaces: [" ", " ", " ", " "],
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
            "string1",
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            new commentLong([
                {
                    kind: ASTKinds.commentLongBody_2,
                    c: "a",
                },
            ]),
            {
                kind: ASTKinds.commentLine,
                spaces: [],
                commentRaw: [" ", "b", "b"],
                endOfLine: "\r\n",
            },
            {
                kind: ASTKinds.newLine,
                newLine: "\r\n",
                spaces: [],
            },
        ]);
    });
});
