'use strict';

describe('Controller: ForgetpassCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var ForgetpassCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgetpassCtrl = $controller('ForgetpassCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgetpassCtrl.awesomeThings.length).toBe(3);
  });
});
