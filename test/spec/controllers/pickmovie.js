'use strict';

describe('Controller: PickmovieCtrl', function () {

  // load the controller's module
  beforeEach(module('pickrandomApp'));

  var PickmovieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PickmovieCtrl = $controller('PickmovieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
