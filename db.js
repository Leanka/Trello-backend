let mongoose = require("mongoose");
let DatabaseConnection = {};
let User = require("./models/user");

DatabaseConnection.connectDb = function() {
    mongoose.connect("mongodb://localhost/trelolo_app");
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to MongoDB!');
    }); 
}

DatabaseConnection.addNewUserToDb = function(newUser) {
    let user = new User({ username: newUser.username,
                          password: newUser.password,
                          projects_ids: newUser.projects_ids
                        });
                        
    user.save(function (err) {
    if (err) {
        return console.error(err);
    } else {
        console.log("New user added successfully");  
    }
  });
}

DatabaseConnection.showAllUsers = function() {
    User.find(function(err, allUsers) {
        if(err) {
            return console.error(err);
        } else {
            console.log(allUsers);
        }
    });
}

DatabaseConnection.removeAllUsers = function() {
    User.remove({}, function(err) { 
    if(err) {
        console.log("cannot clear db");
    }
  console.log('collection removed') 
});
}

module.exports = DatabaseConnection;