(function(){

     'use strict'

     function searchListCtrl($stateParams,$http){
         var ctrl = this;
        console.log($stateParams);

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

                case 'platform':
                if(reverse == true){
                    ctrl.gamesObj.sort(function(a,b){
                        var nameA = a.Platform.toUpperCase(); // ignore upper and lowercase
                        var nameB = b.Platform.toUpperCase(); // ignore upper and lowercase
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
                        var nameA = a.Platform.toUpperCase();
                        var nameB = b.Platform.toUpperCase(); 
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
                           return a.Sale - b.Sale;
                        }).reverse();
                    }
                    else{
                        ctrl.gamesObj.sort(function(a,b){
                            return a.Sale - b.Sale;
                        });
                    }
                    
                break;
            
                default:
                break;
            }
            
        
        }
        
        ctrl.searchGames = function(val){
            return $http.get('https://gamerscode.mx/metalgear/api/webpage/searchlist/' + val)
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