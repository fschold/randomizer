'use strict';

describe('Controller: LoadncalculatechoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('pickrandomApp'));

  var LoadncalculatechoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoadncalculatechoiceCtrl = $controller('LoadncalculatechoiceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
