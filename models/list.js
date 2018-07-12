let mongoose = require("mongoose");

let ListSchema = new mongoose.Schema({
    title: String,
    parentProject: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        },
    }
});

module.exports = mongoose.model("List", ListSchema);