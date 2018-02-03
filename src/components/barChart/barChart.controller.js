(function(){
  'use strict';

  angular.module('component.barChart')
    .controller('BarChartController', BarChartController);

  function BarChartController($scope, $element) {

    var vm = this;

    vm.$onInit = function() {
      console.log('on barchart Init:', vm.labels);
      console.log('on barchart Init vm.data', vm.totalDays);
    };

    vm.$onChanges = function(changesObj) {
      if (changesObj.data && !changesObj.data.isFirstChange()) {
        console.log('from barchart child:', changesObj.data);
      }
    };

    vm.$postLink = function() {
    }

    vm.series = ["Days"];
    vm.colors = ["#57AFA4", "#CCB25D"];
    vm.labels = ["North America", "Caribbean"];

    vm.datasetOverride = [
      {
        labels: "north america",
        backgroundColor: '#57AFA4',
        hoverBackgroundColor: '#57AFA4',
        borderWidth: 0,
        type: 'bar'
      },
      {
        labels: "caribbean",
        backgroundColor:'#CCB25D',
        hoverBackgroundColor: '#CCB25D',
        borderWidth: 0,
        type: 'bar'
       }
    ];

    //Define additional options
    vm.options = {
      scales: {
        yAxes: [{
          ticks: {
            fontSize: 12,
            fontColor: "#949494"
          },
          gridLines:{
            color:"#949494"
          }
        }],
        xAxes: [{
          ticks: {
            fontSize: 12,
            fontColor: "#949494"
          },
          gridLines:{
            color:"#949494"
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        xPadding: 14,
        yPadding: 14,
        fontSize: 16
      }
    };
  }
})();
