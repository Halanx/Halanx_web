'use strict';

describe('Service: socialregister', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var socialregister;
  beforeEach(inject(function (_socialregister_) {
    socialregister = _socialregister_;
  }));

  it('should do something', function () {
    expect(!!socialregister).toBe(true);
  });

});
