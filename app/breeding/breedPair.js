'use strict';

angular.module('myApp.breedPair', ['ngRoute' ])

.controller('BreedPairCtrl', function($scope, $routeParams ) {
	var id = $scope.setid;
	$scope.childSet1 = id * 2;
	$scope.childSet2 = id * 2 + 1;
	$scope.Storage = new BreedStorage( $scope.id );
	$scope.updateValue = function( val ) {
		var current = $scope.Storage.statValue( val );
		current = current + 1;
		$scope.Storage.update( val, current);
	}
	
	$scope.getValue = function ( val) {
		return  $scope.Storage.statValue( val );
	}
	

})

.directive('breedPair', function () {
	return {
		scope: { resource: '=', setid: '@', title: '@'},
		templateUrl: '/app/breeding/breedPair.html',
		controller: 'BreedPairCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;
