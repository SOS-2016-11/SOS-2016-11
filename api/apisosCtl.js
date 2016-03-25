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

module.exports.getCities = function(req, res){
  res.send(Cities);
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
  var car = req.params.name;
  var estado = 404;
  for (var i = 0; i < Cities.length; i++){
    if(Cities[i].name == car){
        estado = Cities[i];
        break;
    }
  }
  if(estado == 404){
      res.sendStatus(estado);
  }else{
      res.send(estado);
  }

}

module.exports.postCity = function (req, res){
  res.sendStatus(404);
}

module.exports.putCity = function  (req, res){
  var car = req.params.name;
  var nuevo = req.body;
  var estado=404;
    for (var i=0; i<=Cities.length;i++){
      if(Cities[i].name == car){
        Cities.splice(i, 1);
        Cities.push(nuevo);
        estado=200;
        break;
      }
    }
  res.sendStatus(estado);
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

module.exports.loadInitialData = (req, res) => {
  Cities = [
    {"name": "ACoruña", "month": "Enero", "year": 2015, "p": 1018, "t": 10.9, "td": 7.2},
    {"name": "Santander", "month": "Enero", "year": 2015, "p": 1019, "t": 10.6, "td": 6.6},
    {"name": "Madrid", "month": "Enero", "year": 2015, "p": 951, "t": 6.0, "td": -0.9},
    {"name": "Zaragoza", "month": "Enero", "year": 2015, "p": 991, "t": 6.7, "td": 2.2},
    {"name": "Mallorca", "month": "Enero", "year": 2015, "p": 1017, "t": 11.0, "td": 5.7}
  ];
  res.sendStatus(200);
}
