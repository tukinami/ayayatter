import { describe, expect, test } from "@jest/globals";
import { identifer, parse } from "./parser";

describe("combination", () => {
    test("empty line", () => {
        expect(parse(`OnBoot {}

`)).toMatchObject({
            errs: []
        });
    });

    test("multi statement 001", () => {
        expect(parse(`#global/* aaa*/define AA/
A bbb

On_Test/* aaa*/./
    continueLine : /
    ar/
    ray {/
    i/
    f 10/
    0 =/
    = 100 {
      "OK"
    }
}

On_Test.functionSelector001:array

    {
        "OK"
    }

On_Test.functionSelector002:
{
"OK"
}

On_Test.heredocEscape{
<<"
"">>
">>
}

On_Test.parenthesesOperation001 {
    (   0xff    )
}

On_Test.bracketsOperationi001 {
    _test = IARRAY
    _test[1 , ,]
}

On_Test.exclamationOperation001 {
    !    1
}

On_Test.incrementOrDecrementOperation001 {
    _test = 0

    _test++
}

On_Test.globalDefine001 {
    #globaldefine AAAAA bbbbbb
}
On_Test.flowIf {
    if     1 {
      "OK"
    }
}
On_Test.flowCase001{case _a{_b;_c;when 0{_d}when 1-2{_e}others{_f}_g;_h}}

On_Test.flowCase002{case _a{_b;_c;when 0// 000
{_d}when 1-2{_e}others{_f}_g;_h}}

On_Test.flowCase003{case _a{_b;_c;when 0

{_d}when 1-2{_e}others{_f}_g;_h}}`
        )).toMatchObject({
            errs: [],
        });
    });

    test("multi statement 001 error", () => {
        expect(parse(`#global/* aaa*/define AA/
A bbb

On_Test/* aaa*/./
    continueLine : /
    ar/
    ray {/
    i/
    f 10/
    0 =/
    = 100 {
      "OK"
    }
}

On_Test.functionSelector001:array

    {
        "OK"
    }

On_Test.functionSelector002:
{
"OK"
}

On_Test.heredocEscape{
<<"
"">>
">>
}

On_Test.parenthesesOperation001 {
    (   0xff    )
}

On_Test.bracketsOperationi001 {
    _test = IARRAY
    _test[1 , ,]
}
* // error
On_Test.exclamationOperation001 {
    !    1
}

On_Test.incrementOrDecrementOperation001 {
    _test = 0

    _test++
}

On_Test.globalDefine001 {
    #globaldefine AAAAA bbbbbb
}
On_Test.flowIf {
    if     1 {
      "OK"
    }
}
On_Test.flowCase001{case _a{_b;_c;when 0{_d}when 1-2{_e}others{_f}_g;_h}}

On_Test.flowCase002{case _a{_b;_c;when 0// 000
{_d}when 1-2{_e}others{_f}_g;_h}}

On_Test.flowCase003{case _a{_b;_c;when 0

{_d}when 1-2{_e}others{_f}_g;_h}}`
        )).not.toMatchObject({
            ast: { contents: expect.any(Array) },
            errs: [],
        });
    });

    test("multi function", () => {
        expect(parse(`OnBoot {}

OnFirstBoot {}

`)).toMatchObject({
            ast: {
                contents: [
                    {
                        kind: "functionBlock",
                        name: {
                            kind: "identifer",
                            name: "OnBoot",
                        },
                    },
                    {
                        kind: "newLine",
                    },
                    {
                        kind: "newLine",
                    },
                    {
                        kind: "functionBlock",
                        name: {
                            kind: "identifer",
                            name: "OnFirstBoot",
                        }
                    },
                    {
                        kind: "newLine",
                    },
                    {
                        kind: "newLine",
                    },
                ]
            },
            errs: [],
        });
    });

    test("multi expr", () => {
        expect(parse(`OnBoot {if (FUNC(1)) && (FUNC(2)) { 0 }}`))
            .toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowIf",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "logicalConjunction",
                                    }
                                }
                            }
                        }],
                    }]
                },
                errs: [],
            });
    });

    test("multi comma Operation", () => {
        expect(parse(`OnBoot{_talk_array = (_talk_array, On_Plugin_GetWindowTitle)}`))
            .toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "substitution",
                                }
                            }
                        }],
                    }]
                },
                errs: [],
            });
    });

    test("combination condition", () => {
        expect(parse(`OnBoot {
if  '夜' _in_ Time_hour_toSlot {
        '\\u\\s[10]\\h\\s[0]秋の夜長とは言いますが。\\w9\\w9\\uはい。\\w9\\w9\\h\\s[31]\\n\\n夜はやっぱり眠い…\\w5…\\w5。\\w9\\w9\\u\\n\\n夜じゃなくても、\\w5でしょう。'
}
}`))
            .toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [
                            {
                                kind: "newLine",
                            },
                            {
                                kind: "blockInnerFlow",
                                body: {
                                    kind: "flowIf",
                                    condition: {
                                        kind: "expr",
                                        inner: {
                                            kind: "comparisonOperation",
                                        }
                                    }
                                }
                            }
                        ],
                    }]
                },
                errs: [],
            });
    });

    test("combination arrayCall", () => {
        expect(parse(`Time_week_toString {('日','月','火','水','木','金','土')[weekday];}`))
            .toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "arrayCall",
                                    call: {
                                        kind: "expr",
                                        inner: new identifer("w", ["e", "e", "k", "d", "a", "y"]),
                                    }
                                }
                            }
                        }]
                    }]
                },
                errs: [],
            });
    });

    test("", () => {
        expect(parse(`Bool.toOnOffStr{
    if TOINT(_argv[0]) > 0 {
        'ON'
    }
    else {
        'OFF'
    }
}`)).toMatchObject({
            ast: {
                contents: [
                    {
                        kind: "functionBlock",
                        blockInners: [
                            {
                                kind: "newLine",
                            },
                            {
                                kind: "blockInnerFlow",
                                body: {
                                    kind: "flowIf",
                                    condition: {
                                        kind: "expr",
                                        inner: {
                                            kind: "comparisonOperation",
                                        }
                                    },
                                }
                            }],
                    }
                ]
            },
            errs: [],
        });
    });

    test("double array call", () => {
        expect(parse("OnBoot{a[0]=0}"))
            .toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "substitution",
                                }
                            }
                        }]
                    }],
                },
                errs: [],
            });
    });
});

describe("function", () => {
    test("one-line", () => {
        expect(parse("OnBoot : array {}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [],
                    name: {
                        kind: "identifer",
                        name: "OnBoot"
                    },
                    selector: {
                        kind: "functionBlockSelector",
                        selector: {
                            kind: "selector",
                            main: {
                                kind: "selectorMain",
                                nameRaw: {
                                    name: "array"
                                },
                            },
                            prefix: null,
                            suffix: null,
                        },
                    }
                }]
            },
            errs: []
        });
    });
    test("include continueLine", () => {
        expect(parse(`On_Test./
continueLine : /
array /
{}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    name: {
                        kind: "identifer",
                        name: "On_Test.continueLine"
                    },
                    selector: {
                        kind: "functionBlockSelector",
                        selector: {
                            kind: "selector",
                            main: {
                                kind: "selectorMain",
                                nameRaw: {
                                    name: "array"
                                },
                            },
                            prefix: null,
                            suffix: null,
                        },
                    },
                    blockInners: [],
                }]
            },
            errs: [],
        })
    });
    test("continueLine & comment", () => {
        expect(parse(`On_Test/* aaa*/./
    continueLine : /
    ar/
    ray {/
}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    name: {
                        kind: "identifer",
                        name: "On_Test.continueLine"
                    },
                    selector: {
                        kind: "functionBlockSelector",
                        selector: {
                            kind: "selector",
                            main: {
                                kind: "selectorMain",
                                nameRaw: {
                                    name: "array"
                                },
                            },
                            prefix: null,
                            suffix: null,
                        },
                    },
                    blockInners: [{
                        kind: "continueLine",
                        newLine: {
                            kind: "newLine",
                            newLine: "\n",
                            spaces: [],
                        },
                    }],
                }]
            },
            errs: [],
        });
    });
});

describe("preprocess", () => {
    test("globaldefine", () => {
        expect(parse("#globaldef/\nine a/\n    aa bbb\n")).toMatchObject({
            ast: {
                contents: [{
                    kind: "preprocessGlobalDefine",
                    before: "aaa",
                    after: "bbb",
                }]
            },
            errs: [],
        });
    });
    test("define", () => {
        expect(parse("#def/\nine a/\n    aa bbb\n")).toMatchObject({
            ast: {
                contents: [{
                    kind: "preprocessDefine",
                    before: "aaa",
                    after: "bbb",
                }]
            },
            errs: [],
        });
    });
});

describe("blockBodyKind", () => {
    describe("flowIf", () => {
        test("only if", () => {
            expect(parse(`OnBoot{if _a{"a"}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowIf",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "literalString",
                                                body: "a",
                                            }
                                        }
                                    }],
                                },
                                flowElseifs: [],
                                flowElse: null,
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("with elseifs", () => {
            expect(parse(`OnBoot{if _a{"a"}elseif _b{"b"} elseif _c{"c"}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowIf",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "literalString",
                                                body: "a",
                                            }
                                        }
                                    }],
                                },
                                flowElseifs: [
                                    {
                                        kind: "flowElseif",
                                        condition: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_b",
                                            }
                                        },
                                        block: {
                                            kind: "block",
                                            blockInners: [{
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "literalString",
                                                        body: "b",
                                                    }
                                                }
                                            }],
                                        }
                                    },
                                    {
                                        kind: "flowElseif",
                                        condition: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_c",
                                            }
                                        },
                                        block: {
                                            kind: "block",
                                            blockInners: [{
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "literalString",
                                                        body: "c",
                                                    }
                                                }
                                            }],
                                        }
                                    },
                                ],
                                flowElse: null,
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("with elseif and else", () => {
            expect(parse(`OnBoot{if _a{"a"}elseif _b{"b"} else {"c"}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowIf",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "literalString",
                                                body: "a",
                                            }
                                        }
                                    }],
                                },
                                flowElseifs: [
                                    {
                                        kind: "flowElseif",
                                        condition: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_b",
                                            }
                                        },
                                        block: {
                                            kind: "block",
                                            blockInners: [{
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "literalString",
                                                        body: "b",
                                                    }
                                                }
                                            }],
                                        }
                                    },
                                ],
                                flowElse: {
                                    kind: "flowElse",
                                    block: {
                                        kind: "block",
                                        blockInners: [{
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "literalString",
                                                    body: "c",
                                                }
                                            }
                                        }],
                                    }
                                },
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("with else", () => {
            expect(parse(`OnBoot{if _a{"a"} else {"c"}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowIf",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "literalString",
                                                body: "a",
                                            }
                                        }
                                    }],
                                },
                                flowElseifs: [],
                                flowElse: {
                                    kind: "flowElse",
                                    block: {
                                        kind: "block",
                                        blockInners: [{
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "literalString",
                                                    body: "c",
                                                }
                                            }
                                        }],
                                    }
                                },
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("one-liner", () => {
            expect(parse(`OnBoot{
    if _a
        _b
    elseif _b
        _c
    else
        _d
}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [
                            {
                                kind: "newLine",
                            },
                            {
                                kind: "blockInnerFlow",
                                body: {
                                    kind: "flowIf",
                                    condition: {
                                        kind: "expr",
                                        inner: {
                                            kind: "variableLocal",
                                            name: "_a",
                                        },
                                    },
                                    block: {
                                        kind: "flowIfBlock",
                                        inner: {
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "variableLocal",
                                                    name: "_b",
                                                }
                                            },
                                        }
                                    },
                                    flowElseifs: [{
                                        kind: "flowElseif",
                                        condition: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_b",
                                            }
                                        },
                                        block: {
                                            kind: "flowIfBlock",
                                            inner: {
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "variableLocal",
                                                        name: "_c",
                                                    }
                                                }
                                            }
                                        }
                                    }],
                                    flowElse: {
                                        block: {
                                            kind: "flowIfBlock",
                                            inner: {
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "variableLocal",
                                                        name: "_d",
                                                    }
                                                }
                                            }
                                        }
                                    },
                                }
                            },
                        ],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("flowCase", () => {
        test("fullset", () => {
            expect(parse("OnBoot{case _a{_b;_c;when 0{_d}when 1-2{_e}others{_f}_g;_h}}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowCase",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                firstBlockInners: [
                                    {
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_b",
                                            }
                                        }
                                    },
                                    {
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_c",
                                            }
                                        }
                                    },
                                ],
                                flowWhens: [
                                    {
                                        kind: "flowWhen",
                                        conditions: {
                                            kind: "flowWhenConditions",
                                            conditions: [{
                                                kind: "flowWhenConditionLiteral",
                                                body: {
                                                    kind: "int_x10",
                                                    value: 0,
                                                }
                                            }]
                                        },
                                        block: {
                                            kind: "block",
                                            blockInners: [{
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "variableLocal",
                                                        name: "_d",
                                                    }
                                                }
                                            }]
                                        },
                                    },
                                    {
                                        kind: "flowWhen",
                                        conditions: {
                                            kind: "flowWhenConditions",
                                            conditions: [{
                                                kind: "flowWhenConditionRange",
                                                lhs: {
                                                    kind: "int_x10",
                                                    value: 1,
                                                },
                                                rhs: {
                                                    kind: "int_x10",
                                                    value: 2,
                                                }
                                            }]
                                        },
                                        block: {
                                            kind: "block",
                                            blockInners: [{
                                                kind: "blockInnerSentence",
                                                body: {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "variableLocal",
                                                        name: "_e",
                                                    }
                                                }
                                            }]
                                        },
                                    }
                                ],
                                flowOthers: {
                                    kind: "flowOthers",
                                    block: {
                                        kind: "block",
                                        blockInners: [{
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "variableLocal",
                                                    name: "_f",
                                                }
                                            }
                                        }]
                                    }
                                },
                                lastBlockInners: [
                                    {
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_g",
                                            }
                                        }
                                    },
                                    {
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_h",
                                            }
                                        }
                                    },
                                ],
                            },
                        }]
                    }]
                },
                errs: [],
            })
        });
    });

    describe("flowSwitch", () => {
        test("checking value", () => {
            expect(parse("OnBoot{switch _a{_b;_c;}}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowSwitch",
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [
                                        {
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "variableLocal",
                                                    name: "_b",
                                                }
                                            }
                                        },
                                        {
                                            kind: "blockInnerSentence",
                                            body: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "variableLocal",
                                                    name: "_c",
                                                }
                                            }
                                        },
                                    ],
                                }
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("flowFor", () => {
        test("checking value", () => {
            expect(parse(`OnBoot{for _a;_b;_c{_d}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowFor",
                                initializer: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                condition: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_b",
                                    }
                                },
                                updater: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_c",
                                    }
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_d",
                                            }
                                        }
                                    }],
                                }
                            },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("flowForeach", () => {
        test("checking value", () => {
            expect(parse(`OnBoot{foreach _a;_i{_i}}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerFlow",
                            body: {
                                kind: "flowForeach",
                                target: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                },
                                variable: {
                                    kind: "variableLocal",
                                    name: "_i",
                                },
                                block: {
                                    kind: "block",
                                    blockInners: [{
                                        kind: "blockInnerSentence",
                                        body: {
                                            kind: "expr",
                                            inner: {
                                                kind: "variableLocal",
                                                name: "_i",
                                            }
                                        }
                                    }]
                                },
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("blockInnerBreak", () => {
        test("checking value", () => {
            expect(parse(`OnBoot{break}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "blockInnerBreak",
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("blockInnerParallel", () => {
        test("checking value", () => {
            expect(parse(`OnBoot{parallel _a}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "blockInnerParallel",
                                target: {
                                    kind: "expr",
                                    inner: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                }
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("outputSettlement", () => {
        test("checking value", () => {
            expect(parse(`OnBoot{--}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "outputSettlement",
                            }
                        }],
                    }]
                },
                errs: [],
            });
        });
    });
});

describe("expr", () => {
    describe("combination", () => {
        test("priory check", () => {
            expect(parse(`OnBoot{1+(2*3)}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "additionOrSubtractionOperation",
                                    operand1: {
                                        kind: "expr",
                                        inner: {
                                            kind: "int_x10",
                                            value: 1,
                                        }
                                    },
                                    operand2: {
                                        kind: "expr",
                                        inner: {
                                            kind: "parenthesesOperation",
                                            operand: {
                                                kind: "expr",
                                                inner: {
                                                    kind: "multiplicationOrDivisionOperation",
                                                    operand1: {
                                                        kind: "expr",
                                                        inner: {
                                                            kind: "int_x10",
                                                            value: 2,
                                                        }
                                                    },
                                                    operand2: {
                                                        kind: "expr",
                                                        inner: {
                                                            kind: "int_x10",
                                                            value: 3,
                                                        }
                                                    },
                                                },
                                            }
                                        }
                                    }
                                }
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("exclamationOperation", () => {
        test("checking value", () => {
            expect(parse("OnBoot{!_a}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "exclamationOperation",
                                    operand: {
                                        kind: "expr",
                                        inner: {
                                            kind: "variableLocal",
                                            name: "_a",
                                        }
                                    }
                                }
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("incrementOrDecrementOperation", () => {
        test("checking value", () => {
            expect(parse("OnBoot{_a++}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "incrementOrDecrementOperation",
                                    operand: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    },
                                    operator: {
                                        kind: "incrementOrDecrementOperator_$0",
                                        body: "++",
                                    },
                                }
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("feedbackOperation", () => {
        test("checking value", () => {
            expect(parse("OnBoot{&_a}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "feedbackOperation",
                                    operand: {
                                        kind: "variableLocal",
                                        name: "_a",
                                    }
                                }
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("substitutionOperation", () => {
        test("checking value", () => {
            expect(parse("OnBoot{a+=b}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "substitutionOperation",
                                    operand1: {
                                        kind: "identifer",
                                        name: "a",
                                    },
                                    operand2: {
                                        kind: "expr",
                                        inner: {
                                            kind: "identifer",
                                            name: "b",
                                        }
                                    },
                                    operator: {
                                        body: "+="
                                    },
                                }
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });
    describe("arrayCall", () => {
        test("arrayCall single-value", () => {
            expect(parse(`OnBoot{aa[1]}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "arrayCall",
                                    target: {
                                        kind: "expr",
                                        inner: {
                                            kind: "identifer",
                                            name: "aa",
                                        },
                                    },
                                    call: {
                                        kind: "expr",
                                        inner: {
                                            kind: "int_x10",
                                            value: 1,
                                        }
                                    },
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("arrayCall multi-values", () => {
            expect(parse(`OnBoot{aa[1,0]}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "arrayCall",
                                    target: {
                                        kind: "expr",
                                        inner: {
                                            kind: "identifer",
                                            name: "aa",
                                        },
                                    },
                                    call: {
                                        kind: "expr",
                                        inner: {
                                            kind: "commaOperation",
                                            operands: [
                                                {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "int_x10",
                                                        value: 1,
                                                    }
                                                },
                                                {
                                                    kind: "expr",
                                                    inner: {
                                                        kind: "int_x10",
                                                        value: 0,
                                                    }
                                                }
                                            ],
                                        },
                                    },
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("functionCall", () => {
        test("functionCall single-value", () => {
            expect(parse(`OnBoot{CHRCODE("abc")}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "functionCall",
                                    args: {
                                        kind: "expr",
                                        inner: { kind: "literalString", body: "abc" }
                                    }
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("functionCall multi-values", () => {
            expect(parse(`OnBoot{CHRCODE("abc", 1)}`)).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "functionCall",
                                    args: {
                                        kind: "expr",
                                        inner: {
                                            kind: "commaOperation",
                                            operands: [
                                                {
                                                    kind: "expr",
                                                    inner: { kind: "literalString", body: "abc" }
                                                },
                                                {
                                                    kind: "expr",
                                                    inner: { kind: "int_x10", value: 1 }
                                                },
                                            ],
                                        }
                                    }
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });

    describe("signed", () => {
        test("signed positive", () => {
            expect(parse("OnBoot{+3}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "int_x10",
                                    value: 3,
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });

        test("signed negative", () => {
            expect(parse("OnBoot{-3}")).toMatchObject({
                ast: {
                    contents: [{
                        kind: "functionBlock",
                        blockInners: [{
                            kind: "blockInnerSentence",
                            body: {
                                kind: "expr",
                                inner: {
                                    kind: "int_x10",
                                    value: -3,
                                },
                            },
                            terminator: { kind: "statementTerminatorBody" },
                        }],
                    }]
                },
                errs: [],
            });
        });
    });
});

describe("variable", () => {
    test("identifer function name", () => {
        expect(parse("OnBoot{CHRCODE}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "identifer",
                                name: "CHRCODE",
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("identifer including continueLine", () => {
        expect(parse("OnBoot{ident/\n    ifer}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "identifer",
                                name: "identifer",
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });;
    });

    test("identifer including commentLong", () => {
        expect(parse("OnBoot{a/* bbb */a}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "identifer",
                                name: "aa",
                                bodyRaw: [{ kind: "commentLong", comment: " bbb " }, "a"]
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });;
    });

    test("variableLocal including continueLine", () => {
        expect(parse("OnBoot{_/\n    ident/\n    ifer}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "variableLocal",
                                name: "_identifer",
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });;
    });

    test("variableLocal including commentLong", () => {
        expect(parse("OnBoot{_/* aaa */a/* bbb */a}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "variableLocal",
                                name: "_aa",
                                bodyRaw: [{ kind: "commentLong", comment: " bbb " }, "a"],
                                spaces: [{ kind: "commentLong", comment: " aaa " }],
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });;
    });
});

describe("literal", () => {
    test("heredoc multi-line", () => {
        expect(parse(`OnBoot{<<"
aaa
bbb
ccc
">>}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "heredoc",
                                body: "aaa\nbbb\nccc\n"
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("heredoc including escaped terminator", () => {
        expect(parse(`OnBoot{<<"
"">>
">>}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "heredoc",
                                body: "\"\">>\n"
                            }
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }]
                }]
            },
            errs: [],
        });
    });

    test("heredocRaw multi-line", () => {
        expect(parse(`OnBoot{<<'
aaa
bbb
ccc
'>>}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "heredocRaw",
                                body: "aaa\nbbb\nccc\n"
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("heredocRaw including escaped terminator", () => {
        expect(parse(`OnBoot{<<'
''>>
'>>}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "heredocRaw",
                                body: "''>>\n"
                            }
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }]
                }]
            },
            errs: [],
        });
    });

    test("literalString including escaped terminator", () => {
        expect(parse(`OnBoot{"aa""bb"}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "literalString",
                                body: `aa""bb`,
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("literalString including continueLine", () => {
        expect(parse(`OnBoot{"aa/\n    bb"}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "literalString",
                                body: "aabb",
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("literalStringRaw including escaped terminator", () => {
        expect(parse(`OnBoot{'aa''bb'}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "literalStringRaw",
                                body: `aa''bb`,
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("literalStringRaw including continueLine", () => {
        expect(parse(`OnBoot{'aa/\n    bb'}`)).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "literalStringRaw",
                                body: "aabb",
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("real", () => {
        expect(parse("OnBoot{0.123}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "real",
                                value: 0.123,
                            }
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }],
                }]
            },
            errs: [],
        });
    });

    test("int_x10", () => {
        expect(parse("OnBoot{1234}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "int_x10",
                                value: 1234,
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }]
                }]
            },
            errs: [],
        });
    });

    test("int_x2", () => {
        expect(parse("OnBoot{0b1001}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "int_x2",
                                value: 9,
                                bodyRaw: ["1", "0", "0", "1"],
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }]
                }]
            },
            errs: [],
        });
    });

    test("int_x16", () => {
        expect(parse("OnBoot{0xf1}")).toMatchObject({
            ast: {
                contents: [{
                    kind: "functionBlock",
                    blockInners: [{
                        kind: "blockInnerSentence",
                        body: {
                            kind: "expr",
                            inner: {
                                kind: "int_x16",
                                value: 241,
                                bodyRaw: ["f", "1"],
                            },
                        },
                        terminator: { kind: "statementTerminatorBody" },
                    }]
                }]
            },
            errs: [],
        });
    });
});

describe("etc", () => {
    test("newLine literal", () => {
        expect(parse("\n")).toMatchObject({
            ast: { contents: [{ kind: "newLine", newLine: "\n", spaces: [] }] }, errs: []
        });
    });
    test("newLine heredoc", () => {
        expect(parse(`
`)).toMatchObject({
            ast: { contents: [{ kind: "newLine", newLine: "\n", spaces: [] }] }, errs: []
        });
    });


    test("someSpace", () => {
        expect(parse("    ")).toMatchObject({
            ast: {
                contents: [{
                    kind: "someSpaces",
                    spaces: [" ", " ", " ", " "],
                }]
            },
            errs: [],
        });
    });
    test("commentLong", () => {
        expect(parse("/* aaa */")).toMatchObject({
            ast: {
                contents: [{
                    kind: "commentLong",
                    commentRaw: [
                        { c: " ", },
                        { c: "a", },
                        { c: "a", },
                        { c: "a", },
                        { c: " ", }
                    ],
                    comment: " aaa ",
                }]
            },
            errs: [],
        });
    });
    test("commentLine", () => {
        expect(parse("    // aaa")).toMatchObject({
            ast: {
                contents: [
                    {
                        kind: "someSpaces",
                        spaces: [" ", " ", " ", " "],
                    },
                    {
                        kind: "commentLine",
                        commentRaw: [" ", "a", "a", "a"],
                        spaces: [],
                    }
                ]
            },
            errs: [],
        });
    });
    test("continueLine", () => {
        expect(parse("/\n    ")).toMatchObject({
            ast: {
                contents: [{
                    kind: "continueLine",
                    newLine: {
                        kind: "newLine",
                        newLine: "\n",
                        spaces: [" ", " ", " ", " "],
                    }
                }]
            },
            errs: [],
        });
    });
});
