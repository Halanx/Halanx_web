'use strict';

describe('Service: aboutus', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var aboutus;
  beforeEach(inject(function (_aboutus_) {
    aboutus = _aboutus_;
  }));

  it('should do something', function () {
    expect(!!aboutus).toBe(true);
  });

});
