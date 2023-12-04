import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { ASTKinds, flowCaseName, flowElseifName, flowElseName, flowForeachName, flowForName, flowIfName, flowOthersName, flowSwitchName, flowWhenConditions, flowWhenName, identifer, int_x10 } from "../parser";
import { formatBlockInnerFlow } from "./blockInnerFlow";

describe("formatBlockInnerFlow", () => {
    test("flowIf", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.flowIf,
                    name: new flowIfName([]),
                    condition: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    block: {
                        kind: ASTKinds.flowIfBlock,
                        spacesStart: [],
                        newLineFirst: {
                            kind: ASTKinds.newLine,
                            newLine: "\r\n",
                            spaces: [],
                        },
                        inner: {
                            kind: ASTKinds.blockInnerSentence,
                            spaces: [],
                            terminator: {
                                kind: ASTKinds.statementTerminator_1,
                                separator: {
                                    kind: ASTKinds.statementSeparator,
                                    separator: {
                                        kind: ASTKinds.statementSeparatorBody_1
                                    }
                                }
                            },
                            body: {
                                kind: ASTKinds.expr,
                                spacesLhs: [],
                                spacesRhs: [],
                                inner: new identifer("a", []),
                            }
                        },
                        spacesEnd: [],
                    },
                    flowElseifs: [
                        {
                            kind: ASTKinds.flowElseif,
                            name: new flowElseifName([], [], [], [], [], []),
                            condition: {
                                kind: ASTKinds.expr,
                                spacesLhs: [],
                                spacesRhs: [],
                                inner: new identifer("b", []),
                            },
                            block: {
                                kind: ASTKinds.flowIfBlock,
                                spacesStart: [],
                                newLineFirst: {
                                    kind: ASTKinds.newLine,
                                    newLine: "\r\n",
                                    spaces: [],
                                },
                                inner: {
                                    kind: ASTKinds.blockInnerSentence,
                                    spaces: [],
                                    terminator: {
                                        kind: ASTKinds.statementTerminator_1,
                                        separator: {
                                            kind: ASTKinds.statementSeparator,
                                            separator: {
                                                kind: ASTKinds.statementSeparatorBody_1,
                                            }
                                        }
                                    },
                                    body: {
                                        kind: ASTKinds.expr,
                                        spacesLhs: [],
                                        spacesRhs: [],
                                        inner: new identifer("a", []),
                                    }
                                },
                                spacesEnd: [],
                            }
                        }
                    ],
                    flowElse: {
                        kind: ASTKinds.flowElse,
                        name: new flowElseName([], [], [], []),
                        block: {
                            kind: ASTKinds.flowIfBlock,
                            spacesStart: [],
                            newLineFirst: {
                                kind: ASTKinds.newLine,
                                newLine: "\r\n",
                                spaces: [],
                            },
                            inner: {
                                kind: ASTKinds.blockInnerSentence,
                                spaces: [],
                                terminator: {
                                    kind: ASTKinds.statementTerminator_1,
                                    separator: {
                                        kind: ASTKinds.statementSeparator,
                                        separator: {
                                            kind: ASTKinds.statementSeparatorBody_1,
                                        }
                                    }
                                },
                                body: {
                                    kind: ASTKinds.expr,
                                    spacesLhs: [],
                                    spacesRhs: [],
                                    inner: new identifer("a", []),
                                }
                            },
                            spacesEnd: [],
                        }
                    }
                },
            },
            1
        )).toBe("    if a\r\n        a\r\n    elseif b\r\n        a\r\n    else\r\n        a\r\n")
    });

    test("flowCase", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.flowCase,
                    name: new flowCaseName([], [], [], []),
                    condition: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    spacesBeforeBlock: [],
                    firstBlockInners: [{
                        kind: ASTKinds.blockInnerSentence,
                        spaces: [],
                        terminator: {
                            kind: ASTKinds.statementTerminator_1,
                            separator: {
                                kind: ASTKinds.statementSeparator,
                                separator: {
                                    kind: ASTKinds.statementSeparatorBody_1,
                                },
                            }
                        },
                        body: {
                            kind: ASTKinds.expr,
                            spacesLhs: [],
                            spacesRhs: [],
                            inner: new identifer("b", []),
                        }
                    }],
                    flowWhens: [
                        {
                            kind: ASTKinds.flowWhen,
                            name: new flowWhenName([], [], [], []),
                            conditions: new flowWhenConditions(
                                {
                                    kind: ASTKinds.flowWhenConditionLiteral,
                                    spacesStart: [],
                                    body: new int_x10(null, "0", []),
                                    spacesEnd: [],
                                },
                                [
                                    {
                                        kind: ASTKinds.flowWhenConditions_$0,
                                        body: {
                                            kind: ASTKinds.flowWhenConditionRange,
                                            spacesStart: [],
                                            lhs: new int_x10(null, "2", []),
                                            spacesLhs: [],
                                            spacesRhs: [],
                                            rhs: new int_x10(null, "3", []),
                                            spacesEnd: [],
                                        }
                                    }
                                ]
                            ),
                            block: {
                                kind: ASTKinds.block,
                                spacesStart: [],
                                selector: null,
                                spacesBeforeBlock: [],
                                blockInners: [
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
                                                },
                                            }
                                        }
                                    },
                                    {
                                        kind: ASTKinds.blockInnerSentence,
                                        body: {
                                            kind: ASTKinds.expr,
                                            spacesLhs: [],
                                            inner: new identifer("b", []),
                                            spacesRhs: [],
                                        },
                                        spaces: [],
                                        terminator: {
                                            kind: ASTKinds.statementTerminator_1,
                                            separator: {
                                                kind: ASTKinds.statementSeparator,
                                                separator: {
                                                    kind: ASTKinds.statementSeparatorBody_1,
                                                },
                                            }
                                        }
                                    },
                                ],
                                spacesEnd: [],
                            }
                        }
                    ],
                    flowOthers: {
                        kind: ASTKinds.flowOthers,
                        spacesStart: [],
                        name: new flowOthersName([], [], [], [], [], []),
                        block: {
                            kind: ASTKinds.block,
                            spacesStart: [],
                            selector: null,
                            spacesBeforeBlock: [],
                            blockInners: [
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
                                            },
                                        }
                                    }
                                },
                                {
                                    kind: ASTKinds.blockInnerSentence,
                                    body: {
                                        kind: ASTKinds.expr,
                                        spacesLhs: [],
                                        inner: new identifer("b", []),
                                        spacesRhs: [],
                                    },
                                    spaces: [],
                                    terminator: {
                                        kind: ASTKinds.statementTerminator_1,
                                        separator: {
                                            kind: ASTKinds.statementSeparator,
                                            separator: {
                                                kind: ASTKinds.statementSeparatorBody_1,
                                            },
                                        }
                                    }
                                },
                            ],
                            spacesEnd: [],
                        }
                    },
                    lastBlockInners: [{
                        kind: ASTKinds.blockInnerSentence,
                        spaces: [],
                        terminator: {
                            kind: ASTKinds.statementTerminator_1,
                            separator: {
                                kind: ASTKinds.statementSeparator,
                                separator: {
                                    kind: ASTKinds.statementSeparatorBody_1,
                                },
                            }
                        },
                        body: {
                            kind: ASTKinds.expr,
                            spacesLhs: [],
                            spacesRhs: [],
                            inner: new identifer("b", []),
                        }
                    }],
                    spacesAfterBlock: []
                },
            },
            1,
        )).toBe("    case a {\r\n    b\r\n    when 0, 2-3 {\r\n        a\r\n        b\r\n    }\r\n    others {\r\n        a\r\n        b\r\n    }\r\n    b\r\n    }\r\n");
    });


    test("flowSwitch", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.flowSwitch,
                    name: new flowSwitchName([], [], [], [], [], []),
                    condition: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    block: {
                        kind: ASTKinds.block,
                        spacesStart: [],
                        selector: null,
                        spacesBeforeBlock: [],
                        blockInners: [
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
                                        },
                                    }
                                }
                            },
                        ],
                        spacesEnd: [],
                    }
                }
            },
            1,
        )).toBe("    switch a {\r\n        a\r\n    }\r\n");
    });


    test("flowFor", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.flowFor,
                    name: new flowForName([], [], []),
                    separator1: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        },
                    },
                    separator2: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        },
                    },
                    initializer: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    condition: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    updater: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    block: {
                        kind: ASTKinds.block,
                        spacesStart: [],
                        selector: null,
                        spacesBeforeBlock: [],
                        blockInners: [
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
                                        },
                                    }
                                }
                            },
                        ],
                        spacesEnd: [],
                    }
                }
            },
            1,
        )).toBe("    for a; a; a {\r\n        a\r\n    }\r\n");
    });

    test("flowForeach", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.flowForeach,
                    name: new flowForeachName([], [], [], [], [], [], []),
                    separator: {
                        kind: ASTKinds.statementSeparator,
                        separator: {
                            kind: ASTKinds.statementSeparatorBody_1,
                        },
                    },
                    target: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        spacesRhs: [],
                        inner: new identifer("a", []),
                    },
                    variable: new identifer("a", []),
                    spaceBeforeVariable: [],
                    block: {
                        kind: ASTKinds.block,
                        spacesStart: [],
                        selector: null,
                        spacesBeforeBlock: [],
                        blockInners: [
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
                                        },
                                    }
                                }
                            },
                        ],
                        spacesEnd: [],
                    }
                }
            },
            1,
        )).toBe("    foreach a; a {\r\n        a\r\n    }\r\n");
    });

    test("block", () => {
        expect(formatBlockInnerFlow(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.blockInnerFlow,
                body: {
                    kind: ASTKinds.block,
                    spacesStart: [],
                    selector: null,
                    spacesBeforeBlock: [],
                    blockInners: [
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
                                    },
                                }
                            }
                        },
                        {
                            kind: ASTKinds.blockInnerSentence,
                            body: {
                                kind: ASTKinds.expr,
                                spacesLhs: [],
                                inner: new identifer("b", []),
                                spacesRhs: [],
                            },
                            spaces: [],
                            terminator: {
                                kind: ASTKinds.statementTerminator_1,
                                separator: {
                                    kind: ASTKinds.statementSeparator,
                                    separator: {
                                        kind: ASTKinds.statementSeparatorBody_1,
                                    },
                                }
                            }
                        },
                    ],
                    spacesEnd: [],
                }
            },
            1,
        )).toBe("    {\r\n        a\r\n        b\r\n    }\r\n");
    });
});
