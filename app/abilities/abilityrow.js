'use strict';

angular.module('myApp.abilityRow', ['ngRoute' ])

.controller('AbilityRowCtrl', function($scope, $routeParams ) {
	$scope.rowData = $scope.row;
	$scope.Pokemon = AllData.allPokemon[$scope.row.id];
	$scope.Ability = abilities[$scope.row.ability];
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

