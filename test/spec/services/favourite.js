'use strict';

describe('Service: favourite', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var favourite;
  beforeEach(inject(function (_favourite_) {
    favourite = _favourite_;
  }));

  it('should do something', function () {
    expect(!!favourite).toBe(true);
  });

});
