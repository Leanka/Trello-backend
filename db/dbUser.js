let User = require(".././models/user.js");
var UserDatabase = {}

UserDatabase.addNewUserToDb = function(req, res) {
    let user = new User({ username: req.body.username,
                          password: req.body.password,
                        });
    user.save(function (err) {
    if (err) {
        return console.error(err);
    } else {
        console.log("New user added successfully");
        res.end();
    }
  });
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
-   User.find(function(err, allUsers) {
        if(err) {
            return console.error(err);
        } else {
            res.json(allUsers)
            res.end()
        }
    });
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

UserDatabase.updateUser = function(req, res){
    let userId = req.params.id;
    let dataToUpdate = req.body;

    User.findByIdAndUpdate(userId, dataToUpdate, (err) => {
        if(err){
            console.log("Cannot find given user");
        }
        this.getUserById(req, res);
    })
}

UserDatabase.getUserById = function(req, res) {
    let userId = req.params.id;
    User.findById(userId, function (err, foundUser) {
        if(err) {
            console.log("Cannot find given user");
        } else {
            res.json(foundUser);
        }
    });
}

module.exports = UserDatabase;