const express = require('express');
const data = require('./data.js');
const app = express(); // function call of express..
const port = process.env.PORT || 8080;; // process.env.PORT || 5000;  
// if running file locally it will not have process.evn.PORT but runs 5000 instead. Testing.....


app.use(express.static("public"));

app.get("/data", (req, res) => {
    const word = req.query.word;
    if (data.hasOwnProperty(word)) {
        res.send(`The word: ${word} is in here`);
    } else {
        res.send(`word ${word} does not exist`);
    }
    


});
