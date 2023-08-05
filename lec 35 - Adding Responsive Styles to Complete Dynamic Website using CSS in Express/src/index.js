
const express = require('express');
const app = express();
const path = require('path');

const hbs = require('hbs');

const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


// to set the view engine 
app.set("view engine",'hbs');
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


// template engine route 
app.get("/", (req, res) => {
    res.render('index.hbs');
});

app.get("/about", (req , res) => {
    res.render("about");
});

app.get("/about/*", (req, res) => {
    res.render("error",{
        cmts: "oops this about us page could't be found"
    });
});

// error page
// * -> universal selector
app.get("*", (req, res) => {
    res.render("error",{
        cmts: "404 oops this page could't not be found"
    });
});

app.listen(3000,()=>{
    console.log("port listening AT 3000");
});
