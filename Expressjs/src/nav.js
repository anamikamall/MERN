const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // res.send("<h1>This is Home Page</h1>");
    res.write("<h1>This is Home Page</h1>");  //to write multiple html elements use write
    res.write("<h1>This is again Home Page</h1>");
    res.send()  //to stop reloading of page continously
});

app.get("/about", (req, res) => {
    res.send("This is AboutUS Page");
});

app.get("/contact", (req, res) => {
    res.status(200).send("This is ContactUs Page");
});

app.get("/temp", (req, res) => {
    // res.send([
        //the methods are identical when an object or array is passed, but res.json() will also convert 
        //non-objects, such as null and undefined, which are not valid in json
    res.json([
        {
        id: 1, //it will automatically be converted to json using stringify
        name: "Anamika" 
    },
    {
        id:2,
        name:"Mall"
    },
    {
        id:3,
        name:"Khushi"
    }
]);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})