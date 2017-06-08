(function(){

     'use strict'

     function listCtrl(){
         
         var ctrl = this;
         
         ctrl.gamesObj = 
         {
             "ID_Product":"",
             "Platform":"",
             "Name":"",
             "Price_S":"",
             "Price_p":"",
             "Price_E":""

         }
     }

     angular
        .module('games')
        .controller('listCtrl',listCtrl)

 }());