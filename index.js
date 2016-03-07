var express = require("express");
var fs = require("fs");

var port = (process.env.PORT || 16000);

var app = express();
app.use("/", express.static(__dirname + "/static"));

app.get("/time", (req,res)=>{
  days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var now = new Date();
  var d = now.getDay();
  day = days[d];
  var hour = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  res.send("Today is  " + day + ", and are " + hour + ":" + minutes + ":" + seconds);
});

app.listen(port);
