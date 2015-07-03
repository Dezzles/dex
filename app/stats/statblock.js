'use strict';

angular.module('myApp.statBlock', ['ngRoute' ])

.controller('StatBlockCtrl', function($scope, $routeParams ) {
})

.directive('statBlock', function () {
	return {
		scope: { resource: '=', row: '=', dex: '=' },
		templateUrl: '/app/stats/statBlock.html',
		controller: 'StatBlockCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

