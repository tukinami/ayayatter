"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOutContinueLines = exports.joinString = void 0;
const parser_1 = require("./parser");
const joinString = (tokens) => {
    return tokens.filter((t) => typeof (t) === "string").join("");
};
exports.joinString = joinString;
const filterOutContinueLines = (tokens) => {
    return tokens.map((t) => {
        return t.flatMap((c) => {
            if (c.kind === parser_1.ASTKinds.continueLine) {
                return [];
            }
            else {
                return [c];
            }
        });
    });
};
exports.filterOutContinueLines = filterOutContinueLines;
