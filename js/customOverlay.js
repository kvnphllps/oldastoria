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
    var srcImage = 'img/downtown_astoria.png';

    // The custom USGSOverlay object contains the USGS image,
    // the bounds of the image, and a reference to the map.
    overlay = new infoBoxOverlay(bounds, srcImage, astoriaMap);

}


/** ****************** **/
/** Overlay properties **/
/** @constructor       **/
/** ****************** **/

function infoBoxOverlay(bounds, image, map) {

    // Initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
infoBoxOverlay.prototype.onAdd = function() {

    var div = document.createElement('div');
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = this.image_;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "floatPane" pane. On top of everything else.
    var panes = this.getPanes();
    panes.floatPane.appendChild(div);
};


google.maps.event.addDomListener(window, 'load', initializeMap);