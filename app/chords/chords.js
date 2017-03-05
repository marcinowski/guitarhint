'use strict';

angular.module('myApp.chords', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/chords', {
    templateUrl: 'chords/chords.html',
    controller: 'ChordsCtrl'
  });
}])

.controller('ChordsCtrl', [function() {

}]);