#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliByPath = void 0;
const commander_1 = require("commander");
const node_path_1 = require("node:path");
const promises_1 = require("node:fs/promises");
const format_1 = require("./format");
const cliByPath = (opt) => {
    const inputPathRaw = (0, node_path_1.isAbsolute)(opt.path)
        ? opt.path
        : (0, node_path_1.resolve)(opt.path);
    const inputPath = (0, node_path_1.normalize)(inputPathRaw);
    switch (opt.encoding) {
        case "utf8":
        case "utf-8":
        case "UTF-8": {
            (0, promises_1.readFile)(inputPath, { encoding: "utf8" })
                .then((v) => {
                const formatResult = (0, format_1.formatFromUtf8)(v);
                if (typeof (formatResult) === "string") {
                    if (opt.force) {
                        return (0, promises_1.writeFile)(inputPath, formatResult);
                    }
                    else {
                        console.log(`${formatResult}`);
                    }
                }
                else {
                    return Promise.reject(formatResult);
                }
            })
                .catch((e) => {
                console.error(`Error: ${e}`);
                process.exit(3);
            });
            break;
        }
        default: {
        }
    }
};
exports.cliByPath = cliByPath;
const program = new commander_1.Command();
program
    .version("0.1.0")
    .option("-f, --force", "force over-writing", false)
    .option("-e, --encoding <encoding>", "encoding of input dic file", "utf8");
program.parse(process.argv);
const opts = program.opts();
const inputs = program.args;
if (inputs.length === 0) {
    console.error("input path required");
    process.exit(1);
}
(0, exports.cliByPath)({ path: inputs[0], force: opts.force, encoding: opts.encoding });
