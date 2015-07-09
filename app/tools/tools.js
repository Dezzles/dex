'use strict';

angular.module('myApp.tools', [])

.controller('ToolsCtrl', function( $scope ) {
	$scope.tools = ToolSet.tools;
})

.directive('toolsHeader', function () {
	return {
		scope: { resource: '=' },
		templateUrl: '/app/tools/tools.html',
		controller: 'ToolsCtrl'
	}
}
)
;

