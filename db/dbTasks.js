let Task = require(".././models/task.js");
var TaskDatabase = {};

TaskDatabase.addNewTask = (req, res)=>{};
TaskDatabase.getListTasks = (req, res)=>{};
TaskDatabase.getTaskById = (req, res)=>{};
TaskDatabase.getAllTasks = (req, res)=>{};

TaskDatabase.updaterTask = (req, res)=>{
    let taskId = req.params.id;
    let dataToUpdate = req.body;

    Task.findByIdAndUpdate(taskId, dataToUpdate, (err) => {
        if(err){
            console.log("Cannot update given task");
        }
        return this.getTaskById(req, res);
    })
};
TaskDatabase.removeTask = (req, res)=>{};
TaskDatabase.removeAllTasksFromList = (req, res)=>{};

module.exports = TaskDatabase;