/*//1
console.log("\n//1");
var name = "Carlos";
console.log("Hello! " + name + "!");


//2
console.log("\n//2");
var d = "";
var now = new Date();
var hour = now.getHours();
if (hour < 12){
  d = "Good morning ";
}else{
  d = "Good afternoon ";
}
console.log("Hello! " + d + name + "!");


//3
console.log("\n//3");
var contacts = ["Carlos", "Paco", "Pepe"];
console.log("-----Contacts-----");
for(i = 0; i < contacts.length; i++){
  console.log(" - " + contacts[i]);
}


//4
console.log("\n//4");
var contacts = [
  {name: "Carlos", phone: "12345"},
  {name: "Paco", phone: "12345"},
  {name: "Pepe", phone: "12345"}
];
console.log("-----Contacts-----");
for(i = 0; i < contacts.length; i++){
  var contact = contacts[i];
  console.log(" - " + contact.name + " (" + contact.phone + ")");
}


//5
console.log("\n//5");

function printContact(contact){
  console.log(" - " + contact.name + " (" + contact.phone + ")");
}

var contacts = [
  {name: "Carlos", phone: "12345"},
  {name: "Paco", phone: "12345"},
  {name: "Pepe", phone: "12345"}
];
console.log("-----Contacts-----");
for(i = 0; i < contacts.length; i++){
  printContact(contacts[i]);
}


//6
console.log("\n//6");
function printContact(contact){
  console.log(" - " + contact.name + " (" + contact.phone + ")");
}

var contacts = [
  {name: "Carlos", phone: "12345"},
  {name: "Paco", phone: "12345"},
  {name: "Pepe", phone: "12345"}
];
console.log("-----Contacts-----");
contacts.forEach((contact) => {
  console.log(" - " + contact.name + " (" + contact.phone + ")");
});


//7
console.log("\n//7");

var fs = require("fs");

var contacts = [];
var content = fs.readFileSync("contacts.json", "utf8");
contacts = JSON.parse(content);

console.log("-----Contacts-----");
contacts.forEach((contact) => {
  console.log(" - " + contact.name + " (" + contact.phone + ")");
});


//8
console.log("\n//8");

var fs = require("fs");

var contacts = [];
fs.readFile("contacts.json", "utf8",(err, content) => {
  console.log("Data read");
  contacts = JSON.parse(content);

  console.log("-----Contacts-----");
  contacts.forEach((contact) => {
    console.log(" - " + contact.name + " (" + contact.phone + ")");
  });
});*/


//9
console.log("\n//9");

var express = require("express");
var fs = require("fs");
var contacts = [];

var app = express();

app.get("/about/",(req,res) => {
  fs.readFile("contacts.json", "utf8",(err, content) => {
    console.log("Data read");
    contacts = JSON.parse(content);
    res.write("<html><body>-----Contacts-----<ul>");
    contacts.forEach((contact) => {
      res.write("<li>" + contact.name + " (" + contact.phone + ")</li>");
    });
    res.write("</ul></body></html>");
    res.end();
  });
});

app.listen(process.env.PORT);

app.get("/about/1/",(req,res) => {
  res.write("<html><body>Parte 1</body></html>");
});

app.get("/about/2/",(req,res) => {
  res.write("<html><body>Parte 2</body></html>");
});
