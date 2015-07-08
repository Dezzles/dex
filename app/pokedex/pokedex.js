'use strict';

angular.module('myApp.pokedex', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pokedex', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/view/pokedex/:code', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/view/pokedex/:code/:dex', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });

  $routeProvider.when('/view/pokedex/:code/:dex/:view', {
    templateUrl: 'app/pokedex/pokedex.html',
    controller: 'PokedexCtrl'
  });
}

])

.controller('PokedexCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {
	$scope.viewType = 'pokedex'
	if ($routeParams['code'] == null) {
		$scope.storage = new DexStorage();
		$scope.code = $scope.storage.getCode();
	}
	else {
		$scope.code = $routeParams['code'];
		$scope.storage = new CodeStorage( $scope.code , 2);
		$scope.viewType = 'view/pokedex/'+ $scope.code;
		$scope.hasCode = true;
		$scope.addedNote = "Viewing - "
	}

	$scope.mode = 0;
	$scope.text = [ 
		"All",
		"Unmarked",
		"Marked"
	]
	var view = $routeParams['view'];
	if (view != null) {
		if ( view == "All")
			$scope.mode = 0;
		else if (view == "Unmarked" )
			$scope.mode = 1;
		else if (view == "Marked" )
			$scope.mode = 2;
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
	
	$scope.updateMode = function() {
		$scope.mode += 1;
		if ($scope.mode == 3) {
			$scope.mode = 0;
		}
	
	}

} ]);

