let Task = require(".././models/task.js");
var TaskDatabase = {};

TaskDatabase.addNewTask = (req, res)=>{
    let parentList = {
                       id : req.params.id
                     }

    let newTask = { 
                    title : req.body.title,
                    parentList : parentList
                  }
    
    Task.create(newTask, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            console.log("New task created successfully");
            res.end();
        }
    })
};

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