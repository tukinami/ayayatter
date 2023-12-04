import { SettingRecorder } from "../format";
import { continueLine, newLine } from "../parser";

export const formatNewLine = (
    setting: SettingRecorder,
    newLine: newLine,
): string => {
    return setting.newLine;
}

export const formatContinueLine = (
    setting: SettingRecorder,
    continueLine: continueLine,
): string => {
    return "/" + setting.newLine;
};
