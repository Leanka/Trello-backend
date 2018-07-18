let Task = require(".././models/task.js");
var TaskDatabase = {};

TaskDatabase.addNewTask = (newTask)=>{
    return new Promise((resolve, reject) => {
        Task.create(newTask, function(err, newlyCreated) {
            if (err) {
                return reject(err)
            } else {
                return resolve(newlyCreated._id);
            }
        })
    })
};

TaskDatabase.getListTasks = (listId)=>{
    return new Promise((resolve, reject) => {
        Task.find({"parentKey.id":listId}, function(err, listTasks) {
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
        Task.findOne({"_id":taskId}, (err, task) => {
            if (err) {
                return reject(err)
            } else {
                task.remove();
                return resolve();
            }
        })
    })
};

module.exports = TaskDatabase;