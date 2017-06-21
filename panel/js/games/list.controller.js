(function(){

     'use strict'

     function listCtrl(listService){
         
         var ctrl = this;

            listService.getGames()
            .then(function(response){
                console.log(response);
                ctrl.gamesObj = response.data.app_data;
                ctrl.limit = 25;
                ctrl.predicate = '-SP';
            })

       

     }
    
    
         angular
        .module('games')
        .controller('listCtrl',listCtrl);

 }());