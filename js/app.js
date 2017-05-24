var App = angular.module('App', []);

App.controller('gamesCtrl', function($scope, $http) {
  $http.get('js/games.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});