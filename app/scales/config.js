angular
    .module('myApp.scales')
    .factory('scales', [function () {
            return [
                {label: 'Major natural', value: [0, 2, 4, 5, 7, 9, 11, 12]},
                {label: 'Major harmonic', value: [0, 2, 4, 5, 7, 8, 11, 12]},
                {label: 'Minor natural', value: [0, 2, 3, 5, 7, 8, 10, 12]},
                {label: 'Minor harmonic', value: [0, 2, 3, 5, 7, 8, 11, 12]},
            ];
        }]);