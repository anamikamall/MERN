const path = require("path");
const express = require("express");
const app= express();
const hbs = require("hbs");
const requests = require("requests"); 

const templatePath = path.join(__dirname , "./templates/views");
const partialsPath = path.join(__dirname , "./templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render("index",{
        name: "Anna Mall",
    }); 
});

app.get("/about", (req, res) => {
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=993f08323fbbd7b41b2dde531daffd8e`
    )
        // console.log("hlo");
    .on("data",(chunk) => {
        // console.log("hlo");
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData);
        console.log(`City name is ${arrData[0].name} and the Temp is ${arrData[0].main.temp}`);
        res.write(arrData[0].name);
    })
    .on("end", (err) => {
        if (err)
        return console.log("Connection lost due to errors", err);
        res.end();
    });
});

app.get('/about/*', (req, res) => {
    res.render("404", {
        errorcomment: "OOPS About Us page not found !",
    });
});

app.get('*', (req, res) => {
    res.render("404", {
        errorcomment: "OOPS page not found !",
    });
});

app.listen(8000, () => {
    console.log("Listening the port at 8000");
});