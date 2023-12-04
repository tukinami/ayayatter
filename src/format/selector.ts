import { SettingRecorder } from "../format";
import { selectorSuffix } from "../parser";
import { selectorMain } from "../parser";
import { selector, selectorPrefix } from "../parser";
import { formatCommentLongArrays } from "./comment";

export const formatSelector = (
    selector: selector
): string => {
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

const formatSelectorPrefix = (
    selectorPrefix: selectorPrefix
): string => {
    const resultPreview = formatCommentLongArrays(selectorPrefix.nameRaw.comments);
    const resultBody = selectorPrefix.nameRaw.name + "_";
    return `${resultPreview}${resultBody}`;
};

const formatSelectorMain = (
    selectorMain: selectorMain
): string => {
    const resultPreview = formatCommentLongArrays(selectorMain.nameRaw.comments);
    const resultBody = selectorMain.nameRaw.name;
    return `${resultPreview}${resultBody}`;
};

const formatSelectorSuffix = (
    selectorSuffix: selectorSuffix
): string => {
    const resultPreview = formatCommentLongArrays(selectorSuffix.nameRaw.comments);
    const resultBody = "_" + selectorSuffix.nameRaw.name;
    return `${resultPreview}${resultBody}`;
};
