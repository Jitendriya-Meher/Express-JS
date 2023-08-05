
const express = require('express');
const app = express();

const path = require('path');

//relative , absolute paths
console.log("\ndirectory name : ",__dirname);
console.log("\nFile name : ",__filename);

console.log("\nnew Path = ",path.join(__dirname, '../public'));

const staticPath = path.join(__dirname, '../public');

// buildin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
    res.send("ABOUT PAGE");
});

app.listen(3000,()=>{
    console.log("port listening AT 3000");
});