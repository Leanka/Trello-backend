let mongoose = require("mongoose");

let ListSchema = new mongoose.Schema({
    title: String,
    parentProject: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        },
    },
    tasks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
          }]
});

module.exports = mongoose.model("List", ListSchema);