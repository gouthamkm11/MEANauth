var mongoose = require('mongoose');
var config = require('../config/connection');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    name: {
        type : String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

var users = module.exports = mongoose.model('users', userSchema);

module.exports.getUserById = function(id, callback){
    users.findById(id, callback);
}

module.exports.getUserByUserName = function(username, callback){
    var query = {username: username};
    users.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err,salt)=>{
        bcrypt.hash(newUser.password, salt, (err,hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    });
};