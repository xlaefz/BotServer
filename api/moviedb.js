module.exports = {
  search: function(searchTerm) {
    const mdb = require('moviedb')('58149d99c2f26b9bc8e4a44cd1da1300');
    // console.log("search Term" + searchTerm);
    return new Promise(function(resolve, reject) {
      mdb.searchMovie({query: searchTerm}, (err,res)=>{
        console.log(res);
        var result = res.results;
        var formattedResults = result.map(function(result){
          return {
            title:result.title
          };
        });
        console.log(formattedResults);
        resolve(formattedResults);
      });
    });
  }
};
