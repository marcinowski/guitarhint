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
    ['$scope', 'notes', 'strings', 'positions',
    function($scope, notes, strings, positions) {
        $scope.notes = notes;
        $scope.strings = strings;
        $scope.fretboard = positions.fretboard;
        $scope.positions = positions.positions;
        $scope.selectedNotes = [];

        var c = document.getElementById("notes");
        var ctx = c.getContext("2d");
        var rad = c.height/12;
        var yOffset = c.height/6;
        var xOffset = c.width/10;
        var a = 0;
        var xCalc = function(x) {
            var k = [[5, 1], [4, 0.75], [2, 0.5]];  // this should be map or sth, but it works
            var dist = 0;
            x -= 1
            for (var i=0; i<k.length; i++) {
                let key = k[i][0];
                let value = k[i][1];
                if (x >= key) {dist += key * value; x -= key;}
                else {dist += value * (x + 0.5); break;}
            }
            dist *= xOffset;
            dist += a;
            return dist;
        };
        var yCalc = function (y) {
            return yOffset/2 + (5-y)*yOffset;
        };
        var circle = function(x, y) {
            var posX = xCalc(x);
            var posY = yCalc(y);
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(posX, posY, rad, 0, 2*Math.PI);
            ctx.fill();
        };
        $scope.show = function () {
            angular.forEach($scope.selectedNotes, function(note) {
                angular.forEach($scope.positions[note], function(p, i) {
                    circle(p, i);
                })
            })
        };
        $scope.clear = function () {
            ctx.clearRect(0, 0, c.width, c.height);
        };
    }])
