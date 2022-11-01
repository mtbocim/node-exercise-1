"use strict";
const argv = process.argv;
//console.log(argv);
const fsP = require("fs/promises");
const axios = require("axios");

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

// cat(argv[2]);

async function webCat(url){
    try{
        const resp = await axios.get(url);
        console.log(resp.data.slice(0,80), "...");
    } catch (err){
        console.log("No such route exists.");
        // console.log(err.status, err.statusText);
        process.exit(2)
    }
}


let isUrl;
try{
    let url = new URL(argv[2])
    isUrl = true;
} catch(err) {
    isUrl = false;
}

if(isUrl){
    webCat(argv[2])
}else{
    cat(argv[2]);
}