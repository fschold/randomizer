'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:SpecifyyourselfCtrl
 * @description
 * # SpecifyyourselfCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
  .controller('SpecifyyourselfCtrl', function ($scope, sharedPropertiesService) {
    $scope.alternatives = [];
     $scope.subject = '';

    $scope.addAlternative = function() {
    	$scope.alternatives.push($scope.alternative);
    	$scope.alternative = '';
    };

    $scope.removeAlternative = function(index) {
    	$scope.alternatives.splice(index, 1);
    };

    $scope.makeTheChoice = function() {
    	// Set global variable for alternatives
    	sharedPropertiesService.setObject($scope.alternatives);
    	//console.log("Number is "+$scope.selectedNumber);
    	sharedPropertiesService.setNumberOfChoices($scope.selectedNumber);
    	sharedPropertiesService.setCallingFunction('specify_yourself');

    };

    $scope.addSubject = function() {
    	$scope.subject = '"'+$scope.context+'"';
    	sharedPropertiesService.setSubject($scope.subject);
    };
  });
