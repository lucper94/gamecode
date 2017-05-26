var App = angular.module('App', []);

App.controller('gamesCtrl', function($scope, $http) {

	$http({
        method : "GET",
        url : "game_handler.php"
    }).then(function mySuccess(response) {
        $scope.todos = response.data;
    }, function myError(response) {
        $scope.todos = response.statusText;
    });

  $scope.getName = function(name){
    if(name.length > 25) {
       return name.substr(0, 25)+'...';
    }else{
      return name;
    } 
    
  }
  /*$http.get('js/games.json')
       .then(function(res){
          $scope.todos = res.data;                
        });*/
});