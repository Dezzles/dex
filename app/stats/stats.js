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
	var pokedexes = AllData.pokedexes;
	var storage = new DexStorage();
	$scope.pokedexes = [];
	$scope.tools = [];
	for (var v in pokedexes ) {
		var compl = 0;
		for (var p in pokedexes[v].pokemon) {
			if ( storage.getValue( pokedexes[v].pokemon[p] ) ) {
				compl = compl + 1;
			}
		}
		$scope.pokedexes.push( new CreateData( pokedexes[v].name, compl, pokedexes[v].pokemon.length ) );
	}
	storage = new AbilityStorage();
	var compl = 0;
	for (var v in AllData.abilities) {
		if (storage.getValue( AllData.abilities[v].id ) ) {
			compl += 1;
		}
	}
	$scope.tools.push( new CreateData( 'Hidden Abilities', compl, abilities.length) );
	
	storage = new DittoStorage();
	compl = 0;
	var counter = 0;
	while ( counter < 25 ) {
		if ( storage.getValue( counter ) ) {
			compl += 1;
		}
		counter += 1;
	}
	$scope.tools.push( new CreateData( 'Dittos', compl, 25) );
	
	storage = new EggGroupStorage();
	compl = 0;
	var counter = 0;
	for (var v in eggGroups) {
		if (storage.getValue( eggGroups[v].id ) ) {
			compl += 1;
		}
	}
	$scope.tools.push( new CreateData( 'Egg Groups', compl, eggGroups.length) );
	
	function CreateData( name, completion, total ) {
		this.name = name,
		this.completion = completion,
		this.total = total;
	}
});

