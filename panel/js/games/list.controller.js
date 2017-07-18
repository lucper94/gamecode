(function(){

     'use strict'

     function listCtrl($http,listService){
         
         var ctrl = this;
            ctrl.loading=true;
            // ctrl.getPlatform = function(Kind,Platform,Type){
            //      ctrl.loading=true;
            //      listService.getGames(Kind,Platform,Type)
            //         .then(function(response){
            //     console.log(response);
            //     ctrl.gamesObj = response.data.app_data;
            //     ctrl.limit = 25;
            //     ctrl.predicate = 'Name';
            //     ctrl.loading=false;
            
            // })
            // }
           

            listService.getGamesHome()
                .then(function(response){
                ctrl.loading = false;
                ctrl.todos = response.data;
                console.log(ctrl.todos);
                 
                 ctrl.images = [
                     
                     "assets/slider/slider2.jpg",
                     "assets/slider/slider3.jpg",
                     "assets/slider/slider4.jpg",
                     "assets/slider/slider5.jpg",
                     "assets/slider/slider6.jpg"
                 ];

                 console.log(ctrl.images);
                 ctrl.loading = false;
                 console.log(ctrl.loading);
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