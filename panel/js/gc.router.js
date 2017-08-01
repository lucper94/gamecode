(function(){

     'use strict'

     function panelStates($stateProvider,$urlRouterProvider){
         
         $stateProvider
         
            .state('index', {
                url: '/index/{kind}/{platform}/{classic}',
                templateUrl: 'panel/templates/game-list.html',
                // params: {kind: null, platform: null, classic:null},
                controller: 'indexCtrl as vm'
            })

            .state('detail', {
                url: '/detail',
                templateUrl: 'panel/templates/game-detail.html',
                params : { id: null, },
                controller: 'gameDetail as vm'
            })
            
            $urlRouterProvider.otherwise('/index');
     }

     angular
        .module('games')
        .config(panelStates);

 }());