'use strict';

angular
    .module('myApp.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl',
    ['$scope', 'notes', 'strings', 'positions',
    function($scope, notes, strings, positions) {
        $scope.notes = notes;
        $scope.strings = strings;
        $scope.fretboard = positions.fretboard;
        $scope.positions = positions.positions;
        $scope.selectedNotes = [];

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        var rad = c.height/12;
        var yOffset = c.height/6;
        var xOffset = c.width/10;
        var xCalc = function(x) {
            if (x == 0) {
                return null;
            }
            var dist = xOffset/2;
            if (x > 4) {
                dist += 4*xOffset;
                x -= 4;
                if (x > 4) {
                    dist += xOffset*0.75/2;
                    dist += 4*xOffset*0.75;
                    x -= 4;
                    if (x > 0){
                        dist += xOffset*0.5/2;
                        dist += x*xOffset*0.5;
                    }
                } else if (x > 0) {
                    dist += x*xOffset*0.75;
                }
            } else if (x > 0) {
                dist += x*xOffset;
            }
            return dist;
        };
        var yCalc = function (y) {
            return yOffset/2 + (5-y)*yOffset;
        };
        var circle = function(x, y) {
            var posX = xCalc(x);
            var posY = yCalc(y);
            console.log(posX, posY)
            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(posX, posY, rad, 0, 2*Math.PI);
            ctx.fill();
        };
        $scope.test = function () {
            angular.forEach($scope.selectedNotes, function(note) {
                angular.forEach($scope.positions[note], function(p, i) {
                    circle(p, i);
                })
            })
        };
    }])
