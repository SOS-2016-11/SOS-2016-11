var luxury_cars = [];

module.exports.getLista = function(req, res){
  res.send(luxury_cars);
}

module.exports.postLista = function(req, res){
  var car = req.body;
  luxury_cars.push(car);
  res.sendStatus(200);
}

module.exports.putLista = function(req, res){
  res.sendStatus(404);
}

module.exports.deleteLista = function(req, res){
  luxury_cars = [];
  res.sendStatus(200);
}

module.exports.getRecurso = function (req, res){
  var car = req.params.name;
  var estado = 404;
  for (var i = 0; i < luxury_cars.length; i++){
    if(luxury_cars[i].name == car){
        estado = luxury_cars[i];
        break;
    }
  }
  if(estado == 404){
      res.sendStatus(estado);
  }else{
      res.send(estado);
  }
}

module.exports.postRecurso = function (req, res){
  res.sendStatus(404);
}

module.exports.putRecurso = function  (req, res){
  var car = req.params.name;
  var nuevo = req.body;
  var estado=404;
    for (var i=0; i<=luxury_cars.length;i++){
      if(luxury_cars[i].name == car){
        luxury_cars.splice(i, 1);
        luxury_cars.push(nuevo);
        estado=200;
        break;
      }
    }
  res.sendStatus(estado);
}

module.exports.deleteRecurso = function  (req, res){
  var car = req.params.name;
  var estado =404;
  for (var i=0; i<=luxury_cars.length;i++){
    if(luxury_cars[i].name == car){
      luxury_cars.splice(i, 1);
      estado = 200;
      break;
    }
  }
  res.sendStatus(estado);
}

module.exports.loadInitialData = function (req, res){
  luxury_cars = [{"name": "ferrari"},{"name": "bmw"},{"name": "mercedes"}];
  res.sendStatus(200);
}

//V1
var Cities = [];
/*
module.exports.loadInitialDataCities = (req, res) => {*/
  Cities1 = [
    {"name": "ACoruña", "month": "Enero", "year": 2015, "p": 1018, "t": 10.9, "td": 7.2},
    {"name": "Santander", "month": "Enero", "year": 2015, "p": 1019, "t": 10.6, "td": 6.6},
    {"name": "Madrid", "month": "Enero", "year": 2015, "p": 951, "t": 6.0, "td": -0.9},
    {"name": "Zaragoza", "month": "Enero", "year": 2015, "p": 991, "t": 6.7, "td": 2.2},
    {"name": "Mallorca", "month": "Enero", "year": 2015, "p": 1017, "t": 11.0, "td": 5.7}
  ];/*
  res.sendStatus(200);
}
*/
module.exports.getCities = function(req, res){
  var Cities2 = [];
  var limit = req.query.limit;
  var offset = req.query.offset;
  var name = req.query.name;
  var month = req.query.month;
  var year = req.query.year;
  var p = req.query.p;
  var t = req.query.t;
  var td = req.query.td;
  var contador = offset;
  var busqueda=0;
  if(limit){
    if(limit > Cities.length){
      res.sendStatus(404);
    }else{
      for (var i=0; i<limit; i++){
        var recurso = Cities[contador];
        Cities2.push(recurso);
        contador++;
      }
      busqueda++;
    }
  }
  if(name||month||year||p||t||td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name ||Cities[i].month == month ||Cities[i].year == year||Cities[i].p == p || Cities[i].t == t ||Cities[i].td == td){
          var recurso = Cities[i];
          Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(busqueda==0){
    res.send(Cities);
  }else{
    res.send(Cities2);
  }

}

module.exports.postCities = function(req, res){
  var car = req.body;
  Cities.push(car);
  res.sendStatus(200);
}

module.exports.putCities = function(req, res){
  res.sendStatus(404);
}

module.exports.deleteCities = function(req, res){
  Cities = [];
  res.sendStatus(200);
}

module.exports.getCity = function (req, res){
  var Cities2 = [];
  var Cities3 = [];
  var name = req.query.name;
  var month = req.query.month;
  var year = req.query.year;
  var p = req.query.p;
  var t = req.query.t;
  var td = req.query.td;
  var busqueda=0;
  var busqueda1=0;
  //aportacion nueva
  var car = req.params.name;
  //api-test
  if(car == "loadInitialData" || car == "loadInitialData/"){
    Cities = Cities1;
    res.sendStatus(200);
  }else{
  for (var i = 0; i < Cities.length; i++){
    if(Cities[i].name == car||Cities[i].month == car||Cities[i].year == car||Cities[i].p == car||Cities[i].t == car||Cities[i].td == car){
        var recursos = Cities[i];
        Cities2.push(recursos);
        busqueda++;
    }
  }
  if(name||month||year||p||t||td){
    for (var i=0; i<Cities2.length; i++){
      if(Cities2[i].name == name ||Cities2[i].month == month ||Cities2[i].year == year||Cities2[i].p == p || Cities2[i].t == t ||Cities2[i].td == td){
          var recurso = Cities2[i];
          Cities3.push(recurso);
      }
    }
    busqueda1++;
  }
  if(busqueda==0){
    res.sendStatus(404);
  }else{
    if(busqueda1==0){
      res.send(Cities2);
    }else{
      res.send(Cities3);
    }
  }

  }
}

module.exports.getCityYear = (req, res) => {
  var car = req.params.name;
  var year = req.params.year;
  var Cities2 = [];
  var busqueda=0;
  for(var i = 0; i < Cities.length; i++){
    if(Cities[i].name == car && Cities[i].year == year){
      var recurso = Cities[i];
      Cities2.push(recurso);
      busqueda++;
    }
  }
  if(busqueda==0){
    res.sendStatus(404);
  }else{
    res.send(Cities2);
  }
}


module.exports.postCity = function (req, res){
  res.sendStatus(404);
}

module.exports.putCity = function  (req, res){
  var car = req.params.name;
  var nuevo = req.body;
  var estado=404;
    for (var i=0; i < Cities.length;i++){
      if(Cities[i].name == car){
        Cities.splice(i, 1);
        Cities.push(nuevo);
        estado=200;
        break;
      }
    }
  res.sendStatus(estado);
}

module.exports.putCityYear = function  (req, res){
  var car = req.params.name;
  var year = req.params.year;
  var nuevo = req.body;
  var busqueda=0;
    for (var i=0; i < Cities.length;i++){
      if(Cities[i].name == car && Cities[i].year == year){
        Cities.splice(i, 1);
        Cities.push(nuevo);
        busqueda++;
        break;
      }
    }
    if(busqueda==0){
      res.sendStatus(404);
    }else{
      res.sendStatus(200);
    }
}


module.exports.deleteCity = function  (req, res){
  var car = req.params.name;
  var estado =404;
  for (var i=0; i<=Cities.length;i++){
    if(Cities[i].name == car){
      Cities.splice(i, 1);
      estado = 200;
      break;
    }
  }
  res.sendStatus(estado);
}
