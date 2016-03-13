var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 16080);

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

var programming_languages = [{"name": "Python"},{"name": "c++"},{"name": "perl"}];

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
  var pl = req.params.name;
    for (var i=0; i<=programming_languages.length;i++){
      if(programming_languages[i].name == pl){
        res.send(programming_languages[i]);
    }
}});

app.post("/programming_languages/:name", (req, res) => {
  res.send("ERROR metodo no permitido");
  res.sendStatus(404);
});

app.put("/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var nuevo = req.body;
    for (var i=0; i<=programming_languages.length;i++){
      if(programming_languages[i].name == pl){
        delete programming_languages[i];
        programming_languages.push(nuevo);
        res.send("Recurso actualizado");
    }
}});

app.delete("/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  for (var i=0; i<=programming_languages.length;i++){
      if(programming_languages[i].name == pl){
        delete programming_languages[i];
        res.send("Recurso borrado");
    }
}});
// API REST PEDRO
var luxury_cars = [{"model": "ferrari"},{"model": "bmw"},{"model": "mercedes"}];

app.get("/api/sandbox/luxury_cars/", (req, res) => {
  res.send(luxury_cars);
});

app.post("/api/sandbox/luxury_cars/", (req, res) => {
  var car = req.body;
  luxury_cars.push(car);
  res.sendStatus(200);
});

app.put("/api/sandbox/luxury_cars/", (req, res) => {
  res.sendStatus(404);
});

app.delete("/api/sandbox/luxury_cars/", (req, res) => {
  luxury_cars = [];
  res.sendStatus(200);
});


app.get("/api/sandbox/luxury_cars/:model", (req, res) => {
  var car = req.params.model;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        res.send(luxury_cars[i]);
    }
}});

app.post("/api/sandbox/luxury_cars/:model", (req, res) => {
  res.send("ERROR metodo no permitido");
  res.sendStatus(404);
});

app.put("/api/sandbox/luxury_cars/:model", (req, res) => {
  var car = req.params.model;
  var nuevo = req.body;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        delete luxury_cars[i];
        luxury_cars.push(nuevo);
        res.send("Recurso actualizado");
    }
}});

app.delete("/api/sandbox/luxury_cars/:model", (req, res) => {
  var car = req.params.model;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        delete luxury_cars[i];
        res.send("Recurso borrado");
    }
  }});

app.listen(port);
