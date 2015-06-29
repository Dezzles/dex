'use strict';

angular.module('myApp.dexEntry', ['ngRoute' ])

.controller('DexEntryCtrl', function($scope, $routeParams ) {
	var id = $scope.id;
	$scope.Pokemon = AllData.allPokemon[id];
	if ($routeParams['code'] == null) {
		$scope.updateValue = function( ) {
			var test = new DexStorage( );
			var current = test.getValue( $scope.id );
			test.setValue($scope.id, current + 1);
			$scope.Pokemon = AllData.allPokemon[$scope.id];
			$scope.$parent.updateCode();
		}
		
		$scope.getValue = function () {
			var test = new DexStorage( );
			return test.getValue( $scope.id );
		}
	}
	else {
		$scope.updateValue = function() { }
		
		$scope.getValue = function() { 
			var test = new CodeStorage( $routeParams['code'], 2 );
			return test.getValue( $scope.id );
		}
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

