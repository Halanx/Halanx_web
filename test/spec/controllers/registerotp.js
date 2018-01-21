'use strict';

describe('Controller: RegisterotpCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var RegisterotpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegisterotpCtrl = $controller('RegisterotpCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegisterotpCtrl.awesomeThings.length).toBe(3);
  });
});
