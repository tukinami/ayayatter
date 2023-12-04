"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFunctionBlock = void 0;
const blockInner_1 = require("./blockInner");
const comment_1 = require("./comment");
const identiferAndVariable_1 = require("./identiferAndVariable");
const selector_1 = require("./selector");
const util_1 = require("./util");
const formatFunctionBlock = (setting, functionBlock) => {
    const name = (0, identiferAndVariable_1.formatIdentifer)(functionBlock.name);
    const commentsBeforeSelector = formatFunctionBlockSpaces(setting, functionBlock.spacesBeforeSelector);
    const selector = functionBlock.selector === null
        ? ""
        : formatFunctionBlockSelector(functionBlock.selector);
    const commentsBeforeBody = formatFunctionBlockSpaces(setting, functionBlock.spacesBeforeBody);
    const inners = (0, blockInner_1.formatBlockInners)(setting, functionBlock.blockInners, 1);
    const header = name + commentsBeforeSelector + selector + commentsBeforeBody + (commentsBeforeBody === "" ? setting.newLine : "");
    const block = functionBlock.open + setting.newLine
        + inners
        + functionBlock.close + setting.newLine;
    return header + block;
};
exports.formatFunctionBlock = formatFunctionBlock;
const formatFunctionBlockSpaces = (setting, spaces) => {
    return spaces.reduce((accumlator, current) => {
        if (typeof (current) === "string") {
            return accumlator;
        }
        if ((0, util_1.isCommentLine)(current)) {
            return accumlator + (0, comment_1.formatCommentLine)(setting, current);
        }
        else if ((0, util_1.isCommentLong)(current)) {
            return accumlator + (0, comment_1.formatCommentLong)(current) + setting.newLine;
        }
        return accumlator;
    }, "");
};
const formatFunctionBlockSelector = (selector) => {
    const commentsLhs = (0, comment_1.formatArrayIncludesCommentLong)(selector.spaceLhs);
    const commentsRhs = (0, comment_1.formatArrayIncludesCommentLong)(selector.spaceRhs);
    const selectorBody = selector.selector === null
        ? ""
        : (0, selector_1.formatSelector)(selector.selector);
    return `${commentsLhs} : ${commentsRhs}${selectorBody}`;
};
