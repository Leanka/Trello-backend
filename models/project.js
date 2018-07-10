let mongoose = require("mongoose");

let ProjectSchema = new mongoose.Schema({
    "title": String,
    "description": String,
    "parentId": String,
    "lists":[]
})

module.exports = mongoose.model("Project", ProjectSchema)