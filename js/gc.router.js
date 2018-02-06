(function(){

     'use strict'

     function panelStates($stateProvider,$urlRouterProvider,$locationProvider){
         
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
                url: '/detail/{id}/{kind}/',
                templateUrl: 'templates/game-detail.html',
                params : {relatedIds: null, relatedGames: null },
                controller: 'gameDetail as vm'
            })

            .state('search', {
                url: '/search',
                templateUrl: 'templates/search-list.html',
                params : { searchString: null },
                controller: 'searchListCtrl as vm'
            })
            .state('shopcar', {
                url: '/shopcar',
                templateUrl: 'templates/shop-car.html',
                controller: 'shopCarCtrl as vm'
            })
            
            $urlRouterProvider.otherwise('/index');
            
            //check browser support
          if(window.history && window.history.pushState)
                $locationProvider.html5Mode(true); 
     }

     angular
        .module('gcapp')
        .config(panelStates);

 }());