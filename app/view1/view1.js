'use strict';

angular
    .module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {}])
    .directive('fretboard', function() {
        return {
            restrict: 'E',
            controller: 'View1Ctrl',
            template: '<canvas id="myCanvas" width="1000" height="240" style="margin-left: 50px;"></canvas>',
            link: function () {
                var c = document.getElementById("myCanvas");
                var ctx = c.getContext("2d");
                // fretboard
                ctx.lineWidth="1";
                ctx.rect(0, 0, c.width, c.height);
                ctx.stroke();
                // strings
                ctx.lineWidth="2";
                for (var i=0; i < 6; i++) {
                    var h = 20 + i*40;
                    ctx.moveTo(0, h);
                    ctx.lineTo(c.width, h);
                    ctx.stroke();
                }
                // frets
                ctx.lineWidth="1";
                for (var i=0; i < 6; i++) {
                    var s = i*100;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, c.height);
                    ctx.stroke();
                }
                for (var i=0; i < 5; i++) {
                    var s = 500 + i*75;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, c.height);
                    ctx.stroke();
                }
                for (var i=0; i < 5; i++) {
                    var s = 800 + i*50;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, c.height);
                    ctx.stroke();
                }
                // markers
                ctx.fillStyle = 'lightgray';
                ctx.beginPath();
                ctx.arc(250,120,20,0,2*Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(450,120,20,0,2*Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(612,120,20,0,2*Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(762,120,20,0,2*Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(925,40,20,0,2*Math.PI);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(925,200,20,0,2*Math.PI);
                ctx.fill();
            },
        }

    }
);