
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the HOME PAGE');
});

// routing 
app.get('/about', (req, res) => {
    res.status(200).send('Welcome to the ABOUT PAGE');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to the CONTACT PAGE');
});

app.get('/temp', (req, res) => {
    res.send('Welcome to the TEMP PAGE');
});

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});