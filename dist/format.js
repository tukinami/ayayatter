"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distinguishNewLineCode = exports.format = exports.formatFromUtf8 = exports.SettingRecorder = void 0;
const parser_1 = require("./parser");
const root_1 = require("./format/root");
class SettingRecorder {
    constructor(newLine, indentWidth) {
        this.newLine = newLine;
        this.indentWidth = indentWidth;
    }
    indent(indentDepth) {
        return ' '.repeat(this.indentWidth).repeat(indentDepth);
    }
}
exports.SettingRecorder = SettingRecorder;
const formatFromUtf8 = (src) => {
    let hasBom = false;
    let tmp = src;
    if (src.startsWith("\ufeff")) {
        hasBom = true;
        tmp = src.replace("\ufeff", "");
    }
    let formatted = (0, exports.format)(tmp);
    if (hasBom && typeof (formatted) === "string") {
        formatted = "\ufeff" + formatted;
    }
    return formatted;
};
exports.formatFromUtf8 = formatFromUtf8;
const format = (src) => {
    const { ast, errs } = (0, parser_1.parse)(src);
    if (errs.length !== 0) {
        return errs;
    }
    if (ast === null) {
        return "";
    }
    const newLine = (0, exports.distinguishNewLineCode)(src);
    const settingRecorder = new SettingRecorder(newLine, 4);
    const formatted = (0, root_1.formatRoot)(settingRecorder, ast.contents);
    const filtered = eraseSerialNewLine(settingRecorder, formatted);
    return filtered;
};
exports.format = format;
const distinguishNewLineCode = (src) => {
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
exports.distinguishNewLineCode = distinguishNewLineCode;
const eraseSerialNewLine = (setting, src) => {
    let s = src;
    let newLine = setting.newLine;
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
