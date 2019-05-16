const express = require('express');
const fs = require('fs');
const getemail = require('./getemail');
const app = express(); // function call of express..
const port = process.env.PORT || 8080;// process.env.PORT || 5000;  
// if running file locally it will not have process.evn.PORT but runs 5000 instead. Testing.....

app.use(express.static("public"));

// app.get("/data", function(req, res) {
//     const word = req.query.word;
//     if (data.hasOwnProperty(word)) {
//         res.send(`The word: ${word} is in here`);
//     } else {
//         res.send(` The word: " ${word} " does not exist`);
//     }
//     res.send("hello");

// });

app.get("/data", function(req, res) {
    console.log(req);
    const name = req.query.name;
    const email = getemail(users, name);
    // if (data.hasOwnProperty(word)) {
    //     res.send(`The word: ${word} is in here`);
    // } else {
    //     res.send(` The word: " ${word} " does not exist`);
    // }
    res.send(email);

});


app.listen(port, () => console.log(`Server is listening on ${port}`));
