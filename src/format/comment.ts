import { SettingRecorder } from "../format";
import { ASTNodeIntf, commentLine, commentLong } from "./../parser";
import { toOnlyCommentLongs } from "./util";

export const formatCommentLine = (
    setting: SettingRecorder,
    comment: commentLine,
): string => {
    return `// ${comment.commentRaw.join('').trim()}${setting.newLine}`;
}


export const formatCommentLong = (comment: commentLong): string => {
    const s = comment.comment.trim();
    return `/* ${s} */`;
}

export const formatCommentLongArrays = (commentArrays: commentLong[][]): string => {
    return formatCommentLongs(commentArrays.flat());
};

export const formatArrayIncludesCommentLong = <T extends ASTNodeIntf>(
    array: (commentLong | T | string)[]
): string => {
    const filtered = toOnlyCommentLongs(array);
    return formatCommentLongs(filtered);
};

const formatCommentLongs = (comments: commentLong[]): string => {
    return comments.map((c) => formatCommentLong(c)).join("");
};
