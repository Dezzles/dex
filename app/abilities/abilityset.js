'use strict';

angular.module('myApp.abilitySet', ['ngRoute' ])

.controller('AbilitySetCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {
	$scope.test = $scope.set;
	$scope.idx = $scope.set.id;
	$scope.modes = $scope.mode;

	$scope.updateValue = function() {
		var current = $scope.$parent.storage.getValue( $scope.idx );
		current = current + 1;
		$scope.$parent.storage.setValue( $scope.idx, current );
		$scope.$parent.updateCode();
	}
	
	$scope.getValue = function() {
		return $scope.$parent.storage.getValue( $scope.idx );
	}
}])

.directive('abilitySet', function () {
	return {
		scope: { resource: '=', set: '=', index: '=', mode: '@', val: '=' },
		templateUrl: '/app/abilities/abilityset.html',
		controller: 'AbilitySetCtrl'
	}
}
)
;

