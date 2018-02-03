(function(){
  'use strict';

  angular.module('component.pieChart')
    .component('pieChartComponent', {
      bindings: {
        data: '<',
        options: '<?',
        northamerica: '<',
        labelsNa: '<'
      },
      controller: 'PieChartController',
      controllerAs:'vm',
      templateUrl:'src/components/pieChart/pieChart.html'
    });
})();
