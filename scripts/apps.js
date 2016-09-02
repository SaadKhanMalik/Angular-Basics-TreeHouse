angular.module("todoListApp", []);
.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log("loging some text!!");
  };


  $scope.todos = [
    {"name": "clean the house"},
    {"name": "wash the dog"},
    {"name": "water the lawn"},
    {"name": "pay the bills"},
    {"name": "run"},
    {"name": "swim"}
  ]




});
