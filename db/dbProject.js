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

module.exports = ProjectDatabase;