(function(){

     'use strict'

        function listingService($http){
            this.getGames = function(Kind,Platform,Type){
               
                var url ="https://gamerscode.mx/beta/api/webpage/listing/" + Kind + "/" + Platform + "/" + Type;
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

            this.getSlider = function(){
                var url = 'http://159.203.210.238/dashboard/api/webpage/getsliderimgs';
                return $http({
                    method: 'POST',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                }) 
            }

            this.getTopTen = function (){
                var url = 'https://gamerscode.mx/beta/api/webpage/topten';
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