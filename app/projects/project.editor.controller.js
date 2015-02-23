(function(){
'use strict';

angular.module('angularSandboxApp')
.controller('projectEditorController', ['projectsService', '$stateParams', '$state', projectEditorController]);
	
function projectEditorController(projectsService, $stateParams, $state) {
	var vm = this;
	var id = $stateParams.id;
	
	if (id === 'new'){
		// create a new project
	}
	if (parseInt(id) != id){
		$state.go('projects');
	}
	
	vm.instruments = projectsService.getInstrumentTypes();
	
	vm.project = projectsService.getProjectById(parseInt(id));
	
	vm.formlyFields = [
    {
      key: 'id',
			type: 'input',
			templateOptions: {
				label: 'Project ID'
			}
    },
    {
      key: 'name',
      type: 'input',
			templateOptions: {
				label: 'Project Name',
				placeHolder: 'Enter Project Name'
			}
    },
    {
      key: 'description',
      type: 'textarea',
			templateOptions: {
				label: 'Description',
				rows: 5
			}
    }
  ];
}
	

}());