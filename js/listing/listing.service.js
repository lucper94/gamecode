(function(){

     'use strict'

        function listingService($http){
            this.getGames = function(Kind,Platform,Type){
               
                var url ="https://gamerscode.mx/dashboard/api/webpage/listing/" + Kind + "/" + Platform + "/" + Type;
                return $http({
                    method: 'GET',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                })
            }

            this.getGamesHome = function(){

                var url = 'https://gamerscode.mx/dashboard/api/webpage/homepage/';
                 return $http({
                    method: 'GET',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                })
            }
        }
        angular
            .module('gcapp')
            .service('listingService',listingService);
       
 }());