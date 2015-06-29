'use strict';

angular.module('myApp.abilities', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/abilities', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });
  $routeProvider.when('/tools/abilities/:code', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });

}

])

.controller('AbilitiesCtrl', function($scope, $routeParams ) {	
	$scope.abilitySet = hiddenAbilities;
	if ($routeParams['code'] == null) {
		var storage = new AbilityStorage();
		$scope.code = storage.getCode();
	}
	else {
		$scope.code = $routeParams['code'];
	}
	
	$scope.updateCode = function() {
		var storage = new AbilityStorage();
		$scope.code = storage.getCode();
	}
});

