(function(){

     'use strict'

        function listService($http){
            this.getGames = function(Platform,Kind){
               
                var url ="http://159.203.210.238/metalgear/api/webpage/listing/" + Platform + "/" + Kind;
                return $http({
                    method: 'GET',
                    url : url,
                    headers: {'Content-Type':'application/json'}
                })
            }

            this.getGamesHome = function(){

                var url = 'game_handler.php';
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