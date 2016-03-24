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
