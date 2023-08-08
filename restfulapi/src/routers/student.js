const express = require("express");
//1: create a new router
const router = new express.Router();

const Student = require("../models/students");

//2: we need to define the router
// router.get("/home", (req, res) => {
//     res.send("Hello Guzz");
// });

//Create new Students
/*router.post("/student", (req,res) => {
    // getting data from postman
    console.log(req.body);
    const user = new Student(req.body);
    //saving data on mongo db
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
    // res.send("Hello from the other sides");
}); */

// Using async await for post
router.post("/student", async(req, res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch(e) {
        res.status(400).send(e);
    }
});

/*You do not need express.json() and express.urlencoded() for GET Request 
or DELETE Requests. We only need it for PUT and POST Request.

express.json() is a method inbuilt in express to recognize the incoming
request object as a JSON object. This method is called as a middleware 
in your application using code: app.use(express.json());*/

//read the data of registered students
router.get("/student", async(req, res) => {
    try{
        const studentsData = await Student.find();
        res.send(studentsData);
    } catch(e) {
        res.send(e);
    }
});

//get the data of individual student using id
/*router.get("/student/:id", async (req, res) => {
    try{
        const _id = req.params.id; //will return the id in url
        // console.log(req.params);
        const studentData = await Student.findById( _id );
        if( !studentData ) {
            return res.status(400).send();
        } else {
            res.send(studentData);
        }
    } catch(e) {
        res.status(500).send(e);
    }
});*/

//get the data of individual student using name
router.get("/student/:name", async (req, res) => {
    try{
        const name = req.params.name; //will return the name in url
        // console.log(req.params.name);
        const studentData = await Student.find({name : name});
        if( studentData == "" ) {
            return res.status(400).send();
        } else {
            res.send(studentData);
        }
    } catch(e) {
        res.status(500).send(e);
    }
});

//update students by ID
router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true  //will show updated data now 
        });
        res.send(updateStudents);
    } catch(e) {
        res.status(404).send(e);
    }
});

//delete students by id
router.delete("/student/:id" , async (req, res) => {
    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if( !_id) {
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;