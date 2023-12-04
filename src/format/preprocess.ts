import { SettingRecorder } from "./../format";
import { preprocessGlobalDefine, preprocessDefine, ASTKinds } from "./../parser";
import { formatArrayIncludesCommentLong, formatCommentLongArrays } from "./comment";

export const formatPreprocessDefineOrGlobalDefine = (
    setting: SettingRecorder,
    preprocess: preprocessDefine | preprocessGlobalDefine
): string => {
    const nameComments = formatCommentLongArrays(preprocess.nameRaw.comments);
    const commentsBefore = formatArrayIncludesCommentLong(preprocess.beforeRaw);
    const commentsAfter = formatArrayIncludesCommentLong(preprocess.afterRaw);

    const define = preprocess.kind === ASTKinds.preprocessGlobalDefine
        ? "globaldefine"
        : "define";

    const resultBody = `#${define}${nameComments} ${preprocess.before}${commentsBefore} ${preprocess.after}${commentsAfter}${setting.newLine}`;

    return resultBody;
};
