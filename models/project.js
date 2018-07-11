let mongoose = require("mongoose");

let ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    }
});

module.exports = mongoose.model("Project", ProjectSchema)