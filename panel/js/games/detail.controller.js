(function(){

     'use strict'

     function gameDetail($stateParams){
         var ctrl = this;
         ctrl.gameId = $stateParams.id;

     }

     angular
        .module('games')
        .controller('gameDetail', gameDetail);

 }());