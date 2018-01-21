'use strict';

describe('Controller: ShopperCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var ShopperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopperCtrl = $controller('ShopperCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShopperCtrl.awesomeThings.length).toBe(3);
  });
});
