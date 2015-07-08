'use strict';

angular.module('myApp.statBlock', ['ngRoute' ])

.controller('StatBlockCtrl', [ function( ) {
} ])

.directive('statBlock', function () {
	return {
		scope: { resource: '=', row: '=', dex: '=' },
		templateUrl: '/app/stats/statblock.html',
		controller: 'StatBlockCtrl'
	}
}
)
;

