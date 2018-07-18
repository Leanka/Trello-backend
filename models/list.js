let mongoose = require("mongoose");
let Task = require("./task.js");

let ListSchema = new mongoose.Schema({
    title: String,
    parentProject: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        },
    }
});

ListSchema.pre('remove', function(){
    Task.find({"parentKey.id":this._id}, (err, tasks) => {
        if(err){
            console.log(err);
        }
        for(task of tasks){
            task.remove();
        }
    }).exec();
})

module.exports = mongoose.model("List", ListSchema);