var luxury_cars = [];

module.exports.getLista = function(req, res){
  res.send(luxury_cars);
}

module.exports.postLista = function(req, res){
  var car = req.body;
  luxury_cars.push(car);
  res.sendStatus(201);
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
  var limit = req.query.limit;
  var offset = req.query.offset;
  var contador = offset;
  var key = req.query.apikey;
  var Cities2 = [];
  var Cities3 = [];
  var from1 = req.query.from;
  var to1 = req.query.to;
  var name = req.query.name;
  var month = req.query.month;
  var year = req.query.year;
  var p = req.query.p;
  var t = req.query.t;
  var td = req.query.td;
  var busqueda=0;
  var busqueda1=0;
  //Prueba apikey

  //Busqueda nombre y comprueba
  //Me da conflicto con algunas busquedas

  //Nueva aportacion
  if( from1 && compruebaApiKey(key)  && to1){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year >= from1 && Cities[i].year <= to1){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if( from1 && !compruebaApiKey(key)  && to1){
    res.sendStatus(401);
  }

//Nueva aportcaion

  if(name && compruebaApiKey(key) && !year && !month && !p && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && !compruebaApiKey(key) && !year && !month && !p && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda year y comprueba
  if(year && compruebaApiKey(key) && !name && !month && !p && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year == year){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(year && !compruebaApiKey(key) && !name && !month && !p && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda month
  if(month && compruebaApiKey(key) && !year && !name && !p && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].month == month){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(month && !compruebaApiKey(key)&& !year && !name && !p && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda p
  if(p && compruebaApiKey(key)&& !year && !name && !month && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].p == p){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(p && !compruebaApiKey(key) && !year && !name && !month && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda t
  if( t && compruebaApiKey(key) && !year && !name && !month && !p && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].t == t){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(t && !compruebaApiKey(key)&& !year && !name && !month && !p && !td){
    res.sendStatus(401);
  }
  //Busqueda td
  if( td && compruebaApiKey(key)&& !year && !name && !month && !t && !p){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].td == td){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(td && !compruebaApiKey(key)&& !year && !name && !month && !t && !p){
    res.sendStatus(401);
  }

  //Busqueda nombre&year
  if(name && year&& compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name && Cities[i].year == year){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && year&& !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda nombre&month
  if(name && month && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name && Cities[i].month == month){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && month && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda nombre&p
  if(name && p && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name && Cities[i].p == p){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && p && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda nombre&t
  if(name && t && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name && Cities[i].t == t){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && t && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda nombre&td
  if(name && td && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].name == name && Cities[i].td == td){
        var recurso = Cities[i];
        Cities2.push(recurso);
      }
    }
    busqueda++;
  }
  if(name && td && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  // Desde aqui comenzamos la paginacion, si algo está mal,proviene de aqui
  if(limit && !offset && compruebaApiKey(key)){
    if(limit > Cities2.length){
      for (var i=0; i<Cities2.length; i++){
        var recurso = Cities2[i];
        Cities3.push(recurso);
      }
      busqueda1++;

    }else{
      for (var i=0; i<limit; i++){
        var recurso = Cities2[i];
        Cities3.push(recurso);
      }
      busqueda1++;
    }
  }
  if(limit && !offset && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(!limit && offset&&compruebaApiKey(key)){
    res.sendStatus(400);
  }
  if(!limit && offset&&!compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(limit && offset && compruebaApiKey(key)){
    for (var i=0; i<limit; i++){
      var recurso = Cities2[contador];
      Cities3.push(recurso);
      contador++;
    }
    busqueda1++;
  }
  if(limit && offset && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Aqui termina la paginacion
  //Fin busquedas
  if(busqueda==0 && compruebaApiKey(key)){
    res.send(Cities);
  }
  if(busqueda==0 && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(busqueda1 > 0 ){
    res.send(Cities3);
  }
  if(busqueda > 0 ){
    res.send(Cities2);
  }
}

module.exports.postCities = function(req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var car = req.body;
    if(compruebaJSON(car)){
      var busqueda=0;
      for (var i = 0; i < Cities.length; i++){
        if(Cities[i].name == car.name && Cities[i].year == car.year && Cities[i].month == car.month ){
          busqueda++;
          break;
        }
      }
      if(busqueda > 0){
        res.sendStatus(409);
      }else{
        Cities.push(car);
        res.sendStatus(201);
      }
    }else{
      res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.putCities = function(req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    res.sendStatus(405);
  }else{
    res.sendStatus(401);
  }
}

module.exports.deleteCities = function(req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    Cities = [];
    res.sendStatus(200);
  }else{
    res.sendStatus(401);
  }
}
//getCity

module.exports.getCity = function (req, res){
  var key = req.query.apikey;
  var Cities2 = [];
  var Cities3 = [];
  var from1 = req.query.from;
  var limit = req.query.limit;
  var offset = req.query.offset;
  var to1 = req.query.to;
  var name = req.query.name;
  var month = req.query.month;
  var year = req.query.year;
  var p = req.query.p;
  var t = req.query.t;
  var td = req.query.td;
  var busqueda=0;
  var busqueda1=0;
  var busqueda2=0;

  var car = req.params.name;
  if((car == "loadInitialData" || car == "loadInitialData/") && compruebaApiKey(key)){
    Cities = [
      {"name": "ACoruña", "month": "Enero", "year": 2015, "p": 1018, "t": 10.9, "td": 7.2},
      {"name": "Santander", "month": "Enero", "year": 2015, "p": 1019, "t": 10.6, "td": 6.6},
      {"name": "Madrid", "month": "Enero", "year": 2015, "p": 951, "t": 6.0, "td": -0.9},
      {"name": "Zaragoza", "month": "Enero", "year": 2015, "p": 991, "t": 6.7, "td": 2.2},
      {"name": "Mallorca", "month": "Enero", "year": 2015, "p": 1017, "t": 11.0, "td": 5.7}
    ];
    busqueda2++;
    busqueda++;
  }
<<<<<<< HEAD

=======
///paginacion
  if(limit && !offset && compruebaApiKey(key)){
    if(limit > Cities2.length){
      for (var i=0; i<Cities2.length; i++){
        var recurso = Cities2[i];
        Cities3.push(recurso);
      }
      busqueda1++;
    }else{
      for (var i=0; i<limit; i++){
        var recurso = Cities2[i];
        Cities3.push(recurso);
      }
      busqueda1++;
    }
  }
  if(limit && !offset && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(!limit && offset&&compruebaApiKey(key)){
    res.sendStatus(400);
  }
  if(!limit && offset&&!compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(limit && offset && compruebaApiKey(key)){
    for (var i=0; i<limit; i++){
      var recurso = Cities[contador];
      Cities3.push(recurso);
      contador++;
    }
    busqueda1++;
  }
  if(limit && offset && !compruebaApiKey(key)){
    res.sendStatus(401);
  }

//fin paginacion

  //hasta aqui
>>>>>>> 101485c0fbdbc16323d094732215c2d71f1540da
  if((car == "loadInitialData" || car == "loadInitialData/") && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  if(!(car == "loadInitialData" || car == "loadInitialData/") && compruebaApiKey(key)){
    for (var i = 0; i < Cities.length; i++){
      if(Cities[i].name == car||Cities[i].month == car||Cities[i].year == car||Cities[i].p == car||Cities[i].t == car||Cities[i].td == car){
        var recursos = Cities[i];
        Cities2.push(recursos);
        busqueda++;
      }
    }
  }

  if( from1 && compruebaApiKey(key)  && to1){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year >= from1 && Cities[i].year <= to1 && Cities[i].name == car){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( from1 && !compruebaApiKey(key)  && to1){
    res.sendStatus(401);
  }


  if(year && compruebaApiKey(key)  && !month && !p && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year == year){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(year && !compruebaApiKey(key) && !month && !p && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda month
  if(month && compruebaApiKey(key) && !year && !p && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].month == month){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(month && !compruebaApiKey(key)&& !year && !p && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda p
  if(p && compruebaApiKey(key)&& !year && !month && !t && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].p == p){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(p && !compruebaApiKey(key) && !year && !month && !t && !td){
    res.sendStatus(401);
  }
  //Busqueda t
  if( t && compruebaApiKey(key) && !year && !month && !p && !td){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].t == t){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(t && !compruebaApiKey(key)&& !year && !month && !p && !td){
    res.sendStatus(401);
  }
  //Busqueda td
  if( td && compruebaApiKey(key)&& !year && !month && !t && !p){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].td == td){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(td && !compruebaApiKey(key)&& !year && !month && !t && !p){
    res.sendStatus(401);
  }

  //Busqueda month&year
  if(month && year&& compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].month == month && Cities[i].year == year){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(month && year&& !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda p&month
  if( p && month && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].p == p && Cities[i].month == month){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(p && month && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda year&p
  if(year && p && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year == year && Cities[i].p == p){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if(year && p && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda year&t
  if(year && t && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year == year && Cities[i].t == t){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( year && t && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda month&p
  if( month && t && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].month == month && Cities[i].t == t){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( month && t && !compruebaApiKey(key)){
    res.sendStatus(401);
  }

  //Busqueda month&td
  if( month && td && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].month == month && Cities[i].td == td){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( month && td && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda year&td
  if(year && td && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].year == year && Cities[i].td == td){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( year && td && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda p&t
  if(p && t && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].p == p && Cities[i].t == t){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( p && t && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda p&td
  if(p && td && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].p == p && Cities[i].td == td){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( p && td && !compruebaApiKey(key)){
    res.sendStatus(401);
  }
  //Busqueda t&td
  if(t && td && compruebaApiKey(key)){
    for (var i=0; i<Cities.length; i++){
      if(Cities[i].t == t && Cities[i].td == td){
        var recurso = Cities[i];
        Cities3.push(recurso);
      }
    }
    busqueda1++;
    busqueda++;
  }
  if( t && td && !compruebaApiKey(key)){
    res.sendStatus(401);
  }

  if(busqueda==0){
    res.sendStatus(404);
  }
  if(busqueda2==1){
    res.send(Cities);
  }
  if(busqueda1==0){
    res.send(Cities2);
  }else{
    res.send(Cities3);
  }


}

module.exports.getCityYear = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
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
  }else{
    res.sendStatus(401);
  }
}

module.exports.postCity = function (req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    res.sendStatus(405);
  }else{
    res.sendStatus(401);
  }
}
module.exports.putCity = function  (req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var nuevo = req.body;
    if(compruebaJSON(nuevo)){
      var car = req.params.name;
      var estado=404;
      var busqueda=0;
      for (var i=0; i < Cities.length;i++){
        if(Cities[i].name == car){
          busqueda++;
        }
      }
      if(busqueda > 1){
        res.sendStatus(409);
      }
      if(busqueda == 0){
        res.sendStatus(404);
      }
      if(car!= nuevo.name){
        res.sendStatus(400);
      }else{
        for (var i=0; i < Cities.length;i++){
          if(Cities[i].name == car){
            Cities.splice(i, 1);
            Cities.push(nuevo);
            estado=200;
            break;
          }
        }
      }
      res.sendStatus(estado);
    }else{
    res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.putCityYear = function  (req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var nuevo = req.body;
    if(compruebaJSON(nuevo)){
      var car = req.params.name;
      var year = req.params.year;
      var estado=404;
      var busqueda=0;
      for (var i=0; i < Cities.length;i++){
        if(Cities[i].name == car&&Cities[i].year == year){
          busqueda++;
        }
      }
      if(busqueda > 1){
        res.sendStatus(409);
      }
      if(busqueda == 0){
        res.sendStatus(404);
      }
      if(car!= nuevo.name){
        res.sendStatus(400);
      }else{
        for (var i=0; i < Cities.length;i++){
          if(Cities[i].name == car&&Cities[i].year == year){
            Cities.splice(i, 1);
            Cities.push(nuevo);
            estado=200;
            break;
          }
        }
      }
      res.sendStatus(estado);
    }else{
    res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.deleteCity = function(req, res){
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var car = req.params.name;
    var estado=404;
    for (var i=0; i<Cities.length;i++){
      if(Cities[i].name == car){
        Cities.splice(i, 1);
        estado=200;
      }
    }
    res.sendStatus(estado);
  }else{
    res.sendStatus(401);
  }
}

function compruebaApiKey(key){
  var res = false;
  if(key == "sos"){
    res = true;
  }
  return res;
}

function compruebaJSON(body){
  var res = false;
  if(body.name && body.year && body.month && body.p && body.t && body.td){
    res = true;;
  }
  return res;
}
