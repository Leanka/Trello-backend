let List = require(".././models/list.js");
var ListDatabase = {}

ListDatabase.addNewList = function(req, res) {
    let parentProject = {
                          id : req.params.id
                        }

    let newList = { 
                    title : req.body.title,
                    parentProject : parentProject
                  }
    
    List.create(newList, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            console.log("New list created successfully");
            res.end();
        }
    })
}

ListDatabase.getProjectLists = function(req, res) {
        List.find({"parentProject.id": req.params.id}, function(err, projectLists) {
        if(err) {
            console.log(err);
        } else {
          res.json(projectLists);  
        }
    })
}

ListDatabase.getListById = function(req, res) {
    let listId = req.params.id;
    List.findById(listId, function(err, foundList) {
        if(err) {
            console.log(err);
        } else {
            res.json(foundList);
        }
    })
}

ListDatabase.getAllLists = function(req, res) {
    List.find({}, function(err, allLists) {
        if(err) {
            console.log(err.message);
        } else {
            res.json(allLists);
        }
    })
}

module.exports = ListDatabase;