var TaskDatabase = require(".././db/dbTasks.js");

exports.index = (req, res) => {
    TaskDatabase.getListTasks(req, res);
};

exports.create = (req, res) => {
    TaskDatabase.addNewTask(req, res);
};

exports.show = (req, res) => {
    TaskDatabase.getTaskById(req, res);
};
exports.update = (req, res) => {
    TaskDatabase.updateTask(req, res);
};
exports.remove = (req, res) => {
    TaskDatabase.removeTask(req, res);
};

exports.showAll = (req, res) => {
    TaskDatabase.getAllTasks(req, res);
}
