var f = [];
var sel = new Set();
var first = true;

function peticion(selected, url, method, json){
  var request = $.ajax({
          url: url,
          type: method,
          data: json,
          contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    console.log(method);
    console.log(data);
    console.log(status);
    console.log(jqXHR);
    if (method == "GET") {
      if(data == "Created"){
        console.log("ok");
      }else{
        printData(selected, data);
      }
    }else if("POST"){
    //  printData(selected, data);
    }else if("PUT"){

    }else{

    }
  });

  request.always(function(jqXHR, status) {
    console.log(method);
    console.log(status);
    console.log(jqXHR);
    if (method == "GET") {
      if(data == "Created"){
        console.log("ok");
      }else{
        
      }
    }else if("POST"){
    //  printData(selected, data);
    }else if("PUT"){

    }else{

    }
  });
};

function printData(selected, data){
  f = [];
  var s = new Set();
  var select = ""
  var table = "<div id='cc'><form><tr class='text-center'><div id='se'><td><strong>Selection</strong></td></div><div id='et'><td><strong>river_basin</strong></td></div><div id='et'><td><strong>year</strong></td></div><div id='et'><td><strong>month</strong></td></div><div id='et'><td><strong>pm</strong></td></div><div id='et'><td><strong>pe</strong></td></div><div id='et'><td><strong>pa</strong></td></div><div id='et'><td><strong>Actions</strong></td></div></tr></div>";
  $.each(data, function (i, item) {
      table += "<tr id ='l' class='text-center'><div class='checkbox'><td><input type='checkbox'></td></div>";
      table += "<div id='et'><td>" + data[i].river_basin + "</td></div>";
      table += "<div id='et'><td>" + data[i].year + "</td></div><div id='et'><td>" + data[i].month + "</td></div>";
      table += "<div id='et'><td>" + data[i].pm + "</td></div><div id='et'><td>" + data[i].pe + "</td></div>";
      table += "<div id='et'><td>" + data[i].pa + "</td></div>";
      table += "<div id='et'><td><img id='edit" + i + "' src='edit.png'><img id='delete" + i + "' src='delete.png'></td></div></tr></from>";
      f.push(data[i]);
      s.add(data[i].river_basin);

  });

  if(sel.size == 0){
    sel = s;
    select += "<option selected>All</option>";
    s.forEach(function (item) {
      select += "<option>" + item + "</option>";
    });
  }else{
    if(selected == "All"){
      select += "<option selected>All</option>";
    }else{
      select += "<option>All</option>";
    }

    sel.forEach(function (item) {
      if(selected == item){
        select += "<option selected>" + item + "</option>";
      }else{
        select += "<option>" + item + "</option>";
      }
    });
  }

  if(first){
    first = false;
    select = "<option selected>All</option>";
    $('#select').html(select);
  }else{
    $('#select').html(select);
    $('#table').html(table);
  }
}

function addBusq(){
  var busq = "";

  if($("#from").val() != ""){
    busq += "&from=" + $("#from").val();
  }
  if($("#to").val() != ""){
    busq += "&to=" + $("#to").val();
  }
  if($("#limit").val() != ""){
    busq += "&limit=" + $("#limit").val();
  }
  if($("#offset").val() != ""){
    busq += "&offset=" + $("#offset").val();
  }

  return busq;
}

function addUrl(){
  var url = "";

  if($("#select").val() != "" && $("#select").val() != "All"){
    url += $("#select").val() + "/";
  }

  if($("#year").val() != ""){
    url += $("#year").val() + "/";
  }

  if($("#month").val() != ""){
    url += $("#month").val() + "/";
  }

  return url;
}

function addApiKey(){
  var apikey = "";
  apikey += $("#apikey").val();

  return apikey;
}

function clear(){
  $("#select").val("All");
  $("#year").val("");
  $("#from").val("");
  $("#to").val("");
  $("#limit").val("");
  $("#offset").val("");
}

function loadForm(){

  var form = "";
  var btn = "";

  form += "<div class='form-group>";
  form += "<input class='form-control/>"; // No sé porque se lo come :/
  form += "<input id='c_river_basin' class='form-control' type='text' placeholder='River Basin'/></br>";
  form += "<input id='c_month' class='form-control' type='text' placeholder='month'/></br>";
  form += "<input id='c_year' class='form-control' type='number' placeholder='year'/></br>";
  form += "<input id='c_pm' class='form-control' type='number' placeholder='pm'/></br>";
  form += "<input id='c_pe' class='form-control' type='number' placeholder='pe'/></br>";
  form += "<input id='c_pa' class='form-control' type='number' placeholder='pa'/>";
  form += "</div>";
  form += "</br></br>"
  btn += "<div><button type='button' id='cancel' class='btn btn-danger'>Cancel</button>";
  btn += "<button type='button' id='create' class='btn btn-success'>Create</button></div>";

  $('#form').html(form);
  $('#btn1').html(btn);
}

function eliminaForm(){
  $('#form').html("");
  $('#btn1').html("btn");
}

function createData(selected){
  var river_basin = "";
  var month = "";
  var year = "";
  var pm = "";
  var pe = "";
  var pa = "";
  var json = "";

  river_basin = $("#c_river_basin").val();
  month = $("#c_month").val();
  year = $("#c_year").val();
  pm = $("#c_pm").val();
  pe = $("#c_pe").val();
  pa = $("#c_pa").val();

  if(river_basin != "" && month != "" && year != "" && pm != "" && pe != "" && pa != ""){
    json = '{"river_basin": "' + river_basin + '", "month": "' + month + '", "year": ' + year + ', "pm": ' + pm + ', "pe": ' + pe + ', "pa": ' + pa + '}';
    postRutaBase(selected, json);
  }else{
    $('#error1 h3').html("ERROR");
    $('#error1 h4').html("Rellene todos los campos");

    if(river_basin == ""){
      $('#c_river_basin').css("border-color","#FF8989");
    }
    if(month == ""){
      $('#c_month').css("border-color","#FF8989");
    }
    if(year == ""){
      $('#c_year').css("border-color","#FF8989");
    }
    if(pm == ""){
      $('#c_pm').css("border-color","#FF8989");
    }
    if(pe == ""){
      $('#c_pe').css("border-color","#FF8989");
    }
    if(pa == ""){
      $('#c_pa').css("border-color","#FF8989");
    }
  }
}

function getData(){
  return f;
}

//------------------------------------------------------------------------------

function getRutaBase(selected, url, apikey, busq){
  peticion(selected, "/api/v1/average-rainfall/" + url + "?apikey=" + apikey + busq,"GET", "");
}

function postRutaBase(selected, apikey, json){
  peticion(selected, "/api/v1/average-rainfall/?apikey=" + apikey,"POST", json);
}

function putRutaBase(){
  // NO PERMITIDO
}

function deleteRutaBase(selected, apikey){

  peticion(selected, "/api/v1/average-rainfall/?apikey=" + apikey,"DELETE", "");

  getRutaBase("", "", "");
}

















function d(){

  var request = $.ajax({
          url: "/api/v1/average-rainfall/?apikey=sos",
          type: "GET"
  });

  request.done(function(data,status,jqXHR) {
    var table = "<tr  class='text-center'><div id='et'><td><strong>river_basin</strong></td></div><div id='et'><td><strong>year</strong></td></div><div id='et'><td><strong>month</strong></td></div><div id='et'><td><strong>pm</strong></td></div><div id='et'><td><strong>pe</strong></td></div><div id='et'><td><strong>pa</strong></td></div><div id='et'><td><strong>Actions</strong></td></div></tr>";
    $.each(data, function (i, item) {
        table += "<div id='t'><tr class='text-center'><div id='et'><td>" + data[i].river_basin + "</td></div><div id='et'><td>" + data[i].year + "</td></div><div id='et'><td>" + data[i].month + "</td></div><div id='et'><td>" + data[i].pm + "</td></div><div id='et'><td>" + data[i].pe + "</td></div><div id='et'><td>" + data[i].pa + "</td></div><div id='et'><td><img src='edit.png' id='img'><img src='delete.png'  id='img'></td></div></tr></div>";
    });

    $('#table').html(table);
  });

  request.always(function(jqXHR, status) {

  });
}
