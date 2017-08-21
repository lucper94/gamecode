(function(){

     'use strict'

     function searchCtrl($http,listingService,limitToFilter,$state){
         
        var ctrl = this;
        
        ctrl.gotoDetail = function(event){
            if(event != undefined){
                
                // User hits enter
                if(event.which == 13){
                    var selectedGame = ctrl.names.indexOf(ctrl.asyncSelected);
                    if(selectedGame === -1){
                        console.log('Te enviare a la pagina de busqueda');
                    }
                    else{
                        var selectedID = ctrl.ids.splice(selectedGame, 1);    
                        ctrl.names.splice(selectedGame, 1);
                        $state.go('detail', {id: selectedID[0], kind:'With_Box', relatedIds: ctrl.ids, relatedGames: ctrl.names});
                    }
                    // var selectedID = ctrl.ids.splice(selectedGame, 1);    
                    // ctrl.names.splice(selectedGame, 1);
                }
                //user uses taps on result
                if(event.which == 1){
                    var selectedGame = ctrl.names.indexOf(ctrl.asyncSelected);
                    var selectedID = ctrl.ids.splice(selectedGame, 1);    
                    ctrl.names.splice(selectedGame, 1);
                    $state.go('detail', {id: selectedID[0], kind:'With_Box', relatedIds: ctrl.ids, relatedGames: ctrl.names});
                }
           }
           
           
            
		};
        
        ctrl.searchGames = function(val){
            return $http.get('http://159.203.210.238/metalgear/api/webpage/search/' + val)
                .then(function(response){
                    ctrl.ids = response.data.ID;
                    ctrl.names = response.data.Names;
                    return limitToFilter(response.data.Names, 7);
                });
        };

        ctrl.hola = function(){
            console.log(ctrl.asyncSelected);
        }
   
     }
    
    
         angular
            .module('gcapp')
            .controller('searchCtrl',searchCtrl);

 }());