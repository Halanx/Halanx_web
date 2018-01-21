'use strict';

describe('Service: forgetpassnew', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var forgetpassnew;
  beforeEach(inject(function (_forgetpassnew_) {
    forgetpassnew = _forgetpassnew_;
  }));

  it('should do something', function () {
    expect(!!forgetpassnew).toBe(true);
  });

});
