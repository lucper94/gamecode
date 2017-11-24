(function(){

     'use strict'

     function listingCtrl($http,listingService,limitToFilter,$stateParams,$cookies,$compile,$scope){
         
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

            if($stateParams.kind != null){
                
                var listParams = {
                    kind:  $stateParams.kind,
                    platform:  $stateParams.platform,
                    classic:  $stateParams.classic
                }
            }
            else{

                var listParams = {
                    kind:  'Game',
                    platform:  'PS4',
                    classic:  'False',
                    
                }
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

        ctrl.modal = function(pricee,pricep){
            ctrl.price_e = pricee;
            ctrl.price_p = pricep;
            $("#myStock").modal();
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
        listingService.getGames(ctrl.kind, $cookies.getObject('listParams').platform, $cookies.getObject('listParams').classic,0,100000)
            .then(function(response){
                ctrl.gamesObj = response.data.app_data;
                console.log($cookies.getObject('listParams'));
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
                ctrl.resize_header();
                ctrl.loading = false;
                
                
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
       ctrl.radioPrice ='';
        ctrl.priceFilter = function (lowerPrice,higherPrice){
            listingService.getGames(ctrl.kind, $cookies.getObject('listParams').platform, $cookies.getObject('listParams').classic,lowerPrice,higherPrice)
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
      
      listingService.getMenu().then(function successCallback(response){
        // SmartMenus init
$(function() {
$('#main-menu').smartmenus({
  subMenusSubOffsetX: 1,
  subMenusSubOffsetY: -8
});
});

// SmartMenus mobile menu toggle button
$(function() {
var $mainMenuState = $('#main-menu-state');
if ($mainMenuState.length) {
  // animate mobile menu
  $mainMenuState.change(function(e) {
    var $menu = $('#main-menu');
    if (this.checked) {
      $menu.hide().slideDown(250, function() { $menu.css('display', ''); });
    } else {
      $menu.show().slideUp(250, function() { $menu.css('display', ''); });
    }
  });
  // hide mobile menu beforeunload
  $(window).bind('beforeunload unload', function() {
    if ($mainMenuState[0].checked) {
      $mainMenuState[0].click();
    }
  });
}
});
         console.log(response.data);
         ctrl.menu = response.data;
         var menu = response.data;
         var $menu = $('#main-menu');
         $menu.html('');
         var classic = "'false'";
         var platform = "'Game'";
         var kind = "'Xbox 360'";
         
         var indexMain = 0;
         for (var key in menu) {
             console.log(key);
             $menu.append("<li id='"+indexMain+"'><a   >"+key+"</a> <li>");  
             $('#'+indexMain).append('<ul id="ul'+indexMain+'"> </ul>');
             
             var indexSub = 0;
             for (var key2 in menu[key]) {
                $('#ul'+ indexMain).append('<li id="id'+indexMain+'-'+indexSub+'"><a href="#">'+key2+'</a></li>');
               console.log('#'+indexMain+'.'+indexSub);
                $('#id'+indexMain+'-'+indexSub).append('<ul id="ul'+indexMain+'-'+indexSub+'"> </ul>');
                
                menu[key][key2].forEach(function(entry) {  
                    var descripcion = '';
                    switch (entry.kind) {
                        case 'Game':
                            descripcion = 'Juegos';
                            break;

                        case 'Accessory':
                            descripcion = 'Consolas/Accesorios';
                            break;

                        default:
                            break;
                    }
                    var classic = "'"+entry.classic+"'";
                    var platform = "'"+entry.uisref+"'";
                    var kind = "'"+entry.kind+"'";
                    var myEl = angular.element( document.querySelector('#ul'+indexMain+'-'+indexSub ) );
                    myEl.append('<li><a ui-sref="listing({kind:'+kind+', platform: '+platform+', classic: '+classic+'})">'+descripcion+'</a></li>');
                    //$ ('#ul'+indexMain+'-'+indexSub).append('<li><a ui-sref="getPlatform({kind:'+kind+', platform: '+platform+', classic: '+classic+'})">'+descripcion+'</a></li>');
                
               })
               indexSub++;
            }
            indexMain++;
        }
         $menu.smartmenus('refresh');
         $compile($menu)($scope);

         
         // add a sub menu with 3 items to the new main menu item

         
         // refresh the menu after the DOM op*erations
         ; 
         
     })
        
     }

     angular
        .module('gcapp')
        .controller('listingCtrl', listingCtrl)

 }());