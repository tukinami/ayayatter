"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRoot = void 0;
const parser_1 = require("../parser");
const comment_1 = require("./comment");
const etc_1 = require("./etc");
const functionBlock_1 = require("./functionBlock");
const preprocess_1 = require("./preprocess");
const util_1 = require("./util");
const formatRoot = (setting, rootContents) => {
    // functionBlock後のnewLineを削除
    const contentsFormattedNewLine = (0, util_1.eraseNewLineAfterTarget)(rootContents, [parser_1.ASTKinds.functionBlock]);
    // root の continueLine と someSpaces は無視
    const filteredContents = contentsFormattedNewLine.flatMap((c) => {
        if (typeof (c) === "string") {
            return [];
        }
        if ((0, util_1.isContinueLine)(c) || (0, util_1.isSomeSpaces)(c)) {
            return [];
        }
        else {
            return [c];
        }
    });
    const body = filteredContents.map((c) => {
        switch (c.kind) {
            case parser_1.ASTKinds.newLine: {
                return (0, etc_1.formatNewLine)(setting, c);
            }
            case parser_1.ASTKinds.commentLong: {
                return (0, comment_1.formatCommentLong)(c);
            }
            case parser_1.ASTKinds.commentLine: {
                return (0, comment_1.formatCommentLine)(setting, c);
            }
            case parser_1.ASTKinds.functionBlock: {
                return (0, functionBlock_1.formatFunctionBlock)(setting, c);
            }
            case parser_1.ASTKinds.preprocessDefine:
            case parser_1.ASTKinds.preprocessGlobalDefine: {
                return (0, preprocess_1.formatPreprocessDefineOrGlobalDefine)(setting, c);
            }
        }
    }).join("");
    return body;
};
exports.formatRoot = formatRoot;
