"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSelector = void 0;
const comment_1 = require("./comment");
const formatSelector = (selector) => {
    let result = "";
    if (selector.prefix !== null) {
        result += formatSelectorPrefix(selector.prefix);
    }
    result += formatSelectorMain(selector.main);
    if (selector.suffix !== null) {
        result += formatSelectorSuffix(selector.suffix);
    }
    return result;
};
exports.formatSelector = formatSelector;
const formatSelectorPrefix = (selectorPrefix) => {
    const resultPreview = (0, comment_1.formatCommentLongArrays)(selectorPrefix.nameRaw.comments);
    const resultBody = selectorPrefix.nameRaw.name + "_";
    return `${resultPreview}${resultBody}`;
};
const formatSelectorMain = (selectorMain) => {
    const resultPreview = (0, comment_1.formatCommentLongArrays)(selectorMain.nameRaw.comments);
    const resultBody = selectorMain.nameRaw.name;
    return `${resultPreview}${resultBody}`;
};
const formatSelectorSuffix = (selectorSuffix) => {
    const resultPreview = (0, comment_1.formatCommentLongArrays)(selectorSuffix.nameRaw.comments);
    const resultBody = "_" + selectorSuffix.nameRaw.name;
    return `${resultPreview}${resultBody}`;
};
