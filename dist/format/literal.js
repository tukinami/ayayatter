"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLiteral = void 0;
const parser_1 = require("./../parser");
const comment_1 = require("./comment");
const etc_1 = require("./etc");
const util_1 = require("./util");
const formatLiteral = (setting, literal, indentDepth) => {
    switch (literal.kind) {
        case parser_1.ASTKinds.heredoc: {
            return formatHeredoc(setting, literal, indentDepth);
        }
        case parser_1.ASTKinds.heredocRaw: {
            return formatHeredocRaw(setting, literal, indentDepth);
        }
        case parser_1.ASTKinds.literalString:
        case parser_1.ASTKinds.literalStringRaw: {
            return formatLiteralString(setting, literal, indentDepth);
        }
        case parser_1.ASTKinds.real: {
            return formatReal(literal);
        }
        case parser_1.ASTKinds.int_x10:
        case parser_1.ASTKinds.int_x2:
        case parser_1.ASTKinds.int_x16: {
            return formatInt(literal);
        }
    }
};
exports.formatLiteral = formatLiteral;
const formatHeredoc = (setting, heredoc, indentDepth) => {
    const indent = setting.indent(indentDepth);
    const result = "<<\"" + setting.newLine + heredoc.body + indent + "\">>";
    return result;
};
const formatHeredocRaw = (setting, heredoc, indentDepth) => {
    const indent = setting.indent(indentDepth);
    const result = "<<'" + setting.newLine + heredoc.body + indent + "'>>";
    return result;
};
const formatLiteralString = (setting, str, indentDepth) => {
    const indent = setting.indent(indentDepth);
    const body = str.bodyRaw.map((s) => {
        if (typeof (s) !== "string") {
            if ((0, util_1.isContinueLine)(s)) {
                return (0, etc_1.formatContinueLine)(setting, s);
            }
            if ((0, util_1.isNewLine)(s)) {
                return (0, etc_1.formatNewLine)(setting, s);
            }
        }
        return s;
    }).reduce((accumlator, current) => {
        return accumlator.endsWith(setting.newLine)
            ? accumlator + indent + current
            : accumlator + current;
    }, "");
    const quote = str.kind === parser_1.ASTKinds.literalString
        ? "\"" : "'";
    return quote + body + quote;
};
const formatReal = (real) => {
    const commentLongs = (0, comment_1.formatArrayIncludesCommentLong)([
        ...real.integerPart, ...real.fractionalPart
    ]);
    return `${commentLongs}${real.str}`;
};
const formatInt = (int) => {
    const commentLongs = (0, comment_1.formatArrayIncludesCommentLong)(int.bodyRaw);
    return `${commentLongs}${int.str}`;
};
