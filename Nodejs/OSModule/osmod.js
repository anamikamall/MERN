const os = require("os");

//get architecture
console.log(os.arch());

//get free memory
const fm = os.freemem(); //return bytes
console.log(`${fm} bytes`);
console.log(`${fm/1024/1024/1024}`); //conversion of bytes to gigabytes

//get total memory
const totalm = os.totalmem(); //return bytes
console.log(`${totalm/1024/1024/1024}`); 

//get host(desktop) name
console.log(os.hostname());

//get platform
console.log(os.platform());

console.log(os.tmpdir()); //temporary folder

console.log(os.type()); // return operating system