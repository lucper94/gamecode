(function(){

     'use strict'

     function gameDetail(detailService,$stateParams){
         var ctrl = this;

         ctrl.gameId = $stateParams.id;
         angular.element(document).ready(function () {
            ctrl.resize_header();
         });
         detailService.getDetail(ctrl.gameId)
            .then(function(response){
                console.log(response);
                ctrl.gameDetail = response.data;
                ctrl.loading=false;
            })
        $(window).resize(function(){
            ctrl.resize_header();
        });
        ctrl.resize_header = function(){
            var header= $('.game-header').height()+20;
            console.log(header);
            $('.game-banner').css('margin-top',header);
            $('.game-footter').css('bottom',0);
        }
        

     }

     angular
        .module('games')
        .controller('gameDetail', gameDetail);

 }());