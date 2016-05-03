// SANDBOX ---------------------------------------------------------------------

var programming_languages = [];

module.exports.getPLs = (req, res) => {
  res.send(programming_languages);
}

module.exports.postPLs = (req, res) => {
  var plb = req.body;
  programming_languages.push(plb);
  res.sendStatus(200);
}

module.exports.putPLs = (req, res) => {
  res.sendStatus(405);
}

module.exports.deletePLs = (req, res) => {
  programming_languages = [];
  res.sendStatus(200);
}


module.exports.getPL = (req, res) => {
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
}

module.exports.postPL = (req, res) => {
  res.sendStatus(405);
}

module.exports.putPL = (req, res) => {
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
}

module.exports.deletePL = (req, res) => {
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
}

module.exports.loadInitialData = (req, res) => {
  programming_languages = [{"name": "Python"},{"name": "C++"},{"name": "Perl"}];
  res.sendStatus(200);
}

// V1 --------------------------------------------------------------------------

var Basins = [];

module.exports.getBasins = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var limit = req.query.limit;
    var offset = req.query.offset;
    var frm = req.query.from;
    var to = req.query.to;
    var month = req.query.month;
    var year = req.query.year;
    var pm = req.query.pm;
    var pe = req.query.pe;
    var pa = req.query.pa;
    var dat = [0,0,0,0,0,0,0,0,0];
    var BasinsSeg = [];
    var BasinsSeg2 = [];
    var BasinsSeg3 = [];

    if(limit){
      dat[0] = limit;
    }
    if(offset){
      dat[1] = offset;
    }
    if(frm){
      dat[2] = frm;
    }
    if(to){
      dat[3] = to;
    }
    if(month){
      dat[4] = month;
    }
    if(year){
      dat[5] = year;
    }
    if(pm){
      dat[6] = pm;
    }
    if(pe){
      dat[7] = pe;
    }
    if(pa){
      dat[8] = pa;
    }

    BasinsSeg = searchs(dat,Basins);
    BasinsSeg2 = pagination(dat,BasinsSeg);
    if(BasinsSeg2 == 400){
      res.sendStatus(BasinsSeg2);
    }else{
      BasinsSeg3 = field(dat,BasinsSeg2);
      res.send(BasinsSeg3);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.postBasins = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basinb = req.body;
    if(compruebaJSON(basinb)){
      var cont = 0;
      for(var i = 0; i < Basins.length; i++){
        if(Basins[i].river_basin == basinb.river_basin && Basins[i].year == basinb.year && Basins[i].month == basinb.month){
          cont++;
          break;
        }
      }
      if(cont > 0){
        res.sendStatus(409);
      }else{
        Basins.push(basinb);
        res.sendStatus(201);
      }
    }else{
      res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.putBasins = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    res.sendStatus(405);
  }else{
    res.sendStatus(401);
  }
}

module.exports.deleteBasins = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    Basins = [];
    res.sendStatus(200);
  }else{
    res.sendStatus(401);
  }
}


module.exports.getBasin = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var dat = req.params.dat;
    // CARGA DE DATOS INICIAL
    if(dat == "loadInitialData"){
      Basins = [
        {"river_basin": "Duero", "month": "January", "year": 2015, "pm": 56, "pe": 40.9, "pa": 301.9},
        {"river_basin": "Tajo", "month": "June", "year": 2015, "pm": 60, "pe": 36.3, "pa": 345.6},
        {"river_basin": "Guadiana", "month": "January", "year": 2015, "pm": 57, "pe": 34.2, "pa": 302.8},
        {"river_basin": "Guadalquivir", "month": "January", "year": 2015, "pm": 68, "pe": 55.2, "pa": 331.2},
        {"river_basin": "Ebro", "month": "January", "year": 2015, "pm": 44, "pe": 48.8, "pa": 306.9},

        {"river_basin": "Duero", "month": "January", "year": 2014, "pm": 56, "pe": 40.9, "pa": 301.9},
        {"river_basin": "Tajo", "month": "January", "year": 2014, "pm": 60, "pe": 36.3, "pa": 345.6},
        {"river_basin": "Guadiana", "month": "January", "year": 2014, "pm": 57, "pe": 34.2, "pa": 302.8},
        {"river_basin": "Guadalquivir", "month": "January", "year": 2014, "pm": 68, "pe": 55.2, "pa": 331.2},
        {"river_basin": "Ebro", "month": "June", "year": 2014, "pm": 44, "pe": 48.8, "pa": 306.9},

        {"river_basin": "Duero", "month": "January", "year": 2013, "pm": 56, "pe": 40.9, "pa": 301.9},
        {"river_basin": "Tajo", "month": "January", "year": 2013, "pm": 60, "pe": 36.3, "pa": 345.6},
        {"river_basin": "Guadiana", "month": "January", "year": 2013, "pm": 57, "pe": 34.2, "pa": 302.8},
        {"river_basin": "Guadalquivir", "month": "June", "year": 2013, "pm": 68, "pe": 55.2, "pa": 331.2},
        {"river_basin": "Ebro", "month": "J", "year": 2013, "pm": 44, "pe": 48.8, "pa": 306.9}
      ];
      res.sendStatus(201);
    }else{
      var cod = 404;
      var BasinsSeg = [];
      // BUSQUEDA EN /dato/
      for(var i = 0; i < Basins.length; i++){
        if(Basins[i].river_basin == dat || Basins[i].month == dat  || Basins[i].year == dat || Basins[i].pm == dat || Basins[i].pe == dat || Basins[i].pa == dat){
          BasinsSeg.push(Basins[i]);
        }
      }

      if(BasinsSeg.length == 0){
        res.sendStatus(cod);
      }else{
        var limit = req.query.limit;
        var offset = req.query.offset;
        var frm = req.query.from;
        var to = req.query.to;
        var month = req.query.month;
        var year = req.query.year;
        var pm = req.query.pm;
        var pe = req.query.pe;
        var pa = req.query.pa;
        var dat = [0,0,0,0,0,0,0,0,0];
        var BasinsSeg1 = [];
        var BasinsSeg2 = [];
        var BasinsSeg3 = [];

        if(limit){
          dat[0] = limit;
        }
        if(offset){
          dat[1] = offset;
        }
        if(frm){
          dat[2] = frm;
        }
        if(to){
          dat[3] = to;
        }
        if(month){
          dat[4] = month;
        }
        if(year){
          dat[5] = year;
        }
        if(pm){
          dat[6] = pm;
        }
        if(pe){
          dat[7] = pe;
        }
        if(pa){
          dat[8] = pa;
        }

        BasinsSeg1 = searchs(dat,BasinsSeg);
        BasinsSeg2 = pagination(dat,BasinsSeg1);
        if(BasinsSeg2 == 400){
          res.sendStatus(BasinsSeg2);
        }else{
          BasinsSeg3 = field(dat,BasinsSeg2);
          res.send(BasinsSeg3);
        }
      }
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.getBasinDat = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basin = req.params.river_basin;
    var dat = req.params.dat;
    var BasinsSeg = [];
    for(var i = 0; i < Basins.length; i++){
      if(Basins[i].river_basin == basin && (Basins[i].month == dat  || Basins[i].year == dat)){
        BasinsSeg.push(Basins[i]);
      }
    }
    res.send(BasinsSeg);
  }else{
    res.sendStatus(401);
  }
}

module.exports.getBasinDatDat = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basin = req.params.river_basin;
    var dat1 = req.params.dat1;
    var dat2 = req.params.dat2;
    var BasinsSeg = [];
    for(var i = 0; i < Basins.length; i++){
      if(Basins[i].river_basin == basin && (Basins[i].month == dat1  || Basins[i].year == dat1) && (Basins[i].month == dat2  || Basins[i].year == dat2)){
        BasinsSeg.push(Basins[i]);
      }
    }
    res.send(BasinsSeg);
  }else{
    res.sendStatus(401);
  }
}

module.exports.postBasin = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    res.sendStatus(405);
  }else{
    res.sendStatus(401);
  }
}

module.exports.putBasin = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basinb = req.body;
    if(compruebaJSON(basinb)){
      var basin = req.params.river_basin;
      var cod = 400;
      if(basin != basinb.river_basin){
        res.sendStatus(cod);
      }else{
        var cont = 0;
        for(var i = 0; i < Basins.length; i++){
          if(Basins[i].river_basin == basin){
            cont++;
          }
        }
        if(cont > 1){
          cod = 409;
        }else if(cont == 0){
          cod = 404;
        }else{
          for(var i = 0; i < Basins.length; i++){
            if(Basins[i].river_basin == basin){
              Basins.splice(i, 1);
              Basins.push(basinb);
              cod = 200;
              break;
            }
          }
        }
        res.sendStatus(cod);
      }
    }else{
      res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.putBasinDat = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basinb = req.body;
    if(compruebaJSON(basinb)){
      var basin = req.params.river_basin;
      var dat = req.params.dat;
      var BasinsSeg = [];
      for(var i = 0; i < Basins.length; i++){
        if(Basins[i].river_basin == basin && (Basins[i].month == dat  || Basins[i].year == dat  || Basins[i].pm == dat  || Basins[i].pe == dat  || Basins[i].pa == dat)){
          BasinsSeg.push(Basins[i]);
        }
      }
      if(BasinsSeg.length > 1){
        res.sendStatus(400);
      }else{
        for(var i = 0; i < Basins.length; i++){
          if(Basins[i].river_basin == basin && (Basins[i].month == dat  || Basins[i].year == dat  || Basins[i].pm == dat  || Basins[i].pe == dat  || Basins[i].pa == dat)){
            Basins.splice(i, 1);
            Basins.push(basinb);
            break;
          }
        }
        res.sendStatus(200);
      }
    }else{
      res.sendStatus(400);
    }
  }else{
    res.sendStatus(401);
  }
}

module.exports.deleteBasin = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basin = req.params.river_basin;
    var cod = 404;
    for(var i = 0; i < Basins.length; i++){
      if(Basins[i].river_basin == basin){
        Basins.splice(i, 1);
        cod = 200;
      }
    }
    res.sendStatus(cod);
  }else{
    res.sendStatus(401);
  }
}

module.exports.deleteBasinDat = (req, res) => {
  var key = req.query.apikey;
  if(compruebaApiKey(key)){
    var basin = req.params.river_basin;
    var dat = req.params.dat
    var cod = 404;
    for(var i = 0; i < Basins.length; i++){
      if(Basins[i].river_basin == basin && (Basins[i].year == dat || Basins[i].month == dat)){
        Basins.splice(i, 1);
        cod = 200;
      }
    }
    res.sendStatus(cod);
  }else{
    res.sendStatus(401);
  }
}

function searchs(dat,BasinsSeg){

  var BasinsSeg1 = [];
  var BasinsSeg2 = [];

  if(dat[2] || dat[3] || dat[4] || dat[5] || dat[6] || dat[7] || dat[8]){
    // COMPRUEBA/HACE FROM Y TO (YEAR)
    if(dat[2]){
      if(dat[3]){
        for (var i = 0; i < BasinsSeg.length; i++){
          if (BasinsSeg[i].year >= dat[2] && BasinsSeg[i].year <= dat[3]){
            BasinsSeg1.push(BasinsSeg[i]);
          }
        }
      }else{
        for (var i = 0; i < BasinsSeg.length; i++){
          if (BasinsSeg[i].year >= dat[2]){
            BasinsSeg1.push(BasinsSeg[i]);
          }
        }
      }
    }
    else if(dat[3]){
      for (var i = 0; i < BasinsSeg.length; i++){
        if (BasinsSeg[i].year <= dat[3]){
          BasinsSeg1.push(BasinsSeg[i]);
        }
      }
    }else{
      BasinsSeg1 = BasinsSeg;
    }

    // FILTRADO POR YEAR, MONTH, PM, PE, PA
    if(dat[4]){
      for (var i = 0; i < BasinsSeg1.length; i++){
        if (BasinsSeg1[i].month == dat[4]){
          BasinsSeg2.push(BasinsSeg1[i]);
        }
      }
    }else{
      BasinsSeg2 = BasinsSeg1;
    }
    if(dat[5]){
      BasinsSeg1 = [];
      for (var i = 0; i < BasinsSeg2.length; i++){
        if (BasinsSeg2[i].year == dat[5]){
          BasinsSeg1.push(BasinsSeg2[i]);
        }
      }
    }else{
      BasinsSeg1 = BasinsSeg2;
    }
    if(dat[6]){
      BasinsSeg2 = [];
      for (var i = 0; i < BasinsSeg1.length; i++){
        if (BasinsSeg1[i].pm == dat[6]){
          BasinsSeg2.push(BasinsSeg1[i]);
        }
      }
    }else{
      BasinsSeg2 = BasinsSeg1;
    }
    if(dat[7]){
      BasinsSeg1 = [];
      for (var i = 0; i < BasinsSeg2.length; i++){
        if (BasinsSeg2[i].pe == dat[7]){
          BasinsSeg1.push(BasinsSeg2[i]);
        }
      }
    }else{
      BasinsSeg1 = BasinsSeg2;
    }
    if(dat[8]){
      BasinsSeg2 = [];
      for (var i = 0; i < BasinsSeg1.length; i++){
        if (BasinsSeg1[i].pa == dat[8]){
          BasinsSeg2.push(BasinsSeg1[i]);
        }
      }
    }else{
      BasinsSeg2 = BasinsSeg1;
    }
  }else{
    BasinsSeg2 = BasinsSeg;
  }
  return BasinsSeg2;
}

// TRATAMIENTO LIMIT Y OFFSET
function pagination(dat,BasinsSeg){
  var BasinsSeg2 = [];
  var cont = 0;
  if(dat[0] || dat[1]){
      if(dat[0] < 0 || dat[1] > BasinsSeg.length){
      BasinsSeg2 = 400;
    }else if(dat[0] >= 0){
      for(var i = dat[1]; i < BasinsSeg.length; i++){
        BasinsSeg2.push(BasinsSeg[i]);
        cont++;
        if(cont == dat[0]){
          break;
        }
      }
    }
  }else{
    BasinsSeg2 = BasinsSeg;
  }
  return BasinsSeg2;
}

function field(dat,BasinsSeg){
  var BasinsSeg2 = [];
  return BasinsSeg;
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
  if(body.river_basin && body.year && body.month && body.pm && body.pe && body.pa){
    res = true;;
  }
  return res;
}
