const express = require("express");
const app = express();

require("./db/conn"); //to create connection
const Student = require("./models/students");
const StudentRouter = require("./routers/student");

const port = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello from the other sides by anamika");
});

app.use(express.json());

//3:we need to register our router
app.use(StudentRouter);

app.listen(port , () => {
    console.log(`Connection is setup at ${port}`);
})