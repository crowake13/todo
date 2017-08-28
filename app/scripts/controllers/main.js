'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($location, todoService) {
    var vm = this;

    vm.todos = todoService.todos;

    vm.todoSubmit = function (text) {
      vm.todos = todoService.todos = todoService.addTodo(text, todoService.todos);
    };

    vm.todoSelect = function (id) {
      vm.todos = todoService.todos = todoService.completeTodo(id, todoService.todos);
    };

    vm.todoEdit = function (id) {
      $location.path('/' + id);
    };

    vm.todoDelete = function (id) {
      vm.todos = todoService.todos = todoService.deleteTodo(id, todoService.todos);
    };
  });
