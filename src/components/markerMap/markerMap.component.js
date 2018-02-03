(function(){
  'use strict';

  angular.module('component.markerMap')
    .component('markerMapComponent', {
      bindings: {
        data: '<',
        options: '<?',
        year: '<'
      },
      controller: 'MarkerMapController',
      controllerAs: 'vm',
      templateUrl: 'src/components/markerMap/markerMap.html'
    });
})();
