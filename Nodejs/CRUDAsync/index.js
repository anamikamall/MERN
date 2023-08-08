const fs = require("fs");

//create file
// fs.writeFile('read.txt',"Hello Anamika", (err) => {
// console.log("File created !!");
// console.log(err);
// });

//update file
// fs.appendFile('read.txt'," How are you ?", (err) => {
// console.log("File created !!");
// console.log(err);
// });

//read file
// fs.readFile("read.txt", "utf-8", (err,data) => {
//     console.log(data);
// });
// console.log("after the data");  // this is printed first as reading file takes some time 
//this is benefit of asyncronous

//create folder
// fs.mkdir("anna",(err)=>{
//     console.log("folder created");
// })

//delete folder
fs.rmdir("./anna", (err) => {
    console.log("Folder deleted");
});