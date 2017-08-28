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

        ctrl.reverseOrder = true;
        ctrl.direction  = 'down';        
        
        ctrl.orderSwitch = function(reverseFlag){
            if(reverseFlag === true)
                ctrl.reverseOrder = false;
            if(reverseFlag === false)
                ctrl.reverseOrder = true;
            console.log(ctrl.reverseOrder);
            // return ctrl.reverseOrder
        }

        ctrl.orderFunction = function(property, reverse){
            ctrl.orderSwitch(reverse); // Changing Reverse Flag
            switch(property){
                
                case 'name':
                    if(reverse == true){
                        ctrl.gamesObj.sort(function(a,b){
                            var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
                            var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
                            if(nameA < nameB)
                                return -1;
                            if(nameA > nameB)
                                return 1;
                    
                            return 0;
                        }).reverse();
                        ctrl.direction  = 'up';
                    }
                    else{
                        ctrl.gamesObj.sort(function(a,b){
                            var nameA = a.Name.toUpperCase();
                            var nameB = b.Name.toUpperCase(); 
                            if(nameA < nameB)
                                return -1;
                            if(nameA > nameB)
                                return 1;
                    
                            return 0;
                        });
                        ctrl.direction  = 'down';
                    }
                  
                break;
                case 'price':
                    if(reverse === true){
                        ctrl.gamesObj.sort(function(a,b){
                           return a.price_s - b.price_s;
                        }).reverse();
                    }
                    else{
                        ctrl.gamesObj.sort(function(a,b){
                            return a.price_s - b.price_s;
                        });
                    }
                    
                break;
            
                default:
                break;
            }
            
        
        }
        
        ctrl.loading=true;
        ctrl.kind = $cookies.getObject('listParams').kind;
        listingService.getGames(ctrl.kind, $cookies.getObject('listParams').platform, $cookies.getObject('listParams').classic)
            .then(function(response){
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
   
        
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+10;
            // console.log(header);
            if(screen.width < 1000){
                $('.game-menu ul').css('display','none');
            }
            
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