(function(){

     'use strict'

     function listCtrl($http,listService,limitToFilter){
         
         var ctrl = this;


    

             ctrl.hola = function (){ 

                console.log(ctrl.names);
                console.log(ctrl.names.indexOf(ctrl.asyncSelected));
                var selectedGame = ctrl.names.indexOf(ctrl.asyncSelected);
                console.log(ctrl.ids[selectedGame]);
                location.href='search.html#!/detail/' + ctrl.ids[selectedGame];
								};
							
             console.log('hi');
             ctrl.searchGames = function(val) {
    return $http.get('http://159.203.210.238/metalgear/api/webpage/search/' + val)
        .then(function(response){
        console.log(response);
            ctrl.ids = response.data.ID;
            ctrl.names = response.data.Names;
            return limitToFilter(response.data.Names, 7);

    });
  };
   


           
     

     }
    
    
         angular
            .module('gcapp')
            .controller('listCtrl',listCtrl);

 }());