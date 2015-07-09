'use strict';

angular.module('myApp.berryEntry', ['ngRoute' ])

.controller('BerryEntryCtrl', [ '$scope', '$routeParams' , function($scope, $routeParams ) {
	$scope.id = parseInt($scope.groupid);
	$scope.updateValue = function( ) {
		
		var current = $scope.$parent.storage.getValue( $scope.id );
		current = current + 1;
		$scope.$parent.storage.setValue( $scope.id, current);
	}
	
	$scope.getValue  = function ( ) {
		return  $scope.$parent.storage.getValue( $scope.id );
	}
	

} ])

.directive('berryEntry', function () {
	return {
		scope: { resource: '=', groupid: '@', title: '@'},
		templateUrl: '/app/berries/berryentry.html',
		controller: 'BerryEntryCtrl'
	}
}
)
;

