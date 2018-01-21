'use strict';

/**
 * @ngdoc service
 * @name halanxApp.forgetpass
 * @description
 * # forgetpass
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('forgetpass', function ($http, $q) {
   	var obj = {
		arr: [],
		callserver: function (obj) {
			console.log(obj);	
			var pr = $q.defer();
			var url = "https://api.halanx.com/users/getotp/"+ obj.firstname + "/";


			$http.get(url).then(function (data) {
				pr.resolve(data.data)
				console.log("data is:",data);

			},
				function (err) {
					pr.reject(err)
					console.log("error")

				}
			)
			return pr.promise
		}
	}
	return obj;
  });
