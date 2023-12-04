"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBlockInnerSentence = void 0;
const parser_1 = require("./../parser");
const comment_1 = require("./comment");
const util_1 = require("./util");
const expr_1 = require("./expr");
const formatBlockInnerSentence = (setting, sentence, indentDepth) => {
    let result = setting.indent(indentDepth);
    result += formatBlockInnerSentenceKind(setting, sentence.body, indentDepth);
    let commentLongs = (0, comment_1.formatArrayIncludesCommentLong)(sentence.spaces);
    if (commentLongs !== "") {
        commentLongs = " " + commentLongs;
    }
    // terminator がcommentLine ならそれをseparatorにする。それ以外はnewLine
    let terminator = "";
    if (sentence.terminator.kind === parser_1.ASTKinds.statementTerminator_1
        && typeof (sentence.terminator.separator.separator) !== "string"
        && (0, util_1.isCommentLine)(sentence.terminator.separator.separator)) {
        const comment = (0, comment_1.formatCommentLine)(setting, sentence.terminator.separator.separator);
        terminator = " " + comment;
    }
    else {
        terminator = setting.newLine;
    }
    result += commentLongs + terminator;
    // TODO:
    return result;
};
exports.formatBlockInnerSentence = formatBlockInnerSentence;
const formatBlockInnerSentenceKind = (setting, sentence, indentDepth) => {
    switch (sentence.kind) {
        case parser_1.ASTKinds.blockInnerBreak:
        case parser_1.ASTKinds.blockInnerContinue:
        case parser_1.ASTKinds.blockInnerReturn: {
            return formatBlockInnerBreakOrContinueOrReturn(sentence);
        }
        case parser_1.ASTKinds.blockInnerVoid:
        case parser_1.ASTKinds.blockInnerParallel: {
            return formatBlockInnerVoidOrParallel(setting, sentence, indentDepth);
        }
        case parser_1.ASTKinds.outputSettlement: {
            return formatOutputSettlement(sentence);
        }
        case parser_1.ASTKinds.expr: {
            return (0, expr_1.formatExpr)(setting, sentence, indentDepth);
        }
    }
};
const formatBlockInnerBreakOrContinueOrReturn = (sentence) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(sentence.name.comments);
    let name = '';
    switch (sentence.kind) {
        case parser_1.ASTKinds.blockInnerBreak: {
            name = "break";
            break;
        }
        case parser_1.ASTKinds.blockInnerContinue: {
            name = "continue";
            break;
        }
        case parser_1.ASTKinds.blockInnerReturn: {
            name = "return";
            break;
        }
    }
    const body = `${nameComments}${name}`;
    return body;
};
const formatBlockInnerVoidOrParallel = (setting, sentence, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(sentence.name.comments);
    const target = (0, expr_1.formatExpr)(setting, sentence.target, indentDepth);
    const name = sentence.kind === parser_1.ASTKinds.blockInnerVoid
        ? "void"
        : "parallel";
    const body = `${nameComments}${name} ${target}`;
    return body;
};
const formatOutputSettlement = (innerBody) => {
    const body = innerBody.tokens;
    return body;
};
