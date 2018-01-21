'use strict';

describe('Service: landing', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var landing;
  beforeEach(inject(function (_landing_) {
    landing = _landing_;
  }));

  it('should do something', function () {
    expect(!!landing).toBe(true);
  });

});
