'use strict';

/**
 * @ngdoc function
 * @name halanxApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the halanxApp
 */
angular.module('halanxApp')
  .controller('PaymentCtrl', function ($scope, payment) {
    
    $scope.postorder = ()=>{
           
        var obj = {};
        obj.DeliveryDate = localStorage.getItem("DeliveryDate");
        var json =  localStorage.getItem("Address");
        var splitaddress = JSON.parse(json)
        obj.DeliveryAddress =splitaddress.Flatno+ ","+splitaddress.Area +","+splitaddress.city
          obj.AsSoonAsPossible =  localStorage.getItem("AsSoonAsPossible");
         obj.StartTime = localStorage.getItem("StartTime");
        var destination = localStorage.getItem("obj");
        var latlon = JSON.parse(destination)
        obj.Latitude = latlon.Latitude;
        obj.Longitude = latlon.Longitude;
        obj.key = "f1tDUh";
        obj.surl = "https://www.halanx.com/halanx-final/new1big-kfc/pg1/response.php";
        obj.furl = "https://www.halanx.com/halanx-final/new1big-kfc/pg1/response.php";
        obj.amount = localStorage.getItem('amount');
        obj.firstname = "";
        obj.email = "";
        obj.phone = localStorage.getItem('mobilenumber');
        obj.productinfo = "";
        obj.txnid = "slfjoiwejofwe";
        console.log(obj)
        var token = payment.gettoken();
       var promise =  payment.placeorder(obj,token);
        promise.then(function(data){
        console.log(data)
 
 
},function(err){
  
} );
    } 
  });
