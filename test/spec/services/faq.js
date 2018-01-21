'use strict';

describe('Service: faq', function () {

  // load the service's module
  beforeEach(module('halanxApp'));

  // instantiate service
  var faq;
  beforeEach(inject(function (_faq_) {
    faq = _faq_;
  }));

  it('should do something', function () {
    expect(!!faq).toBe(true);
  });

});
