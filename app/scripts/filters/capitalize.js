'use strict';

/**
 * @ngdoc filter
 * @name pickrandomApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the pickrandomApp.
 */
angular.module('pickrandomApp')
    .filter('capitalize', function () {
      return function(input, all) {
        return (!!input) ?
            input.replace(/([^\W_]+[^\s-]*) */g,
                function(txt){
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }) : '';
      }
    });
