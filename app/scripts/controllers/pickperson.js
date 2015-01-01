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
        $scope.errors = {};

        $scope.addPerson = function() {
            $scope.errors.duplicateName = false;

            var found = jQuery.inArray($scope.person, $scope.persons);
            if (found >= 0) {
                // Element was found, do not add
                $scope.errors.duplicateName = true;
            } else {
                // Element was not found, add it
                $scope.persons.push($scope.person);
            }

            $scope.person = '';
        };

        $scope.removePerson = function(index) {
            $scope.persons.splice(index, 1);
        };

        $scope.makeTheChoice = function() {
            // Set global variable for alternatives
            sharedPropertiesService.setObject($scope.persons);
            sharedPropertiesService.setNumberOfChoices($scope.selectedNumber);
            sharedPropertiesService.setCallingFunction('person');
        };

        $scope.addSubject = function() {
            $scope.subject = '"'+$scope.context+'"';
            sharedPropertiesService.setSubject($scope.subject);
        };

    });
