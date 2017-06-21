(function(){

     'use strict'

     function listCtrl(listService){
         
         var ctrl = this;
            ctrl.loading=true;
            ctrl.getPlatform = function(Platform){
                 ctrl.loading=true;
                 listService.getGames(Platform)
                    .then(function(response){
                console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = '-SP';
                ctrl.loading=false;
            })
            }
            listService.getGames('WII')
            .then(function(response){
                console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = '-SP';
                ctrl.loading=false;
            })

       

     }
    
    
         angular
        .module('games')
        .controller('listCtrl',listCtrl);

 }());