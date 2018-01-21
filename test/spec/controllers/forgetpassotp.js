'use strict';

describe('Controller: ForgetpassotpCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var ForgetpassotpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgetpassotpCtrl = $controller('ForgetpassotpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgetpassotpCtrl.awesomeThings.length).toBe(3);
  });
});
