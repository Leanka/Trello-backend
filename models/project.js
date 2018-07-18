let mongoose = require("mongoose");
let List = require("./list.js")

let ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    }
});

ProjectSchema.pre('remove', function(){
    List.find({"parentKey.id":this._id}, (err, lists) => {
        if(err){
            console.log(err);
        }
        for(list of lists){
            list.remove();
        }
    }).exec();
})

module.exports = mongoose.model("Project", ProjectSchema)