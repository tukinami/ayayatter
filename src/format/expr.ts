import { SettingRecorder } from "../format";
import { additionOrSubtractionOperation, arrayCall, ASTKinds, bracketsOperation, bracketsOperationOption, commaOperation, comparisonOperation, exclamationOperation, expr, exprInner, feedbackOperation, functionCall, incrementOrDecrementOperation, logicalConjunction, logicalDisjunction, maybePreprocess, multiplicationOrDivisionOperation, parenthesesOperation, signed, substitution, substitutionOperation } from "./../parser";
import { formatArrayIncludesCommentLong, formatCommentLongArrays } from "./comment";
import { formatIdentifer, formatIdentiferOrVariableLocal } from "./identiferAndVariable";
import { formatLiteral } from "./literal";

export const formatExpr = (
    setting: SettingRecorder,
    expr: expr,
    indentDepth: number,
): string => {
    const commentLongsLhs = formatArrayIncludesCommentLong(expr.spacesLhs);
    const commentLongsRhs = formatArrayIncludesCommentLong(expr.spacesRhs);

    const inner = formatExprInner(setting, expr.inner, indentDepth);
    const body = commentLongsLhs + inner + commentLongsRhs;
    return body;
};

const formatExprInner = (
    setting: SettingRecorder,
    inner: exprInner,
    indentDepth: number,
): string => {
    switch (inner.kind) {
        case ASTKinds.parenthesesOperation: {
            return formatParenthesesOperation(setting, inner, indentDepth);
        }
        case ASTKinds.bracketsOperation: {
            return formatBracketsOperation(setting, inner, indentDepth);
        }
        case ASTKinds.exclamationOperation: {
            return formatExclamationOperation(setting, inner, indentDepth);
        }
        case ASTKinds.incrementOrDecrementOperation: {
            return formatIncrementOrDecrementOperation(inner);
        }
        case ASTKinds.feedbackOperation: {
            return formatFeedbackOperation(inner);
        }
        case ASTKinds.multiplicationOrDivisionOperation:
        case ASTKinds.additionOrSubtractionOperation:
        case ASTKinds.comparisonOperation:
        case ASTKinds.logicalConjunction:
        case ASTKinds.logicalDisjunction: {
            return formatNormal2OperandOperation(setting, inner, indentDepth);
        }
        case ASTKinds.substitution:
        case ASTKinds.substitutionOperation: {
            return formatSubstitutionOrSubstitutionOperation(setting, inner, indentDepth);
        }
        case ASTKinds.arrayCall: {
            return formatArrayCall(setting, inner, indentDepth);
        }
        case ASTKinds.functionCall: {
            return formatFunctionCall(setting, inner, indentDepth);
        }
        case ASTKinds.signed: {
            return formatSigned(setting, inner, indentDepth);
        }
        case ASTKinds.heredoc:
        case ASTKinds.heredocRaw:
        case ASTKinds.literalString:
        case ASTKinds.literalStringRaw:
        case ASTKinds.real:
        case ASTKinds.int_x10:
        case ASTKinds.int_x2:
        case ASTKinds.int_x16: {
            return formatLiteral(setting, inner, indentDepth);
        }
        case ASTKinds.identifer:
        case ASTKinds.variableLocal: {
            return formatIdentiferOrVariableLocal(inner);
        }
        case ASTKinds.maybePreprocess: {
            return formatMaybePreprocess(setting, inner, indentDepth);
        }
        case ASTKinds.commaOperation: {
            return formatCommaOperation(setting, inner, indentDepth);
        }
    }
}

const formatParenthesesOperation = (
    setting: SettingRecorder,
    op: parenthesesOperation,
    indentDepth: number
): string => {
    const spacesLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const spacesRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const operand = op.operand === null ? "" : formatExpr(setting, op.operand, indentDepth);

    const body = `(${spacesLhs}${operand}${spacesRhs})`;

    return body;
}

const formatBracketsOperation = (
    setting: SettingRecorder,
    op: bracketsOperation,
    indentDepth: number
): string => {
    const spacesLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const spacesRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const start = formatExpr(setting, op.start, indentDepth);
    const end = op.end === null
        ? ""
        : formatBracketsOperationOption(setting, op.end, indentDepth);
    const delimiter = op.delimiter === null
        ? ""
        : formatBracketsOperationOption(setting, op.delimiter, indentDepth);

    const body = `[${spacesLhs}${start}${end}${delimiter}${spacesRhs}]`;

    return body;
}

const formatBracketsOperationOption = (
    setting: SettingRecorder,
    op: bracketsOperationOption,
    indentDepth: number
): string => {
    const spacesLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const spacesRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const value = op.value === null ? "" : formatExpr(setting, op.value, indentDepth);

    return `${spacesLhs}, ${spacesRhs}${value}`;
};

const formatExclamationOperation = (
    setting: SettingRecorder,
    op: exclamationOperation,
    indentDepth: number
): string => {
    const comments = formatArrayIncludesCommentLong(op.spaces);
    const operand = formatExpr(setting, op.operand, indentDepth);

    const body = `!${comments}${operand}`;

    return body;
};

const formatIncrementOrDecrementOperation = (
    op: incrementOrDecrementOperation,
): string => {
    const comments = formatArrayIncludesCommentLong(op.spaces);
    const operand = formatIdentiferOrVariableLocal(op.operand);

    const operatorComments = formatCommentLongArrays(op.operator.comments);
    const operatorBody = op.operator.body;

    const body = `${operand}${comments}${operatorComments}${operatorBody}`;

    return body;
};

const formatFeedbackOperation = (
    op: feedbackOperation,
): string => {
    const comments = formatArrayIncludesCommentLong(op.spaces);
    const operand = formatIdentiferOrVariableLocal(op.operand);

    const body = `&${comments}${operand}`;

    return body;
};

const formatNormal2OperandOperation = (
    setting: SettingRecorder,
    op: multiplicationOrDivisionOperation | additionOrSubtractionOperation | comparisonOperation
        | logicalConjunction | logicalDisjunction,
    indentDepth: number
): string => {
    const operand1 = formatExpr(setting, op.operand1, indentDepth);
    const commentsLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const commentsRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const operand2 = formatExpr(setting, op.operand2, indentDepth);

    const operatorComments = formatCommentLongArrays(op.operator.comments);
    const operatorBody = op.operator.body;

    const body = `${operand1}${commentsLhs} ${operatorComments}${operatorBody} ${commentsRhs}${operand2}`;

    return body;
};

const formatSubstitutionOrSubstitutionOperation = (
    setting: SettingRecorder,
    op: substitution | substitutionOperation,
    indentDepth: number
): string => {
    const operand1Body = formatExprInner(setting, op.operand1, indentDepth);
    const commentsLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const commentsRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const operand2 = formatExpr(setting, op.operand2, indentDepth);

    const operatorComments = formatCommentLongArrays(op.operator.comments);
    const operatorBody = op.operator.body;

    const body = `${operand1Body}${commentsLhs} ${operatorComments}${operatorBody} ${commentsRhs}${operand2}`;

    return body;
};

const formatCommaOperation = (
    setting: SettingRecorder,
    op: commaOperation,
    indentDepth: number
): string => {
    const head = op.head === null
        ? ""
        : formatExpr(setting, op.head, indentDepth);
    const body = op.bodyRaw.map((b) => {
        const spacesLhs = formatArrayIncludesCommentLong(b.spacesLhs);
        const body = b.expr === null
            ? ""
            : formatExpr(setting, b.expr, indentDepth);
        const spacesRhs = formatArrayIncludesCommentLong(b.spacesRhs);

        return spacesLhs + body + spacesRhs;
    }).join(", ");

    return head + ", " + body;
};

const formatArrayCall = (
    setting: SettingRecorder,
    op: arrayCall,
    indentDepth: number
): string => {
    const spacesLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const spacesRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const target = formatExpr(setting, op.target, indentDepth);
    const call = op.call === null
        ? ""
        : formatExpr(setting, op.call, indentDepth);

    const body = `${target}[${spacesLhs}${call}${spacesRhs}]`;

    return body;
};

const formatFunctionCall = (
    setting: SettingRecorder,
    op: functionCall,
    indentDepth: number
): string => {
    const spacesLhs = formatArrayIncludesCommentLong(op.spacesLhs);
    const spacesRhs = formatArrayIncludesCommentLong(op.spacesRhs);
    const target = formatIdentifer(op.target);
    const args = op.args === null
        ? ""
        : formatExpr(setting, op.args, indentDepth);

    const body = `${target}(${spacesLhs}${args}${spacesRhs})`;

    return body;
};

const formatSigned = (
    setting: SettingRecorder,
    signed: signed,
    indentDepth: number,
): string => {
    const body = formatExpr(setting, signed.operand, indentDepth);
    return signed.operator + body;
}

export const formatMaybePreprocess = (
    setting: SettingRecorder,
    maybePreprocess: maybePreprocess,
    indentDepth: number,
): string => {
    const resultPreview = formatArrayIncludesCommentLong(maybePreprocess.bodyRaw);

    const resultBody = `${resultPreview}${maybePreprocess.body}`

    return resultBody;
};
