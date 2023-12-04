import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds, commentLong, heredoc, heredocRaw, int_x10, int_x16, int_x2, literalString, literalStringRaw, real } from "../parser";
import { formatLiteral } from "./literal";

describe("formatLiteral", () => {
    test("heredoc", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new heredoc([
                {
                    kind: ASTKinds.heredocInner_1,
                    c: "\"\">>",
                },
                {
                    kind: ASTKinds.heredocInner_3,
                    c: "a",
                },
                {
                    kind: ASTKinds.heredocInner_2,
                    c: "\r",
                },
                {
                    kind: ASTKinds.heredocInner_2,
                    c: "\n",
                },
            ]),
            1
        )).toBe("<<\"\r\n\"\">>a\r\n    \">>");
    });

    test("heredocRaw", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new heredocRaw([
                {
                    kind: ASTKinds.heredocRawInner_1,
                    c: "''>>",
                },
                {
                    kind: ASTKinds.heredocRawInner_3,
                    c: "a",
                },
                {
                    kind: ASTKinds.heredocRawInner_2,
                    c: "\r",
                },
                {
                    kind: ASTKinds.heredocRawInner_2,
                    c: "\n",
                },
            ]),
            1
        )).toBe("<<'\r\n''>>a\r\n    '>>",);
    });

    test("literalString", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new literalString([
                "\"\"",
                {
                    kind: ASTKinds.newLine,
                    newLine: "\r\n",
                    spaces: [],
                },
                "a",
                {
                    kind: ASTKinds.continueLine,
                    newLine: {
                        kind: ASTKinds.newLine,
                        newLine: "\r\n",
                        spaces: [],
                    }
                },
                "b"
            ]),
            1,
        )).toBe("\"\"\"\r\n    a/\r\n    b\"");
    });

    test("literalStringRaw", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new literalStringRaw([
                "''",
                {
                    kind: ASTKinds.newLine,
                    newLine: "\r\n",
                    spaces: [],
                },
                "a",
                {
                    kind: ASTKinds.continueLine,
                    newLine: {
                        kind: ASTKinds.newLine,
                        newLine: "\r\n",
                        spaces: [],
                    }
                },
                "b"
            ]),
            1,
        )).toBe("'''\r\n    a/\r\n    b'");
    });

    test("real", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new real(
                null,
                "1",
                [
                    "1",
                    {
                        kind: ASTKinds.continueLine,
                        newLine: {
                            kind: ASTKinds.newLine,
                            newLine: "\r\n",
                            spaces: [],
                        }
                    },
                ],
                [
                    new commentLong([
                        {
                            kind: ASTKinds.commentLongBody_2,
                            c: "c",
                        }
                    ]),
                    "3",
                ]
            ),
            1,
        )).toBe("/* c */11.3");
    });

    test("int_x10", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new int_x10(
                null,
                "1",
                [
                    new commentLong([
                        {
                            kind: ASTKinds.commentLongBody_2,
                            c: "c",
                        }
                    ]),
                    "3",
                ],
            ),
            1,
        )).toBe("/* c */13");
    });

    test("inc_x2", () => {
        expect(formatLiteral(
            new SettingRecorder("\r\n", 4),
            new int_x2(
                "0b",
                [
                    new commentLong([
                        {
                            kind: ASTKinds.commentLongBody_2,
                            c: "c",
                        }
                    ]),
                    "0",
                ],
            ),
            1,
        )).toStrictEqual("/* c */0b0");
    });

    expect(formatLiteral(
        new SettingRecorder("\r\n", 4),
        new int_x16(
            "0x",
            [
                new commentLong([
                    {
                        kind: ASTKinds.commentLongBody_2,
                        c: "c",
                    }
                ]),
                "3",
            ],
        ),
        1,
    )).toStrictEqual("/* c */0x3");
});
