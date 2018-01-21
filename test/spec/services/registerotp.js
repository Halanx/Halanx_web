'use strict';

describe('Service: registerotp', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var registerotp;
  beforeEach(inject(function (_registerotp_) {
    registerotp = _registerotp_;
  }));

  it('should do something', function () {
    expect(!!registerotp).toBe(true);
  });

});
