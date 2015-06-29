'use strict';

angular.module('myApp.header', [])
.controller('HeaderCtrl', ['$scope', function($scope) {
	$scope.templateUrl = 'app/header/header.html';
	$scope.currentGame = function() {
		var game = new GameStorage();
		return game.gameName();
	}
	
	$scope.changeGame = function() {
		var game = new GameStorage();
		var current = game.getValue();
		game.setValue( current + 1 );
	}
}])
.directive('menuHeader', function () {
	return {
		scope: { resource: '=' },
		templateUrl: '/app/header/header.html',
		controller: 'HeaderCtrl',
		link: function ($scope, element) {
			 
		}
	}
}
)
;



