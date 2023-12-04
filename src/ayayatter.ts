import { Command } from "commander";

export const cli = () => {
    const program = new Command();

    program
        .name("ayayatter")
        .version("0.1.0")
        .command("stdin <string>", "stdin input contents of a yaya dic").alias("s")
        .command("input [options] <input>", "path to input dic.file").alias("i");

    program.parse(process.argv);
};
