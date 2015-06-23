'use strict';

angular.module('myApp.defaultViews', [])
.controller('HeaderController', ['$scope', function($scope) {
  $scope.templateUrl = 'app/header/header.html';
}])
.directive('header', function () {
	return {
		templateUrl: 'app/header/header.html',
	}

});

