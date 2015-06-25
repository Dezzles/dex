'use strict';

angular.module('myApp.dittoStat', ['ngRoute' ])

.controller('DittoStatCtrl', function($scope, $routeParams ) {
	$scope.natid = parseInt($scope.natureid);
	$scope.Storage = new DittoStorage( $scope.id );
	
	$scope.updateStat = function( ) {
		var current = $scope.Storage.statValue( $scope.natid );
		current = current + 1;
		$scope.Storage.update( $scope.natid, current);
	}
	
	$scope.getStat = function ( ) {
		return  $scope.Storage.statValue( $scope.natid );
	}
	

})

.directive('dittoStat', function () {
	return {
		scope: { resource: '=', natureid: '@', title: '@'},
		templateUrl: '/app/ditto/dittostat.html',
		controller: 'DittoStatCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

