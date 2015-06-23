'use strict';

angular.module('myApp.stats', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/stats', {
    templateUrl: 'app/stats/stats.html',
    controller: 'StatsCtrl'
  });
}

])

.controller('StatsCtrl', function($scope, $routeParams) {
	$scope.pokedexes = AllData.pokedexes;
	var storage = new DexStorage();
	for (var v in $scope.pokedexes ) {
		var compl = 0;
		for (var p in $scope.pokedexes[v].pokemon) {
			if ( storage.pokemonValue( $scope.pokedexes[v].pokemon[p] ) ) {
				compl = compl + 1;
			}
		}
		$scope.pokedexes[v].completion = compl;
	}
});

