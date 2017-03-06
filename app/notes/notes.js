'use strict';

angular
    .module('myApp.notes', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/notes', {
            templateUrl: 'notes/notes.html',
            controller: 'NotesCtrl'
        });
    }])
    .controller('NotesCtrl',
    ['$controller', '$scope',
    function($controller, $scope) {
        $scope.c = document.getElementById('notes');
        angular.extend(this, $controller('CommonController', {$scope: $scope}));
    }])
