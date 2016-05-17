function generaJSON(){
  var json="";
  var apikey = $("#apikey").val();
  var prueba='{"name": "Sevilla","month": "Enero","year": 2015,"p": 879,"t": 9.8,"td": 3.1}';
  var meta = JSON.parse(prueba);

  var nombre2 = $("#nombre2").val();
  var mes = $("#mes").val();
  var year = $("#year").val();
  var pression = $("#pression").val();
  var temperature= $("#temperature").val();
  var td = $("#td").val();

  meta["name"] = nombre2;
  meta["month"] = mes;
  meta["year"] = year;
  meta["p"] = pression;
  meta["t"] = temperature;
  meta["td"] = td;

  var json = JSON.stringify(meta);
  return json;
}

function generaNombre(){
  var nombre2 = $("#nombre2").val();
  return nombre2;
}

function addUrl(){
  var url = "";
  var limit = $("#limit").val();
  var offset = $("#offset").val();
  var search1 = $("#search1").val();
  var method = $("input[type=radio]:checked").attr("id");
  var apikey = $("#apikey").val();

  if( method != ""){
    url += method+search1;
  }

  if(limit != "" ){
    url += "&limit="+limit+"&offset="+offset;
  }
  return url;
}

function addBusq(){
  var busq = "";
  var nombre3 = $("#nombre3").val();
  var apikey = $("#apikey").val();
  var frm = $("#from").val();
  var to1 = $("#to").val();

  if( nombre3 != ""){
    busq +="/"+ nombre3 ;
  }
  if(frm != "" && to1 != ""){
    busq +="?from="+frm+"&to="+to1;
  }
  return busq;
}

function addApiKey(){
  var apikey = "";
  apikey += $("#apikey").val();

  return apikey;
}

function peticion( url, method, json){
console.log(url);
  var request = $.ajax({
          url: url,
          type: method,
          data: json,
          contentType: "application/json"
  });

  request.done(function(data,status,jqXHR) {
    if (method == "GET") {
      printData( data);
    }
    if (method == "POST" || method == "PUT"){
      $("#data").text(JSON.stringify(data));
    }
  });

  request.always(function(jqXHR, status) {
    if(jqXHR.status == 401){
      $("#log1").html("You can not use an invalid apikey");
    }else{
      $("#log1").html("");
    }
    if(jqXHR.status == 409){
      $("#log1").html("You can add a resourc wich already exists");
    }else{
      $("#log1").html("");
    }
    if(jqXHR.status == 429 || jqXHR.status == 402){
      $('#portal25').html("<a href='http://portal.governify.io/app/#/portal?configurl=http:%2F%2Flabs.isa.us.es%2Fir%2Fpedroganga99%2FGovernify-API%2FPlans%2Fportal-config.json' target='_blank'>Go to Portal</a>");
    }
  });
};


function printData( data){
  var location = "";
  $.each(data, function (i, item) {
    location += "<tr class='text-center'><div class='checkbox'><td id='td2'><input id='checkbox" + i + "' type='checkbox'></td></div>"+"<td id='td1'>"+ data[i].name + "</td><td id='td2'>" + data[i].month +"</td><td id='td1'>"+ data[i].year + "</td><td id='td2'>" + data[i].p + "</td><td id='td1'>"+ data[i].t +  "</td><td id='td2'>"+ data[i].td + '</td></tr>';
  });
  $('#location').html(location);
}

function getRutaBase(url , apikey){
  peticion( "/api/v1/pressure-and-temperatures?apikey=" + apikey , "GET", "");
}

function getRecurso( url, apikey ){
  var url1= addUrl();
  peticion("/api/v1/pressure-and-temperatures?" + url1 + "&apikey=" + apikey , "GET", "");
}

function getRecursosFromTo( url, apikey ){
  var url2= addBusq();
  peticion("/api/v1/pressure-and-temperatures" + url2 + "&apikey=" + apikey , "GET", "");
}

function getLoadInitialData(url , apikey){
  peticion( "/api/v1/pressure-and-temperatures/loadInitialData?apikey=" + apikey , "GET", "");
}

function postRutaBase (url , apikey){
  var json1 = generaJSON();
  peticion( "/api/v1/pressure-and-temperatures?apikey=" + apikey , "POST", json1 );
}

function putRutaBase (url , apikey){
  var json3 = generaJSON();
  var nom1 = generaNombre();
  peticion( "/api/v1/pressure-and-temperatures/"+ nom1 +"?apikey=" + apikey , "PUT", json3 );
}
