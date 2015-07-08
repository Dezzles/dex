'use strict';

angular.module('myApp.abilities', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/abilities', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });
  $routeProvider.when('/view/abilities/:code', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });
  $routeProvider.when('/view/abilities/:code/:view', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });

}

])

.controller('AbilitiesCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {	
	$scope.abilitySet = hiddenAbilities;
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
		
	if ($routeParams['code'] == null) {
		$scope.storage = new AbilityStorage();
		$scope.code = $scope.storage.getCode();
	}
	else {
		$scope.code = $routeParams['code'];
		$scope.storage = new CodeStorage($scope.code, 2);
		$scope.addedNote = "Viewing - ";
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

