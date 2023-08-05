// Express.js is a popular and widely used web application framework for Node.js, designed to build robust and scalable web applications and APIs. It provides a set of features and tools that simplify the process of creating server-side applications using JavaScript.

// Express allows you to define routes to handle various HTTP methods (GET, POST, PUT, DELETE, etc.) and URLs, enabling you to respond to client requests accordingly.

const express = require('express');
// Import the express module: The line const express = require('express'); imports the Express.js module. This allows you to access the functionality provided by Express.js in your application.
const app = express();
// Create an instance of the Express application: The line const app = express(); creates an instance of the Express application. The app variable now holds the instance, and you can use it to define routes, add middleware, and configure your server.

// API
// get - read 
// post - create
// put - update
// delete - delete

app.get('/', (request,response) => {
    response.send("hello from the express server HOME PAGE");
} );
// app.get('/'): This line sets up a route for handling HTTP GET requests to the root URL ('/'). The first argument to app.get() is the URL path, and in this case, it's '/', which represents the root URL.
// (request, response) => { ... }: This is an arrow function (also known as a callback function) that defines the behavior of the route when a client makes an HTTP GET request to the root URL. The function takes two parameters: request and response.

// request: This parameter represents the HTTP request made by the client. It contains information about the request, such as headers, query parameters, and request body (if any).

// response: This parameter represents the HTTP response that will be sent back to the client. It allows you to send data, set headers, and manage the response to the client's request.

// response.send() method is used to send a simple text response to the client. 

app.get('/about', (request,response) => {
    response.send("hello from the about page");
})

app.listen(8000,() => {
    console.log("listing the port at 8000");
});
// app.listen(8000, () => { ... }): This line instructs the Express application (app) to start listening for incoming HTTP requests on port 8000. The app.listen() method is used to bind and listen for connections on the specified port.

// (8000, () => { ... }): The first argument of app.listen() is the port number on which the server will listen for incoming requests. In this case, it's set to 8000.

// () => { ... }: This is an arrow function that serves as the callback once the server has started listening. The code inside the function will be executed when the server starts successfully.

// console.log("listening on port 8000");: Within the callback function, this line prints the message "listening on port 8000" to the console. It's a confirmation that the server has started and is ready to accept incoming requests.
