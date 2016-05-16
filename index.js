var express = require("express");
var bodyParser = require("body-parser");
var request = require('request');
//var cors = require('cors');
var port = (process.env.PORT || 16000);
//var port = (process.env.PORT ||29600);

var app = express();
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/static"));
//app.use(cors());

var apisosCtl = require('./api/apisosCtl.js');
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

// API REST CARLOS /////////////////////////////////////////////////////////////
// PROXY
var paths='/api/v1/average-rainfall/';
var apiServerHost = 'http://sos-2016-11.herokuapp.com';
//var paths='/api/v1/divorces-spanish/';
//var apiServerHost = 'http://sos-2016-10.herokuapp.com';
app.use(paths, function(req, res) {
  var url = apiServerHost + req.baseUrl + req.url;
  console.log('piped: '+req.baseUrl + '///' +req.url);
  req.pipe(request(url,(error, response, body)=>{
  /*  if (error.code === 'ECONNREFUSED'){
      console.error('Refused connection');
    } else {
      throw error;
    }
  */})).pipe(res);
});


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
app.get("/api/v1/average-rainfall/", apicntcar.getBasins);

app.post("/api/v1/average-rainfall/", apicntcar.postBasins);

app.put("/api/v1/average-rainfall/", apicntcar.putBasins);

app.delete("/api/v1/average-rainfall/", apicntcar.deleteBasins);


app.get("/api/v1/average-rainfall/:dat", apicntcar.getBasin);

app.get("/api/v1/average-rainfall/:river_basin/:dat", apicntcar.getBasinDat);

app.get("/api/v1/average-rainfall/:river_basin/:dat1/:dat2", apicntcar.getBasinDatDat);

app.post("/api/v1/average-rainfall/:river_basin", apicntcar.postBasin);

app.put("/api/v1/average-rainfall/:river_basin", apicntcar.putBasin);

app.put("/api/v1/average-rainfall/:river_basin/:dat", apicntcar.putBasinDat);

app.delete("/api/v1/average-rainfall/:river_basin", apicntcar.deleteBasin);

app.delete("/api/v1/average-rainfall/:river_basin/:dat", apicntcar.deleteBasinDat);



// API REST PEDRO

//SANDBOX

app.get("/api/sandbox/luxury_cars/", apisosCtl.getLista);

app.post("/api/sandbox/luxury_cars/", apisosCtl.postLista);

app.put("/api/sandbox/luxury_cars/", apisosCtl.putLista);

app.delete("/api/sandbox/luxury_cars/", apisosCtl.deleteLista);

app.get("/api/sandbox/luxury_cars/:name",apisosCtl.getRecurso);

app.post("/api/sandbox/luxury_cars/:name", apisosCtl.postRecurso);

app.put("/api/sandbox/luxury_cars/:name",apisosCtl.putRecurso);

app.delete("/api/sandbox/luxury_cars/:name",apisosCtl.deleteRecurso);

app.get("/api-test/luxury_cars/loadInitialData/",apisosCtl.loadInitialData );

//V1
app.get("/api/v1/pressure-and-temperatures/", apisosCtl.getCities);

app.post("/api/v1/pressure-and-temperatures/", apisosCtl.postCities);

app.put("/api/v1/pressure-and-temperatures/", apisosCtl.putCities);

app.delete("/api/v1/pressure-and-temperatures/", apisosCtl.deleteCities);

app.get("/api/v1/pressure-and-temperatures/:name", apisosCtl.getCity);

app.get("/api/v1/pressure-and-temperatures/:name/:year", apisosCtl.getCityYear);

app.post("/api/v1/pressure-and-temperatures/:name", apisosCtl.postCity);

app.put("/api/v1/pressure-and-temperatures/:name", apisosCtl.putCity);

app.put("/api/v1/pressure-and-temperatures/:name/:year", apisosCtl.putCityYear);

app.delete("/api/v1/pressure-and-temperatures/:name", apisosCtl.deleteCity);



app.listen(port);
