var users = require('../model/users'); //Importing the usersmodel from model folder
var passport = require('passport');
var jwt = require('jsonwebtoken');
//Body parser and urlEncodedParser to extract contents from body of http request for a post method
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlEncodedParser({extended:false});
//////////////////////////////////////////End of imports

module.exports = function(app){
    app.get('/', (req,res)=>{
        res.send("Server connected");
    });

    app.post('/users/register', urlEncodedParser, (req,res)=>{
        let newUser = new users({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        users.addUser(newUser, (err, user)=>{
            if(err){
                res.json({success:false, message:'User not registered'})
            }
            else{
                res.json({success:true, message:'User registered'})
            }
        });
    });

    app.post('/users/authenticate', urlEncodedParser, (req,res)=>{
        res.send("Authenticate Route created")
    });

    app.get('/users/profile', (req,res)=>{
        res.send("Profile Route created")
    });
}