(function(){

     'use strict'

     function listCtrl(listService){
         
         var ctrl = this;

         /*ctrl.gamesObj = [
         {
             "ID_Product":"1",
             "Platform":"Xbox 360",
             "Name":"Halo 4",
             "Price_S":"400",
             "Price_P":"250",
             "Price_E":"280"
             
         }]*/
         listService.getGames()
            .then(function(response){
                console.log(response);
                ctrl.gamesObj = response.data.app_data;
            })
         console.log(ctrl.gamesObj);
     }

     angular
        .module('games')
        .controller('listCtrl',listCtrl);

 }());