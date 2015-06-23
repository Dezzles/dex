'use strict';

angular.module('myApp.dexEntry', ['ngRoute' ])

.controller('DexEntryCtrl', function($scope, $routeParams ) {
	var id = $scope.id;
	$scope.Pokemon = AllData.allPokemon[id];
	$scope.updateValue = function( ) {
		var test = new DexStorage( );
		var current = test.pokemonValue( $scope.id );
		test.update($scope.id, current + 1);
		$scope.Pokemon = AllData.allPokemon[$scope.id];
	}
	
	$scope.getValue = function () {
		var test = new DexStorage( );
		return test.pokemonValue( $scope.id );
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

