//The http.createServer() method includes request and response parameters which is supplied b Node.js
//The request object can be used to get information about the current HTTP request
// eg , url ,request header and data
//The response object can be used to send a response for a current HTTP request
//If response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type
const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
    // console.log(req.url);

    //written on top to avoid reading multiple times it will read data only once in beginning
    const data =fs.readFileSync("./UserApi/userapi.json", "utf-8");
    const objData = JSON.parse(data);

    if(req.url == "/")
    {
        res.end("Hello from the home side anamika");
    }
    else if(req.url == "/about")
    {
        res.end("Hello from the about side");
    }
    //fetch API from userapi.json and show data on browser
    else if(req.url == "/userapi")
    {
        res.writeHead(200, {"Content-type" : "application/json"});
        /*fs.readFile("./UserApi/userapi.json", "utf-8", (err, data) => {
            console.log(data);*/
            // res.end(data);
            // to fetch a particular data we need to convert fron json to object
            /*const objData = JSON.parse(data);*/
            //objData is array of object so we fetch particular data this way
            res.end(objData[1].name);
       /* }); */
    }
    else if(req.url == "/contact")
    {
        res.write("Hello from the ContactUs side "); //we can also write the response
        res.end(); //but response.end is necessary to send the respnse
    }
    else
    {
        res.writeHead(404, {"Content-type" : "text/html"}); //to write the status of page i.e 404 and to update the type from document to html
        res.end("<h1>Error 404. Page doesn't exist</h1>"); //we need to change the document type to html type
    }
});


server.listen(8000, "127.0.0.1", ()=> {
    console.log("listening to the port no 8000");
});

//now search localhost:8000 on chrome
