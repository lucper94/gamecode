(function(){

     'use strict'

     function panelStates($stateProvider,$urlRouterProvider){
         
         $stateProvider
         
            .state('index', {
                url: '/index',
                templateUrl: 'templates/index.html',
                controller: 'indexCtrl as vm'
            })

            .state('listing', {
                url: '/listing',
                templateUrl: 'templates/game-list.html',
                params: {kind: null, platform: null, classic:null},
                controller: 'listingCtrl as vm'
            })

            .state('detail', {
                url: '/detail',
                templateUrl: 'templates/game-detail.html',
                params : { id: null, kind: null },
                controller: 'gameDetail as vm'
            })
            
            $urlRouterProvider.otherwise('/index');
     }

     angular
        .module('gcapp')
        .config(panelStates);

 }());