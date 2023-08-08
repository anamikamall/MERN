const path = require("path");
const express = require("express");
const app= express();
const hbs = require("hbs"); 

//dont use relative(../) path ,use absolute path
// console.log(__dirname);
//to get path of public folder where web page is designed
// console.log(path.join(__dirname, "../public"));
const staticPath =path.join(__dirname, "../public");
const templatePath = path.join(__dirname , "./templates/views");
const partialsPath = path.join(__dirname , "./templates/partials");

//building middleware : for static pages
// app.use(express.static(staticPath));

//to set the view engine : for dynamic content
app.set("view engine", "hbs");
//to rename views folder to templates
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

//template engine route
app.get("", (req, res) => {
    res.render("index",{  //.hbs in not imp it is already mentioned above
        name: "Anna Mall",
    }); 
});
//if this was above render than this would be visible on screen(top to bottom approach)
app.get("/", (req, res) => {
    res.send("Hello from express jsss");
});

app.get("/about", (req, res) => {
    console.log(req.query);
    res.render("about",{  //about.hbs
        name:req.query.name,
        age:req.query.age

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
// app.get("/about", (req, res) => {
//     res.send("This is about page");
// });

app.listen(8000, () => {
    console.log("Listening the port at 8000");
});