(function(){

     'use strict'

     function searchCtrl($http,listingService,limitToFilter,$state){
         
        var ctrl = this;
        
        ctrl.gotoDetail = function(){ 
            var selectedGame = ctrl.names.indexOf(ctrl.asyncSelected);
                $state.go('detail', {id: ctrl.ids[selectedGame], kind:'With_Box'});
		};
        
        ctrl.searchGames = function(val){
            return $http.get('http://159.203.210.238/metalgear/api/webpage/search/' + val)
                .then(function(response){
                    ctrl.ids = response.data.ID;
                    ctrl.names = response.data.Names;
                    return limitToFilter(response.data.Names, 7);
                });
        };
   
     }
    
    
         angular
            .module('gcapp')
            .controller('searchCtrl',searchCtrl);

 }());