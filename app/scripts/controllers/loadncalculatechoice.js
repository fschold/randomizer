'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:LoadncalculatechoiceCtrl
 * @description
 * # LoadncalculatechoiceCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
    .controller('LoadncalculatechoiceCtrl', function ($scope,sharedPropertiesService, smoothScroll, $timeout, movieDbApi) {

      // Smooth scroll stuff
      var element = document.getElementById('topOfScreen');
      smoothScroll(element);

      // Movie object
      $scope.movie = {};

      // Errors
      $scope.errors = {};

      // Get subject and objects
      $scope.objectsToChooseFrom = sharedPropertiesService.getObject();
      $scope.subject = sharedPropertiesService.getSubject();
      $scope.alternative_text = '';
      var choices = sharedPropertiesService.getNumberOfChoices();
      var typeOfChoice = sharedPropertiesService.getCallingFunction().toLowerCase();

      // Hide all result divs
      document.getElementById('results_movies').style.display = 'none';
      document.getElementById('results_persons').style.display = 'none';

      if(typeOfChoice == "person") {
        $scope.alternative_text = 'Person';
      } else if (typeOfChoice == "movie"){
        choices = 1;
      } else if(typeOfChoice == "specify_yourself"){
        $scope.alternative_text = 'Alternative';
      }

      _makeCalculation(choices, typeOfChoice);

      function _makeCalculation(numberOfChoices, type) {

        // Add spinner
        var target = document.getElementById('spinner');
        var spinner = new Spinner().spin();
        target.appendChild(spinner.el);

        var numberOfObjects = $scope.objectsToChooseFrom.length;

        var randomChooseObject;

        // If movie
        if(type == "movie") {
          randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);
          $scope.movieTitle = $scope.objectsToChooseFrom[randomChooseObject-1];

          // Search for movie in TMDB (The Movie Database)
          var call = movieDbApi.searchMovies($scope.movieTitle);

          call.then(function(response){
                call = movieDbApi.searchMovieInformation(response.data.results[0].id);

                call.then(function(response){
                      $scope.movie = response.data;
                      $scope.movie.movieFound = true;
                      $scope.movie.posterUrl = movieDbApi.getImgBaseUrl() + $scope.movie.poster_path;
                    },
                    function(response){
                      console.log(response);
                    })
              },
              function(response){
                $scope.movie.movieFound = false;
                console.log(response);
              },
          function(){
            $scope.movie.movieFound = false;
          });

          // If person or own alternatives
        } else {
          $scope.results = [];
          $scope.chosenNumbers = [];

          for (var i = 0; i < numberOfChoices; i++) {

            randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);

            // Values should be unique
            while($scope.chosenNumbers.indexOf(randomChooseObject) != -1) {
              randomChooseObject = Math.floor((Math.random() * numberOfObjects) + 1);
            }
            $scope.chosenNumbers[i] = randomChooseObject;
            $scope.results[i]=$scope.objectsToChooseFrom[randomChooseObject-1];

          }
        }

        $timeout(function() {
          spinner.stop();
          $scope.displayResults(typeOfChoice);
        }, 3000)
            .then(function(){
              $scope.doneLoading = true;
            });
      }

      $scope.displayResults = function(typeOfChoice) {

        // Hide loading area
        document.getElementById('loading_area').style.display = 'none';

        //Show result area
        if(typeOfChoice == "movie") {
          document.getElementById('results_movies').style.display = 'block';
        } else {
          document.getElementById('results_persons').style.display = 'block';
        }
      };
    });
