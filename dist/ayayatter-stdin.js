#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const format_1 = require("./format");
const cliByStdin = (src) => {
    const formatResult = (0, format_1.format)(src);
    if (typeof (formatResult) === "string") {
        const result = formatResult.replace(/\r\n/g, "\n");
        process.stdout.write(result);
    }
    else {
        console.error(formatResult);
        process.exit(3);
    }
};
const program = new commander_1.Command();
program.
    version("0.1.0");
program.parse(process.argv);
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    const buffers = [];
    try {
        for (var _d = true, _e = __asyncValues(process.stdin), _f; _f = yield _e.next(), _a = _f.done, !_a;) {
            _c = _f.value;
            _d = false;
            try {
                const chunk = _c;
                buffers.push(chunk);
            }
            finally {
                _d = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    const buffer = Buffer.concat(buffers);
    const text = buffer.toString();
    if (text.length !== 0) {
        cliByStdin(text);
    }
}))();
