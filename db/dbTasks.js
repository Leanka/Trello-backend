let Task = require(".././models/task.js");
var TaskDatabase = {};

TaskDatabase.addNewTask = (newTask)=>{
    return new Promise((resolve, reject) => {
        Task.create(newTask, function(err, newlyCreated) {
            if (err) {
                return reject(err)
            } else {
                return resolve(newlyCreated);
            }
        })
    })
};

TaskDatabase.getListTasks = (listId)=>{
    return new Promise((resolve, reject) => {
        Task.find({"parentList.id":listId}, function(err, listTasks) {
            if (err) {
                return reject(err)
            } else {
                return resolve(listTasks);
            }
        })
    })
};

TaskDatabase.getTaskById = (taskId)=>{
    return new Promise((resolve, reject) => {
        Task.findById(taskId, (err, task) => {
            if (err) {
                return reject(err)
            } else {
                return resolve(task);
            }
        })
    })
};

TaskDatabase.getAllTasks = ()=>{
    return new Promise((resolve, reject) => {
        Task.find({}, (err, tasks) =>{
            if (err) {
                return reject(err)
            } else {
                return resolve(tasks);
            }
        })
    })
};

TaskDatabase.updateTask = (taskId, dataToUpdate)=>{
    return new Promise((resolve, reject) => {
        Task.findByIdAndUpdate(taskId, dataToUpdate, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
};

TaskDatabase.removeTask = (taskId)=>{
    return new Promise((resolve, reject) => {
        Task.findByIdAndRemove(taskId, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
};

module.exports = TaskDatabase;