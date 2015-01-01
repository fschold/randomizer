'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:PickpersonCtrl
 * @description
 * # PickpersonCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
    .controller('PickpersonCtrl', function ($scope, sharedPropertiesService, $location, smoothScroll) {
        $scope.persons = [];
        $scope.subject = '';
        $scope.errors = {};

        $scope.addSubject = function() {
            $scope.errors.emptySubject = false;

            $scope.subject = '"'+$scope.context+'"';
            sharedPropertiesService.setSubject($scope.subject);
        };

        $scope.addPerson = function() {
            $scope.errors.duplicateName = false;
            $scope.errors.emptyPersons = false;

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
            var element;
            $scope.errors.emptySubject = false;
            $scope.errors.emptyPersons = false;

            // If subject is empty
            if(!sharedPropertiesService.getSubject($scope.subject)){
                element = document.getElementById('subjectHeader');
                smoothScroll(element);
                $scope.errors.emptySubject = true;
            }
            // If persons list has less than 2 elements
            else if($scope.persons.length < 2){
                element = document.getElementById('personHeader');
                smoothScroll(element);
                $scope.errors.emptyPersons = true;
            }
            else {

                // If no number is selected, set it to 1 (default)
                if(angular.isUndefined($scope.selectedNumber)) { $scope.selectedNumber = 1; }

                // Set global variable for alternatives
                sharedPropertiesService.setObject($scope.persons);
                sharedPropertiesService.setNumberOfChoices($scope.selectedNumber);
                sharedPropertiesService.setCallingFunction('person');
                $location.path('/loadNCalculateChoice');
            }
        };

    });
