'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:SpecifyyourselfCtrl
 * @description
 * # SpecifyyourselfCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
    .controller('SpecifyyourselfCtrl', function ($scope, sharedPropertiesService, smoothScroll, $location) {
      $scope.alternatives = [];
      $scope.subject = '';
      $scope.errors = {};

      $scope.addSubject = function() {
        $scope.errors.emptySubject = false;

        $scope.subject = '"'+$scope.context+'"';
        sharedPropertiesService.setSubject($scope.subject);
      };

      $scope.addAlternative = function() {

        $scope.errors.duplicateAlternative = false;
        $scope.errors.emptyAlternatives = false;

        var found = jQuery.inArray($scope.alternative, $scope.alternatives);
        if (found >= 0) {
          // Element was found, do not add
          $scope.errors.duplicateAlternative = true;
        } else {
          // Element was not found, add it
          $scope.alternatives.push($scope.alternative);
        }

        $scope.alternative = '';
      };

      $scope.removeAlternative = function(index) {
        $scope.alternatives.splice(index, 1);
      };

      $scope.makeTheChoice = function() {
        var element;
        $scope.errors.emptySubject = false;
        $scope.errors.emptyAlternatives = false;

        // If subject is empty
        if(!sharedPropertiesService.getSubject($scope.subject)){
          element = document.getElementById('subjectHeader');
          smoothScroll(element);
          $scope.errors.emptySubject = true;
        }
        // If persons list has less than 2 elements
        else if($scope.alternatives.length < 2){
          element = document.getElementById('alternativesHeader');
          smoothScroll(element);
          $scope.errors.emptyAlternatives = true;
        }
        else {

          // If no number is selected, set it to 1 (default)
          if(angular.isUndefined($scope.selectedNumber)) { $scope.selectedNumber = 1; }

          // Set global variable for alternatives
          sharedPropertiesService.setObject($scope.alternatives);
          sharedPropertiesService.setNumberOfChoices($scope.selectedNumber);
          sharedPropertiesService.setCallingFunction('specify_yourself');
          $location.path('/loadNCalculateChoice');
        }
      };
    });
