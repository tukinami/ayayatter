import { ASTNodeIntf } from "./parser";
import { continueLine } from "./parser";
export declare const joinString: (tokens: (string | any)[]) => string;
export declare const filterOutContinueLines: <T extends ASTNodeIntf>(tokens: (T | continueLine)[][]) => T[][];
//# sourceMappingURL=util.d.ts.map