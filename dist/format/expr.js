"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMaybePreprocess = exports.formatExpr = void 0;
const parser_1 = require("./../parser");
const comment_1 = require("./comment");
const identiferAndVariable_1 = require("./identiferAndVariable");
const literal_1 = require("./literal");
const formatExpr = (setting, expr, indentDepth) => {
    const commentLongsLhs = (0, comment_1.formatArrayIncludesCommentLong)(expr.spacesLhs);
    const commentLongsRhs = (0, comment_1.formatArrayIncludesCommentLong)(expr.spacesRhs);
    const inner = formatExprInner(setting, expr.inner, indentDepth);
    const body = commentLongsLhs + inner + commentLongsRhs;
    return body;
};
exports.formatExpr = formatExpr;
const formatExprInner = (setting, inner, indentDepth) => {
    switch (inner.kind) {
        case parser_1.ASTKinds.parenthesesOperation: {
            return formatParenthesesOperation(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.bracketsOperation: {
            return formatBracketsOperation(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.exclamationOperation: {
            return formatExclamationOperation(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.incrementOrDecrementOperation: {
            return formatIncrementOrDecrementOperation(inner);
        }
        case parser_1.ASTKinds.feedbackOperation: {
            return formatFeedbackOperation(inner);
        }
        case parser_1.ASTKinds.multiplicationOrDivisionOperation:
        case parser_1.ASTKinds.additionOrSubtractionOperation:
        case parser_1.ASTKinds.comparisonOperation:
        case parser_1.ASTKinds.logicalConjunction:
        case parser_1.ASTKinds.logicalDisjunction: {
            return formatNormal2OperandOperation(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.substitution:
        case parser_1.ASTKinds.substitutionOperation: {
            return formatSubstitutionOrSubstitutionOperation(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.arrayCall: {
            return formatArrayCall(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.functionCall: {
            return formatFunctionCall(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.signed: {
            return formatSigned(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.heredoc:
        case parser_1.ASTKinds.heredocRaw:
        case parser_1.ASTKinds.literalString:
        case parser_1.ASTKinds.literalStringRaw:
        case parser_1.ASTKinds.real:
        case parser_1.ASTKinds.int_x10:
        case parser_1.ASTKinds.int_x2:
        case parser_1.ASTKinds.int_x16: {
            return (0, literal_1.formatLiteral)(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.identifer:
        case parser_1.ASTKinds.variableLocal: {
            return (0, identiferAndVariable_1.formatIdentiferOrVariableLocal)(inner);
        }
        case parser_1.ASTKinds.maybePreprocess: {
            return (0, exports.formatMaybePreprocess)(setting, inner, indentDepth);
        }
        case parser_1.ASTKinds.commaOperation: {
            return formatCommaOperation(setting, inner, indentDepth);
        }
    }
};
const formatParenthesesOperation = (setting, op, indentDepth) => {
    const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const operand = op.operand === null ? "" : (0, exports.formatExpr)(setting, op.operand, indentDepth);
    const body = `(${spacesLhs}${operand}${spacesRhs})`;
    return body;
};
const formatBracketsOperation = (setting, op, indentDepth) => {
    const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const start = (0, exports.formatExpr)(setting, op.start, indentDepth);
    const end = op.end === null
        ? ""
        : formatBracketsOperationOption(setting, op.end, indentDepth);
    const delimiter = op.delimiter === null
        ? ""
        : formatBracketsOperationOption(setting, op.delimiter, indentDepth);
    const body = `[${spacesLhs}${start}${end}${delimiter}${spacesRhs}]`;
    return body;
};
const formatBracketsOperationOption = (setting, op, indentDepth) => {
    const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const value = op.value === null ? "" : (0, exports.formatExpr)(setting, op.value, indentDepth);
    return `${spacesLhs}, ${spacesRhs}${value}`;
};
const formatExclamationOperation = (setting, op, indentDepth) => {
    const comments = (0, comment_1.formatArrayIncludesCommentLong)(op.spaces);
    const operand = (0, exports.formatExpr)(setting, op.operand, indentDepth);
    const body = `!${comments}${operand}`;
    return body;
};
const formatIncrementOrDecrementOperation = (op) => {
    const comments = (0, comment_1.formatArrayIncludesCommentLong)(op.spaces);
    const operand = (0, identiferAndVariable_1.formatIdentiferOrVariableLocal)(op.operand);
    const operatorComments = (0, comment_1.formatCommentLongArrays)(op.operator.comments);
    const operatorBody = op.operator.body;
    const body = `${operand}${comments}${operatorComments}${operatorBody}`;
    return body;
};
const formatFeedbackOperation = (op) => {
    const comments = (0, comment_1.formatArrayIncludesCommentLong)(op.spaces);
    const operand = (0, identiferAndVariable_1.formatIdentiferOrVariableLocal)(op.operand);
    const body = `&${comments}${operand}`;
    return body;
};
const formatNormal2OperandOperation = (setting, op, indentDepth) => {
    const operand1 = (0, exports.formatExpr)(setting, op.operand1, indentDepth);
    const commentsLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const commentsRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const operand2 = (0, exports.formatExpr)(setting, op.operand2, indentDepth);
    const operatorComments = (0, comment_1.formatCommentLongArrays)(op.operator.comments);
    const operatorBody = op.operator.body;
    const body = `${operand1}${commentsLhs} ${operatorComments}${operatorBody} ${commentsRhs}${operand2}`;
    return body;
};
const formatSubstitutionOrSubstitutionOperation = (setting, op, indentDepth) => {
    const operand1Body = formatExprInner(setting, op.operand1, indentDepth);
    const commentsLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const commentsRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const operand2 = (0, exports.formatExpr)(setting, op.operand2, indentDepth);
    const operatorComments = (0, comment_1.formatCommentLongArrays)(op.operator.comments);
    const operatorBody = op.operator.body;
    const body = `${operand1Body}${commentsLhs} ${operatorComments}${operatorBody} ${commentsRhs}${operand2}`;
    return body;
};
const formatCommaOperation = (setting, op, indentDepth) => {
    const head = op.head === null
        ? ""
        : (0, exports.formatExpr)(setting, op.head, indentDepth);
    const body = op.bodyRaw.map((b) => {
        const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(b.spacesLhs);
        const body = b.expr === null
            ? ""
            : (0, exports.formatExpr)(setting, b.expr, indentDepth);
        const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(b.spacesRhs);
        return spacesLhs + body + spacesRhs;
    }).join(", ");
    return head + ", " + body;
};
const formatArrayCall = (setting, op, indentDepth) => {
    const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const target = (0, exports.formatExpr)(setting, op.target, indentDepth);
    const call = op.call === null
        ? ""
        : (0, exports.formatExpr)(setting, op.call, indentDepth);
    const body = `${target}[${spacesLhs}${call}${spacesRhs}]`;
    return body;
};
const formatFunctionCall = (setting, op, indentDepth) => {
    const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesLhs);
    const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(op.spacesRhs);
    const target = (0, identiferAndVariable_1.formatIdentifer)(op.target);
    const args = op.args === null
        ? ""
        : (0, exports.formatExpr)(setting, op.args, indentDepth);
    const body = `${target}(${spacesLhs}${args}${spacesRhs})`;
    return body;
};
const formatSigned = (setting, signed, indentDepth) => {
    const body = (0, exports.formatExpr)(setting, signed.operand, indentDepth);
    return signed.operator + body;
};
const formatMaybePreprocess = (setting, maybePreprocess, indentDepth) => {
    const resultPreview = (0, comment_1.formatArrayIncludesCommentLong)(maybePreprocess.bodyRaw);
    const resultBody = `${resultPreview}${maybePreprocess.body}`;
    return resultBody;
};
exports.formatMaybePreprocess = formatMaybePreprocess;
