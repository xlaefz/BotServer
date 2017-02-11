var $ = require('jquery'),
    XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

$.support.cors = true;
$.ajaxSettings.xhr = function() {
    return new XMLHttpRequest();
};

module.exports = {
  search: function(searchTerm) {
    var params = {
        k: '259720-TasteBot-4UKC2LF4',
        type: 'movies',
        q: searchTerm,
        callback: 'foobar',
        verbose: 1,
        info: 1
    };
    var result = $.ajax({
            /* update API end point */
            url: "https://www.tastekid.com/api/similar",
            data: params,
            dataType: "json",
            method: "GET"
        })
        /* if the call is successful (status 200 OK) show results */
        .done(function (result) { //show Results
            /* if the results are meeningful, we can just console.log them */
            if (result.Similar.Results.length === 0) {
                alert('No results found.');
            } else {
                $.each(result.Similar.Results, function (key, value) {
                    //concatenate the results inside the HTML variable
                    console.log(value);
                });
            }
        });
  }
};
