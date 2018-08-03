var ProjectDatabase = require(".././db/dbProject.js");

exports.index = (req, res) => {
    ProjectDatabase.getUserProjects(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
}

exports.show = (req, res) => {
    ProjectDatabase.getProjectById(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
}

exports.create = (req, res) => {
    let author = { id : req.params.id }

    let newProject = { title : req.body.title,
                       description : req.body.description,
                       parentKey : author
    }
    ProjectDatabase.addNewProject(newProject).then((result) => {
        res.json(result);
        res.end()
    })
}

exports.update = (req, res) => {
    ProjectDatabase.updateProject(req.params.id, req.body).then(() => {
        res.end()
    })
}

exports.delete = (req, res) => {
    ProjectDatabase.removeProject(req.params.id).then(() => {
        res.end()
    })
}

exports.showAll = (res) => {
    ProjectDatabase.getAllProjects().then((result) => {
        res.json(result)
        res.end()
    })
}