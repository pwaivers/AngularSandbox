'use strict';

/**
 * @ngdoc overview
 * @name yoAngularSandboxApp
 * @description
 * # yoAngularSandboxApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularSandboxApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sandbox', {
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
