'use strict';

/**
 * @ngdoc directive
 * @name todoApp.directive:todoInput
 * @description
 * # todoInput
 */
angular.module('todoApp')
  .directive('todoInput', function () {
    return {
      template: `
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Something I need to do..." ng-model="todoText" ng-keypress="handleSubmit($event)" />
          <span class="input-group-btn">
            <button class="btn btn-success" type="button" ng-click="handleSubmit($event)" ng-disabled="!todoText.length">ADD</button>
          </span>
        </div><!-- /input-group -->`,
      restrict: 'E',
      scope: {
        todoSubmit: '&'
      },
      link: function postLink(scope, element, attrs) {
        function submit(text) {
          if (!text || !text.length) return;

          scope.todoSubmit()(text);
          scope.todoText = '';
        }

        scope.handleSubmit = function (e) {
          switch(e.type) {
            case 'click':
              submit(scope.todoText);
              break;
            case 'keypress':
              if (e.keyCode === 13) submit(scope.todoText);
              break;
          }
        }
      }
    };
  });
