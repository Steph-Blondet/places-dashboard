(function(angular) {
  'use strict';

  angular.module('component.slider')
         .controller('SliderController', ['ComponentDataService', SliderController]);

  function SliderController($scope, $element, ComponentDataService) {
    var vm = this;

    var defaultOptions = {
      id: 1,
      showTicks: true,
      showTicksValues: false,
      hideLimitLabels: true,
      hidePointerLabels: true,
      bindIndexForStepsArray: true,
      onChange: function(id, modelValue) {
        vm.item = vm.data[modelValue];
        vm.callback({id: vm.item});
      }
    };

    vm.$onInit = function() {
      vm.options = angular.extend({}, defaultOptions, vm.options);
      console.log('on SliderBasic Init:',vm.callback);
      vm.callback({id: 'hi from slider child'});
    };

    vm.$onChanges = function(changesObj) {
      if (changesObj.data && !changesObj.data.isFirstChange()) {
        console.log(changesObj.data.currentValue);
        vm.dataSlider = changesObj.data.currentValue;
        vm.options.stepsArray = vm.dataSlider;
        vm.item = vm.dataSlider[0];
      }
    };

    vm.$postLink = function() {
    };

  }
}(window.angular));
