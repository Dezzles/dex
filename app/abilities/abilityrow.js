'use strict';

angular.module('myApp.abilityRow', ['ngRoute' ])

.controller('AbilityRowCtrl', function($scope, $routeParams ) {
	$scope.rowData = $scope.row;
	$scope.Pokemon = AllData.allPokemon[$scope.row.id];
	$scope.Ability = abilities[$scope.row.ability];
/*	$scope.Storage = new BreedStorage( $scope.id );
	$scope.updateValue = function( val ) {
		var current = $scope.Storage.statValue( val );
		current = current + 1;
		$scope.Storage.update( val, current);
	}
	
	$scope.getValue = function ( val) {
		return  $scope.Storage.statValue( val );
	}*/
	

})

.directive('abilityRow', function () {
	return {
		scope: { resource: '=', row: '=', pkmn: '@' },
		templateUrl: '/app/abilities/abilityrow.html',
		controller: 'AbilityRowCtrl',
		link: function ($scope, element) {
			
		}
	}
}
)
;

