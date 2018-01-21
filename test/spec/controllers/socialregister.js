'use strict';

describe('Controller: SocialregisterCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var SocialregisterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialregisterCtrl = $controller('SocialregisterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SocialregisterCtrl.awesomeThings.length).toBe(3);
  });
});
