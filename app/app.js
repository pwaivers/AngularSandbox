'use strict';

angular
  .module('angularSandboxApp', ['ui.router', 'ngLodash', 'formly'])
  .config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'about/about.html'
		})
		.state('projects', {
			url: '/projects',
			templateUrl: 'projects/projects.html',
			controller: 'projectsController as projectsCtrl'
		})
		.state('projects.editor', {
			url: '/{id}',
			templateUrl: 'projects/project.editor.html',
			controller: 'projectEditorController as vm'
		});
  });
