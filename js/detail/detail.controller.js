(function(){

     'use strict'

     function gameDetail(detailService,$stateParams,$cookies,$timeout){
         
        var ctrl = this;
        console.log($stateParams);
        ctrl.relatedSearch = $stateParams.relatedGames;
        if($cookies.getObject('detailParams') != undefined){
            
            //Cuando se elige una plataforma diferente.
            if($stateParams.id != null){
                
                var detailParams = {
                    gameID:  $stateParams.id,
                    kind:  $stateParams.kind
                }
                
                $cookies.putObject('detailParams', detailParams, {path: "/"});
            }
            

        }
        
        else{
            
            if($stateParams.id != null){
                
                var detailParams = {
                    gameID:  $stateParams.id,
                    kind:  $stateParams.kind
                }
            }

            else{
                var detailParams = {
                    gameID:  241,
                    kind: 'With_Box'
                }
            }

            $cookies.putObject('detailParams', detailParams, {path: "/"});

        }

        ctrl.gameId = $cookies.getObject('detailParams').gameID;
        ctrl.kind = $cookies.getObject('detailParams').kind;

        if($stateParams.relatedIds != null){
            ctrl.relatedIds = $stateParams.relatedIds;
            ctrl.relatedGames = $stateParams.relatedGames;
        }
        
        detailService.getDetail(ctrl.gameId,ctrl.kind)
            .then(function(response){
                console.log(response);
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

    ctrl.timeInMs = 0;
    ctrl.start = 0;
    ctrl.finish = ctrl.start+4;
    var countUp = function() {
        ctrl.start ++;
        ctrl.finish = ctrl.start+4;
        if(ctrl.finish > ctrl.relatedIds.length){
            ctrl.start = 0;
            ctrl.finish = ctrl.start+4; 
        }
        $timeout(countUp, 3000);
        ctrl.related = ctrl.relatedIds.slice(ctrl.start, ctrl.finish);
        //console.log(ctrl.related);
    }

    $timeout(countUp, 3000);
    
  

     }

     angular
        .module('gcapp')
        .controller('gameDetail', gameDetail);

 }());