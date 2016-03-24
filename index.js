var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 16040);
var luxury_carsCtl = require('./luxury_carsCtl.js')

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

var programming_languages = [];

app.get("/api/sandbox/programming_languages/", (req, res) => {
  res.send(programming_languages);
});

app.post("/api/sandbox/programming_languages/", (req, res) => {
  var plb = req.body;
  programming_languages.push(plb);
  res.sendStatus(200);
});

app.put("/api/sandbox/programming_languages/", (req, res) => {
  res.sendStatus(405);
});

app.delete("/api/sandbox/programming_languages/", (req, res) => {
  programming_languages = [];
  res.sendStatus(200);
});


app.get("/api/sandbox/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var mes = 404;
  for(var i = 0; i < programming_languages.length; i++){
    if(programming_languages[i].name == pl){
      mes = programming_languages[i];
      break;
    }
  }
  if(mes == 404){
    res.sendStatus(mes);
  }else{
    res.send(mes);
  }
});

app.post("/api/sandbox/programming_languages/:name", (req, res) => {
  res.sendStatus(405);
});

app.put("/api/sandbox/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var plb = req.body;
  var mes = 404;
  for(var i = 0; i < programming_languages.length; i++){
    if(programming_languages[i].name == pl){
      programming_languages.splice(i, 1);
      programming_languages.push(plb);
      mes = 200;
      break;
    }
  }
  res.sendStatus(mes);
});

app.delete("/api/sandbox/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var mes = 404;
  for(var i = 0; i < programming_languages.length; i++){
    if(programming_languages[i].name == pl){
      programming_languages.splice(i, 1);
      mes = 200;
      break;
    }
  }
  res.sendStatus(mes);
});

app.get("/api-test/programming_languages/loadInitialData", (req, res) => {
  programming_languages = [{"name": "Python"},{"name": "C++"},{"name": "Perl"}];
  res.sendStatus(200);
});

// API REST PEDRO


app.get("/api-test/luxury_cars/loadInitialData/", (req, res) => {
  luxury_cars = [{"name": "ferrari"},{"name": "bmw"},{"name": "mercedes"}];
  res.sendStatus(200);
});

app.get("/api/sandbox/luxury_cars/", luxury_carsCtl.getLista);

app.post("/api/sandbox/luxury_cars/", luxury_carsCtl.postLista);

app.put("/api/sandbox/luxury_cars/", luxury_carsCtl.putLista);

app.delete("/api/sandbox/luxury_cars/", luxury_carsCtl.deleteLista);

app.get("/api/sandbox/luxury_cars/:name",luxury_carsCtl.getRecurso);

app.post("/api/sandbox/luxury_cars/:name",luxury_carsCtl.postRecurso);

app.put("/api/sandbox/luxury_cars/:name",luxury_carsCtl.putRecurso);

app.delete("/api/sandbox/luxury_cars/:name",luxury_carsCtl.deleteRecurso);

app.listen(port);
