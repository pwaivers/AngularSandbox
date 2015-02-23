(function() {
'use strict';

angular.module('angularSandboxApp')
.controller('projectsController', ['projectsService', projectsController]);
	
function projectsController(projectService){
	var vm = this;
	vm.title = 'Projects Page';
	vm.projects = projectService.getAll();
}

}());