(function(){
  'use strict';

  angular.module('component.barChart')
    .component('barChartComponent', {
      bindings: {
        data: '<',
        options: '<?',
        totalDays: '<'
      },
      controller: 'BarChartController',
      controllerAs: 'vm',
      templateUrl: 'src/components/barChart/barChart.html'
    });
})();
