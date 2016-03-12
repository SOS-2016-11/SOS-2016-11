var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 16070);

var app = express();
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/static"));

app.get("/time", (req,res)=>{
  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var now = new Date();
  var d = now.getDay();
  var day = days[d];
  var hour = ("0" + now.getHours()).slice(-2);
  var minutes = ("0" + now.getMinutes()).slice(-2);
  var seconds = ("0" + now.getSeconds()).slice(-2);
  res.send("Today is  " + day + ", and are " + hour + ":" + minutes + ":" + seconds);
});

// API REST CARLOS

var programming_languages = [{"name": "Python"}];

app.get("/programming_languages/", (req, res) => {
  res.send(programming_languages);
});

app.post("/programming_languages/", (req, res) => {
  var pl = req.body;
  programming_languages.push(pl);
  res.sendStatus(200);
});

app.put("/programming_languages/", (req, res) => {
  res.sendStatus(404);
});

app.delete("/programming_languages/", (req, res) => {
  programming_languages = [];
  res.sendStatus(200);
});


app.get("/programming_languages/:name", (req, res) => {
/*  var pl = req.params.name;
  var ind = pl.findIndex;
  console.log(pl + " in index " + ind);
  res.send(programming_languages[ind]);*/
  res.send("ok0");
});

app.post("/programming_languages/:name", (req, res) => {
  res.sendStatus(404);
});

app.put("/programming_languages/:name", (req, res) => {
  res.send("ok1");
});

app.delete("/programming_languages/:name", (req, res) => {
  res.send("ok2");
});

// API REST PEDRO
var luxury_cars = [{"model": "lamborghini"}];

app.get("/luxury_cars/", (req, res) => {
  res.send(luxury_cars);
});

app.post("/luxury_cars/", (req, res) => {
  var car = req.body;
  programming_languages.push(car);
  res.sendStatus(200);
});

app.put("/luxury_cars/", (req, res) => {
  res.sendStatus(404);
});

app.delete("/luxury_cars/", (req, res) => {
  luxury_cars = [];
  res.sendStatus(200);
});


app.get("/luxury_cars/:model", (req, res) => {
/*  var car = req.params.model;
  var ind = car.findIndex;
  console.log(  car + " in index " + ind);
  res.send(programming_languages[ind]);*/
  res.send("ok0");
});

app.post("/luxury_cars/:model", (req, res) => {
  res.sendStatus(404);
});

app.put("/luxury_cars/:model", (req, res) => {
  res.send("ok1");
});

app.delete("/luxury_cars/:model", (req, res) => {
  res.send("ok2");
});

app.listen(port);
