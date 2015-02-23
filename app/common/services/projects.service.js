(function(){
'use strict';
	
angular.module('angularSandboxApp')
.factory('projectsService', ['lodash', projectsService]);
				 
function projectsService(lodash){
  var _ = lodash;
	
	var projects = {};
  projects.getAll = getAll;
	projects.getProjectById = getProjectById;
	projects.getInstrumentTypes = getInstrumentTypes;
	
	var dummyData = 
	[
		{
			id: 1,
			name: 'Mad World',
			userName: 'chubs3000',
			instrument: 'guitar',
			description: 'This is a cover of the Gary Jules song (which is cover of an older song)'
		},
		{
			id: 27,
			name: 'Annie girl by Ben Folds',
			userName: 'chubs300',
			instrument: 'piano'
		}
	];
	
	function getAll(){
		return dummyData;
	}
	
	function getProjectById(id){
		var project = _.findWhere(dummyData, {'id': id});
		return project;
	}
	
	function getInstrumentTypes() {
		return ['guitar', 'piano', 'ukulele', 'drums', 'vocal', 'bass', 'other'];
	}
		
  return projects;
 
}
	
}());