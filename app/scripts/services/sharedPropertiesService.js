'use strict';

/**
 * @ngdoc service
 * @name pickrandomApp.sharedPropertiesService
 * @description
 * # sharedPropertiesService
 * Service in the pickrandomApp.
 */
angular.module('pickrandomApp')
  .service('sharedPropertiesService', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var objectValue = [];
    var numberOfChoices = 0;
    var subject = '';
    var callingFunction = '';
    
    return {
        getObject: function() {
            return objectValue;
        },
        setObject: function(array) {
            objectValue = array;
        },
        getNumberOfChoices: function() {
            return numberOfChoices;
        },
        setNumberOfChoices: function(number) {
            numberOfChoices = number;
        },
        getSubject: function() {
            return subject;
        },
        setSubject: function(subject_text) {
            subject = subject_text;
        },
        getCallingFunction: function() {
            return callingFunction;
        },
        setCallingFunction: function(function_name) {
            callingFunction = function_name;
        },
    };    
  });
