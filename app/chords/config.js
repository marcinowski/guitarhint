angular
    .module('myApp.chords')
    .factory('chords', [
        function () {
            return [
                {
                    'label': 'Diminished (dim)',
                    'group': 'Triads',
                    'notes': [0, 3, 6]
                },
                {
                    'label': 'Minor (moll)',
                    'group': 'Triads',
                    'notes': [0, 3, 7]
                },
                {
                    'label': 'Major (dur)',
                    'group': 'Triads',
                    'notes': [0, 4, 7]
                },
                {
                    'label': 'Augmented (aug)',
                    'group': 'Triads',
                    'notes': [0, 4, 8]
                },
                {
                    'label': 'Diminished 6th (dim6)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 6, 9]
                },
                {
                    'label': 'Diminished 7th (07, m7b5)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 6, 10]
                },
                {
                    'label': 'Diminished major 7th (0maj7, 7b5)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 6, 11]
                },
                {
                    'label': 'Minor 6th (m6)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 7, 9]
                },
                {
                    'label': 'Minor 7th (m7)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 7, 10]
                },
                {
                    'label': 'Minor major 7th (mM7)',
                    'group': 'Tetrads',
                    'notes': [0, 3, 7, 11]
                },
                {
                    'label': 'Major 6th (6)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 7, 9]
                },
                {
                    'label': 'Major 7th (7)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 7, 10]
                },
                {
                    'label': 'Major major 7th (maj7)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 7, 11]
                },
                {
                    'label': 'Augmented 6th (aug 6)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 8, 9]
                },
                {
                    'label': 'Augmented 7th (7#5)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 8, 10]
                },
                {
                    'label': 'Augmented major 7th (maj7#5)',
                    'group': 'Tetrads',
                    'notes': [0, 4, 8, 11]
                },
            ];
        }
    ]);
