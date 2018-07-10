var DatabaseConnection = require(".././db/dbUser.js");

exports.index = (req, res) => {
    DatabaseConnection.getAllUsers(req, res);
} 
exports.show = (req, res) => {
    DatabaseConnection.getUserById(req, res);
} 
exports.create = (req, res) => {
    DatabaseConnection.addNewUserToDb(req, res);    
}

exports.update = (req, res) => {
    DatabaseConnection.updateUser(req, res);
} 
exports.delete = (req, res) => {
    DatabaseConnection.removeUser(req, res);
} 