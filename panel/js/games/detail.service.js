(function(){

     'use strict'

     function detailService($http){

         this.getDetail = function(gameId){
             return $http({
                 method: 'GET',
                 url: 'http://159.203.210.238/metalgear/api/webpage/singlestock/' + gameId,
                 headers: {'Content-Type':'application/json'}
             }) 
         }

     }

     angular
        .module('gcapp')
        .service('detailService', detailService);

 }());