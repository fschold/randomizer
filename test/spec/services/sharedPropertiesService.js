'use strict';

describe('Service: sharedPropertiesService', function () {

  // load the service's module
  beforeEach(module('pickrandomApp'));

  // instantiate service
  var sharedPropertiesService;
  beforeEach(inject(function (sharedPropertiesService) {
    sharedPropertiesService = sharedPropertiesService
    ;
  }));

  it('should do something', function () {
    expect(!!sharedPropertiesService).toBe(true);
  });

});
