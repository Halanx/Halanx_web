'use strict';

/**
 * @ngdoc service
 * @name halanxApp.payment
 * @description
 * # payment
 * Factory in the halanxApp.
 */
angular.module('halanxApp')
  .factory('payment', function ($q,$http) {
        var object = {
           placeorder : function(obj,key){
                var pr = $q.defer();
      var url = "https://api.halanx.com/transactions/generate_hash/";
     
        console.log(obj)     
      $http.post(url,obj,{
 //             withCredentials: true,
             headers: {
                 'Authorization': 'Token ' +key 
             }
      }).then(function(data){
          pr.resolve(data.data)
          console.log("success")
        
      },
                          function(err){
          pr.reject(err)
          console.log("error")
          
      }
      )
      return pr.promise
           },
             gettoken : function(){
      var token = localStorage.getItem("token")
        
       var mytoken=JSON.parse(JSON.stringify(token))
       return mytoken; 
     }
        } 
        return object
  });
