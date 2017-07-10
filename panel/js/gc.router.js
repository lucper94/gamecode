(function(){

     'use strict'

     function panelStates($stateProvider,$urlRouterProvider){
         
         $stateProvider
         
            .state('index', {
                url: '/index',
                templateUrl: 'panel/templates/game-list.html',
                controller: 'listCtrl as vm'
            })

            .state('detail', {
                url: '/detail/:id',
                templateUrl: 'panel/templates/game-detail.html',
                controller: 'gameDetail as vm'
            })
            
            $urlRouterProvider.otherwise('/index');
     }

     angular
        .module('games')
        .config(panelStates);

 }());