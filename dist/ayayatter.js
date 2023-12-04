"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const commander_1 = require("commander");
const cli = () => {
    const program = new commander_1.Command();
    program
        .name("ayayatter")
        .version("0.1.0")
        .command("stdin <string>", "stdin input contents of a yaya dic").alias("s")
        .command("input [options] <input>", "path to input dic.file").alias("i");
    program.parse(process.argv);
};
exports.cli = cli;
