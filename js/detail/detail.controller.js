(function(){

     'use strict'

     function gameDetail(detailService,$stateParams,$cookies){
         
        var ctrl = this;

        if($cookies.getObject('detailParams') != undefined){
            
            //Cuando se elige una plataforma diferente.
            if($stateParams.id != null){
                
                var detailParams = {
                    gameID:  $stateParams.id
                }
                
                $cookies.putObject('detailParams', detailParams, {path: "/"});
            }
            

        }
        
        else{

           var detailParams = {
                gameID:  241,
                
            }
            
            $cookies.putObject('detailParams', detailParams, {path: "/"});

        }

        ctrl.gameId = $cookies.getObject('detailParams').gameID;
        
        detailService.getDetail(ctrl.gameId)
            .then(function(response){
                ctrl.gameDetail = response.data;
                ctrl.loading=false;
            })

        angular.element(document).ready(function(){
            ctrl.resize_header();
            $( ".game-footer" ).addClass( "footer-detail" );
        });
        
        $(window).resize(function(){
            ctrl.resize_header();
        });

        ctrl.resize_header = function(){
            var header= $('.game-header').height()+20;
            $('.game-banner').css('margin-top',header);
            $('.game-footter').css('bottom',0);
        }
        

     }

     angular
        .module('gcapp')
        .controller('gameDetail', gameDetail);

 }());