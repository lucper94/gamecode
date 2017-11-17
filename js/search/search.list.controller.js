(function(){

     'use strict'

     function searchListCtrl($stateParams,$http,$cookies){

         var ctrl = this;
         

        ctrl.rangeSlider = {
            minValue: 0,
            maxValue: 12000,
            options: {
              floor: 0,
              ceil: 12000,
              step: 100,
              onEnd: function(id, newValue, highValue, pointerType) {
                ctrl.filterSlider();
                
              }
            }
          }
          
        

         // Asignamos el valor de busqueda a una cookie para cuando el usuario de click en regresar
         if($cookies.get('searchString') != null){

             //Cuando se busca un nuevo juego se asigna el valor nuevo a la cookie
             if($stateParams.searchString != null)
                $cookies.put('searchString', $stateParams.searchString, {path: "/"});
         }
         else
            $cookies.put('searchString', $stateParams.searchString, {path: "/"});

        ctrl.reverseOrder = true;
        ctrl.direction  = 'down';
        ctrl.searchedGame =   $cookies.get('searchString');     
        console.log($cookies.get('searchString'));
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
        
        ctrl.searchGames = function(val,lowerPrice,higherPrice){
            return $http.get('https://gamerscode.mx/beta/api/webpage/searchlist/' + val + "/" +  "0" + "/" + "10000000000")
                .then(function(response){
                    console.log(response);
                    ctrl.gamesObj = response.data.app_data;
                    ctrl.platforms = response.data.platforms;
                    ctrl.resize_header();
                });
        };
        ctrl.rangePrice='';
        ctrl.radioPrice ='';
        ctrl.priceFilter = function (lowerPrice,higherPrice){
            return $http.get('https://gamerscode.mx/beta/api/webpage/searchlist/' + ctrl.searchedGame   +  "/" + lowerPrice  + "/" + higherPrice)
            .then(function(response){
                ctrl.gamesObj = response.data.app_data;
                console.log(ctrl.gamesObj);
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
        }
        ctrl.platform = "";
        ctrl.platformFilter = function (lowerPrice,higherPrice){
            return $http.get('https://gamerscode.mx/beta/api/webpage/searchlist/' + ctrl.searchedGame   +  "/" + lowerPrice  + "/" + higherPrice )
            .then(function(response){
                ctrl.gamesObj = response.data.app_data;
                console.log(ctrl.gamesObj);
                ctrl.limit = 25;
                ctrl.predicate = 'Name';
                ctrl.loading=false;
            
            })
        }


            ctrl.filterSlider = function (){
              ctrl.priceFilter(ctrl.rangeSlider.minValue,ctrl.rangeSlider.maxValue);
        }
        
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+10;
            // console.log(header);
            $('.game-banner').css('margin-top',header);
            $('.filters').css('margin-top',header);
            // console.log('entro');
        }
        ctrl.searchGames($cookies.get('searchString'));
        ctrl.resize_header();
     }

     angular
        .module('gcapp')
        .controller('searchListCtrl',searchListCtrl)

 }());