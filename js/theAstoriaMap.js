/**
 * Created by kevinGphillips on 6/29/15.
 */
var defPos = new google.maps.LatLng(46.183, -123.82251);
var mapMinZoom = 14;
var mapMedZoom = 15;
var mapMaxZoom = 16;
function initializeMap() {
    // Set up terrain map with a zoom of 15
    var mapOptions = {
        center: defPos,
        zoom: mapMinZoom,
        minZoom: mapMinZoom,
        maxZoom: mapMaxZoom,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControl: true
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // turn off points of interest
    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                {visibility: "off"},
            ]
        },{
            featureType: "water",
            stylers: [
                { color: "#b1d2fe" },
            ]
        }
    ];
    map.setOptions({styles: noPoi});
    // Display our custom circle on the map

    // Optimize dot around zoom.
    var myDot = { url: 'img/dot.png', scaledSize: new google.maps.Size(9, 9) };
    // Lat/Lng of circle
    var currPos = new google.maps.LatLng(46.18966929, -123.83172154);

    var dotMarker = new google.maps.Marker({
        // use: http://www.mapcoordinates.net/en
        // to get your list of for desired lat/lng
        // store as array? database?
        // associate each with a set of images.
        position: currPos,
        map: map,
        icon: mydot
    });

    // Add marker window (where pictures will live)
    var contentString =
        '<div>'+
        '<h1 style="float: right">Here is a picture!</h1>'+
        '<img  style="float: right" src="img/downtown_astoria.png">'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 1000
//                maxHeight: 1000
    });

    // Click listener
    google.maps.event.addListener(dotMarker, 'click', function() {
        infowindow.open(map);
    });

    // Zoom listener to format dots based on zoom
    google.maps.event.addListener(map, 'zoom_changed', function() {
        if (map.getZoom() == mapMinZoom)
            console.log(myDot);
        else if (map.getZoom() == mapMedZoom)
            mydot = { url: 'img/dot.png', scaledSize: google.maps.Size(7, 7) };
        else
            mydot = { url: 'img/dot.png', scaledSize: google.maps.Size(9, 9) };
        dotMarker.icon = mydot;
    });

    dotMarker = new google.maps.Marker({
        position: currPos,
        map: map,
        icon: mydot
    });

}

google.maps.event.addDomListener(window, 'load', initializeMap);