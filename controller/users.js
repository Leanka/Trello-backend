var UserDatabase = require(".././db/dbUser.js");

exports.index = (res) => {
    UserDatabase.getAllUsers().then((result)=>{
        res.json(result)
        res.end()
    })
} 
exports.show = (req, res) => {
    UserDatabase.getUserById(req.params.id).then((result) => {
        res.json(result)
        res.end()
    });
} 
exports.create = (req, res) => {
    let user = { 
        username: req.body.username,
        password: req.body.password,
    };

    UserDatabase.addNewUserToDb(user).then((result) => {
        res.json({"id":result});
        res.end()
    })  
}

exports.update = (req, res) => {
    UserDatabase.updateUser(req.params.id, req.body).then(() => {
        res.end()
    })
} 
exports.delete = (req, res) => {
    UserDatabase.removeUser(req.params.id).then(() => {
        res.end();
    })
} 