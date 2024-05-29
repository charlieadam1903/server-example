const express = require('express');
const cookieParser = require('cookie-parser');
const app = express(); //create app

//app.use(express.json()); //add capability to understand json data 
app.use(cookieParser()); //if cookie in there itll parse cookie and make easy to access
//coming in to our server, if its json content type it will parse it and make available to us
const data = {
    likes: [],
};

const COOKIE_NAME = 'counter';

app.get('/', (req, res) => { //root (route?) handler
    let count = 1; 
    if (COOKIE_NAME in req.cookies) {
        count = req.cookies[COOKIE_NAME]; //parser module easily gets cookies from request
        count++;
    }
    res.cookie(COOKIE_NAME, count);
    res.json({count: count}); //returns count as json but also set a cookie on thta response 
    //sets cookie header to lates verson of count value
//res.status(418).send("I'm a teapot"); //associate function w/ request coming in for url and calling that function
});

app.get('/likes', (req, res) => {
    res.json(data.likes); //associate function w/ request coming in for url and calling that function
});

app.post('/likes', (req, res) => { //sends post request
    //can use tool called </> rested client but only for firefox i guess
    const body = req.body;
    if('thing' in req.body) {
        data.likes.push(req.body.thing);
        res.send({status:'success'});
    }   else {
        res.send({status: 'error', message: 'missing thing'});
    } //now when posted it adds things you put in
    console.log(body);
    res.send('OK');
});

const port = 3123; 

console.log(`Server running at http://localhost:${port}`);
app.listen(port); //tell app to listen to port

//so can write a little application here that provides responses to HTTP requests
//TO RETURN TO COMMAND LINE PROMPT IN TERMINAL ITS CONTROL + C!!