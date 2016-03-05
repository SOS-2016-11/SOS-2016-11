var express = require("express");
var fs = require("fs");

var port = (process.env.PORT || 16000);

var app = express();
app.use("/", express.static(__dirname + "/static"));

app.get("/time", (req,res)=>{
  var now = new Date();
  res.send("It is:  "+now);
});

app.listen(port);
