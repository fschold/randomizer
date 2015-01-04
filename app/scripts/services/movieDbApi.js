'use strict';

/**
 * @ngdoc service
 * @name pickrandomApp.movieDbApi
 * @description
 * # movieDbApi
 * Service in the pickrandomApp.
 */
angular.module('pickrandomApp')
    .service('movieDbApi', function ($http) {

      var apiKey = '48184b8fda5a8308b6574030aa583e51';
      var base = 'http://api.themoviedb.org/3';
      var searchService = '/search/movie';
      var movieService = '/movie/';
      var configService = '/configuration';
      var callback = 'JSON_CALLBACK';
      var numResults = 1;
      var url = base + searchService + '?api_key=' + apiKey + '&callback=' + callback + '&page=' + numResults;
      var imgBaseUrl = null;
      var imgSize = 'w185';

      // Get the image base url
      function _init(){
        $http.jsonp(base + configService + '?api_key=' + apiKey + '&callback=' + callback)
            .success(function(data){
              imgBaseUrl = data.images.base_url;
            })
      }

      _init();

      return {
        searchMovies: function(query) {
          return $http.jsonp(url + '&query=' + encodeURI(query));
        },
        searchMovieInformation: function(movieId) {
          return $http.jsonp(base + movieService + movieId + '?api_key=' + apiKey + '&callback=' + callback);
        },
        getImgBaseUrl: function(){
          return imgBaseUrl + imgSize;
        }
      };
    });
