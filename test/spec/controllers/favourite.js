'use strict';

describe('Controller: FavouriteCtrl', function () {

  // load the controller's module
  beforeEach(module('halanxApp'));

  var FavouriteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FavouriteCtrl = $controller('FavouriteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FavouriteCtrl.awesomeThings.length).toBe(3);
  });
});
