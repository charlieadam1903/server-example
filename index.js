const express = require('express');
const app = express(); //create app
app.get('/', (req, res) => {
res.json({hello: 'world'}); //associate function w/ request coming in for url and calling that function
});

app.get('/foo', (req, res) => {
    res.json({hello: 'foo'}); //associate function w/ request coming in for url and calling that function
    });


const port = 3123; 

console.log(`Server running at http://localhost:${port}`);
app.listen(port); //tell app to listne to port

//TO RETURN TO COMMAND LINE PROMPT IN TERMINAL ITS CONTROL + C!!