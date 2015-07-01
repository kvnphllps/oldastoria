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
        icon: myDot
    });

    // Add marker window (where pictures will live)
    var contentString =
        '<div style="width: 100%">'+
        '<h1 style="float: right">Here is a picture!</h1>'+
        '<img  style="float: right" style="display: inline-block;" src="img/downtown_astoria.png">'+
        '<img  style="float: right" style="display: inline-block;" src="img/downtown_astoria.png">'+
        '</div>';

    var picWindow = new google.maps.InfoWindow({
        content: contentString
        //maxWidth: 100
//                maxHeight: 1000
    });


    var picLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);

    // Click listener
    google.maps.event.addListener(dotMarker, 'click', function() {
        picWindow.open(map);
    });



}

google.maps.event.addDomListener(window, 'load', initializeMap);