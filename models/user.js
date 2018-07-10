let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    projects_ids: []
});

module.exports = mongoose.model("User", UserSchema);