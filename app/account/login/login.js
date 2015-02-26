/**
 * Created by pwaivers on 2/26/15.
 */
(function(){
'use strict';

angular.module('angularSandboxApp')
    .controller('loginController', function(){
        var that = this;

        that.userName = '';
        that.password = '';
    });

}());