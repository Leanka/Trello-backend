let Task = require(".././models/task.js");
var TaskDatabase = {};

TaskDatabase.addNewTask = (req, res)=>{};

TaskDatabase.getListTasks = (req, res)=>{
        Task.find({"parentList.id":req.params.id}, function(err, listTasks) {
        if(err) {
            console.log(err);
        } else {
          res.json(listTasks);  
        }
    })
};

TaskDatabase.getTaskById = (req, res)=>{};

TaskDatabase.getAllTasks = (req, res)=>{};

TaskDatabase.updaterTask = (req, res)=>{};

TaskDatabase.removeTask = (req, res)=>{};

TaskDatabase.removeAllTasksFromList = (req, res)=>{};

module.exports = TaskDatabase;