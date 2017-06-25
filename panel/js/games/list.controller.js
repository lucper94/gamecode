(function(){

     'use strict'

     function listCtrl($http,listService){
         
         var ctrl = this;
            ctrl.loading=true;
            ctrl.getPlatform = function(Platform,Kind){
                 ctrl.loading=true;
                 listService.getGames(Platform,Kind)
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

            listService.getGamesHome()
                .then(function(response){
                ctrl.todos = response.data;
                console.log(ctrl.todos);
                 ctrl.loading=false;
            })
            
            ctrl.getName = function(name){
                if(name.length > 25) {
                return name.substr(0, 25)+'...';
                }else{
                return name;
                } 
            }
            

     }
    
    
         angular
            .module('games')
            .controller('listCtrl',listCtrl);

 }());