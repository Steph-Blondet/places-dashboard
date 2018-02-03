(function(angular) {
  'use strict';

  angular.module('service.component-data', [])
    .service('ComponentDataService', ['$http', ComponentDataService]);

  function ComponentDataService($http) {

    function getData(url) {
      return $http.get(url)
        .then(function(res) {
          return res.data;
        })
        .catch(function(err) {
          throw new Error(err.data);
        });
    }

    return {
      getData: getData,
      getSliderDemoData: function() {
        return getData('src/assets/data/slider.demo.json')
      },
      getMarkerMapDemoData: function(){
        return getData('src/assets/data/markerMap.geo.json')
      }
    };

  }

}(window.angular));
