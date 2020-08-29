const express = require('express');
const port = 9000;

let app = express();

app.listen(9000, function(err){
    if(err){
        console.log('Server down');
    }
    console.log('Server is up & running at port:', port);
})