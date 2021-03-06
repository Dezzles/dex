'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.header',
  'myApp.pokedex',
  'myApp.stats',
  'myApp.menu',
  'myApp.updates',
  'myApp.dexEntry',
  'myApp.tools',
  'myApp.breeding',
  'myApp.breedSet',
  'myApp.breedPair',
  'myApp.ditto',
  'myApp.dittoStat',
  'myApp.abilities',
  'myApp.abilitySet',
  'myApp.abilityRow',
  'myApp.eggEntry',
  'myApp.eggGroups',
  'myApp.statBlock',
  'myApp.berries',
  'myApp.berryEntry'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/pokedex'});
}]);
