'use strict';

angular.module('todoListApp')

.controller('mainCtrl', function($scope, dataService) {

  $scope.helloWorld = function() {
    console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
  };
    $scope.addTodo = function(){

      var todo = { name: "This as a new todo."};
      $scope.todos.unshift(todo);
  };

  dataService.getTodos(function(response){
      console.log(response.data)
      $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, index){
    dataService.deleteTodo(todo);
    $scope.todos.splice(index, 1)
  };
 $scope.saveTodos = function(todo){
   var filteredTodos = $scope.todos.filter(function(todo){
     if(todo.edited) {
       return todo;
     };
   });
    dataService.saveTodos(filteredTodos);
  };


})