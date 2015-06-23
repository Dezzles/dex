'use strict';

angular.module('myApp.menu', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/menu', {
    templateUrl: 'app/menu/menu.html',
    controller: 'MenuCtrl'
  });
}

])

.controller('MenuCtrl', function($scope, $routeParams) {

});
