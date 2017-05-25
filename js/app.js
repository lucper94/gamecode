var App = angular.module('App', []);

App.controller('gamesCtrl', function($scope, $http) {

  $scope.getName = function(name){
    if(name.length > 25) {
       return name.substr(0, 25)+'...';
    }else{
      return name;
    } 
    
  }
  $http.get('js/games.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});