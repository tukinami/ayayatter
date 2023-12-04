import { SettingRecorder } from "../format";
import { ASTKinds, content } from "../parser";
import { formatCommentLine, formatCommentLong } from "./comment";
import { formatNewLine } from "./etc";
import { formatFunctionBlock } from "./functionBlock";
import { formatPreprocessDefineOrGlobalDefine } from "./preprocess";
import { eraseNewLineAfterTarget, isContinueLine, isSomeSpaces } from "./util";

export const formatRoot = (setting: SettingRecorder, rootContents: content[]): string => {
    // functionBlock後のnewLineを削除
    const contentsFormattedNewLine = eraseNewLineAfterTarget(
        rootContents,
        [ASTKinds.functionBlock]
    );

    // root の continueLine と someSpaces は無視
    const filteredContents = contentsFormattedNewLine.flatMap((c) => {
        if (typeof (c) === "string") {
            return [];
        }
        if (isContinueLine(c) || isSomeSpaces(c)) {
            return [];
        } else {
            return [c];
        }
    });

    const body = filteredContents.map((c) => {
        switch (c.kind) {
            case ASTKinds.newLine: {
                return formatNewLine(setting, c);
            }
            case ASTKinds.commentLong: {
                return formatCommentLong(c);
            }
            case ASTKinds.commentLine: {
                return formatCommentLine(setting, c);
            }
            case ASTKinds.functionBlock: {
                return formatFunctionBlock(setting, c);
            }
            case ASTKinds.preprocessDefine:
            case ASTKinds.preprocessGlobalDefine: {
                return formatPreprocessDefineOrGlobalDefine(setting, c);
            }
        }
    }).join("");

    return body;
};
