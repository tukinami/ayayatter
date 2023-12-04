import { ASTKinds, ASTNodeIntf, block, blockInnerFlow, blockInnerFlowKind, blockSelector, commentLine, commentLong, flowCase, flowElse, flowElseif, flowFor, flowForeach, flowIf, flowIfBlock, flowOthers, flowSwitch, flowWhen, flowWhenCondition, flowWhenConditions, flowWhile } from "./../parser";
import { SettingRecorder } from "./../format";
import { formatSelector } from "./selector";
import { isCommentLine, isCommentLong, isNewLine } from "./util";
import { formatArrayIncludesCommentLong, formatCommentLine, formatCommentLong, formatCommentLongArrays } from "./comment";
import { formatBlockInners } from "./blockInner";
import { formatNewLine } from "./etc";
import { formatLiteral } from "./literal";
import { formatExpr, formatMaybePreprocess } from "./expr";
import { formatBlockInnerSentence } from "./blockInnerSentence";
import { formatIdentiferOrVariableLocal } from "./identiferAndVariable";

export const formatBlockInnerFlow = (
    setting: SettingRecorder,
    flow: blockInnerFlow,
    indentDepth: number
): string => {
    let result = setting.indent(indentDepth);

    result += formatBlockInnerFlowKind(setting, flow.body, indentDepth);

    return result;
}

const formatBlockInnerFlowKind = (
    setting: SettingRecorder,
    flow: blockInnerFlowKind,
    indentDepth: number
): string => {
    switch (flow.kind) {
        case ASTKinds.flowIf: {
            return formatFlowIf(setting, flow, indentDepth);
        }
        case ASTKinds.flowCase: {
            return formatFlowCase(setting, flow, indentDepth);
        }
        case ASTKinds.flowSwitch:
        case ASTKinds.flowWhile: {
            return formatFlowSwitchOrWhile(setting, flow, indentDepth);
        }
        case ASTKinds.flowFor: {
            return formatFlowFor(setting, flow, indentDepth);
        }
        case ASTKinds.flowForeach: {
            return formatFlowForeach(setting, flow, indentDepth);
        }
        case ASTKinds.block: {
            return formatBlock(setting, flow, indentDepth);
        }
    }
}

const formatFlowIf = (
    setting: SettingRecorder,
    flow: flowIf,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const condition = formatExpr(setting, flow.condition, indentDepth);
    const block = flow.block.kind === ASTKinds.block
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

const formatFlowElseif = (
    setting: SettingRecorder,
    flow: flowElseif,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const condition = formatExpr(setting, flow.condition, indentDepth);
    const block = flow.block.kind === ASTKinds.block
        ? " " + formatBlock(setting, flow.block, indentDepth)
        : formatFlowIfBlock(setting, flow.block, indentDepth);

    const body = `${nameComments}elseif ${condition}${block}`;

    return body;
};

const formatFlowElse = (
    setting: SettingRecorder,
    flow: flowElse,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const block = flow.block.kind === ASTKinds.block
        ? " " + formatBlock(setting, flow.block, indentDepth)
        : formatFlowIfBlock(setting, flow.block, indentDepth);

    const body = `${nameComments}else${block}`;

    return body;
};

const formatFlowIfBlock = (
    setting: SettingRecorder,
    block: flowIfBlock,
    indentDepth: number
): string => {
    const spacesStart = formatArrayIncludesCommentLong(block.spacesStart);
    const newLineFirst = isNewLine(block.newLineFirst)
        ? formatNewLine(setting, block.newLineFirst)
        : formatCommentLine(setting, block.newLineFirst);
    const inner = formatBlockInnerSentence(setting, block.inner, indentDepth + 1);
    let spacesEnd = formatArrayIncludesCommentLong(block.spacesEnd);
    if (spacesEnd !== "") {
        spacesEnd = setting.indent(indentDepth + 1) + spacesEnd + setting.newLine;
    }

    const body = spacesStart + newLineFirst + inner + spacesEnd;

    return body;
};

const formatFlowCase = (
    setting: SettingRecorder,
    flow: flowCase,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const condition = formatExpr(setting, flow.condition, indentDepth);
    const spacesBeforeBlock = formatBlockSpaces(setting, flow.spacesBeforeBlock, indentDepth);
    const spacesAfterBlock = formatBlockSpaces(setting, flow.spacesAfterBlock, indentDepth);

    const blockInner = formatFlowCaseBlock(setting, flow, indentDepth);

    const defaultIndent = setting.indent(indentDepth);
    const head = `${nameComments}case ${condition} ${spacesBeforeBlock}` + (
        spacesBeforeBlock.endsWith(setting.newLine)
            ? defaultIndent
            : ""
    );
    const bodyStart = "{" + setting.newLine;
    const bodyEnd = defaultIndent + "}" + (
        spacesAfterBlock.startsWith(setting.newLine)
            ? ""
            : setting.newLine
    ) + spacesAfterBlock;

    const body = head + bodyStart + blockInner + bodyEnd;

    return body;
}

const formatFlowCaseBlock = (
    setting: SettingRecorder,
    flow: flowCase,
    indentDepth: number
): string => {
    const firstBlockInners = formatBlockInners(setting, flow.firstBlockInners, indentDepth);
    const flowWhens = flow.flowWhens.map((v) => formatFlowWhen(setting, v, indentDepth)).join("");
    const flowOthers = flow.flowOthers === null
        ? ""
        : formatFlowOthers(setting, flow.flowOthers, indentDepth);
    const lastBlockInnes = formatBlockInners(setting, flow.lastBlockInners, indentDepth);

    const body = firstBlockInners + flowWhens + flowOthers + lastBlockInnes;

    return body;
};

const formatFlowWhen = (
    setting: SettingRecorder,
    flow: flowWhen,
    indentDepth: number,
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const conditions = formatFlowWhenConditions(setting, flow.conditions, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);

    const defaultIndent = setting.indent(indentDepth);
    const body = `${defaultIndent}${nameComments}when ${conditions} ${block}`

    return body;
};

const formatFlowWhenConditions = (
    setting: SettingRecorder,
    conditions: flowWhenConditions,
    indentDepth: number
): string => {
    return conditions.conditions.map((v) => {
        return formatFlowWhenCondition(setting, v, indentDepth);
    }).join(", ");
};

const formatFlowWhenCondition = (
    setting: SettingRecorder,
    condition: flowWhenCondition,
    indentDepth: number
): string => {
    const spacesStart = formatArrayIncludesCommentLong(condition.spacesStart);
    const spacesEnd = formatArrayIncludesCommentLong(condition.spacesEnd);

    switch (condition.kind) {
        case ASTKinds.flowWhenConditionLiteral: {
            const value = condition.body.kind === "maybePreprocess"
                ? formatMaybePreprocess(setting, condition.body, indentDepth)
                : formatLiteral(setting, condition.body, indentDepth);
            const body = spacesStart + value + spacesEnd;
            return body;
        }
        case ASTKinds.flowWhenConditionRange: {
            const spacesLhs = formatArrayIncludesCommentLong(condition.spacesLhs);
            const spacesRhs = formatArrayIncludesCommentLong(condition.spacesRhs);
            const lhs = condition.lhs.kind === "maybePreprocess"
                ? formatMaybePreprocess(setting, condition.lhs, indentDepth)
                : formatLiteral(setting, condition.lhs, indentDepth);
            const rhs = condition.rhs.kind === "maybePreprocess"
                ? formatMaybePreprocess(setting, condition.rhs, indentDepth)
                : formatLiteral(setting, condition.rhs, indentDepth);
            const body = spacesStart + lhs + spacesLhs + "-" + spacesRhs + rhs + spacesEnd;

            return body;
        }
    }
};

const formatFlowOthers = (
    setting: SettingRecorder,
    flow: flowOthers,
    indentDepth: number
): string => {
    const spacesStart = formatArrayIncludesCommentLong(flow.spacesStart);
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const block = formatBlock(setting, flow.block, indentDepth);

    const defaultIndent = setting.indent(indentDepth);
    const body = `${defaultIndent}${spacesStart}others${nameComments} ${block}`;

    return body;
};

const formatFlowSwitchOrWhile = (
    setting: SettingRecorder,
    flow: flowSwitch | flowWhile,
    indentDepth: number,
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const condition = formatExpr(setting, flow.condition, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);

    const name = flow.kind === ASTKinds.flowSwitch
        ? "switch"
        : "while";

    const body = `${nameComments}${name} ${condition} ${block}`

    return body;
};

const formatFlowFor = (
    setting: SettingRecorder,
    flow: flowFor,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const initializer = formatExpr(setting, flow.initializer, indentDepth);
    const condition = formatExpr(setting, flow.condition, indentDepth);
    const updater = formatExpr(setting, flow.updater, indentDepth);
    const block = formatBlock(setting, flow.block, indentDepth);

    const header = `${nameComments}for ${initializer}; ${condition}; ${updater} `;
    const body = header + block;

    return body;
}

const formatFlowForeach = (
    setting: SettingRecorder,
    flow: flowForeach,
    indentDepth: number
): string => {
    const nameComments = formatCommentLongArrays(flow.name.comments);
    const target = formatExpr(setting, flow.target, indentDepth);
    const spacesBeforeVariable = formatArrayIncludesCommentLong(flow.spaceBeforeVariable);
    const variable = formatIdentiferOrVariableLocal(flow.variable);
    const block = formatBlock(setting, flow.block, indentDepth);

    const header = `${nameComments}foreach ${target}; ${spacesBeforeVariable}${variable} `;
    const body = header + block;

    return body;
};

const formatBlock = (
    setting: SettingRecorder,
    flow: block,
    indentDepth: number,
): string => {
    const spacesStart = formatBlockSpaces(setting, flow.spacesStart, indentDepth);
    const selector = flow.selector === null
        ? ""
        : formatBlockSelector(flow.selector);
    const blockInners = formatBlockInners(setting, flow.blockInners, indentDepth + 1);
    const spacesEnd = formatBlockSpaces(setting, flow.spacesEnd, indentDepth);

    const defaultIndent = setting.indent(indentDepth);
    const head = spacesStart + (
        spacesStart.endsWith(setting.newLine)
            ? defaultIndent
            : ""
    );
    const bodyStart = selector + "{" + setting.newLine;
    const bodyEnd = defaultIndent + "}" + (
        spacesEnd.startsWith(setting.newLine)
            ? ""
            : setting.newLine
    ) + spacesEnd;

    return head + bodyStart + blockInners + bodyEnd;
};

const formatBlockSpaces = <T extends ASTNodeIntf>(
    setting: SettingRecorder,
    spaces: (commentLong | commentLine | T | string)[],
    indentDepth: number
): string => {
    const defaultIndent = setting.indent(indentDepth);
    const comments = spaces.flatMap((v) => {
        if (typeof (v) === "string") {
            return [];
        }
        if (isCommentLine(v)) {
            return defaultIndent + formatCommentLine(setting, v);
        }
        if (isCommentLong(v)) {
            return defaultIndent + formatCommentLong(v) + setting.newLine;
        }
        if (isNewLine(v)) {
            return formatNewLine(setting, v);
        }

        return [];
    }).join("");

    return comments;
};

const formatBlockSelector = (
    selector: blockSelector,
): string => {
    const selectorBody = selector.selector === null
        ? ""
        : formatSelector(selector.selector);

    const body = `${selectorBody} : `;
    return body;
};
