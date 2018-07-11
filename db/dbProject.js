let Project = require(".././models/project.js");
var ProjectDatabase = {}

ProjectDatabase.addNewProject = function(req, res) {
    let author = {
        id : req.params.id
    }

    let newProject = { title : req.body.title,
                       description : req.body.description,
                       author : author
    }
    
    Project.create(newProject, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            console.log("New project created successfully");
            res.end();
        }
    })
}

ProjectDatabase.getUserProjects = function(req, res) {
    Project.find({"author.id":req.params.id}, function(err, userProjects) {
        if(err) {
            console.log(err);
        } else {
          res.json(userProjects);  
        }
    })
}

ProjectDatabase.getAllProjects = function(req, res) {
    Project.find(function(err, allProjects) {
        if(err) {
            console.log(err);
        } else {
            res.json(allProjects);
        }
    })
}

ProjectDatabase.getProjectById = function(req, res) {
    let projectId = req.params.id;
    Project.findById(projectId, function(err, foundProject) {
        if(err) {
            console.log(err);
        } else {
            res.json(foundProject);
        }
    })
}

ProjectDatabase.updateProject = function(req, res) {
    let projectId = req.params.id;
    let dataToUpdate = req.body;

    Project.findByIdAndUpdate(projectId, dataToUpdate, (err) => {
        if(err){
            console.log("Cannot find given project");
        }
        this.getProjectById(req, res);
    })
}

ProjectDatabase.removeProject = function(req, res) {
    let projectId = req.params.id;
    Project.findByIdAndRemove(projectId, (err) => {
        if(err){
            console.log("Cannot find given project");
        }
        res.json("Removed project with id " + projectId);
        res.end();
    })
}

module.exports = ProjectDatabase;