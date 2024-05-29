const express = require('express');
const app = express(); //create app

app.get('/', (req, res) => {
res.status(418).send("I'm a teapot"); //associate function w/ request coming in for url and calling that function
});

app.get('/foo', (req, res) => {
    res.json({hello: 'foo'}); //associate function w/ request coming in for url and calling that function
    });


const port = 3123; 

console.log(`Server running at http://localhost:${port}`);
app.listen(port); //tell app to listen to port

//so can write a little application here that provides responses to HTTP requests
//TO RETURN TO COMMAND LINE PROMPT IN TERMINAL ITS CONTROL + C!!