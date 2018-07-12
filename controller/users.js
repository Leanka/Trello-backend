var UserDatabase = require(".././db/dbUser.js");

exports.index = (req, res) => {
    UserDatabase.getAllUsers(req, res);
} 
exports.show = (req, res) => {
    UserDatabase.getUserById(req, res);
} 
exports.create = (req, res) => {
    UserDatabase.addNewUserToDb(req, res);    
}

exports.update = (req, res) => {
    UserDatabase.updateUser(req, res);
} 
exports.delete = (req, res) => {
    UserDatabase.removeUser(req, res);
} 