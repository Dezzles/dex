'use strict';

angular.module('myApp.breedPair', ['ngRoute' ])

.controller('BreedPairCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {
	var id = $scope.setid;
	$scope.childSet1 = id * 2;
	$scope.childSet2 = id * 2 + 1;
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

.directive('breedPair', function () {
	return {
		scope: { resource: '=', setid: '@', title: '@'},
		templateUrl: '/app/breeding/breedPair.html',
		controller: 'BreedPairCtrl'
	}
}
)
;

