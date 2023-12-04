import { describe, expect, test } from "@jest/globals";
import { ASTKinds, commentLong, identifer, variableLocal } from "../parser";
import { formatIdentifer, formatVariableLocal } from "./identiferAndVariable";

describe("formatIdentifer", () => {
    test("checking value", () => {
        expect(formatIdentifer(new identifer(
            "A",
            ["C", new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "a" }]), "O", "S"],
        ))).toBe("/* a */ACOS");
    });
});

describe("formatVariableLocal", () => {
    test("checking value", () => {
        expect(formatVariableLocal(new variableLocal(
            [new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "1" }])],
            "a",
            ["b", new commentLong([{ kind: ASTKinds.commentLongBody_2, c: "a" }]), "c"],
        ))).toBe("/* 1 *//* a */_abc");;
    });
});
