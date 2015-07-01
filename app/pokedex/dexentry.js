'use strict';

angular.module('myApp.dexEntry', ['ngRoute' ])

.controller('DexEntryCtrl', function($scope, $routeParams ) {
	var id = $scope.id;
	$scope.Pokemon = AllData.allPokemon[id];
	$scope.getValue = function () {
		return $scope.$parent.storage.getValue( $scope.id );
	}
	$scope.updateValue = function( ) {
		var test = $scope.$parent.storage;
		var current = test.getValue( $scope.id );
		test.setValue($scope.id, current + 1);
		$scope.$parent.updateCode();
	}
		
})

.directive('dexEntry', function () {
	return {
		scope: { resource: '=', id: '=' },
		templateUrl: '/app/pokedex/dexentry.html',
		controller: 'DexEntryCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

