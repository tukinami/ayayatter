import { SettingRecorder } from "../format";
import { ASTNodeIntf, commentLong, functionBlock, functionBlockSelector, commentLine } from "../parser";
import { formatBlockInners } from "./blockInner";
import { formatArrayIncludesCommentLong, formatCommentLine, formatCommentLong } from "./comment";
import { formatIdentifer } from "./identiferAndVariable";
import { formatSelector } from "./selector";
import { isCommentLine, isCommentLong } from "./util";

export const formatFunctionBlock = (
    setting: SettingRecorder,
    functionBlock: functionBlock,
): string => {
    const name = formatIdentifer(functionBlock.name);
    const commentsBeforeSelector = formatFunctionBlockSpaces(
        setting,
        functionBlock.spacesBeforeSelector
    );
    const selector = functionBlock.selector === null
        ? ""
        : formatFunctionBlockSelector(functionBlock.selector);
    const commentsBeforeBody = formatFunctionBlockSpaces(
        setting,
        functionBlock.spacesBeforeBody
    );
    const inners = formatBlockInners(setting, functionBlock.blockInners, 1);

    const header = name + commentsBeforeSelector + selector + commentsBeforeBody + (
        commentsBeforeBody === "" ? setting.newLine : ""
    );
    const block = functionBlock.open + setting.newLine
        + inners
        + functionBlock.close + setting.newLine;

    return header + block;
};

const formatFunctionBlockSpaces = <T extends ASTNodeIntf>(
    setting: SettingRecorder,
    spaces: (commentLong | commentLine | T | string)[]
): string => {
    return spaces.reduce((accumlator: string, current) => {
        if (typeof (current) === "string") {
            return accumlator;
        }

        if (isCommentLine(current)) {
            return accumlator + formatCommentLine(setting, current);
        } else if (isCommentLong(current)) {
            return accumlator + formatCommentLong(current) + setting.newLine;
        }

        return accumlator;
    }, "");
};

const formatFunctionBlockSelector = (
    selector: functionBlockSelector
): string => {
    const commentsLhs = formatArrayIncludesCommentLong(selector.spaceLhs);
    const commentsRhs = formatArrayIncludesCommentLong(selector.spaceRhs);

    const selectorBody = selector.selector === null
        ? ""
        : formatSelector(selector.selector);

    return `${commentsLhs} : ${commentsRhs}${selectorBody}`;
};
