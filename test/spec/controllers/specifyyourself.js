'use strict';

describe('Controller: SpecifyyourselfCtrl', function () {

  // load the controller's module
  beforeEach(module('pickrandomApp'));

  var SpecifyyourselfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpecifyyourselfCtrl = $controller('SpecifyyourselfCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
