angular.module("todoListApp", [])

.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
    $scope.learningNgChange = function() {
    console.log("Input changed!");
  };

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "feed the dog"},
    {"name": "water the lawn"},
    {"name": "pay the bills"},
    {"name": "run"},
    {"name": "swim"}
  ]

});
