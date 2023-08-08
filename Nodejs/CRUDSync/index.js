const fs = require("fs");
// creating a new file
// fs.writeFileSync("read.txt","Hello Anna");

//will update the content
// fs.writeFileSync("read.txt","Hello Anamika");

//will append the content
// fs.appendFileSync("read.txt"," How are you ?");

// reading file
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

/* Node.js include an additional data type called Buffer(not available in javascript)
Buffer is mainly used to store binary data, while reading from a file or receiving packets over the network. */
{/* <Buffer 48 65 6c 6c 6f 20 41 6e 61 6d 69 6b 61 20 48 6f 77 20 61 72 65 20 79 6f 75 20 3f> */}

// const org_data = buf_data.toString();
// console.log(org_data);

//rename a file
fs.renameSync("read.txt", "readwrite.txt"); 