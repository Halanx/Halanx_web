'use strict';

describe('Service: forgetpass', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var forgetpass;
  beforeEach(inject(function (_forgetpass_) {
    forgetpass = _forgetpass_;
  }));

  it('should do something', function () {
    expect(!!forgetpass).toBe(true);
  });

});
