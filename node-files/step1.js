"use strict";

const argv = process.argv;


const fsP = require("fs/promises");

/**
 * Accepts a file path and console logs the contents,
 * or notifies of non-existing file and exits.
 */
async function cat(path) {
    try {
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err) {
        console.log("No such file exists.");
        console.log(err);
        process.exit(1);
    }
}

//cat(process.argv[0]); NO!

cat(argv[2]);