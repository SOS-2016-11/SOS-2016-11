var express = require("express");
var fs = require("fs");

var app = express();

app.get("/",(req,res) =>{
  var html = "";
  fs.readFile("index.html", "utf8",(err, content) => {
    res.write(content);
    res.end();
  });
});

app.get("/about/",(req,res) =>{
  var html = "";
  fs.readFile("about.html", "utf8",(err, content) => {
    res.write(content);
    res.end();
  });



/*  res.write("<html><body>__________Group Members:_________<ul>");
  res.write("</ul>Our sources of information are aimed at analyzing the relationship between the different principles rainfall in Spanish basins <ul>");
  res.write("</ul>and Aerology of the main Spanish cities analyzed monthly, in 2015. </body></html>");
  res.end();*/
});

app.get("/about/average-rainfall/",(req,res) =>{
  var html = "";
  fs.readFile("average-rainfall.html", "utf8",(err, content) => {
    res.write(content);
    res.end();
  });




/*res.write("<html><body>__________________________Presentation Data Source:__________________________<ul>");
res.write("</ul>_______River_Basin______Month______Year_____Rainfall____Estimated_Rainfall____Cumulative_Rainfall______<ul>");
res.write("</ul>_________Duero__________Enero______2015________56______________40,9____________________301,9___________<ul>");
res.write("</ul>__________Tajo__________Enero______2015________60______________36,3____________________345,6___________<ul>");
res.write("</ul>________Guadiana________Enero______2015________57______________34,2____________________302,8___________</body></html>");
res.end();*/
});

app.get("/about/pressure-and-temperature/",(req,res) =>{
  var html = "";
  fs.readFile("pressure-and-temperature.html", "utf8",(err, content) => {
    res.write(content);
    res.end();
  });





/*res.write("<html><body>__________________________Presentation Data Source:__________________________<ul>");
res.write("</ul>_______City______Month______Year_____Pressure____Temperature____Frosts______<ul>");
res.write("</ul>____A_Coruna_____Enero______2015______1018__________10,9__________7,2______<ul>");
res.write("</ul>___Santander_____Enero______2015______1019__________10,6__________6,6______<ul>");
res.write("</ul>______Madrid_____Enero______2015_______951___________6,0_________-0,9______</body></html>");
res.end();*/
});

app.listen(16000/*process.env.PORT*/);
