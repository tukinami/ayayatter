import { ASTKinds, identifer, variableLocal } from "../parser";
import { formatArrayIncludesCommentLong } from "./comment";

export const formatIdentiferOrVariableLocal = (
    identifer: identifer | variableLocal
): string => {
    if (identifer.kind === ASTKinds.identifer) {
        return formatIdentifer(identifer);
    } else {
        return formatVariableLocal(identifer);
    }
};

export const formatIdentifer = (
    identifer: identifer,
): string => {
    let resultPreview = formatArrayIncludesCommentLong(identifer.bodyRaw);

    return `${resultPreview}${identifer.name}`;
};

export const formatVariableLocal = (
    variable: variableLocal,
): string => {
    const resultPreview = formatArrayIncludesCommentLong([...variable.spaces, ...variable.bodyRaw]);
    return `${resultPreview}${variable.name}`;
};
