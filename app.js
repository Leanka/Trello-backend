var users = require("./controller/users");
var projects = require("./controller/projects");
var lists = require("./controller/lists");
var tasks = require("./controller/tasks");
var connect = require("./db/db.js");

var jwt = require('jsonwebtoken');
var cors= require('cors');
var http = require("http");
var express = require("express");
var app = express();

connect.connectDb();
app.use(express.json());
app.use(cors());

var HTTP_PORT = 8088;

http.createServer(app).listen(HTTP_PORT, (err) => {})

// ******************
// USER routes      *
// ******************

app.post("/api/login", (req, res) => {
    users.findUser(req, res).then((user) => {
        if(user) {
          jwt.sign({user}, 'secretkey', { expiresIn: '1h' }, (err, token) => {
        if(err) {
            console.log(err);
        } else {
            res.json({
            token
        })
        }
    })  
    } else {
        res.json("### Given user has no permission to this API ###");
    } 
    });
})

app.get("/users", verifyToken, (req, res) => {
    users.index(res);
})

app.post("/users", (req, res) => {
    users.create(req, res);
})

app.get("/users/:id", verifyToken, (req, res) => {
    users.show(req, res);
})

app.delete("/users/:id", verifyToken, (req, res) => {
    users.delete(req, res)
})

app.patch("/users/:id", verifyToken, (req, res) => {
    users.update(req, res);
})

app.get("/users/:id/projects", verifyToken, (req, res) => {
    projects.index(req, res); //show all user projects
})

app.post("/users/:id/projects", verifyToken, (req, res) => {
    projects.create(req, res); //create new project
})

// ******************
// PROJECT routes   *
// ******************

app.get("/projects", verifyToken, (req, res) => {
    projects.showAll(res);
})

app.get("/projects/:id", verifyToken, (req, res) => {
    projects.show(req, res);
})

app.patch("/projects/:id", verifyToken, (req, res) => {
    projects.update(req, res);
})

app.delete("/projects/:id", verifyToken, (req, res) => {
    projects.delete(req, res);
})

app.get("/projects/:id/lists", verifyToken, (req, res) => {
    lists.index(req,res);
});

app.post("/projects/:id/lists", verifyToken, (req, res) => {
    lists.create(req, res);
})

// ******************
// LIST routes      *
// ******************

app.get("/lists", verifyToken, (req, res) => {
   lists.showAll(res); 
})

app.get("/lists/:id", verifyToken, (req, res) => {
    lists.show(req,res);
})

app.patch("/lists/:id", verifyToken, (req, res) => {
    lists.update(req, res);
})

app.delete("/lists/:id", verifyToken, (req, res) => {
    lists.destroy(req, res);
})

app.get("/lists/:id/tasks", verifyToken, (req, res) => {
    tasks.index(req, res);
})

app.post("/lists/:id/tasks", verifyToken, (req, res) => {
    tasks.create(req, res);
})

// ******************
// TASK routes      *
// ******************
app.get("/tasks", verifyToken, (req, res) => {
    tasks.showAll(res);
})

app.get("/tasks/:id", verifyToken, (req, res) => {
    tasks.show(req,res);
})

app.patch("/tasks/:id", verifyToken, (req, res) => {
    tasks.update(req, res);
})

app.delete("/tasks/:id", verifyToken, (req, res) => {
    tasks.remove(req, res);
})

function verifyToken(req, res, next) {
    //FORMAT OF TOKEN
    //"Authorization: Bearer%<access_token>""
    let bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        let bearer = bearerHeader.split('%');
        let bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403); // Respond: Forbidden
    }
}

//C9 listener
app.listen(process.env.PORT, process.env.IP);