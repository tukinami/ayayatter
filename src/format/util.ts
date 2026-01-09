import { ASTKinds, ASTNodeIntf, commentLine, commentLong, continueLine, newLine, someSpaces } from "./../parser";

export const isContinueLine = (test: ASTNodeIntf): test is continueLine => {
    return test.kind === ASTKinds.continueLine;
};

export const isSomeSpaces = (test: ASTNodeIntf): test is someSpaces => {
    return test.kind === ASTKinds.someSpaces;
};

export const isNewLine = (test: ASTNodeIntf): test is newLine => {
    return test.kind === ASTKinds.newLine;
};

export const isCommentLine = (test: ASTNodeIntf): test is commentLine => {
    return test.kind === ASTKinds.commentLine;
};

export const isCommentLong = (test: ASTNodeIntf): test is commentLong => {
    return test.kind === ASTKinds.commentLong;
};

export const toOnlyCommentLongs = <T extends ASTNodeIntf>(
    tokens: (commentLong | T | string)[]
): commentLong[] => {
    return tokens.flatMap((t) => {
        if (typeof (t) === "string") {
            return [];
        }
        return isCommentLong(t) ? [t] : [];
    });
}

export const eraseNewLineAfterTarget = <T extends ASTNodeIntf>(
    tokens: (newLine | T | string)[],
    targetKinds: ASTKinds[]
): (newLine | T | string)[] => {
    const initialValue: (newLine | T | string)[] = [];

    return tokens.reduceRight((accumlator, current) => {
        const next = accumlator[0];
        if (next === undefined
            || typeof (current) === "string"
            || typeof (next) === "string") {
            return [current, ...accumlator];
        }

        if ((targetKinds as any).includes(current.kind) && isNewLine(next)) {
            const newAccumlator = accumlator.slice(1);
            return [current, ...newAccumlator];
        } else {
            return [current, ...accumlator];
        }
    }, initialValue);
};
