import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds, identifer, selectorMainName_4 } from "../parser";
import { formatFunctionBlock } from "./functionBlock";

describe("functionBlock", () => {
    test("empty function", () => {
        expect(formatFunctionBlock(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.functionBlock,
                name: new identifer(
                    "O",
                    ["n", "B", "o", "o", "t"]
                ),
                spacesBeforeSelector: [" "],
                open: "{",
                close: "}",
                selector: {
                    kind: ASTKinds.functionBlockSelector,
                    spaceLhs: [],
                    spaceRhs: [],
                    selector: {
                        kind: ASTKinds.selector,
                        prefix: null,
                        main: {
                            kind: ASTKinds.selectorMain,
                            nameRaw: new selectorMainName_4(
                                [],
                                [],
                                [],
                                [],
                                [],
                            ),
                        },
                        suffix: null,
                    }
                },
                spacesBeforeBody: [" "],
                blockInners: [],
            }
        )).toBe("OnBoot : array\r\n{\r\n}\r\n");
    });
});
