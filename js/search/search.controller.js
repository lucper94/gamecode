(function(){

     'use strict'

     function searchCtrl($http,listingService,limitToFilter,$state){
         
        var ctrl = this;
        
        ctrl.gotoDetail = function(event, listener){
            
            if(event != undefined){
                
                // User hits enter or taps on typehead
                if((event.which == 13 && listener != undefined) || (event.which == 1)){
                    
                    var selectedGame = ctrl.names.indexOf(ctrl.asyncSelected);
                    var selectedID = ctrl.ids.splice(selectedGame, 1);    
                    ctrl.names.splice(selectedGame, 1);
                    $state.go('detail', {id: selectedID[0], kind:'With_Box', relatedIds: ctrl.ids, relatedGames: ctrl.names});
                }
                // usert hits enter without using the typehead
                if(event.which == 13 && listener == undefined){
                    $state.go('search', {searchString: ctrl.asyncSelected });                    
                }

            }   
		};
        
        ctrl.searchGames = function(val){
            return $http.get('https://gamerscode.mx/metalgear/api/webpage/search/' + val)
                .then(function(response){
                    ctrl.ids = response.data.ID;
                    ctrl.names = response.data.Names;
                    ctrl.predicate = 'Name';
                    return limitToFilter(response.data.Names, 7);
                });
        };
   
     }
    
    
         angular
            .module('gcapp')
            .controller('searchCtrl',searchCtrl);

 }());