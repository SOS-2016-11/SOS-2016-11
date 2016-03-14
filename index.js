var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 16005);

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

var programming_languages = [{"name": "Python"},{"name": "C++"},{"name": "Perl"}];

app.get("/api/sandbox/programming_languages/", (req, res) => {
  res.send(programming_languages);
});

app.post("/api/sandbox/programming_languages/", (req, res) => {
  var plb = req.body;
  programming_languages.push(plb);
  res.sendStatus(200);
});

app.put("/api/sandbox/programming_languages/", (req, res) => {
  res.sendStatus(404);
});

app.delete("/api/sandbox/programming_languages/", (req, res) => {
  programming_languages = [];
  res.sendStatus(200);
});


app.get("/api/sandbox/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var mes = 400;
  for(var i = 0; i < programming_languages.length; i++){
    if(programming_languages[i].name == pl){
      mes = programming_languages[i];
      break;
    }
  }

  if(mes == 400){
    res.sendStatus(mes);
  }else{
    res.send(mes);
  }

});

app.post("/api/sandbox/programming_languages/:name", (req, res) => {
  res.sendStatus(404);
});

app.put("/api/sandbox/programming_languages/:name", (req, res) => {
  var pl = req.params.name;
  var plb = req.body;
  var mes = 400;
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
  var mes = 400;
  for(var i = 0; i < programming_languages.length; i++){
    if(programming_languages[i].name == pl){
      programming_languages.splice(i, 1);
      mes = 200;
      break;
    }
  }

  res.sendStatus(mes);

});


// API REST PEDRO

var luxury_cars = [];
var luxury_cars1 = [{"model": "ferrari"},{"model": "bmw"},{"model": "mercedes"}];

app.get("/api-test/luxury_cars/loadInitialData/", (req, res) => {
  luxury_cars=luxury_cars1;
  res.sendStatus(200);
});

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
  var estado=404;
  for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        res.send(luxury_cars[i]);
        estado=200;
        break;
    }}

  res.sendStatus(estado);

});

app.post("/api/sandbox/luxury_cars/:model", (req, res) => {
  res.send("ERROR metodo no permitido");
  res.sendStatus(404);
});

app.put("/api/sandbox/luxury_cars/:model", (req, res) => {
  var car = req.params.model;
  var nuevo = req.body;
  var estado=404;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        luxury_cars.splice(i, 1);
        luxury_cars.push(nuevo);
        estado=200;
        break;
    }}
res.sendStatus(estado);
});

app.delete("/api/sandbox/luxury_cars/:model", (req, res) => {
  var car = req.params.model;
  var estado =404;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].model == car){
        luxury_cars.splice(i, 1);
        estado = 200;
        break;
    }
  }
res.sendStatus(estado);
});



app.listen(port);
