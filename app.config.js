(function (angular) {
    'use script'

    var app = angular.module('app', [

      'component.dashboard',
      'ui.router',
      'component.markerMap',
      'ui-leaflet',
      'nemLogging',
      'rzModule',
      'component.slider',
      'service.component-data',
      'chart.js',
      'component.barChart',
      'component.pieChart',
      'component.pieChartTwo'
    ])

    app.config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard'); // default route
    }]);

}(window.angular));
