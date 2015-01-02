'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:PickmovieCtrl
 * @description
 * # PickmovieCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
    .controller('PickmovieCtrl', function ($scope, sharedPropertiesService, $location) {
      $scope.movies = [];
      $scope.errors = {};

      $scope.addMovie = function() {
        $scope.errors.duplicateMovie = false;
        $scope.errors.tooFewMovies = false;

        var found = jQuery.inArray($scope.movie, $scope.movies);
        if (found >= 0) {
          // Element was found, do not add
          $scope.errors.duplicateMovie = true;
        } else {
          // Element was not found, add it
          $scope.movies.push($scope.movie);
        }

        $scope.movie = '';
      };

      $scope.removeMovie = function(index) {
        $scope.movies.splice(index, 1);
      };

      $scope.makeTheChoice = function() {
        if($scope.movies.length < 2){
          $scope.errors.tooFewMovies = true;
        } else {
          // Set global variable for alternatives
          sharedPropertiesService.setObject($scope.movies);
          //Make sure numberOfChoices is set to 0
          sharedPropertiesService.setNumberOfChoices(0);
          sharedPropertiesService.setCallingFunction('movie');
          $location.path('/loadNCalculateChoice');
        }
      };

    });
