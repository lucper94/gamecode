(function(){

     'use strict'

     function detailService($http){

         this.getDetail = function(gameId){
             return $http({
                 method: 'GET',
                 url: 'http://localhost/metalgear/api/webpage/singlestock/' + gameId,
                 headers: {'Content-Type':'application/json'}
             }) 
         }

     }

     angular
        .module('games')
        .service('detailService', detailService);

 }());