var users = require("./controller/users");
var projects = require("./controller/projects");
var lists = require("./controller/lists");
var tasks = require("./controller/tasks");
var connect = require("./db/db.js");
var cors = require("cors");
connect.connectDb()

var http = require("http");
var express = require("express");
var app = express();
app.use(express.json())  //needed?
app.use(cors())

var HTTP_PORT = 8088;

http.createServer(app).listen(HTTP_PORT, (err) => {})

// ******************
// USER routes      *
// ******************
app.get("/users", (req, res) => {
    users.index(res);
})

app.post("/users", (req, res) => {
    users.create(req, res);
})

app.get("/users/:id", (req, res) => {
    users.show(req, res);
})

app.delete("/users/:id", (req, res) => {
    users.delete(req, res)
})

app.patch("/users/:id", (req, res) => {
    users.update(req, res);
})

app.get("/users/:id/projects", (req, res) => {
    projects.index(req, res); //show all user projects
})

app.post("/users/:id/projects", (req, res) => {
    projects.create(req, res); //create new project
})

// ******************
// PROJECT routes   *
// ******************

app.get("/projects", (req, res) => {
    projects.showAll(res);
})

app.get("/projects/:id", (req, res) => {
    projects.show(req, res);
})

app.patch("/projects/:id", (req, res) => {
    projects.update(req, res);
})

app.delete("/projects/:id", (req, res) => {
    projects.delete(req, res);
})

app.get("/projects/:id/lists", (req, res) => {
    lists.index(req,res);
});

app.post("/projects/:id/lists", (req, res) => {
    lists.create(req, res);
})

// ******************
// LIST routes      *
// ******************

app.get("/lists", (req, res) => {
   lists.showAll(res); 
})

app.get("/lists/:id", (req, res) => {
    lists.show(req,res);
})

app.patch("/lists/:id", (req, res) => {
    lists.update(req, res);
})

app.delete("/lists/:id", (req, res) => {
    lists.destroy(req, res);
})

app.get("/lists/:id/tasks", (req, res) => {
    tasks.index(req, res);
})

app.post("/lists/:id/tasks", (req, res) => {
    tasks.create(req, res);
})

// ******************
// TASK routes      *
// ******************
app.get("/tasks", (req, res) => {
    tasks.showAll(res);
})

app.get("/tasks/:id", (req, res) => {
    tasks.show(req,res);
})

app.patch("/tasks/:id", (req, res) => {
    tasks.update(req, res);
})

app.delete("/tasks/:id", (req, res) => {
    tasks.remove(req, res);
})
//C9 listener
app.listen(process.env.PORT, process.env.IP);