import { SyntaxErr } from "./parser";
export declare class SettingRecorder {
    readonly newLine: "\n" | "\r\n" | "\r";
    readonly indentWidth: number;
    constructor(newLine: "\n" | "\r\n" | "\r", indentWidth: number);
    indent(indentDepth: number): string;
}
export declare const formatFromUtf8: (src: string) => string | SyntaxErr[];
export declare const format: (src: string) => string | SyntaxErr[];
export declare const distinguishNewLineCode: (src: string) => "\n" | "\r\n" | "\r";
//# sourceMappingURL=format.d.ts.map