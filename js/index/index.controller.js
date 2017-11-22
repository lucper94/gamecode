(function(){

     'use strict'

     function indexCtrl($http,listingService,limitToFilter){
          var ctrl = this;
            ctrl.loading=true; 
            ctrl.modalHead = "";
            ctrl.modalBody = "";
            ctrl.getPlatform = function(Kind,Platform,Type){
                 ctrl.loading=true;
                 listingService.getGames(Kind,Platform,Type)
                    .then(function(response){
                // console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
            }
   
            listingService.getSlider().then(function successCallback(response){
                ctrl.firstone = response.data.class[0];
                ctrl.secondone = response.data.sliderImgs[0];
                console.log(ctrl.firstone);
                ctrl.sliderimg = response.data;
                console.log(ctrl.sliderimg);
                ctrl.imagesS = response.data.sliderImgs;
                console.log(ctrl.imagesS);
            })
        ctrl.resize_header = function(){
            var header= $('.game-header').height()-20;
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
                console.log(ctrl.todos);
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

            listingService.getTopTen().then(function successCallback(response){
                console.log(response);
                ctrl.topten = response.data;
            })
            ctrl.idiv=0;
            ctrl.div = function(id){
                ctrl.idiv=id;
            }
            
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

         listingService.getMenu().then(function successCallback(response){
             
             console.log(response.data);
             ctrl.menu = response.data;
             
         })
        
     }

     angular
        .module('gcapp')
        .controller('indexCtrl', indexCtrl)

 }());