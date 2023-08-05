
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write(`<h1>Welcom to HOME PAGE</h1>`);
    res.write(`<h2>Again Welcom to HOME PAGE</h2>`);
    // close the connection
    res.end();
});

app.get("/api",(req, res)=>{

    // object is covert to json in send method 
    // res.send([
    //     {
    //         id:1,
    //         name:"jiten",
    //         age:21
    //     },
    //     {
    //         id:2,
    //         name:"amit",
    //         age:20
    //     },  
    //     // send vs json response 
    //     {
    //         id:null,
    //         name:undefined,
    //         age:null
    //     }
    // ]);

    // OR 

    res.json([
        {
            id:1,
            name:"jiten",
            age:21
        },
        {
            id:2,
            name:"amit",
            age:20
        },
        // send vs json response 
        {
            id:null,
            name:undefined,
            age:null
        }   
    ]);
    // res.send(): This method is a general-purpose method used to send a response to the client. It can handle various types of data and automatically sets the appropriate Content-Type header based on the type of data being sent. The res.send() method can send HTML, plain text, JSON, and other data formats.

    // res.json(): This method specifically sends JSON (JavaScript Object Notation) responses to the client. It sets the Content-Type header to application/json, indicating that the response data is in JSON format. The res.json() method takes an object as an argument and automatically converts it to a JSON string before sending it as the response.

    
})

app.listen(3000,()=>{
    console.log("port at 3000");
});