"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFirstNewLineFromBlockInners = exports.formatBlockInners = void 0;
const parser_1 = require("../parser");
const comment_1 = require("./comment");
const preprocess_1 = require("./preprocess");
const util_1 = require("./util");
const blockInnerFlow_1 = require("./blockInnerFlow");
const blockInnerSentence_1 = require("./blockInnerSentence");
const formatBlockInners = (setting, blockInners, indentDepth) => {
    // 被らないように最初のnewLine を削除
    const poppedInners = (0, exports.deleteFirstNewLineFromBlockInners)(blockInners);
    // continueLine と someSpaces は無視
    const filteredInners = poppedInners.flatMap((b) => {
        if ((0, util_1.isContinueLine)(b) || (0, util_1.isSomeSpaces)(b)) {
            return [];
        }
        else {
            return [b];
        }
    });
    let result = '';
    const defaultIndent = setting.indent(indentDepth);
    filteredInners.forEach((b) => {
        switch (b.kind) {
            case parser_1.ASTKinds.newLine: {
                result += setting.newLine;
                break;
            }
            case parser_1.ASTKinds.commentLong: {
                const s = defaultIndent + (0, comment_1.formatCommentLong)(b) + setting.newLine;
                result += s;
                break;
            }
            case parser_1.ASTKinds.commentLine: {
                const s = defaultIndent + (0, comment_1.formatCommentLine)(setting, b);
                result += s;
                break;
            }
            case parser_1.ASTKinds.preprocessGlobalDefine:
            case parser_1.ASTKinds.preprocessDefine: {
                const s = defaultIndent + (0, preprocess_1.formatPreprocessDefineOrGlobalDefine)(setting, b);
                result += s;
                break;
            }
            case parser_1.ASTKinds.blockInnerFlow: {
                const s = (0, blockInnerFlow_1.formatBlockInnerFlow)(setting, b, indentDepth);
                result += s;
                break;
            }
            case parser_1.ASTKinds.blockInnerSentence: {
                const s = (0, blockInnerSentence_1.formatBlockInnerSentence)(setting, b, indentDepth);
                result += s;
                break;
            }
        }
    });
    return result;
};
exports.formatBlockInners = formatBlockInners;
const deleteFirstNewLineFromBlockInners = (blockInners) => {
    const firstInner = blockInners.at(0);
    if (firstInner !== undefined && (0, util_1.isNewLine)(firstInner)) {
        const poppedInners = blockInners.slice(1);
        return poppedInners;
    }
    return blockInners;
};
exports.deleteFirstNewLineFromBlockInners = deleteFirstNewLineFromBlockInners;
