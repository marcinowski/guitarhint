'use strict';

angular
    .module('myApp.chords', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/chords', {
            templateUrl: 'chords/chords.html',
            controller: 'ChordsCtrl'
        });
    }])

    .controller('ChordsCtrl',
    ['$controller', '$scope', 'chords',
    function($controller, $scope, chords) {
        $scope.c = document.getElementById('chords');
        $scope.chords = chords;
        angular.extend(this, $controller('CommonCollectionController', {$scope: $scope}));
    }])