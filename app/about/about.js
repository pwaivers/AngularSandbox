'use strict';

/**
 * @ngdoc function
 * @name yoAngularSandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularSandboxApp
 */
angular.module('yoAngularSandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
