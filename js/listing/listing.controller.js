(function(){

     'use strict'

     function listingCtrl($http,listingService,limitToFilter,$stateParams,$cookies){
         
        var ctrl = this;

        if($cookies.getObject('listParams') != undefined){
            
            //Cuando se elige una plataforma diferente.
            if($stateParams.kind != null){
                
                var listParams = {
                    kind:  $stateParams.kind,
                    platform:  $stateParams.platform,
                    classic:  $stateParams.classic
                }
                
                $cookies.putObject('listParams', listParams, {path: "/"});
            }
            

        }
        
        else{

           var listParams = {
                kind:  'With_Box',
                platform:  'PS4',
                classic:  'False',
                
            }
            
            $cookies.putObject('listParams', listParams, {path: "/"});

        }
        
        ctrl.loading=true;
        
        listingService.getGames($cookies.getObject('listParams').kind, $cookies.getObject('listParams').platform, $cookies.getObject('listParams').classic)
            .then(function(response){
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
   
        
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

                // console.log(ctrl.images);
                ctrl.loading = false;
                console.log(ctrl.loading);
                
            })
            
        ctrl.getName = function(name){
            
            if(name.length > 25){
                return name.substr(0, 25)+'...';
            }
            else{
                return name;
            } 
        }
        
        angular.element(document).ready(function(){
            ctrl.resize_header();
            
        });

        
     }

     angular
        .module('gcapp')
        .controller('listingCtrl', listingCtrl)

 }());