const mongoose = require('mongoose');
const validator = require('validator');

//connection creation and creating new db
mongoose.connect("mongodb://127.0.0.1:27017/anamika", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connection Successful..."))
.catch ((err) => console.log(err));

//Schema
// A Mongoose schema defines the structure of the document, default values , validators , etc
const recordSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        // unique:true,
        lowercase: true,
        minlength: [2, "message:Minimum 2 letters"],
        maxlength: 30,
        index: true,
        sparse: true
    },
    surname:{
        type: String,
        uppercase: true,
        trim: true,
        enum: ["MALL", "RAJ", "KUMAR"]  //surname must be one of these
    },
    age:{
        type: Number,
        // 1
        // validate(value) {
        //     if(value < 0) {
        //         throw new Error("Age should not be negative");
        //     }
        // }
        // 2
         validate : (val) => {
            if (val < 0){
                throw new Error("Age should not be negative");
            }
        }
        // 3
        // validate: {
        //     validator:function(value) {
        //         return value.length < 0
        //     },
        //     message: "Age should not be negative"
        // }
        // 4
        // validate: {
        //     validator: (val) => val.length < 0,
        //     message: "Age should not be negative"
        // }
    },
    college:String,
    email: {
        type: String,
        validate(val) {
            if(!validator.isEmail(val)){
                throw new Error("Email is Invalid");
            }
        }
    },
    student:Boolean,
    dob: {
        type: Date,
        default: Date.now
    }
})
// console.log(recordSchema);

//Model
// A Mongoose model is a wrapper on the Mongoose Schema.
// A Mongoose schema defines the structure of the document whereas a model 
// provides an interface to the database for creating, querying, updating, deleting records, etc.

//collection creation
const Record = new mongoose.model("Record", recordSchema);
// console.log(Record);

//create document or insert
const anaRecord = new Record({
    name:"Anamika",
    surname:"Mall",
    age:21,
    college:"KIET",
    student:true,
})

// anaRecord.save();  //to save the data (returns promise)
//OR
const creatDocument = async () => {
    try{
    const ashishRecord = new Record({
    name:"Ashish Rajjoo",
    surname:"   Mall    ",
    age:23,
    college:"RKGIT",
    email: "ashigm@gm.com",
    student:true,
})
const result = await ashishRecord.save();
console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// creatDocument();

//to add multiple documents at once
const createDocument = async () => {
    try{
    const khushiRecord = new Record({
    name:"Khushi",
    surname:"Mall",
    age:19,
    college:"KIET",
    student:true,
})
const sudhRecord = new Record({
    name:"Sudhanshu",
    surname:"Raj",
    age:20,
    college:"RKGIT",
    student:true,
})
const ajayRecord = new Record({
    name:"Ajay",
    surname:"Kumar",
    age:52,
    college:"NA",
    student:false,
})
const result = await Record.insertMany([khushiRecord, sudhRecord, ajayRecord]);
console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// createDocument();

// Read Document
const getDocument = async () => {
    try {
    // const result = await Record.find();
    // const result = await Record.find({college:"KIET"});
    // const result = await Record.find({college:"KIET"}).select({name:1});
    const result = await Record.find({college:"KIET"})
    .select({name:1})
    .limit(1);
    console.log(result);
    } catch(err) {
        console.log(err);
    }
}
// getDocument();

//comparison query operator
/*const comDocument = async () => {
    try {
        const result = await Record
        // .find({age : {$gte : 20}})
        // .find({college : {$in : ["KIET", "RKGIT"]}}) //kind of OR operator
        .find({college : {$nin : ["KIET", "RKGIT"]}}) //NOT IN
        .select({name:1});
    console.log(result);
    } catch(err) {
        console.log(err);
    }
}
comDocument();*/

//Logical Operator
/*const comDocument = async () => {
    try {
        const result = await Record
        // .find({$or : [ {surname : "Mall"}, {college : "RKGIT"}]})
        // .find({$and : [ {surname : "Mall"}, {college : "RKGIT"}]})
        // .find({$nor : [ {surname : "Raj"}, {college : "RKGIT"}]})  //return documents that failed to match both clauses
        .find({surname :{$not : {$eq : "Mall"}}}) //NOT EQUAL TO It inverse the effect
        .select({name:1})
        .countDocuments();  //will return count of query
    console.log(result);
    } catch(err) {
        console.log(err);
    }
}
comDocument();*/

//sorting
/*const sortDocument = async () => {
    try {
        const result = await Record
        .find()
        .select({name:1})
        .sort({name : -1}) //1 means ascending order
    console.log(result);
    } catch(err) {
        console.log(err);
    }
}
sortDocument();*/

//Update
/*const updateDocument = async (_id) => {
    try {
        // const result = await Record.updateOne({_id} ,  //it will print only count of modified data
        const result = await Record.findByIdAndUpdate({_id} ,  //it will print the complete data before modification
             {$set : { surname : "Raj Mall"}},
             { 
                new : true,  //will print modified data
                useFindAndModify : false
            });
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

updateDocument("64c024d040e8d3977e0943e9"); */

//Delete Document
/*const deleteDocument = async (_id) => {
    try{
        // const result = await Record.deleteOne( {_id});
        const result = await Record.findByIdAndDelete( {_id});
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

deleteDocument("64c043f25355588721bf0a2d");*/