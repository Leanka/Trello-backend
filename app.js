var users = require("./controller/users");
var projects = require("./controller/projects");
var http = require("http");
var express = require("express");
var app = express();
app.use(express.json())  //needed?

var HTTP_PORT = 8088;

http.createServer(app).listen(HTTP_PORT, () => {})

// "/users"
app.get("/users", (req, res) => {
    users.index(req, res);
})

app.post("/users", (req, res) => {
    users.create(req, res);
})

// "/users/:id"
app.get("/users/:id", (req, res) => {
    users.show(req, res);
})

app.delete("/users/:id", (req, res) => {
    users.delete(req, res)
})

app.patch("/users/:id", (req, res) => {
    users.update(req, res);
})

// "users/:id/projects"
app.get("/users/:id/projects", (req, res) => {
    projects.index(req, res); //show all user projects
})

app.post("/users/:id/projects", (req, res) => {
    projects.create(req, res); //create new projects
})

app.listen(process.env.PORT, process.env.IP);