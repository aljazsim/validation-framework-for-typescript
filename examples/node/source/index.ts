import { Model } from "./model";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter a string (not empty, A or B): ", (value: string) =>
{
    let model: Model;

    model = new Model();
    model.input = value;

    if (model.isValid())
    {
        console.info(`"${value}" is valid`);
    }
    else
    {
        console.error(`"${value}" is not valid (${model.validate()[0].message})`);
    }

    rl.close();
});
