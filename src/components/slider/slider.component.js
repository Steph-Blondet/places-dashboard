(function(angular) {
  'use strict';

  angular.module('component.slider')
    .component('sliderComponent', {
      bindings: {
        data: '<?',
        options: '<?',
        callback: '&'
      },
      controller: 'SliderController',
      controllerAs: 'vm',
      templateUrl: 'src/components/slider/slider.html'
    });

}(window.angular));
