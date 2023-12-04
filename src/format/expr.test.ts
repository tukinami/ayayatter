import { describe, expect, test } from "@jest/globals";
import { SettingRecorder } from "../format";
import { commaOperation, incrementOrDecrementOperator_$0 } from "../parser";
import { substitutionOperator_$0 } from "../parser";
import { multiplicationOrDivisionOperator_$0 } from "../parser";
import { additionOrSubtractionOperator_$0 } from "../parser";
import { ASTKinds, identifer, int_x10 } from "../parser";
import { formatExpr } from "./expr";

describe("formatExpr", () => {
    test("parenthesesOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.parenthesesOperation,
                    spacesLhs: [],
                    spacesRhs: [],
                    operand: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: {
                            kind: ASTKinds.additionOrSubtractionOperation,
                            operand1: {
                                kind: ASTKinds.expr,
                                spacesLhs: [],
                                inner: new identifer("a", []),
                                spacesRhs: [],
                            },
                            spacesLhs: [],
                            operator: new additionOrSubtractionOperator_$0([]),
                            spacesRhs: [],
                            operand2: {
                                kind: ASTKinds.expr,
                                spacesLhs: [],
                                inner: {
                                    kind: ASTKinds.multiplicationOrDivisionOperation,
                                    operand1: {
                                        kind: ASTKinds.expr,
                                        spacesLhs: [],
                                        inner: new identifer("a", []),
                                        spacesRhs: [],
                                    },
                                    spacesLhs: [],
                                    operator: new multiplicationOrDivisionOperator_$0([]),
                                    spacesRhs: [],
                                    operand2: {
                                        kind: ASTKinds.expr,
                                        spacesLhs: [],
                                        inner: new identifer("b", []),
                                        spacesRhs: [],
                                    },
                                },
                                spacesRhs: [],
                            },
                        },
                        spacesRhs: [],
                    }
                },
                spacesRhs: [],
            },
            1,
        )).toBe("(a + a * b)");
    });

    test("bracketsOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.bracketsOperation,
                    spacesLhs: [],
                    spacesRhs: [],
                    start: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("a", []),
                        spacesRhs: [],
                    },
                    end: {
                        kind: ASTKinds.bracketsOperationOption,
                        spacesLhs: [],
                        spacesRhs: [],
                        value: {
                            kind: ASTKinds.expr,
                            spacesLhs: [],
                            inner: new identifer("b", []),
                            spacesRhs: [],
                        },
                    },
                    delimiter: null,
                },
                spacesRhs: [],
            },
            1,
        )).toBe("[a, b]");
    });

    test("exclamationOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.exclamationOperation,
                    spaces: [],
                    operand: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("a", []),
                        spacesRhs: [],
                    }
                },
                spacesRhs: [],
            },
            1,
        )).toBe("!a");
    });

    test("incrementOrDecrementOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.incrementOrDecrementOperation,
                    operand: new identifer("a", []),
                    spaces: [],
                    operator: new incrementOrDecrementOperator_$0([], []),
                },
                spacesRhs: [],
            },
            1,
        )).toBe("a++");
    });

    test("feedbackOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.feedbackOperation,
                    operand: new identifer("a", []),
                    spaces: [],
                },
                spacesRhs: [],
            },
            1,
        )).toBe("&a");
    });

    test("formatNormal2OperandOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.multiplicationOrDivisionOperation,
                    operand1: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("a", []),
                        spacesRhs: [],
                    },
                    spacesLhs: [],
                    operator: new multiplicationOrDivisionOperator_$0([]),
                    spacesRhs: [],
                    operand2: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("b", []),
                        spacesRhs: [],
                    },
                },
                spacesRhs: [],
            },
            1,
        )).toBe("a * b");
    });

    test("substitutionOrSubstitutionOperation", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.substitution,
                    operand1: new identifer("a", []),
                    spacesLhs: [],
                    operator: new substitutionOperator_$0([]),
                    spacesRhs: [],
                    operand2: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("b", []),
                        spacesRhs: [],
                    },
                },
                spacesRhs: [],
            },
            1,
        )).toBe("a = b");
    });

    test("arrayCall", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.arrayCall,
                    spacesLhs: [],
                    spacesRhs: [],
                    target: {
                        kind: ASTKinds.expr,
                        spacesLhs: [],
                        inner: new identifer("O", ["n", "B", "o", "o", "t"]),
                        spacesRhs: [],
                    },
                    call: {
                        kind: ASTKinds.expr,
                        inner: new commaOperation(
                            {
                                kind: ASTKinds.expr,
                                inner: new identifer("a", []),
                                spacesLhs: [],
                                spacesRhs: [],
                            },
                            [{
                                kind: ASTKinds.commaOperation_$0,
                                spacesLhs: [],
                                spacesRhs: [],
                                expr: {
                                    kind: ASTKinds.expr,
                                    inner: new identifer("b", []),
                                    spacesLhs: [],
                                    spacesRhs: [],
                                }
                            }],
                        ),
                        spacesLhs: [],
                        spacesRhs: []
                    },
                },
                spacesRhs: [],
            },
            1,
        )).toBe("OnBoot[a, b]");
    });

    test("functionCall", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: {
                    kind: ASTKinds.functionCall,
                    target: new identifer("O", ["n", "B", "o", "o", "t"]),
                    spacesLhs: [],
                    spacesRhs: [],
                    args: {
                        kind: ASTKinds.expr,
                        inner: new int_x10(null, "1", ["0"]),
                        spacesLhs: [],
                        spacesRhs: [],
                    },
                },
                spacesRhs: [],
            },
            1,
        )).toBe("OnBoot(10)");
    });

    test("signed", () => {
        expect(formatExpr(
            new SettingRecorder("\r\n", 4),
            {
                kind: ASTKinds.expr,
                spacesLhs: [],
                inner: new int_x10("-", "1", ["0"]),
                spacesRhs: [],
            },
            1
        )).toBe("-10");
    });
});
