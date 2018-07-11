var TaskDatabase = require(".././db/dbTasks.js");

exports.index = (req, res) => {
    TaskDatabase.getListTasks(req, res);
};

exports.create = (req, res) => {};

exports.show = (req, res) => {};
exports.update = (req, res) => {};
exports.remove = (req, res) => {};
