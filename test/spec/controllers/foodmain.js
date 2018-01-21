'use strict';

describe('Controller: FoodmainCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var FoodmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodmainCtrl = $controller('FoodmainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FoodmainCtrl.awesomeThings.length).toBe(3);
  });
});
