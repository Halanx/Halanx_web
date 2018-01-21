'use strict';

describe('Service: shopper', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var shopper;
  beforeEach(inject(function (_shopper_) {
    shopper = _shopper_;
  }));

  it('should do something', function () {
    expect(!!shopper).toBe(true);
  });

});
