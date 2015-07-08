'use strict';

angular.module('myApp.breedSet', ['ngRoute' ])

.controller('BreedSetCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {
	var id = $scope.id;
	$scope.Storage = new BreedStorage( $scope.id );
	$scope.updateValue = function( val ) {
		var current = $scope.Storage.getValue( val );
		current = current + 1;
		$scope.Storage.setValue( val, current);
	}
	
	$scope.getValue = function ( val) {
		return  $scope.Storage.getValue( val );
	}
	

} ])

.directive('breedSet', function () {
	return {
		scope: { resource: '=', id: '@', title: '@'},
		templateUrl: '/app/breeding/breedset.html',
		controller: 'BreedSetCtrl'
	}
}
)
;

