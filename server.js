var express = require("express");
var app = express();

var bodyParser = require('body-parser');

var port = 8759;

app.use(bodyParser.json())


app.get("/codewars/endpoint", function(req, res, next){
  console.log(req.body);
})

app.listen(port, function(){
  console.log("Listeing on port ", port);
});
