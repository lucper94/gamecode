(function(){

     'use strict'

     function indexCtrl($stateParams,listService){

         var ctrl = this;
            ctrl.loading=true;
            ctrl.getPlatform = function(Kind,Platform,Type){
                 ctrl.loading=true;
                 listService.getGames(Kind,Platform,Type)
                    .then(function(response){
                console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
            }

            ctrl.getPlatform($stateParams.kind,$stateParams.platform,$stateParams.classic);

        console.log($stateParams);

     }

     angular
        .module('games')
        .controller('indexCtrl', indexCtrl)

 }());