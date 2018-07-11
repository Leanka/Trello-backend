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

TaskDatabase.getTaskById = (req, res)=>{
    let taskId = req.params.id;

    Task.findById(taskId, (err, task) => {
        if(err){
            console.log("Cannot find given task");
        }
        res.json(task);
        res.end()
    })
};

TaskDatabase.getAllTasks = (req, res)=>{
    Task.find({}, (err, tasks) =>{
        if(err){
            console.log("Cannot get task at all");
        }
        res.json(tasks);
        res.end()
    })
};

TaskDatabase.updateTask = (req, res)=>{
    let taskId = req.params.id;
    let dataToUpdate = req.body;

    Task.findByIdAndUpdate(taskId, dataToUpdate, (err) => {
        if(err){
            console.log("Cannot update given task");
        }
        return this.getTaskById(req, res);
    })
};
TaskDatabase.removeTask = (req, res)=>{
    let taskId = req.body.id;

    Task.findByIdAndRemove(taskId, (err) => {
        if(err){
            console.log("Cannot remove given task");
        }
        res.json("Removed task with id " + listId);
        res.end();
    })
};

TaskDatabase.removeAllTasksFromList = (req, res)=>{};

module.exports = TaskDatabase;