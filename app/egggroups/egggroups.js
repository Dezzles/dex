'use strict';
ToolSet.RegisterTool('Egg Groups', 'egggroups');

angular.module('myApp.eggGroups', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/egggroups', {
    templateUrl: 'app/egggroups/egggroups.html',
    controller: 'EggGroupsCtrl'
  });
}

])

.controller('EggGroupsCtrl', [ '$scope', function($scope, $routeParams ) {	
	$scope.eggGroups = eggGroups;
} ]);

