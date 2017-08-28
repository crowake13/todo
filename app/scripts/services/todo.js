'use strict';

/**
 * @ngdoc service
 * @name todoApp.todoService
 * @description
 * # todoService
 * Service in the todoApp.
 */
angular.module('todoApp')
  .service('todoService', TodoService);

function TodoService(uuid) {
  this.generateId = function() {
    return uuid.v4();
  };

  var initialTodo = {
    text: 'Use AngularJS',
    completed: false,
    id: this.generateId()
  };

  this.todos = [initialTodo];
}

TodoService.prototype = {
  addTodo: function (text, todos) {
    return [
      {
        id: this.generateId(),
        completed: false,
        text: text
      }
    ].concat(todos);
  },

  completeTodo: function (id, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {completed: true}) :
        todo;
    });
  },

  uncompleteTodo: function (id, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {completed: false}) :
        todo;
    });
  },

  toggleTodo: function (id, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  },

  deleteTodo: function (id, todos) {
    return todos.filter(function (todo) {
      return todo.id !== id;
    });
  },

  editTodo: function (id, text, description, todos) {
    return todos.map(function (todo) {
      return todo.id === id ?
        Object.assign({}, todo, {text: text, description: description}) :
        todo;
    });
  },

  completeAll: function (todos) {
    var areAllMarked = todos.every(function (todo) {
      return todo.completed;
    });
    return todos.map(function (todo) {
      return Object.assign({}, todo, {completed: !areAllMarked});
    });
  },

  clearCompleted: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed === false;
    });
  }
};
