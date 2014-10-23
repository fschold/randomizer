'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:PickmovieCtrl
 * @description
 * # PickmovieCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
  .controller('PickmovieCtrl', function ($scope,sharedPropertiesService) {
    $scope.movies = [];

    $scope.addMovie = function() {
    	$scope.movies.push($scope.movie);
    	$scope.movie = '';
    };

    $scope.removeMovie = function(index) {
    	$scope.movies.splice(index, 1);
    };

    $scope.makeTheChoice = function() {
    	// Set global variable for alternatives
    	sharedPropertiesService.setObject($scope.movies);
        //Make sure numberOfChoices is set to 0
        sharedPropertiesService.setNumberOfChoices(0);

    };

  });
