'use strict';

/**
 * @ngdoc overview
 * @name pickrandomApp
 * @description
 * # pickrandomApp
 *
 * Main module of the application.
 */
angular
    .module('pickrandomApp', [
        'ngResource',
        'ngRoute',
        'smoothScroll'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/pickmovie', {
                templateUrl: 'views/pickmovie.html',
                controller: 'PickmovieCtrl'
            })
            .when('/pickperson', {
                templateUrl: 'views/pickperson.html',
                controller: 'PickpersonCtrl'
            })
            .when('/loadNCalculateChoice', {
                templateUrl: 'views/loadncalculatechoice.html',
                controller: 'LoadncalculatechoiceCtrl'
            })
            .when('/specifyYourself', {
                templateUrl: 'views/specifyyourself.html',
                controller: 'SpecifyyourselfCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });