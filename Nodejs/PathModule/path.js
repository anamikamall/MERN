const path = require("path");

console.log(path.dirname('A:/Node/first/PathModule/path.js')); //directory name (change back slash to forward slash)

console.log(path.extname('A:/Node/first/PathModule/path.js')); //extension name

console.log(path.basename('A:/Node/first/PathModule/path.js')); //file name

console.log(path.parse('A:/Node/first/PathModule/path.js')); //all in one object(directory, root, base, name, extension)
const myPath = path.parse('A:/Node/first/PathModule/path.js'); //to get particular value from parse
console.log(myPath.name);