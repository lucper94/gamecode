(function(){

     'use strict'

     function listingCtrl($http,listingService,limitToFilter,$stateParams){
          var ctrl = this;  
          console.log($stateParams);

            // ctrl.getPlatform = function(Kind,Platform,Type){
                 ctrl.loading=true;
                 listingService.getGames($stateParams.kind,$stateParams.platform,$stateParams.classic)
                    .then(function(response){
                // console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
            // }
   
        
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+10;
            // console.log(header);
            $('.game-banner').css('margin-top',header);
            $('.filters').css('margin-top',header);
            // console.log('entro');
        }
        $(window).resize(function(){
            ctrl.resize_header();
        });

            listingService.getGamesHome()
                .then(function(response){
                ctrl.loading = false;
                ctrl.todos = response.data;
                // console.log(ctrl.todos);
                 ctrl.resize_header();
                 ctrl.images = [
                     
                     "assets/slider/slider2.jpg",
                     "assets/slider/slider3.jpg",
                     "assets/slider/slider4.jpg",
                     "assets/slider/slider5.jpg",
                     "assets/slider/slider6.jpg"
                 ];

                //  console.log(ctrl.images);
                 ctrl.loading = false;
                //  console.log(ctrl.loading);
                
            })
            
            ctrl.getName = function(name){
                if(name.length > 25) {
                return name.substr(0, 25)+'...';
                }else{
                return name;
                } 
            }
         angular.element(document).ready(function () {
            ctrl.resize_header();
            
         });

        
     }

     angular
        .module('gcapp')
        .controller('listingCtrl', listingCtrl)

 }());