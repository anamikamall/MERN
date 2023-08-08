const fs = require("fs");
const http = require("http");

const server = http.createServer();

/*server.on("request", (req, res) => {
    //1:reading data all at once not streaming
    // fs.readFile("input.txt", (err, data) => {
    //     if (err) return console.log(err);
    //     res.end(data.toString());
    // });

    //2:Stream means reading data by data
    //Reading from Stream, Create a readable Stream and Handle Stream events ->data, end, error, finish
    const rstream = fs.createReadStream("input.txt");
    //whenever data is present this event is fired
    rstream.on('data', (chunkdata) => { //this event is fired when there is data available to read
        res.write(chunkdata);
    });

    //to see output we fire end event(fired when no data is available)
    rstream.on("end", () => {
        res.end();
    });

    //if there is error such that file dosn't exist
    rstream.on("error", (err) => {
        console.log(err);
        res.end("File not Found");
    });
})*/


//3:we used .pipe() method to make this code smaller and simpler
server.on("request", (req, res) => { 
    const rstm = fs.createReadStream("input.txt");
    rstm.pipe(res); //destination is response
});


    //to listen to request ( to start the server)
    server.listen(8000, "127.0.0.1", ()=> {
        console.log("listening to the port no 8000");
    });