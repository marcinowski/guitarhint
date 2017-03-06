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
        var getScaleNotes = function () {
            var ind = $scope.notes.indexOf($scope.selectedNote);
            var scaleNotes = [];
            angular.forEach($scope.selectedScale, function(note) {
                let i = (ind + note) % notes.length;
                scaleNotes.push(notes[i]);
            })
            return scaleNotes;
        }
        $scope.show = function () {
            var selectedNotes = getScaleNotes();
            angular.forEach(selectedNotes, function (note) {
                angular.forEach($scope.positions[note], function(p, i) {
                    $scope.circle(p, i);
                })
            })
        };
        angular.extend(this, $controller('CommonController', {$scope: $scope}));
    }])