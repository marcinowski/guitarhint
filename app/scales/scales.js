'use strict';

angular
    .module('myApp.scales', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/scales', {
            templateUrl: 'scales/scales.html',
            controller: 'ScalesCtrl'
        });
    }])
    .controller('ScalesCtrl',
    ['$controller', '$scope', 'notes', 'scales', 'positions',
    function($controller, $scope, notes, scales, positions) {
        $scope.c = document.getElementById('scales');
        $scope.scales = scales;
        angular.extend(this, $controller('CommonCollectionController', {$scope: $scope}));
    }])