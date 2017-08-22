(function(){

     'use strict'

     function searchListCtrl($stateParams,$http){
         var ctrl = this;
        console.log($stateParams);
        
        ctrl.searchGames = function(val){
            return $http.get('http://159.203.210.238/metalgear/api/webpage/searchlist/' + val)
                .then(function(response){
                    console.log(response);
                    ctrl.gamesObj = response.data.app_data;
                });
        };

        ctrl.searchGames($stateParams.searchString);
     }

     angular
        .module('gcapp')
        .controller('searchListCtrl',searchListCtrl)

 }());