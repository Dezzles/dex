'use strict';

angular.module('myApp.tools', ['ngRoute' ])

.controller('ToolsCtrl', function($scope, $routeParams) {

})

.directive('toolsHeader', function () {
	return {
		scope: { resource: '=' },
		templateUrl: '/app/tools/tools.html',
		controller: 'ToolsCtrl',
		link: function ($scope, element) {
			 
		}
	}
}
)
;

