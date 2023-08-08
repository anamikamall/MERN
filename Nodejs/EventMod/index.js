const EventEmitter = require("events");  //creating class with the help of events
const event = new EventEmitter(); //creating new instance of class

//OR second method
// const event = require("events");
// const EventEmitter = new event.EventEmitter();

//to listen to event
event.on('sayMyName', () => {
    console.log("Your Name is Anamika");
});

//we can call multiple callbacks for same event
event.on('sayMyName', () => {
    console.log("Your Name is Mall");
});event.on('sayMyName', () => {
    console.log("Your Name is Khushi");
});

//to fire(call) an event only once <= response of the event
//if we write this above the event declaration than it will not give output
event.emit("sayMyName"); //we can declare any named event

//An emitter object basically has two main functions : Emitting name events , Registering and unregistering listener functions

//Registering for the event with callback parametes
event.on("checkPage", (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok") //200 and ok are parameter