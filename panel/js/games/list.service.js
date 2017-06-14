(function(){

     'use strict'

        function listService($http){
            this.getGames = function(){
                var url ="http://159.203.210.238/metalgear/api/webpage/listing/";
                return $http({
                    method: 'GET',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                })
            }
        }
        angular
            .module('games')
            .service('listService',listService);
       
 }());