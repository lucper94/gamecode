(function(){

     'use strict'

     function menuCtrl($compile,$scope,listingService){
         
        var ctrl = this;

       
      
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
         
     })
        
     }

     angular
        .module('gcapp')
        .controller('menuCtrl', menuCtrl)

 }());