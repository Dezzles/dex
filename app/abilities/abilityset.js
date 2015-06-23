'use strict';

angular.module('myApp.abilitySet', ['ngRoute' ])

.controller('AbilitySetCtrl', function($scope, $routeParams ) {
	$scope.test = $scope.set;
	$scope.idx = $scope.set.id;
	$scope.storage = new AbilityStorage();
	$scope.updateValue = function() {
		var current = $scope.storage.statValue( $scope.idx );
		current = current + 1;
		$scope.storage.updateValue( $scope.idx, current );
	}
	
	$scope.getValue = function() {
		return $scope.storage.statValue( $scope.idx );
	}
})

.directive('abilitySet', function () {
	return {
		scope: { resource: '=', set: '=', index: '='},
		templateUrl: '/app/abilities/abilityset.html',
		controller: 'AbilitySetCtrl',
		link: function ($scope, element) {
		}
	}
}
)
;

