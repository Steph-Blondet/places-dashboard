(function () {
    "use strict";
    angular
        .module('component.dashboard')
        .controller('DashboardController', ['$window', 'ComponentDataService', DashboardController]);

        function DashboardController($window, ComponentDataService) {
        var vm = this;

        //from mapPointers
        vm.year = "All";
        //from barChart
        vm.totalDays = ["245", "36"];
        //from pieChart
        vm.northamerica = [8, 38, 20, 81, 5, 75, 12, 1, 4, 5];
        vm.labelsNa = ["Mexico", "Florida", "New York", "District of Columbia", "Illinois", "St. Louis", "Maryland", "Virginia", "Pennsylvania", "Quebec"];
        //from pieChartTwo
        vm.caribbean = [6, 29];
        vm.labelsCarib = ["Tortola", "Puerto Rico"];


        vm.sliderCallback = function(dataSlider){
          console.log('from sliderCallback parent:', dataSlider);

          if (dataSlider.year === "All") {
            vm.year = "All";
            vm.totalDays = ["245", "36"];
            vm.northamerica = [8 , 38, 20, 81, 5, 75, 12, 1, 4, 5];
            vm.labelsNa = ["Mexico", "Florida", "New York", "District of Columbia", "Illinois", "St. Louis", "Maryland", "Virginia", "Pennsylvania", "Quebec"];
            vm.caribbean = [6, 29];
            vm.labelsCarib = ["Tortola", "Puerto Rico"];
          } else if (dataSlider.year === 2006) {
            vm.year = 2006;
            vm.totalDays = ["8", "0"];
            vm.northamerica = [8];
            vm.labelsNa = ["Mexico"];
            vm.caribbean = [];
            vm.labelsCarib = [];
          } else if (dataSlider.year === 2007) {
            vm.year = 2007;
            vm.totalDays = ["14", "3"];
            vm.northAm = [14];
            vm.labelsNa = ["Florida"];
            vm.caribbean = [3];
            vm.labelsCarib = ["Tortola"];
          } else if (dataSlider.year === 2008) {
            vm.year = 2008;
            vm.totalDays = ["0", "6"];
            vm.northAm = [ ];
            vm.labelsNa = [ ];
            vm.caribbean = [3, 3];
            vm.labelsCarib = ["Ponce", "Tortola"];
          } else if (dataSlider.year === 2009) {
            vm.year = 2009;
            vm.totalDays = ["13", "7"];
            vm.northAm = [5, 8, 36, 27, 26];
            vm.labelsNa = ["New York", "Florida", "Kandahar", "Kunduz", "Zaranj"];
            vm.caribbean = [3, 1, 2, 1];
            vm.labelsCarib = ["Ponce", "Arecibo", "Rio Grande", "Morovis"];
          } else if (dataSlider.year === 2010) {
            vm.year = 2010;
            vm.totalDays = ["8", "0"];
            vm.northAm = [8];
            vm.labelsNa = ["Florida"];
            vm.caribbean = [];
            vm.labelsCarib = [];
          } else if (dataSlider.year === 2011) {
            vm.year = 2011;
            vm.totalDays = ["5", "1"];
            vm.northAm = [5];
            vm.labelsNa = ["Disctrict of Columbia"];
            vm.caribbean = [1];
            vm.labelsCarib = ["San Lorenzo"];
          } else if (dataSlider.year === 2012) {
            vm.year = 2012;
            vm.totalDays = ["10", "1"];
            vm.northAm = [5, 5];
            vm.labelsNa = ["New York", "Illinois"];
            vm.caribbean = [1];
            vm.labelsCarib = ["Cayey"];
          } else if (dataSlider.year === 2013) {
            vm.year = 2013;
            vm.totalDays = ["156", "3"];
            vm.northAm = [80, 75, 1];
            vm.labelsNa = ["District of Columbia", "Missouri", "Maryland"];
            vm.caribbean = [3];
            vm.labelsCarib = ["Cabo Rojo"];
          } else if (dataSlider.year === 2014) {
            vm.year = 2014;
            vm.totalDays = ["8", "1"];
            vm.northAm = [5, 1, 1, 1];
            vm.labelsNa = ["New York", "District of Columbia", "Maryland", "Virginia"];
            vm.caribbean = [1];
            vm.labelsCarib = ["San Juan"];
          } else if (dataSlider.year === 2015) {
            vm.year = 2015;
            vm.totalDays = ["16", "0"];
            vm.northAm = [5, 8, 1, 2];
            vm.labelsNa = ["New York", "Florida", "Maryland", "Pennsylvannia"];
            vm.caribbean = [ ];
            vm.labelsCarib = [ ];
          } else if (dataSlider.year === 2016) {
            vm.year = 2016;
            vm.totalDays = ["2", "14"];
            vm.northAm = [2];
            vm.labelsNa = ["Pennsylvania"];
            vm.caribbean = [14];
            vm.labelsCarib = ["Bayamon"];
          } else if (dataSlider.year === 2017) {
            vm.year = 2017;
            vm.totalDays = ["1", "0"];
            vm.northAm = [5];
            vm.labelsNa = ["Quebec"];
            vm.caribbean = [ ];
            vm.labelsCarib = [ ];
          }
        } //-> sliderCallback function ends

        function loadSliderData(callback) {
          console.warn('Loading demo data for Slider into component.');
          ComponentDataService.getSliderDemoData()
            .then(callback)
            .catch(function() {
              console.warn('Failed to load demo data for Slider. Doing nothing.');
            });
        }

        function loadMapData(callback) {
          console.warn('Loading demo data for MarkerMap into component.');
          ComponentDataService.getMarkerMapDemoData()
            .then(callback)
            .catch(function() {
              console.warn('Failed to load demo data for MarkerMap. Doing nothing.');
            });
        }

        vm.getSliderData = function(dataSlider){
          vm.sortedSliderData = dataSlider;
          console.log('this is dataSlider:', dataSlider);
        }

        vm.getMapData = function(dataMap){
          vm.sortedMapData = dataMap;
          console.log('this is dataMap:', dataMap);
        }

        loadSliderData(vm.getSliderData);
        loadMapData(vm.getMapData);

    } //-> DashboardController ends
}());
