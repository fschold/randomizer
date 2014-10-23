'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:PickpersonCtrl
 * @description
 * # PickpersonCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
  .controller('PickpersonCtrl', function ($scope,sharedPropertiesService) {
     $scope.persons = [];
     $scope.subject = '';

    $scope.addPerson = function() {
    	$scope.persons.push($scope.person);
    	$scope.person = '';
    };

    $scope.removePerson = function(index) {
    	$scope.persons.splice(index, 1);
    };

    $scope.makeTheChoice = function() {
    	// Set global variable for alternatives
    	sharedPropertiesService.setObject($scope.persons);
    	//console.log("Number is "+$scope.selectedNumber);
    	sharedPropertiesService.setNumberOfChoices($scope.selectedNumber);

    };

    $scope.addSubject = function() {
    	$scope.subject = $scope.context;
    	sharedPropertiesService.setSubject($scope.subject);
    };

  });
