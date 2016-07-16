var http = require("http");
var express = require("express");
var app = express();

var controllers = require("./controllers");

//SEt up View Engine
app.set("view engine", "vash");

//Map Routes using Controllers rather than rubbishing up this page
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Fabian", isValidUser: true, group: "ContentDeveloper" });
});

var server = http.createServer(app);


server.listen(3000);