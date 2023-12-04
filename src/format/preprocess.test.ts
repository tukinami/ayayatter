import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds, commentLong, preprocessDefine, preprocessDefineName, preprocessGlobalDefine, preprocessGlobalDefineName } from "../parser";
import { formatPreprocessDefineOrGlobalDefine } from "./preprocess";

describe("formatPreprocessGlobalDefine", () => {
    test("checking value", () => {
        expect(formatPreprocessDefineOrGlobalDefine(
            new SettingRecorder("\r\n", 4),
            new preprocessGlobalDefine(
                new preprocessGlobalDefineName(
                    [],
                    [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                ),
                [],
                ["a", new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "a" }]), "a", "a"],
                [],
                ["b", "b", "b"],
                {
                    kind: ASTKinds.newLine,
                    newLine: "\r\n",
                    spaces: [],
                }
            )
        )).toBe("#globaldefine/* 1 */ aaa/* a */ bbb\r\n");;
    })
});

describe("formatPreprocessDefine", () => {
    test("checking value", () => {
        expect(formatPreprocessDefineOrGlobalDefine(
            new SettingRecorder("\r\n", 4),
            new preprocessDefine(
                new preprocessDefineName(
                    [],
                    [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
                    [],
                    [],
                    [],
                    [],
                    [],
                ),
                [],
                ["a", new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "a" }]), "a", "a"],
                [],
                ["b", "b", "b"],
                {
                    kind: ASTKinds.newLine,
                    newLine: "\r\n",
                    spaces: [],
                }
            )
        )).toBe("#define/* 1 */ aaa/* a */ bbb\r\n");
    })
});
