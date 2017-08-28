'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:todoList
 * @description
 * # todoList
 */
angular.module('todoApp')
  .directive('todoList', function () {
    return {
      template: `
      <ul class="list-group">
        <li class="list-group-item">
          <div class="row">
            <div class="col-sm-6">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search..." ng-model="search.text" />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button" ng-click="search.text = ''" ng-disabled="!search.text.length"><span class="glyphicon glyphicon-remove"></span></button>
                </span>
              </div><!-- /input-group -->
            </div>
            <div class="col-sm-6">
              <div class="btn-group pull-right" role="group" aria-label="...">
                <button type="button" class="btn btn-default" ng-class="{active: search.completed === undefined}" ng-click="search.completed = undefined">All <span class="badge" ng-bind="todoList.length"></span></button>
                <button type="button" class="btn btn-default" ng-class="{active: search.completed === true}" ng-click="search.completed = true">Competed</button>
                <button type="button" class="btn btn-default" ng-class="{active: search.completed === false}" ng-click="search.completed = false">Uncompleted</span></button>
              </div>
            </div>
          </div>
        </li>
        <todo-list-item ng-repeat="todo in todoList | filter:search" 
                        todo-selected="todo.completed" 
                        todo="todo" 
                        todo-select="oodoSelect()(todo.id)" 
                        todo-edit="todoEdit()(todo.id)"
                        todo-delete="todoDelete()(todo.id)"></todo-list-item>
      </ul>`,
      restrict: 'E',
      replace: true,
      scope: {
        todoList: '=',
        todoSelect: '&',
        todoEdit: '&',
        todoDelete: '&'
      }
    };
  });
