'use strict';

describe('Controller: PickpersonCtrl', function () {

  // load the controller's module
  beforeEach(module('pickrandomApp'));

  var PickpersonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PickpersonCtrl = $controller('PickpersonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
