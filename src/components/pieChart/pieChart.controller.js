(function(){
  'use strict';

  angular.module('component.pieChart')
    .controller('PieChartController', PieChartController);

  function PieChartController($scope, $element) {

    var vm = this;

    vm.colors = ['#AA4465', '#9EB25D', '#EEFCCE', '#A7C6DA', "#FACD54", "4DCCBD", "EE6352", "#44344F", "F68876", "#C5CBE3"];

    vm.datasetOverride = [
      {
        backgroundColor: '#AA4465',
        type: 'pie'
      },
      {
        backgroundColor: '#9EB25D',
        type: 'pie'
      },
      {
        backgroundColor: '#EEFCCE',
        type: 'pie'
      },
      {
        backgroundColor: '#A7C6DA',
        type: 'pie'
      },
      {
        backgroundColor: '#FACD54',
        type: 'pie'
      },
      {
        backgroundColor: '#4DCCBD',
        type: 'pie'
      },
      {
        backgroundColor: '#EE6352',
        type: 'pie'
      },
      {
        backgroundColor: '#44344F',
        type: 'pie'
      },
      {
        backgroundColor: '#F68876',
        type: 'pie'
      },
      {
        backgroundColor: '#C5CBE3',
        type: 'pie'
      }
    ];

      //Define additional options
      vm.options = {
        elements: {
          arc: {
            borderWidth: 0
          }
        },
        maintainAspectRatio: false,
        tooltips: {
          bodyFontColor: '#dde1e5',
          bodyFontSize: 14,
          xPadding: 14,
          yPadding: 14,
          displayColors: false
        }
      };

  }
})();
