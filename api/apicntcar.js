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
  var limit = req.query.limit;
  var offset = req.query.offset;
  var month = req.query.month;
  var year = req.query.year;
/*  var pm = req.query.pm;
  var pe = req.query.pe;
  var pa = req.query.pa;*/
  if(month || year /*|| pm || pe || pa*/){
    var BasinsSeg = [];
    for (var i = 0; i < Basins.length; i++) {
      if(month){
        if(Basins[i].month == month){
          if(year){
            if (Basins[i].year == year){
              BasinsSeg.push(Basins[i]);
            }
          }else{
            BasinsSeg.push(Basins[i]);
          }
        }
      }else if(year){
        if(Basins[i].year == year){
              BasinsSeg.push(Basins[i]);
        }
      }
    }

    res.send(BasinsSeg);
  }else{
    res.send(Basins);
  }
}

module.exports.postBasins = (req, res) => {
  var basinb = req.body;
  Basins.push(basinb);
  res.sendStatus(201);
}

module.exports.putBasins = (req, res) => {
  res.sendStatus(405);
}

module.exports.deleteBasins = (req, res) => {
  Basins = [];
  res.sendStatus(200);
}


module.exports.getBasin = (req, res) => {
  var basin = req.params.river_basin;
  if(basin == "loadInitialData"){
    Basins = [
      {"river_basin": "Duero", "month": "January", "year": 2015, "p.m.": 56, "p.e.": 40.9, "p.a.": 301.9},
      {"river_basin": "Tajo", "month": "January", "year": 2015, "p.m.": 60, "p.e.": 36.3, "p.a.": 345.6},
      {"river_basin": "Guadiana", "month": "January", "year": 2015, "p.m.": 57, "p.e.": 34.2, "p.a.": 302.8},
      {"river_basin": "Guadalquivir", "month": "January", "year": 2015, "p.m.": 68, "p.e.": 55.2, "p.a.": 331.2},
      {"river_basin": "Ebro", "month": "January", "year": 2015, "p.m.": 44, "p.e.": 48.8, "p.a.": 306.9},

      {"river_basin": "Duero", "month": "January", "year": 2014, "p.m.": 56, "p.e.": 40.9, "p.a.": 301.9},
      {"river_basin": "Tajo", "month": "January", "year": 2014, "p.m.": 60, "p.e.": 36.3, "p.a.": 345.6},
      {"river_basin": "Guadiana", "month": "January", "year": 2014, "p.m.": 57, "p.e.": 34.2, "p.a.": 302.8},
      {"river_basin": "Guadalquivir", "month": "January", "year": 2014, "p.m.": 68, "p.e.": 55.2, "p.a.": 331.2},
      {"river_basin": "Ebro", "month": "January", "year": 2014, "p.m.": 44, "p.e.": 48.8, "p.a.": 306.9},

      {"river_basin": "Duero", "month": "January", "year": 2013, "p.m.": 56, "p.e.": 40.9, "p.a.": 301.9},
      {"river_basin": "Tajo", "month": "January", "year": 2013, "p.m.": 60, "p.e.": 36.3, "p.a.": 345.6},
      {"river_basin": "Guadiana", "month": "January", "year": 2013, "p.m.": 57, "p.e.": 34.2, "p.a.": 302.8},
      {"river_basin": "Guadalquivir", "month": "January", "year": 2013, "p.m.": 68, "p.e.": 55.2, "p.a.": 331.2},
      {"river_basin": "Ebro", "month": "January", "year": 2013, "p.m.": 44, "p.e.": 48.8, "p.a.": 306.9}
    ];
    res.sendStatus(200);
  }else{
    var cod = 404;
    var limit = req.query.limit;
    var offset = req.query.offset;
    var month = req.query.month;
    var year = req.query.year;
    var BasinsSeg = [];
    for(var i = 0; i < Basins.length; i++){
      if(Basins[i].river_basin == basin){
        if(month){
          if(Basins[i].month == month){
            if(year){
              if (Basins[i].year == year){
                BasinsSeg.push(Basins[i]);
              }
            }else{
              BasinsSeg.push(Basins[i]);
            }
          }
        }else if(year){
          if(Basins[i].year == year){
                BasinsSeg.push(Basins[i]);
          }
        }else{
          BasinsSeg.push(Basins[i]);
        }
      }
    }
    if(BasinsSeg.length == 0){
      res.sendStatus(cod);
    }else{
      res.send(BasinsSeg);
    }
  }
}

module.exports.postBasin = (req, res) => {
  res.sendStatus(405);
}

module.exports.putBasin = (req, res) => {
  var basin = req.params.river_basin;
  var basinb = req.body;
  var cod = 404;
  for(var i = 0; i < Basins.length; i++){
    if(Basins[i].river_basin == basin){
      Basins.splice(i, 1);
      Basins.push(basinb);
      cod = 200;
      break;
    }
  }
  res.sendStatus(cod);
}

module.exports.deleteBasin = (req, res) => {
  var basin = req.params.river_basin;
  var cod = 404;
  for(var i = 0; i < Basins.length; i++){
    if(Basins[i].river_basin == pl){
      Basins.splice(i, 1);
      cod = 200;
      break;
    }
  }
  res.sendStatus(cod);
}

/*module.exports.loadInitialDataV1 = (req, res) => {

}*/
