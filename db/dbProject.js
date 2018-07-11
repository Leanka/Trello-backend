let Project = require(".././models/project.js");
var ProjectDatabase = {}

ProjectDatabase.addNewProject = function(newProject) {
    return new Promise((resolve, reject) => {
        Project.create(newProject, function(err, newlyCreated){
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
}

ProjectDatabase.getUserProjects = function(userId) {
    return new Promise((resolve, reject) => {
        Project.find({"author.id":userId}, function(err, userProjects){
            if (err) {
                return reject(err)
            } else {
                return resolve(userProjects);
            }
        })
    })
}

ProjectDatabase.getAllProjects = function() {
    return new Promise((resolve, reject) => {
        Project.find(function(err, allProjects) {
            if (err) {
                return reject(err)
            } else {
                return resolve(allProjects);
            }
        })
    })
}

ProjectDatabase.getProjectById = function(projectId) {
    return new Promise((resolve, reject) => {
        Project.findById(projectId, function(err, foundProject) {
            if (err) {
                return reject(err)
            } else {
                return resolve(foundProject);
            }
        })
    })
}

ProjectDatabase.updateProject = function(projectId, dataToUpdate) {
    return new Promise((resolve, reject) => {
        Project.findByIdAndUpdate(projectId, dataToUpdate, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
}

ProjectDatabase.removeProject = function(projectId) {
    return new Promise((resolve, reject) => {
        Project.findByIdAndRemove(projectId, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
}

module.exports = ProjectDatabase;