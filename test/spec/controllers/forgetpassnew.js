'use strict';

describe('Controller: ForgetpassnewCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var ForgetpassnewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgetpassnewCtrl = $controller('ForgetpassnewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgetpassnewCtrl.awesomeThings.length).toBe(3);
  });
});
