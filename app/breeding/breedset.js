'use strict';

angular.module('myApp.breedSet', ['ngRoute' ])

.controller('BreedSetCtrl', function($scope, $routeParams ) {
	var id = $scope.id;
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

.directive('breedSet', function () {
	return {
		scope: { resource: '=', id: '@', title: '@'},
		templateUrl: '/app/breeding/breedset.html',
		controller: 'BreedSetCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

