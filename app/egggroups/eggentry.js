'use strict';

angular.module('myApp.eggEntry', ['ngRoute' ])

.controller('EggEntryCtrl', [ '$scope', '$routeParams' , function($scope, $routeParams ) {
	$scope.Storage = new EggGroupStorage(  );
	$scope.id = parseInt($scope.groupid);
	$scope.updateValue = function( ) {
		
		var current = $scope.Storage.getValue( $scope.id );
		current = current + 1;
		$scope.Storage.setValue( $scope.id, current);
	}
	
	$scope.getValue  = function ( ) {
		return  $scope.Storage.getValue( $scope.id );
	}
	

} ])

.directive('eggEntry', function () {
	return {
		scope: { resource: '=', groupid: '@', title: '@'},
		templateUrl: '/app/egggroups/eggentry.html',
		controller: 'EggEntryCtrl'
	}
}
)
;

