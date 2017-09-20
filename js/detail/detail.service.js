(function(){

     'use strict'

     function detailService($http){

         this.getDetail = function(gameId,kind){
             return $http({
                 method: 'GET',
                 url: 'https://gamerscode.mx/metalgear/api/webpage/singlestock/' + gameId + '/' + kind,
                 headers: {'Content-Type':'application/json'}
             }) 
         }

     }

     angular
        .module('gcapp')
        .service('detailService', detailService);

 }());