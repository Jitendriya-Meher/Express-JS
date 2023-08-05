
const express = require('express');
const app = express();

// to set the view engine 
app.set("view engine",'hbs');

// template engine route 
app.get("/", (req, res) => {
    res.render('index.hbs');
});


// app.get("/", (req, res) => {
//     res.send("HOME PAGE");
// });

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(3000,()=>{
    console.log("port listening AT 3000");
});

