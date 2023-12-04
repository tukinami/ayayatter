import { SettingRecorder } from "../format";
import { ASTNodeIntf, commentLine, commentLong } from "./../parser";
export declare const formatCommentLine: (setting: SettingRecorder, comment: commentLine) => string;
export declare const formatCommentLong: (comment: commentLong) => string;
export declare const formatCommentLongArrays: (commentArrays: commentLong[][]) => string;
export declare const formatArrayIncludesCommentLong: <T extends ASTNodeIntf>(array: (string | commentLong | T)[]) => string;
//# sourceMappingURL=comment.d.ts.map