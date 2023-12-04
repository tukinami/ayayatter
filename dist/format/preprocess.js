"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPreprocessDefineOrGlobalDefine = void 0;
const parser_1 = require("./../parser");
const comment_1 = require("./comment");
const formatPreprocessDefineOrGlobalDefine = (setting, preprocess) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(preprocess.nameRaw.comments);
    const commentsBefore = (0, comment_1.formatArrayIncludesCommentLong)(preprocess.beforeRaw);
    const commentsAfter = (0, comment_1.formatArrayIncludesCommentLong)(preprocess.afterRaw);
    const define = preprocess.kind === parser_1.ASTKinds.preprocessGlobalDefine
        ? "globaldefine"
        : "define";
    const resultBody = `#${define}${nameComments} ${preprocess.before}${commentsBefore} ${preprocess.after}${commentsAfter}${setting.newLine}`;
    return resultBody;
};
exports.formatPreprocessDefineOrGlobalDefine = formatPreprocessDefineOrGlobalDefine;
