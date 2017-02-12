var express = require('express');
var app = express()
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var mMovieDB = require('./api/moviedb');

app.get('/movies/:q', function(request, response) {
  mMovieDB.search(request.params.q).then(function(search) {
    // console.log(search);
    response.json(search);
  });
});


app.listen(3000);
