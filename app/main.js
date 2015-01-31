'use strict';

/**
 * @ngdoc function
 * @name yoAngularSandboxApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularSandboxApp
 */
angular.module('yoAngularSandboxApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
