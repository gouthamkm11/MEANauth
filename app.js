var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');

//app variable in initialized
var app = express();

//Configuring the default router
app.get('/', (req,res) => {
    res.send("Server Started");
})

//The server uses the middle ware cors in order to get req from angular to process it in node
app.use(cors())

//The server is listening to the port 300
app.listen(3000, () => {
    console.log("Server has been started");
});
