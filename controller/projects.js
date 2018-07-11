var ProjectDatabase = require(".././db/dbProject.js");

exports.index = (req, res) => {
    ProjectDatabase.getUserProjects(req, res);
}

exports.show = (req, res) => {
    ProjectDatabase.getProjectById(req,res);
}

exports.create = (req, res) => {
    ProjectDatabase.addNewProject(req, res);
}

exports.update = (req, res) => {
    ProjectDatabase.updateProject(req, res);
}

exports.delete = (req, res) => {
    ProjectDatabase.removeProject(req, res);
}

exports.showAll = (req,res) => {
    ProjectDatabase.getAllProjects(req, res);
}