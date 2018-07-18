let mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
    title: String,
    parentKey: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "List"
        }
    }
})

module.exports = mongoose.model("Task", TaskSchema);