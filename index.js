var express = require("express");
var bodyParser = require("body-parser");
var port = (process.env.PORT || 16000);

var app = express();
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/static"));

var luxury_carsCtl = require('./luxury_carsCtl.js');
var apicntcar = require("./api/apicntcar.js");

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

// SANDBOX

app.get("/api/sandbox/programming_languages/", apicntcar.getPLs);

app.post("/api/sandbox/programming_languages/", apicntcar.postPLs);

app.put("/api/sandbox/programming_languages/", apicntcar.putPLs);

app.delete("/api/sandbox/programming_languages/", apicntcar.deletePLs);


app.get("/api/sandbox/programming_languages/:name", apicntcar.getPL);

app.post("/api/sandbox/programming_languages/:name", apicntcar.postPL);

app.put("/api/sandbox/programming_languages/:name", apicntcar.putPL);

app.delete("/api/sandbox/programming_languages/:name", apicntcar.deletePL);


app.get("/api-test/programming_languages/loadInitialData", apicntcar.loadInitialData);

// V1

app.get("/api/v1/average-rainfall/", apicntcar.getPLs);

app.post("/api/v1/average-rainfall/", apicntcar.postPLs);

app.put("/api/v1/average-rainfall/", apicntcar.putPLs);

app.delete("/api/v1/average-rainfall/", apicntcar.deletePLs);


app.get("/api/v1/average-rainfall/:name", apicntcar.getPL);

app.post("/api/v1/average-rainfall/:name", apicntcar.postPL);

app.put("/api/v1/average-rainfall/:name", apicntcar.putPL);

app.delete("/api/v1/average-rainfall/:name", apicntcar.deletePL);


app.get("/api/v1/average-rainfall/loadInitialData", apicntcar.loadInitialDataV1);




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
