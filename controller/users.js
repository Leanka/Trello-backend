var DatabaseConnection = require(".././db.js");
DatabaseConnection.connectDb();

exports.index = (req, res) => {
    DatabaseConnection.getAllUsers(req, res);
} 
exports.show = (req, res) => {} 
exports.crete = (req, res) => {} 
exports.update = (req, res) => {} 
exports.delete = (req, res) => {
    DatabaseConnection.removeUser(req, res);
} 
