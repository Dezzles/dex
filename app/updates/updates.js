'use strict';

angular.module('myApp.updates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/updates', {
    templateUrl: 'app/updates/updates.html',
    controller: 'UpdatesCtrl'
  });
}

])

.controller('UpdatesCtrl', function($scope, $routeParams, $http) {
	$http.get('update.txt', { cache: false })
		.success(function (updateResponse) {
			$scope.UpdateResponse = updateResponse;
		});

});

