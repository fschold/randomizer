'use strict';

describe('Service: movieDbApi', function () {

  // load the service's module
  beforeEach(module('pickrandomApp'));

  // instantiate service
  var movieDbApi;
  beforeEach(inject(function (_movieDbApi_) {
    movieDbApi = _movieDbApi_;
  }));

  it('should do something', function () {
    expect(!!movieDbApi).toBe(true);
  });

});
