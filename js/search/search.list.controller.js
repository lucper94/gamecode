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
                    ctrl.resize_header();
                });
        };
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+10;
            // console.log(header);
            $('.game-banner').css('margin-top',header);
            $('.filters').css('margin-top',header);
            // console.log('entro');
        }
        ctrl.searchGames($stateParams.searchString);
        ctrl.resize_header();
     }

     angular
        .module('gcapp')
        .controller('searchListCtrl',searchListCtrl)

 }());