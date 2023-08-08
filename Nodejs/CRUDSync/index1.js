const fs = require("fs");

//create folder
// fs.mkdirSync("anna");

// create file
// fs.writeFileSync("anna/bio.txt","hello World");

//update content
// fs.appendFileSync("anna/bio.txt", " How are you");

//read file
// const buf = fs.readFileSync("anna/bio.txt");
// const org = buf.toString();
// console.log(org);

// const data = fs.readFileSync("anna/bio.txt","utf-8");
// console.log(data);

//rename file
// fs.renameSync("anna/bio.txt","anna/myBio.txt");

//delete file
// fs.unlinkSync("anna/myBio.txt");

//delete folder
fs.rmdirSync("anna");
