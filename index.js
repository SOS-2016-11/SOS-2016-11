var express = require("express");
var fs = require("fs");

var port = (process.env.PORT || 16000);

var app = express();
app.use("/", express.static(__dirname + "/static"));

/*app.get("/",(req,res) =>{
  var html = "";
  fs.readFile("index.html", "utf8",(err, content) => {
    res.write(content);
    res.end();
  });
});*/

app.listen(port);
