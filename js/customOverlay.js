/**
 * Created by kevinGphillips on 6/29/15.
 */

/** ****************** **/
/** Overlay properties **/
/** ****************** **/

var overlay;
infoBoxOverlay.prototype = new google.maps.OverlayView();


/** ***************** **/
/** Map properties    **/
/** ***************** **/

function initializeMap() {

    // Define default position
    var defPos = new google.maps.LatLng(46.183, -123.82251);

    // Bounds on zoom
    var mapMinZoom = 14;
    var mapMaxZoom = 16;

    // Set Map properties: terrain map with a default zoom of 14
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

    // Create map object
    var astoriaMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Hide points of interest & custom color water to match banner.
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
    astoriaMap.setOptions({styles: noPoi});


    // Overlay options
    var swBound = new google.maps.LatLng(62.281819, -150.287132);
    var neBound = new google.maps.LatLng(62.400471, -150.005608);
    var bounds = new google.maps.LatLngBounds(swBound, neBound);

    // The photograph is courtesy of the U.S. Geological Survey.
    var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
    srcImage += 'examples/full/images/talkeetna.png';

    // The custom USGSOverlay object contains the USGS image,
    // the bounds of the image, and a reference to the map.
    overlay = new USGSOverlay(bounds, srcImage, map);

}

google.maps.event.addDomListener(window, 'load', initializeMap);