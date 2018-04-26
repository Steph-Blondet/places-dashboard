(function(){
  'use strict';

  angular.module('component.markerMap')
    .controller('MarkerMapController', ['ComponentDataService', MarkerMapController]);

  function MarkerMapController(ComponentDataService) {

    var vm = this;
    vm.overlayLayersAll;
    vm.overlayLayers2006;
    vm.overlayLayers2007;
    vm.overlayLayers2008;
    vm.overlayLayers2009;
    vm.overlayLayers2010;
    vm.overlayLayers2011;
    vm.overlayLayers2012;
    vm.overlayLayers2013;
    vm.overlayLayers2014;

    vm.options = {
      id: 'markers'
    }

    vm.$onInit = function() {
      vm.options = angular.extend({}, vm.options);
      console.log('on MapMarkers Init:', vm.year);
    };

    vm.$onChanges = function(changesObj) {
      if (changesObj.data && !changesObj.data.isFirstChange()) {
        console.log('from mapMarkers child:', changesObj.data);
        vm.createMap(changesObj.data.currentValue);
        vm.markersNorthAmericaAll.addTo(vm.map);
        vm.markersCaribbeanAll.addTo(vm.map);
      } else if (changesObj.year && !changesObj.year.isFirstChange()) {
        console.log('from mapMarkers on changes year', changesObj.year);
        vm.updateMap(changesObj.year.currentValue);
      }
    };

    vm.$postLink = function() {
    }

    vm.createMap = function(data) {

      vm.map = L.map(vm.options.id).setView([28.1737, -87.5390], 4);
      var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(vm.map);

      //Custom icons
      vm.northAmericaIcon = new L.Icon({
        iconUrl: 'src/assets/images/marker-na.svg',
        popupAnchor: [-3, -40],
        iconSize: [56, 75],
        iconAnchor: [19, 38]
      });
      vm.caribbeanIcon = new L.Icon({
        iconUrl: 'src/assets/images/marker-carib.svg',
        iconSize: [56, 75]
      });

      //Creating layers
      vm.markersNorthAmerica2006 = L.layerGroup();
      vm.markersNorthAmerica2007 = L.layerGroup();
      vm.markersNorthAmerica2008 = L.layerGroup();
      vm.markersNorthAmerica2009 = L.layerGroup();
      vm.markersNorthAmerica2010 = L.layerGroup();
      vm.markersNorthAmerica2011 = L.layerGroup();
      vm.markersNorthAmerica2012 = L.layerGroup();
      vm.markersNorthAmerica2013 = L.layerGroup();
      vm.markersNorthAmerica2014 = L.layerGroup();
      vm.markersNorthAmerica2015 = L.layerGroup();
      vm.markersNorthAmerica2016 = L.layerGroup();
      vm.markersNorthAmerica2017 = L.layerGroup();
      vm.markersNorthAmericaAll = L.layerGroup([vm.markersNorthAmerica2006, vm.markersNorthAmerica2007, vm.markersNorthAmerica2008, vm.markersNorthAmerica2009, vm.markersNorthAmerica2010, vm.markersNorthAmerica2011, vm.markersNorthAmerica2012, vm.markersNorthAmerica2013, vm.markersNorthAmerica2014, vm.markersNorthAmerica2015, vm.markersNorthAmerica2016, vm.markersNorthAmerica2017]);

      vm.markersCaribbean2006 = L.layerGroup();
      vm.markersCaribbean2007 = L.layerGroup();
      vm.markersCaribbean2008 = L.layerGroup();
      vm.markersCaribbean2009 = L.layerGroup();
      vm.markersCaribbean2010 = L.layerGroup();
      vm.markersCaribbean2011 = L.layerGroup();
      vm.markersCaribbean2012 = L.layerGroup();
      vm.markersCaribbean2013 = L.layerGroup();
      vm.markersCaribbean2014 = L.layerGroup();
      vm.markersCaribbean2015 = L.layerGroup();
      vm.markersCaribbean2016 = L.layerGroup();
      vm.markersCaribbean2017 = L.layerGroup();
      vm.markersCaribbeanAll = L.layerGroup([vm.markersCaribbean2006, vm.markersCaribbean2007, vm.markersCaribbean2008, vm.markersCaribbean2009, vm.markersCaribbean2010, vm.markersCaribbean2011, vm.markersCaribbean2012, vm.markersCaribbean2013, vm.markersCaribbean2014, vm.markersCaribbean2015, vm.markersCaribbean2016, vm.markersCaribbean2017]);


      vm.markersNorthAmerica = L.geoJson(data, {
    		onEachFeature: function (feature, layer) {
          var popUpNorthAmerica = function(){
            layer.setIcon(vm.northAmericaIcon);
            layer.bindPopup(
              "<h3 class='popup-heading'>" + feature.properties["state"] + "</h3><hr class='hr-popup-bluegreen'>" +
              "<table>" + "<tr><td class='popup-property-key'>Continent:&nbsp;<span class='popup-property'>" +
              feature.properties["continent"] + "<tr><td class='popup-property-key'>State:&nbsp;<span class='popup-property'>" +
              feature.properties["state"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>City:&nbsp;<span class='popup-property'>" +
              feature.properties["city"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>Year:&nbsp;<span class='popup-property'>" +
              feature.properties["year"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>Days:&nbsp;<span class='popup-property'>" +
              feature.properties["days"] + "</span></td></tr>" + "</table>");
          }

          if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2006) {
            layer.addTo(vm.markersNorthAmerica2006);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2007) {
            layer.addTo(vm.markersNorthAmerica2007);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2008) {
            layer.addTo(vm.markersNorthAmerica2008);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2009) {
            layer.addTo(vm.markersNorthAmerica2009);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2010) {
            layer.addTo(vm.markersNorthAmerica2010);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2011) {
            layer.addTo(vm.markersNorthAmerica2011);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2012) {
            layer.addTo(vm.markersNorthAmerica2012);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2013) {
            layer.addTo(vm.markersNorthAmerica2013);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2014) {
            layer.addTo(vm.markersNorthAmerica2014);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2015) {
            layer.addTo(vm.markersNorthAmerica2015);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2016) {
            layer.addTo(vm.markersNorthAmerica2016);
            popUpNorthAmerica();
          } else if (feature.properties['continent'] === "North America" && feature.properties['year'] === 2017) {
            layer.addTo(vm.markersNorthAmerica2017);
            popUpNorthAmerica();
    		} // -> onEachFeature function ends
    	}}); //-> markersNorthAmerica function ends

      vm.markersCaribbean = L.geoJson(data, {
        onEachFeature: function (feature, layer) {
          var popUpCaribbean = function(){
            layer.setIcon(vm.caribbeanIcon);
            layer.bindPopup(
              "<h3 class='popup-heading'>" + feature.properties["state"] + "</h3><hr class='hr-popup-yellow'>" +
              "<table class='leaflet-popup-table'>" + "<tr><td class='popup-property-key'>Continent:&nbsp;<span class='popup-property'>" +
              feature.properties["continent"] + "<tr><td class='popup-property-key'>State:&nbsp;<span class='popup-property'>" +
              feature.properties["state"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>City:&nbsp;<span class='popup-property'>" +
              feature.properties["city"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>Year:&nbsp;<span class='popup-property'>" +
              feature.properties["year"] + "</span></td></tr>" + "<tr><td class='popup-property-key'>Days:&nbsp;<span class='popup-property'>" +
              feature.properties["days"] + "</span></td></tr>" + "</table>");
          }

          if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2006) {
            layer.addTo(vm.markersCaribbean2006);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2007) {
            layer.addTo(vm.markersCaribbean2007);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2008) {
            layer.addTo(vm.markersCaribbean2008);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2009) {
            layer.addTo(vm.markersCaribbean2009);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2010) {
            layer.addTo(vm.markersCaribbean2010);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2011) {
            layer.addTo(vm.markersCaribbean2011);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2012) {
            layer.addTo(vm.markersCaribbean2012);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2013) {
            layer.addTo(vm.markersCaribbean2013);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2014) {
            layer.addTo(vm.markersCaribbean2014);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2015) {
            layer.addTo(vm.markersCaribbean2015);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2016) {
            layer.addTo(vm.markersCaribbean2016);
            popUpCaribbean();
          } else if (feature.properties['continent'] === "Caribbean" && feature.properties['year'] === 2017) {
            layer.addTo(vm.markersCaribbean2017);
            popUpCaribbean();
        } //-> onEachFeature function ends
      }}); //-> markersCaribbean function ends

      vm.overlayLayersAll = {
        "North America": vm.markersNorthAmericaAll,
        "Caribbean": vm.markersCaribbeanAll
      };

      vm.controlAll = L.control.layers(undefined, vm.overlayLayersAll).addTo(vm.map);

      vm.map.on('overlayremove', onOverlayRemove);
      vm.map.on('overlayadd', onOverlayAdd);
    }//-> vm.createMap ends

    var northAm = /North America/;
    var caribbean = /Caribbean/;



    function onOverlayRemove(e){
      // if (e.name.match(afgh)) {
      //   console.log('removing afgh');
      //   vm.pieAfgContainer.style.display = "none";
      // } else if (e.name.match(pak)) {
      //   console.log('removing pak');
      //   vm.piePakContainer.style.display = "none";
      // }
    }

    function onOverlayAdd(e){
      // if (e.name.match(afgh)) {
      //   console.log('adding afgh');
      //   vm.pieAfgContainer.style.display = "block";
      // } else if (e.name.match(pak)) {
      //   console.log('adding pak');
      //   vm.piePakContainer.style.display = "block";
      // }
    }

    //Creating control layers
    vm.controlAll = L.control.layers(undefined, vm.overlayLayersAll);
    vm.control2006 = L.control.layers(undefined, vm.overlayLayers2006);
    vm.control2007 = L.control.layers(undefined, vm.overlayLayers2007);
    vm.control2008 = L.control.layers(undefined, vm.overlayLayers2008);
    vm.control2009 = L.control.layers(undefined, vm.overlayLayers2009);
    vm.control2010 = L.control.layers(undefined, vm.overlayLayers2010);
    vm.control2011 = L.control.layers(undefined, vm.overlayLayers2011);
    vm.control2012 = L.control.layers(undefined, vm.overlayLayers2012);
    vm.control2013 = L.control.layers(undefined, vm.overlayLayers2013);
    vm.control2014 = L.control.layers(undefined, vm.overlayLayers2014);
    vm.control2015 = L.control.layers(undefined, vm.overlayLayers2015);
    vm.control2016 = L.control.layers(undefined, vm.overlayLayers2016);
    vm.control2017 = L.control.layers(undefined, vm.overlayLayers2017);


    vm.updateMap = function(year) {

      vm.overlayLayersAll = {
        "North America": vm.markersNorthAmericaAll,
        "Caribbean": vm.markersCaribbeanAll
      };
      vm.overlayLayers2006 = {
        "North America": vm.markersNorthAmerica2006,
        "Caribbean": vm.markersCaribbean2006
      };
      vm.overlayLayers2007 = {
        "North America": vm.markersNorthAmerica2007,
        "Caribbean": vm.markersCaribbean2007
      };
      vm.overlayLayers2008 = {
        "North America": vm.markersNorthAmerica2008,
        "Caribbean": vm.markersCaribbean2008
      };
      vm.overlayLayers2009 = {
        "North America": vm.markersNorthAmerica2009,
        "Caribbean": vm.markersCaribbean2009
      };
      vm.overlayLayers2010 = {
        "North America": vm.markersNorthAmerica2010,
        "Caribbean": vm.markersCaribbean2010
      };
      vm.overlayLayers2011 = {
        "North America": vm.markersNorthAmerica2011,
        "Caribbean": vm.markersCaribbean2011
      };
      vm.overlayLayers2012 = {
        "North America": vm.markersNorthAmerica2012,
        "Caribbean": vm.markersCaribbean2012
      };
      vm.overlayLayers2013 = {
        "North America": vm.markersNorthAmerica2013,
        "Caribbean": vm.markersCaribbean2013
      };
      vm.overlayLayers2014 = {
        "North America": vm.markersNorthAmerica2014,
        "Caribbean": vm.markersCaribbean2014
     };
      vm.overlayLayers2015 = {
        "North America": vm.markersNorthAmerica2015,
        "Caribbean": vm.markersCaribbean2015
      };
      vm.overlayLayers2016 = {
        "North America": vm.markersNorthAmerica2016,
        "Caribbean": vm.markersCaribbean2016
      };
      vm.overlayLayers2017 = {
        "North America": vm.markersNorthAmerica2017,
        "Caribbean": vm.markersCaribbean2017
      };

      switch(year) {
        case "All":
            vm.controlAll = L.control.layers(undefined, vm.overlayLayersAll).addTo(vm.map);
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2006.addTo(vm.map);
            vm.markersNorthAmerica2007.addTo(vm.map);
            vm.markersNorthAmerica2008.addTo(vm.map);
            vm.markersNorthAmerica2009.addTo(vm.map);
            vm.markersNorthAmerica2010.addTo(vm.map);
            vm.markersNorthAmerica2011.addTo(vm.map);
            vm.markersNorthAmerica2012.addTo(vm.map);
            vm.markersNorthAmerica2013.addTo(vm.map);
            vm.markersNorthAmerica2014.addTo(vm.map);
            vm.markersNorthAmerica2015.addTo(vm.map);
            vm.markersNorthAmerica2016.addTo(vm.map);
            vm.markersNorthAmerica2017.addTo(vm.map);

            vm.markersCaribbean2006.addTo(vm.map);
            vm.markersCaribbean2007.addTo(vm.map);
            vm.markersCaribbean2008.addTo(vm.map);
            vm.markersCaribbean2009.addTo(vm.map);
            vm.markersCaribbean2010.addTo(vm.map);
            vm.markersCaribbean2011.addTo(vm.map);
            vm.markersCaribbean2012.addTo(vm.map);
            vm.markersCaribbean2013.addTo(vm.map);
            vm.markersCaribbean2014.addTo(vm.map);
            vm.markersCaribbean2015.addTo(vm.map);
            vm.markersCaribbean2016.addTo(vm.map);
            vm.markersCaribbean2017.addTo(vm.map);

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2006:
            vm.control2006 = L.control.layers(undefined, vm.overlayLayers2006).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();

            vm.markersNorthAmerica2006.addTo(vm.map);
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2006.addTo(vm.map);
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);

            break;
        case 2007:
            vm.control2007 = L.control.layers(undefined, vm.overlayLayers2007).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2007.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2007.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2008:
            vm.control2008 = L.control.layers(undefined, vm.overlayLayers2008).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2008.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2008.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2009:
            vm.control2009 = L.control.layers(undefined, vm.overlayLayers2009).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2009.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2009.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2010:
            vm.control2010 = L.control.layers(undefined, vm.overlayLayers2010).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2010.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2010.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2011:
            vm.control2011 = L.control.layers(undefined, vm.overlayLayers2011).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2011.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2011.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2012:
            vm.control2012 = L.control.layers(undefined, vm.overlayLayers2012).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2012.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2012.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2013:
            vm.control2013 = L.control.layers(undefined, vm.overlayLayers2013).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2013.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2013.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2014:
            vm.control2014 = L.control.layers(undefined, vm.overlayLayers2014).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2015.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2014.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2014.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2015:
            vm.control2015 = L.control.layers(undefined, vm.overlayLayers2015).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2016.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2015.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2016.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2015.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2016.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2016:
            vm.control2016 = L.control.layers(undefined, vm.overlayLayers2016).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2017.remove();

            vm.markersNorthAmerica2016.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2017.remove();

            vm.markersCaribbean2016.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2017.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        case 2017:
            vm.control2017 = L.control.layers(undefined, vm.overlayLayers2017).addTo(vm.map);
            vm.controlAll.remove();
            vm.control2006.remove();
            vm.control2007.remove();
            vm.control2008.remove();
            vm.control2009.remove();
            vm.control2010.remove();
            vm.control2011.remove();
            vm.control2012.remove();
            vm.control2013.remove();
            vm.control2014.remove();
            vm.control2015.remove();
            vm.control2016.remove();

            vm.markersNorthAmerica2017.addTo(vm.map);
            vm.markersNorthAmerica2006.remove();
            vm.markersNorthAmerica2007.remove();
            vm.markersNorthAmerica2008.remove();
            vm.markersNorthAmerica2009.remove();
            vm.markersNorthAmerica2010.remove();
            vm.markersNorthAmerica2011.remove();
            vm.markersNorthAmerica2012.remove();
            vm.markersNorthAmerica2013.remove();
            vm.markersNorthAmerica2014.remove();
            vm.markersNorthAmerica2015.remove();
            vm.markersNorthAmerica2016.remove();

            vm.markersCaribbean2017.addTo(vm.map);
            vm.markersCaribbean2006.remove();
            vm.markersCaribbean2007.remove();
            vm.markersCaribbean2008.remove();
            vm.markersCaribbean2009.remove();
            vm.markersCaribbean2010.remove();
            vm.markersCaribbean2011.remove();
            vm.markersCaribbean2012.remove();
            vm.markersCaribbean2013.remove();
            vm.markersCaribbean2014.remove();
            vm.markersCaribbean2015.remove();
            vm.markersCaribbean2016.remove();

            vm.map.on('overlayremove', onOverlayRemove);
            vm.map.on('overlayadd', onOverlayAdd);
            break;
        default:
            return;
      }
    } //-> updateMap ends
  }
})();
