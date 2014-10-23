'use strict';

/**
 * @ngdoc function
 * @name pickrandomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickrandomApp
 */
angular.module('pickrandomApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
