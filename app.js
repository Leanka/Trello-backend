var users = require("./users");
var http = require("http");
var express = require("express");
var app = express();

var HTTP_PORT = 8088;

http.createServer(app).listen(HTTP_PORT, () => {})

// "/users"
app.get("/users", (req, res) => {

})
app.post("/users", (req, res) => {
    
})

// "/users/:id"
app.get("/users/:id", (req, res) => {

})

app.delete("/users/:id", (req, res) => {

})

app.patch("/users/:id", (req, res) => {

})

// "users/:id/projects"
app.get("/users/:id/projects", (req, res) => {

})

app.post("/users/:id/projects", (req, res) => {

})