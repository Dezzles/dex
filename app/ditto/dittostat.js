'use strict';

angular.module('myApp.dittoStat', ['ngRoute' ])

.controller('DittoStatCtrl',[ '$scope', '$routeParams', function($scope, $routeParams ) {
	$scope.natid = parseInt($scope.natureid);
	$scope.Storage = new DittoStorage( $scope.id );
	
	$scope.updateStat = function( ) {
		var current = $scope.Storage.getValue( $scope.natid );
		current = current + 1;
		$scope.Storage.setValue( $scope.natid, current);
	}
	
	$scope.getStat = function ( ) {
		return  $scope.Storage.getValue( $scope.natid );
	}
	

}])

.directive('dittoStat', function () {
	return {
		scope: { resource: '=', natureid: '@', title: '@'},
		templateUrl: '/app/ditto/dittostat.html',
		controller: 'DittoStatCtrl'
	}
}
)
;

