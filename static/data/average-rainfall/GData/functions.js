var f = [];
var sel = new Set();
var first = true;

function peticion(selected, url, method, json){
  $('#error h3').html("");
  $('#error h4').html("");
  $('#apikey').css("border-color","#ccc");
  var request = $.ajax({
          url: url,
          type: method,
          data: json,
          contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    if (method == "GET") {
      if(data == "Created"){
      }else{
        printData(selected, data);
      }
    }else if("POST"){
      $('#form').html("");
      $('#btn1').html("");
    }else if("PUT"){

    }else{

    }
  });

  request.always(function(jqXHR, status) {
    if(jqXHR.status == 401){
      $('#error h3').html("ERROR");
      $('#error h4').html("wrong apikey");
      $('#apikey').css("border-color","#FF8989");
    }else if(jqXHR.status == 409 && method == "POST"){
      $('#error1 h3').html("ERROR");
      $('#error1 h4').html("data already exist");
    }else if(jqXHR.status == 409 && method == "PUT"){
      $('#error1 h3').html("ERROR");
      $('#error1 h4').html("Multiple data");
    }else if(jqXHR.status == 400 && method == "PUT"){
      $('#error1 h3').html("ERROR");
      $('#error1 h4').html("Bad data");
    }
  });
};

function printData(selected, data){
  f = [];
  var s = new Set();
  var select = ""
  var table = "<form><tr class='text-center'><td><strong>Selection</strong></td><td><strong>river_basin</strong></td><td><strong>year</strong></td><td><strong>month</strong></td><td><strong>pm</strong></td><td><strong>pe</strong></td><td><strong>pa</strong></td></tr>";
  $.each(data, function (i, item) {
      table += "<tr class='text-center'><div class='checkbox'><td><input id='checkbox" + i + "' type='checkbox'></td></div>";
      table += "<td>" + data[i].river_basin + "</td>";
      table += "<td>" + data[i].year + "</td><td>" + data[i].month + "</td>";
      table += "<td>" + data[i].pm + "</td><td>" + data[i].pe + "</td>";
      table += "<td>" + data[i].pa + "</td>";
      table += "</tr></from>";
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
  $("#apikey").val("");
}

function loadForm(data){

  if(data == ""){
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
  }else{
    var form = "";
    var btn = "";
    $('#form').html("");
    $('#btn1').html("");

    form += "<div class='form-group>";
    form += "<input class='form-control/>"; // No sé porque se lo come :/
    form += "<input id='c_river_basin' class='form-control' value='" + data.river_basin + "' type='text' placeholder='River Basin' disabled/></br>";
    form += "<input id='c_month' class='form-control' value='" + data.month + "' type='text' placeholder='month'/></br>";
    form += "<input id='c_year' class='form-control' value='" + data.year + "' type='number' placeholder='year'/></br>";
    form += "<input id='c_pm' class='form-control' value='" + data.pm + "' type='number' placeholder='pm'/></br>";
    form += "<input id='c_pe' class='form-control' value='" + data.pe + "' type='number' placeholder='pe'/></br>";
    form += "<input id='c_pa' class='form-control' value='" + data.pa + "' type='number' placeholder='pa'/>";
    form += "</div>";
    form += "</br></br>"
    btn += "<div><button type='button' id='cancel' class='btn btn-danger'>Cancel</button>";
    btn += "<button type='button' id='edited' class='btn btn-success'>Edit</button></div>";

    $('#form').html(form);
    $('#btn1').html(btn);
  }

}

function eliminaForm(){
  $('#form').html("");
  $('#btn1').html("btn");
}

function createData(selected, apikey){
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

  $('#c_river_basin').css("border-color","#ccc");
  $('#c_month').css("border-color","#ccc");
  $('#c_year').css("border-color","#ccc");
  $('#c_pm').css("border-color","#ccc");
  $('#c_pe').css("border-color","#ccc");
  $('#c_pa').css("border-color","#ccc");

  if(river_basin != "" && month != "" && year != "" && pm != "" && pe != "" && pa != ""){
    json = '{"river_basin": "' + river_basin + '", "month": "' + month + '", "year": ' + year + ', "pm": ' + pm + ', "pe": ' + pe + ', "pa": ' + pa + '}';
    postRutaBase(selected, apikey, json);

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

function editData(selected, data, apikey){
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

  $('#c_river_basin').css("border-color","#ccc");
  $('#c_month').css("border-color","#ccc");
  $('#c_year').css("border-color","#ccc");
  $('#c_pm').css("border-color","#ccc");
  $('#c_pe').css("border-color","#ccc");
  $('#c_pa').css("border-color","#ccc");

  if(river_basin != "" && month != "" && year != "" && pm != "" && pe != "" && pa != ""){
    json = '{"river_basin":"' + river_basin + '","month":"' + month + '","year":' + year + ',"pm":' + pm + ',"pe":' + pe + ',"pa":' + pa + '}';
    putRecurso(selected, data[0].river_basin, apikey, json);

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
  peticion(selected, "/api/v1/average-rainfall/" + url + "?apikey=" + apikey + busq, "GET", "");
}

function postRutaBase(selected, apikey, json){
  peticion(selected, "/api/v1/average-rainfall/?apikey=" + apikey, "POST", json);
}

function putRutaBase(){
  // NO PERMITIDO
}

function deleteRutaBase(selected, apikey){
  peticion(selected, "/api/v1/average-rainfall/?apikey=" + apikey, "DELETE", "");
  getRutaBase("", "", apikey, "");
}


function getRecurso(selected, url, apikey, busq){
  // Hecho en Recurso base
}

function postRecurso(){
  // NO PERMITIDO
}

function putRecurso(selected, url, apikey, json){
  peticion(selected, "/api/v1/average-rainfall/" + url + "?apikey=" + apikey, "PUT", json);
}

function deleteRecurso(selected, data, apikey){
  $.each(data, function (i, item) {
    peticion(selected, "/api/v1/average-rainfall/" + item.river_basin + "?apikey=" + apikey, "DELETE", "");
  });
}
