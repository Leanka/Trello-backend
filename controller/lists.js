var ListDatabase = require(".././db/dbLists.js");

exports.showAll = (res) => {
    ListDatabase.getAllLists().then((result) => {
        res.json(result)
        res.end()
    })
}

exports.create = (req, res) => {
    let newList = { 
                    title : req.body.title,
                    parentKey : { id : req.params.id }
                  }

    ListDatabase.addNewList(newList).then((result) => {
        res.json({"id":result});
        res.end()
    })
}

exports.index = (req, res) => {
    ListDatabase.getProjectLists(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
}

exports.show = (req, res) => {
    ListDatabase.getListById(req.params.id).then((result) => {
        res.json(result)
        res.end()
    })
};

exports.update = (req, res) => {
    ListDatabase.updateList(req.params.id, req.body).then(() => {
        res.end()
    })
};

exports.destroy = (req, res) => {
    ListDatabase.removeList(req.params.id).then(() => {
        res.end()
    })
};