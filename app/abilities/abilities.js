'use strict';

angular.module('myApp.abilities', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/abilities', {
    templateUrl: 'app/abilities/abilities.html',
    controller: 'AbilitiesCtrl'
  });

}

])

.controller('AbilitiesCtrl', function($scope, $routeParams ) {	
	$scope.abilitySet = hiddenAbilities;
});

