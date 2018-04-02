<<<<<<< HEAD
var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongooose = require('mongoose');

//Initializing app variable with express
var app = express();
app.listen(3000);

//home page response
app.get('/', (req,res) => {
    console.log('server Connected');
    res.send("Server Connected");
})
=======

>>>>>>> 2a0dfaba9f6223f79c4f9b5dcc64a4bd68e4b2d1
