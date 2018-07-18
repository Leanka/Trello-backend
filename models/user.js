let mongoose = require("mongoose");
let Project = require("./project.js")

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

UserSchema.pre('remove', function() {
    Project.find({"parentKey.id":this._id}, (err, projects) => {
        if(err){
            console.log(err);
        }
        for(project of projects){
            project.remove();
        }
    }).exec();
})

module.exports = mongoose.model("User", UserSchema);