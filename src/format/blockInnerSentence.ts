import { ASTKinds, blockInnerBreak, blockInnerContinue, blockInnerParallel, blockInnerReturn, blockInnerSentence, blockInnerSentenceKind, blockInnerVoid, outputSettlement } from "./../parser";
import { SettingRecorder } from "./../format";
import { formatArrayIncludesCommentLong, formatCommentLine, formatCommentLongArrays } from "./comment";
import { isCommentLine } from "./util";
import { formatExpr } from "./expr";

export const formatBlockInnerSentence = (
    setting: SettingRecorder,
    sentence: blockInnerSentence,
    indentDepth: number
): string => {
    let result = setting.indent(indentDepth);

    result += formatBlockInnerSentenceKind(setting, sentence.body, indentDepth);

    let commentLongs = formatArrayIncludesCommentLong(sentence.spaces);
    if (commentLongs !== "") {
        commentLongs = " " + commentLongs;
    }

    // terminator がcommentLine ならそれをseparatorにする。それ以外はnewLine
    let terminator = "";
    if (sentence.terminator.kind === ASTKinds.statementTerminator_1
        && typeof (sentence.terminator.separator.separator) !== "string"
        && isCommentLine(sentence.terminator.separator.separator)) {
        const comment = formatCommentLine(setting, sentence.terminator.separator.separator);
        terminator = " " + comment;
    } else {
        terminator = setting.newLine;
    }

    result += commentLongs + terminator;

    // TODO:
    return result;
}

const formatBlockInnerSentenceKind = (
    setting: SettingRecorder,
    sentence: blockInnerSentenceKind,
    indentDepth: number
): string => {
    switch (sentence.kind) {
        case ASTKinds.blockInnerBreak:
        case ASTKinds.blockInnerContinue:
        case ASTKinds.blockInnerReturn: {
            return formatBlockInnerBreakOrContinueOrReturn(sentence);
        }
        case ASTKinds.blockInnerVoid:
        case ASTKinds.blockInnerParallel: {
            return formatBlockInnerVoidOrParallel(setting, sentence, indentDepth);
        }
        case ASTKinds.outputSettlement: {
            return formatOutputSettlement(sentence);
        }
        case ASTKinds.expr: {
            return formatExpr(setting, sentence, indentDepth);
        }
    }
};

const formatBlockInnerBreakOrContinueOrReturn = (
    sentence: blockInnerBreak | blockInnerContinue | blockInnerReturn
): string => {
    const nameComments = formatCommentLongArrays(sentence.name.comments);

    let name = '';
    switch (sentence.kind) {
        case ASTKinds.blockInnerBreak: {
            name = "break";
            break;
        }
        case ASTKinds.blockInnerContinue: {
            name = "continue";
            break;
        }
        case ASTKinds.blockInnerReturn: {
            name = "return";
            break;
        }
    }

    const body = `${nameComments}${name}`;
    return body;
};

const formatBlockInnerVoidOrParallel = (
    setting: SettingRecorder,
    sentence: blockInnerVoid | blockInnerParallel,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(sentence.name.comments);
    const target = formatExpr(setting, sentence.target, indentDepth);

    const name = sentence.kind === ASTKinds.blockInnerVoid
        ? "void"
        : "parallel";

    const body = `${nameComments}${name} ${target}`;
    return body;
};

const formatOutputSettlement = (
    innerBody: outputSettlement
): string => {
    const body = innerBody.tokens;

    return body;
}

