const express = require('express');
const port = 9000;
const db= require('./config/mongoose');
const Task = require('./model/tasks');

let app = express();

app.set('view engines', 'ejs');
app.set('views', 'home');
app.use(express.urlencoded());





app.listen(9000, function(err){
    if(err){
        console.log('Server down');
    }
    console.log('Server is up & running at port:', port);
})