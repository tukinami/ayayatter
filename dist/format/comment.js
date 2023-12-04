"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatArrayIncludesCommentLong = exports.formatCommentLongArrays = exports.formatCommentLong = exports.formatCommentLine = void 0;
const util_1 = require("./util");
const formatCommentLine = (setting, comment) => {
    return `// ${comment.commentRaw.join('').trim()}${setting.newLine}`;
};
exports.formatCommentLine = formatCommentLine;
const formatCommentLong = (comment) => {
    const s = comment.comment.trim();
    return `/* ${s} */`;
};
exports.formatCommentLong = formatCommentLong;
const formatCommentLongArrays = (commentArrays) => {
    return formatCommentLongs(commentArrays.flat());
};
exports.formatCommentLongArrays = formatCommentLongArrays;
const formatArrayIncludesCommentLong = (array) => {
    const filtered = (0, util_1.toOnlyCommentLongs)(array);
    return formatCommentLongs(filtered);
};
exports.formatArrayIncludesCommentLong = formatArrayIncludesCommentLong;
const formatCommentLongs = (comments) => {
    return comments.map((c) => (0, exports.formatCommentLong)(c)).join("");
};
