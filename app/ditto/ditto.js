'use strict';
ToolSet.RegisterTool('Dittos', 'ditto');

angular.module('myApp.ditto', ['ngRoute' ])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tools/ditto', {
    templateUrl: 'app/ditto/ditto.html',
    controller: 'DittoCtrl'
  });
} 

])

.controller('DittoCtrl', function($scope, $routeParams ) {	

});

