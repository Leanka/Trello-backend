let List = require(".././models/list.js");
var ListDatabase = {}

return new Promise((resolve, reject) => {})

if (err) {
    return reject(err)
} else {
    return resolve();
}

ListDatabase.addNewList = function(newList) {
    return new Promise((resolve, reject) => {
        List.create(newList, function(err, newlyCreated){
            if (err) {
                return reject(err)
            } else {
                return resolve(newlyCreated);
            }
        })
    })
}

ListDatabase.getProjectLists = function(projectId) {
    return new Promise((resolve, reject) => {
        List.find({"parentProject.id": projectId}, function(err, projectLists) {
            if (err) {
                return reject(err)
            } else {
                return resolve(projectLists);
            }
        })
    })
}

ListDatabase.getListById = function(listId) {
    return new Promise((resolve, reject) => {
        List.findById(listId, function(err, foundList) {
            if (err) {
                return reject(err)
            } else {
                return resolve(foundList);
            }
        })
    })
}

ListDatabase.getAllLists = function() {
    return new Promise((resolve, reject) => {
        List.find({}, function(err, allLists) {
            if (err) {
                return reject(err)
            } else {
                return resolve(allLists);
            }
        })
    })
}

ListDatabase.updateList = function(listId, dataToUpdate) {
    return new Promise((resolve, reject) => {
        List.findByIdAndUpdate(listId, dataToUpdate, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
}

ListDatabase.removeList = function(listId) {
    return new Promise((resolve, reject) => {
        List.findByIdAndRemove(listId, (err) => {
            if (err) {
                return reject(err)
            } else {
                return resolve();
            }
        })
    })
}

module.exports = ListDatabase;