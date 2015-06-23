'use strict';

angular.module('myApp.breeding', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools', {
    templateUrl: 'app/breeding/breeding.html',
    controller: 'BreedingCtrl'
  });

  $routeProvider.when('/tools/breeding', {
    templateUrl: 'app/breeding/breeding.html',
    controller: 'BreedingCtrl'
  });
}

])

.controller('BreedingCtrl', function($scope, $routeParams ) {	

});

