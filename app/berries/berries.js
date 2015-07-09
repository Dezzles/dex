'use strict';

ToolSet.RegisterTool('Berries', 'berries');

angular.module('myApp.berries', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/berries', {
    templateUrl: 'app/berries/berries.html',
    controller: 'BerriesCtrl'
  });
  $routeProvider.when('/view/berries/:code', {
    templateUrl: 'app/berries/berries.html',
    controller: 'AbilitiesCtrl'
  });
  $routeProvider.when('/view/berries/:code/:view', {
    templateUrl: 'app/berries/berries.html',
    controller: 'BerriesCtrl'
  });

}

])

.controller('BerriesCtrl', [ '$scope', '$routeParams', function($scope, $routeParams ) {	
	$scope.berries = berries;
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
		$scope.storage = new BerryStorage();
		$scope.code = $scope.storage.getCode();
	}
	else {
		$scope.code = $routeParams['code'];
		$scope.storage = new CodeStorage($scope.code, 1);
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

