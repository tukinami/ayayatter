import { SettingRecorder } from "../format";
import { ASTKinds, blockInner } from "../parser";
import { formatCommentLine, formatCommentLong } from "./comment";
import { formatPreprocessDefineOrGlobalDefine } from "./preprocess";
import { isContinueLine, isNewLine, isSomeSpaces } from "./util";
import { formatBlockInnerFlow } from "./blockInnerFlow";
import { formatBlockInnerSentence } from "./blockInnerSentence";

export const formatBlockInners = (
    setting: SettingRecorder,
    blockInners: blockInner[],
    indentDepth: number
): string => {
    // 被らないように最初のnewLine を削除
    const poppedInners = deleteFirstNewLineFromBlockInners(blockInners);

    // continueLine と someSpaces は無視
    const filteredInners = poppedInners.flatMap((b) => {
        if (isContinueLine(b) || isSomeSpaces(b)) {
            return [];
        } else {
            return [b];
        }
    });

    let result = '';
    const defaultIndent = setting.indent(indentDepth);
    filteredInners.forEach((b) => {
        switch (b.kind) {
            case ASTKinds.newLine: {
                result += setting.newLine;
                break;
            }
            case ASTKinds.commentLong: {
                const s = defaultIndent + formatCommentLong(b) + setting.newLine;
                result += s;
                break;
            }
            case ASTKinds.commentLine: {
                const s = defaultIndent + formatCommentLine(setting, b);
                result += s;
                break;
            }
            case ASTKinds.preprocessGlobalDefine:
            case ASTKinds.preprocessDefine: {
                const s = defaultIndent + formatPreprocessDefineOrGlobalDefine(setting, b);
                result += s;
                break;
            }
            case ASTKinds.blockInnerFlow: {
                const s = formatBlockInnerFlow(setting, b, indentDepth);
                result += s;
                break;
            }
            case ASTKinds.blockInnerSentence: {
                const s = formatBlockInnerSentence(setting, b, indentDepth);
                result += s;
                break;
            }
        }
    });

    return result;
}

export const deleteFirstNewLineFromBlockInners = (
    blockInners: blockInner[]
): blockInner[] => {
    const firstInner = blockInners[0];

    if (firstInner !== undefined && isNewLine(firstInner)) {
        const poppedInners = blockInners.slice(1);
        return poppedInners;
    }

    return blockInners;
}
