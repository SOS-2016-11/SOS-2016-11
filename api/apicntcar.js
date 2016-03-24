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

module.exports.loadInitialDataV1 = (req, res) => {
  programming_languages = [{"River_Basin": "asd"},
  {"River_Basin": "asd"},
  {"River_Basin": "asd"}];
  res.sendStatus(200);
}
