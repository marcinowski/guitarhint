angular
    .module('myApp')
    .directive('fretboard', function() {
        return {
            restrict: 'E',
            scope: {
                width: '=',
                height: '=',
            },
            template: '<canvas width="{{width}}" height="{{height}}"></canvas>',
            link: function (scope, element, attrs) {
                var c = element.children()[0];
                var ctx = c.getContext("2d");

                var height = c.height;
                var width = c.width;
                var stringOffset = height/6;
                var fretOffset = width/10;

                // fretboard
                ctx.lineWidth="1";
                ctx.rect(0, 0, width, height);
                ctx.stroke();

                // strings
                ctx.lineWidth="2";
                for (var i=0; i < 6; i++) {
                    var h = stringOffset/2 + i*stringOffset;
                    ctx.moveTo(0, h);
                    ctx.lineTo(width, h);
                    ctx.stroke();
                }
                // frets
                ctx.lineWidth="1";
                for (var i=0; i < 6; i++) {
                    var s = i*fretOffset;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, height);
                    ctx.stroke();
                }
                for (var i=0; i < 5; i++) {
                    var s = 5*fretOffset+ i*0.75*fretOffset;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, height);
                    ctx.stroke();
                }
                for (var i=0; i < 5; i++) {
                    var s = 8*fretOffset + i*0.5*fretOffset;
                    ctx.moveTo(s, 0);
                    ctx.lineTo(s, height);
                    ctx.stroke();
                }
                var rad = stringOffset/2;
                var circle = function(x, y) {
                    ctx.fillStyle = 'lightgray';
                    ctx.beginPath();
                    ctx.arc(x, y, rad, 0, 2*Math.PI);
                    ctx.fill();
                };
                // markers
                circle(2.5*fretOffset, height/2);
                circle(4.5*fretOffset, height/2);
                circle(6.125*fretOffset, height/2);
                circle(7.62*fretOffset, height/2);
                circle(9.25*fretOffset, stringOffset);
                circle(9.25*fretOffset, height-stringOffset);
            },
        }
    });