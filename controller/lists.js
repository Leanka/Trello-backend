var ListDatabase = require(".././db/dbLists.js");

exports.showAll = (req, res) => {
    ListDatabase.getAllLists(req, res);
}

exports.create = (req, res) => {
    ListDatabase.addNewList(req, res);
}

exports.index = (req, res) => {
    ListDatabase.getProjectLists(req, res);
}

exports.show = (req, res) => {
    ListDatabase.getListById(req, res);
};

exports.update = (req, res) => {
    ListDatabase.updateList(req, res);
};

exports.destroy = (req, res) => {
    ListDatabase.removeList(req, res);
};