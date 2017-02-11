var express = require('express');
var app = express();

app.get('/', function(req,res){
  app.('hello, express!');
});

app.listen(1337, function(){
  console.log('ready on port 1337');
})
