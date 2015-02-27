/**
 * Created by pwaivers on 2/26/15.
 */
(function(){
'use strict';

angular.module('angularSandboxApp')
.directive('usernameTaken', function ($q, $timeout) {

    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            var usernames = ['pwaivers', 'chubs3000'];

            ctrl.$asyncValidators.usernameTaken = function(modelValue, viewValue){
                if (ctrl.$isEmpty(viewValue)){
                    return $q.when();
                }

                var def = $q.defer();

                $timeout(function(){
                    if (usernames.indexOf(viewValue) === -1){
                        def.resolve();
                    } else {
                        def.reject();
                    }
                }, 500);

                return def.promise;
            };
        }
    };
});

}());