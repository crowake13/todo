'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('DetailCtrl', function ($location, $route, $routeParams, $scope, todoService) {
    var vm = this;

    vm.todoList = function() {
      $location.path('/');
    };
    
    function getTodo(id) {
      todoService.todos.forEach(function(todo) {
        if (todo.id === id) {
          vm.todo = angular.copy(todo);
        }
      });
      
      if (!vm.todo) vm.todoList();

      if ($scope.todoForm) $scope.todoForm.$setPristine();
    }

    getTodo($routeParams.id);

    vm.todoSave = function(dontReload) {
      todoService.todos = todoService.editTodo(vm.todo.id, vm.todo.text, vm.todo.description, todoService.todos);
      if (!dontReload) $route.reload();
    };

    vm.todoToggle = function(saveFirst) {
      if (typeof(saveFirst) === 'undefined' && $scope.todoForm.$dirty) {
        $('#cautionModal').modal();
        return;
      }

      if (saveFirst) vm.todoSave(true);
      todoService.todos = todoService.toggleTodo(vm.todo.id, todoService.todos);
      getTodo(vm.todo.id);
    };

    vm.todoDelete = function() {
      todoService.todos = todoService.deleteTodo(vm.todo.id, todoService.todos);
      vm.todoList();
    };
  });
