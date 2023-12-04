import { ASTKinds } from "./parser";
import { ASTNodeIntf } from "./parser";
import { continueLine } from "./parser";

export const joinString = (tokens: (string | any)[]) => {
    return tokens.filter((t) => typeof (t) === "string").join("");
};

export const filterOutContinueLines = <T extends ASTNodeIntf>(
    tokens: (continueLine | T)[][]
): T[][] => {
    return tokens.map((t) => {
        return t.flatMap((c) => {
            if (c.kind === ASTKinds.continueLine) {
                return [];
            } else {
                return [c];
            }
        });
    });
};
