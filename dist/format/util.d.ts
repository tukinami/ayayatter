import { ASTKinds, ASTNodeIntf, commentLine, commentLong, continueLine, newLine, someSpaces } from "./../parser";
export declare const isContinueLine: (test: ASTNodeIntf) => test is continueLine;
export declare const isSomeSpaces: (test: ASTNodeIntf) => test is someSpaces;
export declare const isNewLine: (test: ASTNodeIntf) => test is newLine;
export declare const isCommentLine: (test: ASTNodeIntf) => test is commentLine;
export declare const isCommentLong: (test: ASTNodeIntf) => test is commentLong;
export declare const toOnlyCommentLongs: <T extends ASTNodeIntf>(tokens: (string | commentLong | T)[]) => commentLong[];
export declare const eraseNewLineAfterTarget: <T extends ASTNodeIntf>(tokens: (string | newLine | T)[], targetKinds: ASTKinds[]) => (string | newLine | T)[];
//# sourceMappingURL=util.d.ts.map