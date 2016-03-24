// SANDBOX

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
  res.send(Basins);
}

module.exports.postBasins = (req, res) => {
  var plb = req.body;
  Basins.push(plb);
  res.sendStatus(200);
}

module.exports.putBasins = (req, res) => {
  res.sendStatus(405);
}

module.exports.deleteBasins = (req, res) => {
  Basins = [];
  res.sendStatus(200);
}


module.exports.getBasin = (req, res) => {
  var pl = req.params.river_basin;
  var mes = 404;
  for(var i = 0; i < Basins.length; i++){
    if(Basins[i].river_basin == pl){
      mes = Basins[i];
      break;
    }
  }
  if(mes == 404){
    res.sendStatus(mes);
  }else{
    res.send(mes);
  }
}

module.exports.postBasin = (req, res) => {
  res.sendStatus(405);
}

module.exports.putBasin = (req, res) => {
  var pl = req.params.river_basin;
  var plb = req.body;
  var mes = 404;
  for(var i = 0; i < Basins.length; i++){
    if(Basins[i].river_basin == pl){
      Basins.splice(i, 1);
      Basins.push(plb);
      mes = 200;
      break;
    }
  }
  res.sendStatus(mes);
}

module.exports.deleteBasin = (req, res) => {
  var pl = req.params.river_basin;
  var mes = 404;
  for(var i = 0; i < Basins.length; i++){
    if(Basins[i].river_basin == pl){
      Basins.splice(i, 1);
      mes = 200;
      break;
    }
  }
  res.sendStatus(mes);
}

module.exports.loadInitialDataV1 = (req, res) => {
  Basins = [
    {"river_basin": "Duero", "month": "Enero", "year": 2015, "p.m.": 56, "p.e.": 40.9, "p.a.": 301.9},
    {"river_basin": "Tajo", "month": "Enero", "year": 2015, "p.m.": 60, "p.e.": 36.3, "p.a.": 345.6},
    {"river_basin": "Guadiana", "month": "Enero", "year": 2015, "p.m.": 57, "p.e.": 34.2, "p.a.": 302.8}
  ];
  res.sendStatus(200);
}
