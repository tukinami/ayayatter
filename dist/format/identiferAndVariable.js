"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatVariableLocal = exports.formatIdentifer = exports.formatIdentiferOrVariableLocal = void 0;
const parser_1 = require("../parser");
const comment_1 = require("./comment");
const formatIdentiferOrVariableLocal = (identifer) => {
    if (identifer.kind === parser_1.ASTKinds.identifer) {
        return (0, exports.formatIdentifer)(identifer);
    }
    else {
        return (0, exports.formatVariableLocal)(identifer);
    }
};
exports.formatIdentiferOrVariableLocal = formatIdentiferOrVariableLocal;
const formatIdentifer = (identifer) => {
    let resultPreview = (0, comment_1.formatArrayIncludesCommentLong)(identifer.bodyRaw);
    return `${resultPreview}${identifer.name}`;
};
exports.formatIdentifer = formatIdentifer;
const formatVariableLocal = (variable) => {
    const resultPreview = (0, comment_1.formatArrayIncludesCommentLong)([...variable.spaces, ...variable.bodyRaw]);
    return `${resultPreview}${variable.name}`;
};
exports.formatVariableLocal = formatVariableLocal;
