#!/usr/bin/env node

import { Command } from "commander";
import { isAbsolute, resolve, normalize } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { formatFromUtf8 } from "./format";

export const cliByPath = (opt: { path: string, force: boolean, encoding: string }) => {
    const inputPathRaw = isAbsolute(opt.path)
        ? opt.path
        : resolve(opt.path);
    const inputPath = normalize(inputPathRaw);

    switch (opt.encoding) {
        case "utf8":
        case "utf-8":
        case "UTF-8": {
            readFile(inputPath, { encoding: "utf8" })
                .then((v) => {
                    const formatResult = formatFromUtf8(v);

                    if (typeof (formatResult) === "string") {
                        if (opt.force) {
                            return writeFile(inputPath, formatResult);
                        } else {
                            console.log(`${formatResult}`);
                        }
                    } else {
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


const program = new Command();

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

cliByPath({ path: inputs[0], force: opts.force, encoding: opts.encoding });
