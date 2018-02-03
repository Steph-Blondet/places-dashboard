(function () {
    'use strict';

    var module = angular.module('component.dashboard', ['ui.router'])
        .config(function($stateProvider) {
            $stateProvider.state('dashboard', {
              url: '/dashboard',
              templateUrl: 'src/views/dashboard.html',
              controller: 'DashboardController',
              controllerAs: 'vm'
            })
        })

})();
