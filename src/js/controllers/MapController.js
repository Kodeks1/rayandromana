'use strict';

var MapController = ['$scope', function($scope) {

    /**
     * Initialize google map
     */
    $scope.initializeMap = function() {

        var myLatlng = new google.maps.LatLng(48.876571, 16.766338);
        var myLatlngOffset = new google.maps.LatLng(47.768868,14.699707);

        var map = new google.maps.Map(document.getElementById("map-canvas"), {
            center: myLatlngOffset,
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title:"Zajeci"
        });
    }

}];
