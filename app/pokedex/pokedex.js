'use strict';

angular.module('myApp.pokedex', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pokedex', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/dexview/:code', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/dexview/:code/:dex', {
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
	$scope.viewType = 'pokedex'
	if ($routeParams['code'] == null) {
		$scope.storage = new DexStorage();
		$scope.code = $scope.storage.getCode();
	}
	else {
		$scope.code = $routeParams['code'];
		$scope.storage = new CodeStorage( $scope.code , 2);
		$scope.viewType = 'dexview/'+ $scope.code;
		$scope.hasCode = true;
	}
	
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
	$scope.updateCode = function() {
		$scope.code = $scope.storage.getCode();
	}

});

