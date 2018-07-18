var TaskDatabase = require(".././db/dbTasks.js");

exports.index = (req, res) => {
    TaskDatabase.getListTasks(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
};

exports.create = (req, res) => {

    let newTask = { 
        title : req.body.title,
        position: 0,
        status: "todo",
        parentKey : { id : req.params.id }

    }

    TaskDatabase.addNewTask(newTask).then((result) => {
        res.json({"id":result});
        res.end()
    })
};

exports.show = (req, res) => {
    TaskDatabase.getTaskById(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
};
exports.update = (req, res) => {
    TaskDatabase.updateTask(req.params.id, req.body).then(() => {
        res.end()
    })
};
exports.remove = (req, res) => {
    TaskDatabase.removeTask(req.params.id).then(() => {
        res.end()
    })
};

exports.showAll = (res) => {
    TaskDatabase.getAllTasks().then((result) => {
        res.json(result)
        res.end()
    })
}
