'use strict';

angular.module('myApp.abilitySet', ['ngRoute' ])

.controller('AbilitySetCtrl', function($scope, $routeParams ) {
	$scope.test = $scope.set;
	$scope.idx = $scope.set.id;
	if ($routeParams['code'] == null) 
		$scope.storage = new AbilityStorage();
	else
		$scope.storage = new CodeStorage($routeParams['code'], 1);
	$scope.updateValue = function() {
		var current = $scope.storage.getValue( $scope.idx );
		current = current + 1;
		$scope.storage.setValue( $scope.idx, current );
		$scope.$parent.updateCode();
	}
	
	$scope.getValue = function() {
		return $scope.storage.getValue( $scope.idx );
	}
})

.directive('abilitySet', function () {
	return {
		scope: { resource: '=', set: '=', index: '=' },
		templateUrl: '/app/abilities/abilityset.html',
		controller: 'AbilitySetCtrl',
		link: function ($scope, element) {
		}
	}
}
)
;

