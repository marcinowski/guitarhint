'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    var VF = Vex.Flow;
    var div = document.getElementById("vex")

    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    renderer.resize(500, 500);
    var context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
    var stave = new VF.TabStave(10, 40, 400);
    stave.addClef("tab").setContext(context).draw();

    var notes = [
      // A single note
      new VF.TabNote({
        positions: [{str: 3, fret: 7}],
        duration: "q"}),
      addModifier(new VF.Vibrato().setHarsh(true).setVibratoWidth(70), 0)
    ];

    VF.Formatter.FormatAndDraw(context, stave, notes);
}]);