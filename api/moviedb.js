module.exports = {
  search: function(searchTerm) {
    const mdb = require('moviedb')('58149d99c2f26b9bc8e4a44cd1da1300');
    // console.log("search Term" + searchTerm);
    return new Promise(function(resolve, reject) {

      // mdb.movieSimilar({id: 666}, function(err, res){
      //   console.log(res);
      //   resolve(res);
      // });

      mdb.searchMovie({query: searchTerm}, (err,res)=>{
        var result = res.results;
        var formattedResults = result.map(function(result){
          return {
            id:result.id
          };
        });
          mdb.movieSimilar({id: formattedResults[0].id}, (err,res)=>{
            var modResult = res.results;
            console.log(modResult);
            var formattedResults = modResult.map(function(result){
              return{
                title:result.title,
                // poster_path:result.poster_path,
                // overview:result.overview
              }
            });
            resolve(formattedResults);
          });
      });
    });
  }
};
