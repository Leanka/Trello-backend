let User = require(".././models/user.js");
var UserDatabase = {}

UserDatabase.addNewUserToDb = function(user) {
    return new Promise((resolve, reject) => {
        user.save(function (err) {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
          });
    })
}

UserDatabase.removeAllUsers = function() {
    return new Promise((resolve, reject) => {
        User.remove({}, function(err) { 
            if(err) {
                return reject(err);
            } else {
                return resolve();
            }
        });
    })
}

UserDatabase.getAllUsers = function(req, res) {
    return new Promise((resolve, reject) => {
        User.find(function(err, allUsers) {
            if(err) {
                return reject(err);
            } else {
                return resolve(allUsers);
            }
        });
    })
}

UserDatabase.removeUser = function(userId){
    return new Promise((resolve, reject) => {
        User.findOne({"_id":userId}, (err, user) => {
            if(err) {
                        return reject(err);
                    } else {
                        user.remove()
                        console.log("after removing!");
                        return resolve();
                    }
        })
    })
}

UserDatabase.updateUser = function(userId, dataToUpdate){
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(userId, dataToUpdate, (err) => {
            if(err){
                return reject(err);
            }
            // this.getUserById(req, res);
            return resolve();
        })
    })
}

UserDatabase.getUserById = function(userId) {
    return new Promise((resolve, reject) => {
        User.findById(userId, function (err, foundUser) {
            if(err) {
                return reject(err);
            } else {
                return resolve(foundUser);
            }
        });
    })
}

module.exports = UserDatabase;