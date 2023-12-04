"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBlockInnerFlow = void 0;
const parser_1 = require("./../parser");
const selector_1 = require("./selector");
const util_1 = require("./util");
const comment_1 = require("./comment");
const blockInner_1 = require("./blockInner");
const etc_1 = require("./etc");
const literal_1 = require("./literal");
const expr_1 = require("./expr");
const blockInnerSentence_1 = require("./blockInnerSentence");
const identiferAndVariable_1 = require("./identiferAndVariable");
const formatBlockInnerFlow = (setting, flow, indentDepth) => {
    let result = setting.indent(indentDepth);
    result += formatBlockInnerFlowKind(setting, flow.body, indentDepth);
    return result;
};
exports.formatBlockInnerFlow = formatBlockInnerFlow;
const formatBlockInnerFlowKind = (setting, flow, indentDepth) => {
    switch (flow.kind) {
        case parser_1.ASTKinds.flowIf: {
            return formatFlowIf(setting, flow, indentDepth);
        }
        case parser_1.ASTKinds.flowCase: {
            return formatFlowCase(setting, flow, indentDepth);
        }
        case parser_1.ASTKinds.flowSwitch:
        case parser_1.ASTKinds.flowWhile: {
            return formatFlowSwitchOrWhile(setting, flow, indentDepth);
        }
        case parser_1.ASTKinds.flowFor: {
            return formatFlowFor(setting, flow, indentDepth);
        }
        case parser_1.ASTKinds.flowForeach: {
            return formatFlowForeach(setting, flow, indentDepth);
        }
        case parser_1.ASTKinds.block: {
            return formatBlock(setting, flow, indentDepth);
        }
    }
};
const formatFlowIf = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const condition = (0, expr_1.formatExpr)(setting, flow.condition, indentDepth);
    const block = flow.block.kind === parser_1.ASTKinds.block
        ? " " + formatBlock(setting, flow.block, indentDepth)
        : formatFlowIfBlock(setting, flow.block, indentDepth);
    const defaultIndent = setting.indent(indentDepth);
    const flowElseifs = flow.flowElseifs.map((f) => {
        return defaultIndent + formatFlowElseif(setting, f, indentDepth);
    }).join("");
    const flowElse = flow.flowElse === null
        ? ""
        : defaultIndent + formatFlowElse(setting, flow.flowElse, indentDepth);
    const flowIf = `${nameComments}if ${condition}${block}`;
    const body = flowIf + flowElseifs + flowElse;
    return body;
};
const formatFlowElseif = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const condition = (0, expr_1.formatExpr)(setting, flow.condition, indentDepth);
    const block = flow.block.kind === parser_1.ASTKinds.block
        ? " " + formatBlock(setting, flow.block, indentDepth)
        : formatFlowIfBlock(setting, flow.block, indentDepth);
    const body = `${nameComments}elseif ${condition}${block}`;
    return body;
};
const formatFlowElse = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const block = flow.block.kind === parser_1.ASTKinds.block
        ? " " + formatBlock(setting, flow.block, indentDepth)
        : formatFlowIfBlock(setting, flow.block, indentDepth);
    const body = `${nameComments}else${block}`;
    return body;
};
const formatFlowIfBlock = (setting, block, indentDepth) => {
    const spacesStart = (0, comment_1.formatArrayIncludesCommentLong)(block.spacesStart);
    const newLineFirst = (0, util_1.isNewLine)(block.newLineFirst)
        ? (0, etc_1.formatNewLine)(setting, block.newLineFirst)
        : (0, comment_1.formatCommentLine)(setting, block.newLineFirst);
    const inner = (0, blockInnerSentence_1.formatBlockInnerSentence)(setting, block.inner, indentDepth + 1);
    let spacesEnd = (0, comment_1.formatArrayIncludesCommentLong)(block.spacesEnd);
    if (spacesEnd !== "") {
        spacesEnd = setting.indent(indentDepth + 1) + spacesEnd + setting.newLine;
    }
    const body = spacesStart + newLineFirst + inner + spacesEnd;
    return body;
};
const formatFlowCase = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const condition = (0, expr_1.formatExpr)(setting, flow.condition, indentDepth);
    const spacesBeforeBlock = formatBlockSpaces(setting, flow.spacesBeforeBlock, indentDepth);
    const spacesAfterBlock = formatBlockSpaces(setting, flow.spacesAfterBlock, indentDepth);
    const blockInner = formatFlowCaseBlock(setting, flow, indentDepth);
    const defaultIndent = setting.indent(indentDepth);
    const head = `${nameComments}case ${condition} ${spacesBeforeBlock}` + (spacesBeforeBlock.endsWith(setting.newLine)
        ? defaultIndent
        : "");
    const bodyStart = "{" + setting.newLine;
    const bodyEnd = defaultIndent + "}" + (spacesAfterBlock.startsWith(setting.newLine)
        ? ""
        : setting.newLine) + spacesAfterBlock;
    const body = head + bodyStart + blockInner + bodyEnd;
    return body;
};
const formatFlowCaseBlock = (setting, flow, indentDepth) => {
    const firstBlockInners = (0, blockInner_1.formatBlockInners)(setting, flow.firstBlockInners, indentDepth);
    const flowWhens = flow.flowWhens.map((v) => formatFlowWhen(setting, v, indentDepth)).join("");
    const flowOthers = flow.flowOthers === null
        ? ""
        : formatFlowOthers(setting, flow.flowOthers, indentDepth);
    const lastBlockInnes = (0, blockInner_1.formatBlockInners)(setting, flow.lastBlockInners, indentDepth);
    const body = firstBlockInners + flowWhens + flowOthers + lastBlockInnes;
    return body;
};
const formatFlowWhen = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const conditions = formatFlowWhenConditions(setting, flow.conditions, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);
    const defaultIndent = setting.indent(indentDepth);
    const body = `${defaultIndent}${nameComments}when ${conditions} ${block}`;
    return body;
};
const formatFlowWhenConditions = (setting, conditions, indentDepth) => {
    return conditions.conditions.map((v) => {
        return formatFlowWhenCondition(setting, v, indentDepth);
    }).join(", ");
};
const formatFlowWhenCondition = (setting, condition, indentDepth) => {
    const spacesStart = (0, comment_1.formatArrayIncludesCommentLong)(condition.spacesStart);
    const spacesEnd = (0, comment_1.formatArrayIncludesCommentLong)(condition.spacesEnd);
    switch (condition.kind) {
        case parser_1.ASTKinds.flowWhenConditionLiteral: {
            const value = condition.body.kind === "maybePreprocess"
                ? (0, expr_1.formatMaybePreprocess)(setting, condition.body, indentDepth)
                : (0, literal_1.formatLiteral)(setting, condition.body, indentDepth);
            const body = spacesStart + value + spacesEnd;
            return body;
        }
        case parser_1.ASTKinds.flowWhenConditionRange: {
            const spacesLhs = (0, comment_1.formatArrayIncludesCommentLong)(condition.spacesLhs);
            const spacesRhs = (0, comment_1.formatArrayIncludesCommentLong)(condition.spacesRhs);
            const lhs = condition.lhs.kind === "maybePreprocess"
                ? (0, expr_1.formatMaybePreprocess)(setting, condition.lhs, indentDepth)
                : (0, literal_1.formatLiteral)(setting, condition.lhs, indentDepth);
            const rhs = condition.rhs.kind === "maybePreprocess"
                ? (0, expr_1.formatMaybePreprocess)(setting, condition.rhs, indentDepth)
                : (0, literal_1.formatLiteral)(setting, condition.rhs, indentDepth);
            const body = spacesStart + lhs + spacesLhs + "-" + spacesRhs + rhs + spacesEnd;
            return body;
        }
    }
};
const formatFlowOthers = (setting, flow, indentDepth) => {
    const spacesStart = (0, comment_1.formatArrayIncludesCommentLong)(flow.spacesStart);
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const block = formatBlock(setting, flow.block, indentDepth);
    const defaultIndent = setting.indent(indentDepth);
    const body = `${defaultIndent}${spacesStart}others${nameComments} ${block}`;
    return body;
};
const formatFlowSwitchOrWhile = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const condition = (0, expr_1.formatExpr)(setting, flow.condition, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);
    const name = flow.kind === parser_1.ASTKinds.flowSwitch
        ? "switch"
        : "while";
    const body = `${nameComments}${name} ${condition} ${block}`;
    return body;
};
const formatFlowFor = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const initializer = (0, expr_1.formatExpr)(setting, flow.initializer, indentDepth);
    const condition = (0, expr_1.formatExpr)(setting, flow.condition, indentDepth);
    const updater = (0, expr_1.formatExpr)(setting, flow.updater, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);
    const header = `${nameComments}for ${initializer}; ${condition}; ${updater} `;
    const body = header + block;
    return body;
};
const formatFlowForeach = (setting, flow, indentDepth) => {
    const nameComments = (0, comment_1.formatCommentLongArrays)(flow.name.comments);
    const target = (0, expr_1.formatExpr)(setting, flow.target, indentDepth);
    const spacesBeforeVariable = (0, comment_1.formatArrayIncludesCommentLong)(flow.spaceBeforeVariable);
    const variable = (0, identiferAndVariable_1.formatIdentiferOrVariableLocal)(flow.variable);
    const block = formatBlock(setting, flow.block, indentDepth);
    const header = `${nameComments}foreach ${target}; ${spacesBeforeVariable}${variable} `;
    const body = header + block;
    return body;
};
const formatBlock = (setting, flow, indentDepth) => {
    const spacesStart = formatBlockSpaces(setting, flow.spacesStart, indentDepth);
    const selector = flow.selector === null
        ? ""
        : formatBlockSelector(flow.selector);
    const blockInners = (0, blockInner_1.formatBlockInners)(setting, flow.blockInners, indentDepth + 1);
    const spacesEnd = formatBlockSpaces(setting, flow.spacesEnd, indentDepth);
    const defaultIndent = setting.indent(indentDepth);
    const head = spacesStart + (spacesStart.endsWith(setting.newLine)
        ? defaultIndent
        : "");
    const bodyStart = selector + "{" + setting.newLine;
    const bodyEnd = defaultIndent + "}" + (spacesEnd.startsWith(setting.newLine)
        ? ""
        : setting.newLine) + spacesEnd;
    return head + bodyStart + blockInners + bodyEnd;
};
const formatBlockSpaces = (setting, spaces, indentDepth) => {
    const defaultIndent = setting.indent(indentDepth);
    const comments = spaces.flatMap((v) => {
        if (typeof (v) === "string") {
            return [];
        }
        if ((0, util_1.isCommentLine)(v)) {
            return defaultIndent + (0, comment_1.formatCommentLine)(setting, v);
        }
        if ((0, util_1.isCommentLong)(v)) {
            return defaultIndent + (0, comment_1.formatCommentLong)(v) + setting.newLine;
        }
        if ((0, util_1.isNewLine)(v)) {
            return (0, etc_1.formatNewLine)(setting, v);
        }
        return [];
    }).join("");
    return comments;
};
const formatBlockSelector = (selector) => {
    const selectorBody = selector.selector === null
        ? ""
        : (0, selector_1.formatSelector)(selector.selector);
    const body = `${selectorBody} : `;
    return body;
};
