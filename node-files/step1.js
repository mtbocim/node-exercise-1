"use strict";
const argv = process.argv;
//console.log(argv);
const fsP = require("fs/promises");

async function cat(path){
    try{
        let contents = await fsP.readFile(path, "utf8");
        console.log(contents);
    } catch (err){
        console.log("No such file exists.");
        console.log(err);
        process.exit(1);
    }
}

//cat(process.argv[0]); NO!

cat(argv[2]);