var users = require("./controller/users");
var projects = require("./controller/projects");
var connect = require("./db/db.js");
connect.connectDb()

var http = require("http");
var express = require("express");
var app = express();
app.use(express.json())  //needed?

var HTTP_PORT = 8088;

http.createServer(app).listen(HTTP_PORT, (err) => {})

// ******************
// USER routes      *
// ******************
app.get("/users", (req, res) => {
    users.index(req, res);
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
// PROJECT routes      *
// ******************

app.get("/projects", (req, res) => {
    projects.showAll(req, res);
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

//C9 listener
// app.listen(process.env.PORT, process.env.IP);