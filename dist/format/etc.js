"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatContinueLine = exports.formatNewLine = void 0;
const formatNewLine = (setting, newLine) => {
    return setting.newLine;
};
exports.formatNewLine = formatNewLine;
const formatContinueLine = (setting, continueLine) => {
    return "/" + setting.newLine;
};
exports.formatContinueLine = formatContinueLine;
