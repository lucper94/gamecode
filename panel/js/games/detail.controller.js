(function(){

     'use strict'

     function gameDetail(detailService,$stateParams){
         var ctrl = this;
         ctrl.gameId = $stateParams.id;
         
         detailService.getDetail(ctrl.gameId)
            .then(function(response){
                console.log(response);
                ctrl.gameDetail = response.data;
                ctrl.loading=false;
            })

     }

     angular
        .module('games')
        .controller('gameDetail', gameDetail);

 }());