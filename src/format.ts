import { parse, SyntaxErr } from "./parser";
import { formatRoot } from "./format/root";

export class SettingRecorder {
    readonly newLine: "\n" | "\r\n" | "\r"
    readonly indentWidth: number

    constructor(newLine: "\n" | "\r\n" | "\r", indentWidth: number) {
        this.newLine = newLine;
        this.indentWidth = indentWidth;
    }

    indent(indentDepth: number): string {
        return ' '.repeat(this.indentWidth).repeat(indentDepth);
    }
}

export const formatFromUtf8 = (src: string): string | SyntaxErr[] => {
    let hasBom = false;
    let tmp = src;
    if (src.startsWith("\ufeff")) {
        hasBom = true;
        tmp = src.replace("\ufeff", "");
    }

    let formatted = format(tmp);
    if (hasBom && typeof (formatted) === "string") {
        formatted = "\ufeff" + formatted;
    }

    return formatted;
};

export const format = (src: string): string | SyntaxErr[] => {
    const { ast, errs } = parse(src);

    if (errs.length !== 0) {
        return errs;
    }

    if (ast === null) {
        return "";
    }

    const newLine = distinguishNewLineCode(src);
    const settingRecorder = new SettingRecorder(newLine, 4);

    const formatted = formatRoot(settingRecorder, ast.contents);
    const filtered = eraseSerialNewLine(settingRecorder, formatted);

    return filtered;
}

export const distinguishNewLineCode = (src: string): "\n" | "\r\n" | "\r" => {
    if (src.includes("\r\n")) {
        return "\r\n";
    }
    if (src.includes("\n")) {
        return "\n";
    }
    if (src.includes("\r")) {
        return "\r";
    }

    return "\n";
};

const eraseSerialNewLine = (setting: SettingRecorder, src: string): string => {
    let s = src;
    let newLine: string = setting.newLine;
    newLine = newLine.replace(/\r/g, "\\r");
    newLine = newLine.replace(/\n/g, "\\n");

    if (s.startsWith(setting.newLine)) {
        const regexpStart = new RegExp(`^(${newLine})+`);
        s = s.replace(regexpStart, "");
    }
    if (s.endsWith(setting.newLine + setting.newLine)) {
        const regexpEnd = new RegExp(`(${newLine})+$`);
        s = s.replace(regexpEnd, setting.newLine);
    }

    const regexpSerials = new RegExp(`(${newLine}){3,}`, "g");

    const result = s.replace(regexpSerials, setting.newLine.repeat(2));

    return result;
};
