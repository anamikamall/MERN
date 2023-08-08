// JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from server to web page.

const fs = require("fs");
const bioData = {
    name : "Anamika",
    age: 20,
    channel:"sketchy"  
};
// console.log(bioData.channel);

//object to json
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

//json to object conversion
const objData = JSON.parse(jsonData);
console.log(objData);


//writing json data to new file
fs.writeFile("json1.json", jsonData, (err) => { //file type must be .json
    console.log("Created !!");
});

//read json data from other file
fs.readFile("json1.json", "utf-8", (err,data) => {
    console.log(data);
    const orgData = JSON.parse(data);
    console.log(orgData);
});