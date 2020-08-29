const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todoapp_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'DB not connected'));

db.once('open', function(){
    console.log('Successfully connected to database')
})

module.exports = db;