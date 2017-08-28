'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:todoListItem
 * @description
 * # todoListItem
 */
angular.module('todoApp')
  .directive('todoListItem', function () {
    return {
      template: `<li class="list-group-item todo-list-item">
        <input type="checkbox" ng-model="todoSelected" ng-change="::todoSelect($event)" />
        <a ng-href="#!/{{::todo().id}}" ng-class="{selected: todoSelected}" ng-bind="::todo().text"></a>
        <div class="btn-group pull-right" role="group" aria-label="...">
          <button class="btn btn-primary" ng-click="::todoEdit($event)"><span class="glyphicon glyphicon-pencil"></span></button>
          <button class="btn btn-danger" ng-click="::todoDelete($event)"><span class="glyphicon glyphicon-trash"></span></button>
        </div>        
      </li>`,
      restrict: 'E',
      replace: true,
      scope: {
        todoSelected: '=',
        todoSelect: '&',
        todo: '&',
        todoEdit: '&',
        todoDelete: '&'
      }
    };
  });
