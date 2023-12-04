import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds, blockInnerBreakName, blockInnerContinueName, blockInnerParallelName, blockInnerReturnName, blockInnerVoidName, identifer } from "../parser";
import { formatBlockInnerSentence } from "./blockInnerSentence";

describe("formatBlockInnerSentence", () => {
    test("break", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.blockInnerBreak,
                    name: new blockInnerBreakName([], [], [], [], [],)
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    break\r\n");
    });

    test("continue", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.blockInnerContinue,
                    name: new blockInnerContinueName([], [], [], [], [], [], [], [])
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    continue\r\n");
    });

    test("return", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.blockInnerReturn,
                    name: new blockInnerReturnName([], [], [], [], [], [])
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    return\r\n");
    });

    test("void", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.blockInnerVoid,
                    name: new blockInnerVoidName([], [], [], []),
                    target: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("a", []),
                        spacesRhs: [],
                    }
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    void a\r\n");
    });

    test("parallel", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.blockInnerParallel,
                    name: new blockInnerParallelName([], [], [], [], [], [], [], []),
                    target: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("a", []),
                        spacesRhs: [],
                    }
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    parallel a\r\n");
    });


    test("outputsettlement", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.outputSettlement,
                    tokens: "--",
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    }
                }
            },
            1,
        )).toBe("    --\r\n");
    });

    test("expr", () => {
        expect(formatBlockInnerSentence(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerSentence,
                body: {
                    kind: ASTKinds.expr,
                    spacesLhs: [],
                    inner: new identifer("a", []),
                    spacesRhs: [],
                },
                spaces: [],
                terminator: {
                    kind: ASTKinds.statementTerminator_1,
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        }
                    },
                }
            },
            1,
        )).toBe("    a\r\n");
    });
});
