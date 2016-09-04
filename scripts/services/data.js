'use strict';

angular.module('todoListApp')
.service('dataService', function($http){
  this.helloConsole = function() {
    console.log('this is the helloConsole Service!');
  }
  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  };

  this.deleteTodo = function(todo) {
    console.log("The " + todo.name + " todo has been deleted!")
    // other logic...
  };
  this.saveTodos = function(todo) {
    console.log(todo.length + " todos has been saved!")
    // other logic...
  };
});
