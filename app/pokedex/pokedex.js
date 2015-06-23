'use strict';

angular.module('myApp.pokedex', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pokedex', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/pokedex/:dex', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });
}

])

.controller('PokedexCtrl', function($scope, $routeParams ) {
	$scope.SaveData = new DexStorage( );
	$scope.Pokemon = AllData.allPokemon;
	$scope.dexTitle = $routeParams.dex;
	$scope.dexGroups =  AllData.dexGroupings;
	if ($scope.dexTitle == null)
		$scope.dexTitle = 'National';
	$scope.Pokedex = null;
	for (var key in AllData.pokedexes) {
		if ( $scope.dexTitle.toLowerCase() == AllData.pokedexes[ key ].name.toLowerCase() ) {
			$scope.Pokedex = AllData.pokedexes[ key ] ;
		}
	}
	

});
