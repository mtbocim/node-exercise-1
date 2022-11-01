"use strict";

const argv = process.argv;
const fsP = require("fs/promises");
const axios = require("axios");

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


/**
 * Accepts a valid structed URL and console logs the first 80 characters,
 * or notifies of non-existing file and exits.
 */
async function webCat(url) {
    console.debug("webCat ran!")
    // debugger;
    try {
        const resp = await axios.get(url);
        console.log(resp.data.slice(0, 80), "...");
    } catch (err) {
        
        console.log("No such route exists.");
        console.log(err.message);
        process.exit(2)
    }
}



/**
 * Determines type of input and displays appropriate output.
 */
function determineOutput() {
    let isUrl;
    // debugger;
    try {
        new URL(argv[2])
        isUrl = true;
    } catch (err) {
        isUrl = false;
    }

    if (isUrl) {
        webCat(argv[2])
    } else {
        cat(argv[2]);
    }
}

determineOutput();