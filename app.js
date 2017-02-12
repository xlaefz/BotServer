var express = require('express');
var app = express()
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var mMovieDB = require('./api/moviedb');

// app.use(cors());
// app.use(bodyParser());
// const mdb = require('moviedb')('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODE0OWQ5OWMyZjI2YjliYzhlNGE0NGNkMWRhMTMwMCIsInN1YiI6IjU4OWZiZTViOTI1MTQxMzM2ZTAwNmFlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruEmzvQc4wLzY9ihk0u4od5wkDsuA3FWpgCydBG4eMA');
// mdb.searchMovie({ query: 'Alien' }, (err, res) => {
//   console.log(res);
// });

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// const mdb = require('moviedb')('58149d99c2f26b9bc8e4a44cd1da1300');
// mdb.searchMovie({query: 'Zoolander' }, function(err, res){
//   console.log(res);
// }).movieInfo({id: 123}, function(err, res){
//   console.log(res);
// });
app.get('/movies/:q', function(request, response) {
  mMovieDB.search(request.params.q).then(function(search) {
    // console.log(search);
    response.json(search);
  });
});


// app.listen(3000);
