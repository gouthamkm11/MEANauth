var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');
//requiring contoller
var apiRoutes = require('./controllers/apiController');
//dbConnection
var conn = require('./config/connection');
////////////////////////////////////////////////////////////////////////////End of requires

//app variable in initialized
var app = express();

///////////////////////////////////////////////////////////////////route configuration
//Initialzing the user routes for the application
apiRoutes(app);


/////////////////////////////////////////////database Connection and initial check
//Configuring DB connection
mongoose.connect(conn.dbConnection());
//Checking the db connectivity
mongoose.connection.on('connected', ()=>{
    console.log('Connection made to db');
});
//DB Connectivity error 
mongoose.connection.on('err', (err)=>{
    console.log("Error is " +err);
})




//The server uses the middle ware cors in order to get req from angular to process it in node
app.use(cors())

//The server is listening to the port 3000
app.listen(3000, () => {
    console.log("Server has been started");
});
