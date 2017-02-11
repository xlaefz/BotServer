var express = require('express');
var app = express()
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var tasteKid = require('./api/TasteKid');

app.use(cors());
app.use(bodyParser());


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/movies', function(request, response) {
  tasteKid.search("Bad boys 2, pokemon, digimon").then(function(list) {
    console.log(list);
    response.send(list);
  });
});

app.listen(3000);
