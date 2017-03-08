angular
    .module('myApp')
    .controller('CommonController',
    ['$scope', 'notes', 'strings', 'positions',
    function($scope, notes, strings, positions) {
        /* Parent controller containing common methods */
        $scope.notes = notes;
        $scope.strings = strings;
        $scope.fretboard = positions.fretboard;
        $scope.positions = positions.positions;

        $scope.c = $scope.c || undefined; // this must be overwritten in children controllers

        $scope.ctx = $scope.c.getContext("2d");
        $scope.rad = $scope.c.height/12;
        $scope.yOffset = $scope.c.height/6;
        $scope.xOffset = $scope.c.width/10;
        $scope.a = 0;
        $scope.xCalc = function(x) {
            var k = [[5, 1], [4, 0.75], [2, 0.5]];  // this should be map or sth, but it works
            var dist = 0;
            x -= 1
            for (var i=0; i<k.length; i++) {
                let key = k[i][0];
                let value = k[i][1];
                if (x >= key) {dist += key * value; x -= key;}
                else {dist += value * (x + 0.5); break;}
            }
            dist *= $scope.xOffset;
            dist += $scope.a;
            return dist;
        };
        $scope.yCalc = function (y) {
            return (0.5 + 5 - y)*$scope.yOffset;
        };
        $scope.circle = function(x, y, note) {
            var posX = $scope.xCalc(x);
            var posY = $scope.yCalc(y);
            $scope.ctx.fillStyle = 'red';
            $scope.ctx.beginPath();
            $scope.ctx.arc(posX, posY, $scope.rad, 0, 2*Math.PI);
            $scope.ctx.fill();
        };
        $scope.show = $scope.show || function () {
            $scope.clear();
            var selectedNotes = $scope.selectedNotes || $scope.getSelectedNotes();
            angular.forEach(selectedNotes, function(note) {
                angular.forEach($scope.positions[note], function(p, i) {
                    $scope.circle(p, i, note);
                })
            })
        };
        $scope.clear = $scope.clear || function () {
            $scope.ctx.clearRect(0, 0, $scope.c.width, $scope.c.height);
        };
    }])
    .controller('CommonCollectionController',
    ['$controller', '$scope',
    function($controller, $scope) {
        $scope.getSelectedNotes = function () {
            var ind = $scope.notes.indexOf($scope.selectedNote);
            var scaleNotes = [];
            angular.forEach($scope.selectedCol, function(note) {
                let i = (ind + note) % $scope.notes.length;
                scaleNotes.push($scope.notes[i]);
            })
            return scaleNotes;
        };
        angular.extend(this, $controller('CommonController', {$scope: $scope}));
    }])
