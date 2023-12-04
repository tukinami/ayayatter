import { SettingRecorder } from "./../format";
import { ASTKinds, heredoc, heredocRaw, int, literal, literalString, literalStringRaw, real } from "./../parser";
import { formatArrayIncludesCommentLong } from "./comment";
import { formatContinueLine, formatNewLine } from "./etc";
import { isContinueLine, isNewLine } from "./util";

export const formatLiteral = (
    setting: SettingRecorder,
    literal: literal,
    indentDepth: number,
): string => {
    switch (literal.kind) {
        case ASTKinds.heredoc: {
            return formatHeredoc(setting, literal, indentDepth);
        }
        case ASTKinds.heredocRaw: {
            return formatHeredocRaw(setting, literal, indentDepth);
        }
        case ASTKinds.literalString:
        case ASTKinds.literalStringRaw: {
            return formatLiteralString(setting, literal, indentDepth);
        }
        case ASTKinds.real: {
            return formatReal(literal);
        }
        case ASTKinds.int_x10:
        case ASTKinds.int_x2:
        case ASTKinds.int_x16: {
            return formatInt(literal)
        }
    }
};

const formatHeredoc = (
    setting: SettingRecorder,
    heredoc: heredoc,
    indentDepth: number,
): string => {
    const indent = setting.indent(indentDepth);
    const result = "<<\"" + setting.newLine + heredoc.body + indent + "\">>";

    return result;
};

const formatHeredocRaw = (
    setting: SettingRecorder,
    heredoc: heredocRaw,
    indentDepth: number,
): string => {
    const indent = setting.indent(indentDepth);
    const result = "<<'" + setting.newLine + heredoc.body + indent + "'>>";

    return result;
};

const formatLiteralString = (
    setting: SettingRecorder,
    str: literalString | literalStringRaw,
    indentDepth: number,
): string => {
    const indent = setting.indent(indentDepth);

    const body = str.bodyRaw.map((s) => {
        if (typeof (s) !== "string") {
            if (isContinueLine(s)) {
                return formatContinueLine(setting, s);
            }
            if (isNewLine(s)) {
                return formatNewLine(setting, s);
            }
        }
        return s;
    }).reduce((accumlator, current) => {
        return accumlator.endsWith(setting.newLine)
            ? accumlator + indent + current
            : accumlator + current;
    }, "");

    const quote = str.kind === ASTKinds.literalString
        ? "\"" : "'";

    return quote + body + quote;
};

const formatReal = (
    real: real,
): string => {
    const commentLongs = formatArrayIncludesCommentLong([
        ...real.integerPart, ...real.fractionalPart
    ]);

    return `${commentLongs}${real.str}`;
}

const formatInt = (
    int: int
): string => {
    const commentLongs = formatArrayIncludesCommentLong(int.bodyRaw);
    return `${commentLongs}${int.str}`;
};
