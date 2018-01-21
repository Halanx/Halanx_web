'use strict';

describe('Service: forgetpassotp', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var forgetpassotp;
  beforeEach(inject(function (_forgetpassotp_) {
    forgetpassotp = _forgetpassotp_;
  }));

  it('should do something', function () {
    expect(!!forgetpassotp).toBe(true);
  });

});
