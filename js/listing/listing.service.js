(function(){

     'use strict'

        function listingService($http){
            this.getGames = function(Kind,Platform,Type,lowerPrice,higherPrice){
               
                var url ="https://gamerscode.mx/dashboard/api/webpage/listing/" + Kind + "/" + Platform + "/" + Type + "/" + lowerPrice + "/" + higherPrice;
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
                var url = 'https://gamerscode.mx/dashboard/api/webpage/getsliderimgs';
                return $http({
                    method: 'POST',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                }) 
            }

            this.getTopTen = function (){
                var url = 'https://gamerscode.mx/dashboard/api/webpage/topten';
                return $http({
                    method: 'GET',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                }) 
            }

            this.getMenu = function (){
                var url = 'https://gamerscode.mx/dashboard/api/webpage/menu';
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