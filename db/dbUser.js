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

UserDatabase.showAllUsers = function() {
    User.find(function(err, allUsers) {
        if(err) {
            return console.error(err);
        } else {
            console.log(allUsers);
        }
    });
}

UserDatabase.removeAllUsers = function() {
    User.remove({}, function(err) { 
    if(err) {
        console.log("cannot clear db");
    }
  console.log('collection removed') 
});
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

UserDatabase.removeUser = function(req, res){
    let userId = req.params.id;
    User.findByIdAndRemove(userId, (err) => {
        if(err){
            console.log("Cannot find given user");
        }
        res.json("Removed user with id " + userId);
        res.end();
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