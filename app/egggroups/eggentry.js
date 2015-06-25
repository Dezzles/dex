'use strict';

angular.module('myApp.eggEntry', ['ngRoute' ])

.controller('EggEntryCtrl', function($scope, $routeParams ) {
	$scope.Storage = new EggGroupStorage(  );
	$scope.id = parseInt($scope.groupid);
	$scope.updateValue = function( ) {
		
		var current = $scope.Storage.getValue( $scope.id );
		current = current + 1;
		$scope.Storage.update( $scope.id, current);
	}
	
	$scope.getValue  = function ( ) {
		return  $scope.Storage.getValue( $scope.id );
	}
	

})

.directive('eggEntry', function () {
	return {
		scope: { resource: '=', groupid: '@', title: '@'},
		templateUrl: '/app/egggroups/eggEntry.html',
		controller: 'EggEntryCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

