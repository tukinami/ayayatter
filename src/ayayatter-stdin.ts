#!/usr/bin/env node

import { Command } from "commander";
import { format } from "./format";

const cliByStdin = (src: string) => {
    const formatResult = format(src);

    if (typeof (formatResult) === "string") {
        const result = formatResult.replace(/\r\n/g, "\n");
        process.stdout.write(result);
    } else {
        console.error(formatResult);
        process.exit(3);
    }
};


const program = new Command();

program.
    version("0.1.0");

program.parse(process.argv);

(async () => {
    const buffers = [];
    for await (const chunk of process.stdin) {
        buffers.push(chunk);
    }

    const buffer = Buffer.concat(buffers);
    const text = buffer.toString();

    if (text.length !== 0) {
        cliByStdin(text);
    }
})();
