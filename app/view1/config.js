angular
    .module('myApp.view1')
    .constant('notes',
        ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H']
     )
     .constant('strings',
         ['E', 'A', 'D', 'G', 'H', 'E']
    )
    .factory('positions', ['notes', 'strings', function(notes, strings) {
        var fretboard = [];
        var positions = {};
        angular.forEach(strings, function(string) {
            var ind = notes.indexOf(string);
            var str = [];
            for (var i = ind; i < ind + notes.length; i++) {
                var index = i % notes.length;
                str.push(notes[index]);
            }
            fretboard.push(str);
        })
        angular.forEach(notes, function(note) {
            var str = [];
            angular.forEach(fretboard, function(string) {
                str.push(string.indexOf(note));
            })
            positions[note] = str;
        })
        return {'fretboard': fretboard, 'positions': positions};
    }]);