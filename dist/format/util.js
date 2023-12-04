"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eraseNewLineAfterTarget = exports.toOnlyCommentLongs = exports.isCommentLong = exports.isCommentLine = exports.isNewLine = exports.isSomeSpaces = exports.isContinueLine = void 0;
const parser_1 = require("./../parser");
const isContinueLine = (test) => {
    return test.kind === parser_1.ASTKinds.continueLine;
};
exports.isContinueLine = isContinueLine;
const isSomeSpaces = (test) => {
    return test.kind === parser_1.ASTKinds.someSpaces;
};
exports.isSomeSpaces = isSomeSpaces;
const isNewLine = (test) => {
    return test.kind === parser_1.ASTKinds.newLine;
};
exports.isNewLine = isNewLine;
const isCommentLine = (test) => {
    return test.kind === parser_1.ASTKinds.commentLine;
};
exports.isCommentLine = isCommentLine;
const isCommentLong = (test) => {
    return test.kind === parser_1.ASTKinds.commentLong;
};
exports.isCommentLong = isCommentLong;
const toOnlyCommentLongs = (tokens) => {
    return tokens.flatMap((t) => {
        if (typeof (t) === "string") {
            return [];
        }
        return (0, exports.isCommentLong)(t) ? [t] : [];
    });
};
exports.toOnlyCommentLongs = toOnlyCommentLongs;
const eraseNewLineAfterTarget = (tokens, targetKinds) => {
    const initialValue = [];
    return tokens.reduceRight((accumlator, current) => {
        const next = accumlator.at(0);
        if (next === undefined
            || typeof (current) === "string"
            || typeof (next) === "string") {
            return [current, ...accumlator];
        }
        if (targetKinds.includes(current.kind) && (0, exports.isNewLine)(next)) {
            const newAccumlator = accumlator.slice(1);
            return [current, ...newAccumlator];
        }
        else {
            return [current, ...accumlator];
        }
    }, initialValue);
};
exports.eraseNewLineAfterTarget = eraseNewLineAfterTarget;
