(function(){
  'use strict';

  angular.module('component.pieChartTwo')
    .component('pieChartTwoComponent', {
      bindings: {
        data: '<',
        options: '<?',
        caribbean: '<',
        labelsCarib: '<'
      },
      controller: 'PieChartTwoController',
      controllerAs:'vm',
      templateUrl:'src/components/pieChartTwo/pieChartTwo.html'
    });
})();
